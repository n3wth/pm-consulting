import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const supabase = createServerClient()

    const { data, error } = await supabase
      .from('bookings')
      .update(body)
      .eq('id', params.id)
      .select()
      .single()

    if (error) throw error

    // Log status change activity
    if (body.status) {
      await supabase.from('activities').insert({
        booking_id: params.id,
        lead_id: data.lead_id,
        type: 'status_change',
        title: `Booking status changed to ${body.status}`,
        description: `Booking updated`,
        metadata: { new_status: body.status },
      })
    }

    return NextResponse.json({ success: true, booking: data })
  } catch (error: any) {
    console.error('Booking update error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createServerClient()

    const { data, error } = await supabase
      .from('bookings')
      .select('*, leads(*), deliverables(*)')
      .eq('id', params.id)
      .single()

    if (error) throw error

    return NextResponse.json({ booking: data })
  } catch (error: any) {
    console.error('Booking fetch error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
