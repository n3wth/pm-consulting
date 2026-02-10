import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createServerClient } from '@/lib/supabase'
import { sendBookingConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    const supabase = createServerClient()

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object
        
        // Update booking payment status
        const { data: booking, error } = await supabase
          .from('bookings')
          .update({
            payment_status: 'paid',
            status: 'confirmed',
          })
          .eq('stripe_payment_intent_id', paymentIntent.id)
          .select('*, leads(*)')
          .single()

        if (error) {
          console.error('Booking update error:', error)
          break
        }

        // Create activity
        await supabase.from('activities').insert({
          lead_id: booking.lead_id,
          booking_id: booking.id,
          type: 'payment',
          title: 'Payment received',
          description: `Payment of $${booking.total_amount} confirmed`,
          metadata: { payment_intent_id: paymentIntent.id },
        })

        // Send confirmation email
        if (booking.leads?.email && booking.leads?.name) {
          const zoomLink = booking.zoom_link || 'Zoom link will be sent shortly'
          await sendBookingConfirmation(
            booking.leads.email,
            booking.leads.name,
            new Date(booking.session_date),
            zoomLink
          )
        }

        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object

        await supabase
          .from('bookings')
          .update({ payment_status: 'failed' })
          .eq('stripe_payment_intent_id', paymentIntent.id)

        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object

        await supabase
          .from('subscriptions')
          .upsert({
            stripe_subscription_id: subscription.id,
            stripe_customer_id: subscription.customer as string,
            status: subscription.status === 'active' ? 'active' : subscription.status,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
          })

        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object

        await supabase
          .from('subscriptions')
          .update({ status: 'cancelled' })
          .eq('stripe_subscription_id', subscription.id)

        break
      }

      case 'invoice.paid': {
        const invoice = event.data.object
        
        // Create activity for invoice payment
        if (invoice.subscription) {
          const { data: subscription } = await supabase
            .from('subscriptions')
            .select('*, leads(*)')
            .eq('stripe_subscription_id', invoice.subscription)
            .single()

          if (subscription?.lead_id) {
            await supabase.from('activities').insert({
              lead_id: subscription.lead_id,
              type: 'payment',
              title: 'Subscription payment received',
              description: `Invoice paid: $${(invoice.amount_paid / 100).toFixed(2)}`,
              metadata: { invoice_id: invoice.id },
            })
          }
        }

        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object

        if (invoice.subscription) {
          await supabase
            .from('subscriptions')
            .update({ status: 'past_due' })
            .eq('stripe_subscription_id', invoice.subscription)
        }

        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
