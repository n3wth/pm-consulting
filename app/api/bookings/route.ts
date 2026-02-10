import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { createPaymentIntent } from '@/lib/stripe'
import { sendBookingConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      lead_id,
      user_id,
      session_date,
      duration_minutes = 60,
      hourly_rate = 300,
      notes,
      email,
      name,
    } = body

    if (!session_date) {
      return NextResponse.json({ error: 'Session date is required' }, { status: 400 })
    }

    const total_amount = (duration_minutes / 60) * hourly_rate

    // Create Stripe payment intent
    const paymentIntent = await createPaymentIntent(total_amount, {
      lead_id,
      user_id,
      session_date,
      duration_minutes,
    })

    const supabase = createServerClient()

    // Create booking
    const { data: booking, error } = await supabase
      .from('bookings')
      .insert({
        lead_id,
        user_id,
        session_date,
        duration_minutes,
        hourly_rate,
        total_amount,
        status: 'pending',
        payment_status: 'pending',
        stripe_payment_intent_id: paymentIntent.id,
        notes,
      })
      .select()
      .single()

    if (error) throw error

    // Create activity
    await supabase.from('activities').insert({
      lead_id,
      booking_id: booking.id,
      type: 'booking',
      title: 'Booking created',
      description: `Session scheduled for ${new Date(session_date).toLocaleDateString()}`,
      metadata: { total_amount, duration_minutes },
    })

    // Update lead status to booked
    if (lead_id) {
      await supabase.from('leads').update({ status: 'booked' }).eq('id', lead_id)
    }

    return NextResponse.json({
      success: true,
      booking,
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error: any) {
    console.error('Booking creation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('user_id')
    const status = searchParams.get('status')

    const supabase = createServerClient()

    let query = supabase
      .from('bookings')
      .select('*, leads(*)')
      .order('session_date', { ascending: false })

    if (userId) {
      query = query.eq('user_id', userId)
    }

    if (status && status !== 'all') {
      query = query.eq('status', status)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json({ bookings: data })
  } catch (error: any) {
    console.error('Bookings fetch error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
