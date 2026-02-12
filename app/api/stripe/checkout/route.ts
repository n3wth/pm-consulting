import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ 
        error: 'Stripe payment processing is not configured. Please contact support.' 
      }, { status: 503 })
    }

    // Lazy load stripe to avoid build-time errors
    const { createCheckoutSession } = await import('@/lib/stripe')
    
    const body = await request.json()
    const { booking_id, amount, email, name } = body

    if (!booking_id || !amount) {
      return NextResponse.json({ error: 'Booking ID and amount are required' }, { status: 400 })
    }

    // For now, create a one-time payment
    // In production, you'd create a Stripe Price for the hourly rate
    const session = await createCheckoutSession(
      'price_1234', // Replace with actual Stripe Price ID
      undefined,
      { booking_id },
      `${process.env.NEXT_PUBLIC_APP_URL}/booking/success?booking_id=${booking_id}`,
      `${process.env.NEXT_PUBLIC_APP_URL}/booking/cancel?booking_id=${booking_id}`
    )

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error('Checkout session error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
