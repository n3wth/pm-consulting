import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { lead_id, booking_id, type, title, description, metadata } = body

    if (!type || !title) {
      return NextResponse.json({ error: 'Type and title are required' }, { status: 400 })
    }

    const supabase = createServerClient()

    const { data, error } = await supabase
      .from('activities')
      .insert({
        lead_id,
        booking_id,
        type,
        title,
        description,
        metadata,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ success: true, activity: data })
  } catch (error: any) {
    console.error('Activity creation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const leadId = searchParams.get('lead_id')
    const bookingId = searchParams.get('booking_id')

    const supabase = createServerClient()

    let query = supabase.from('activities').select('*').order('created_at', { ascending: false })

    if (leadId) {
      query = query.eq('lead_id', leadId)
    }

    if (bookingId) {
      query = query.eq('booking_id', bookingId)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json({ activities: data })
  } catch (error: any) {
    console.error('Activities fetch error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
