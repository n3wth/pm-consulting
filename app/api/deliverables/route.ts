import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { booking_id, title, description, file_url, file_type, file_size } = body

    if (!booking_id || !title || !file_url) {
      return NextResponse.json(
        { error: 'Booking ID, title, and file URL are required' },
        { status: 400 }
      )
    }

    const supabase = createServerClient()

    const { data, error } = await supabase
      .from('deliverables')
      .insert({
        booking_id,
        title,
        description,
        file_url,
        file_type,
        file_size,
      })
      .select()
      .single()

    if (error) throw error

    // Create activity
    const { data: booking } = await supabase
      .from('bookings')
      .select('lead_id')
      .eq('id', booking_id)
      .single()

    if (booking) {
      await supabase.from('activities').insert({
        lead_id: booking.lead_id,
        booking_id,
        type: 'note',
        title: 'Deliverable uploaded',
        description: `Added deliverable: ${title}`,
        metadata: { deliverable_id: data.id, file_type },
      })
    }

    return NextResponse.json({ success: true, deliverable: data })
  } catch (error: any) {
    console.error('Deliverable creation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const bookingId = searchParams.get('booking_id')

    const supabase = createServerClient()

    let query = supabase.from('deliverables').select('*').order('created_at', { ascending: false })

    if (bookingId) {
      query = query.eq('booking_id', bookingId)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json({ deliverables: data })
  } catch (error: any) {
    console.error('Deliverables fetch error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
