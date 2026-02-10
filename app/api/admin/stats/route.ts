import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()

    // Get counts
    const [
      { count: totalLeads },
      { count: newLeads },
      { count: totalBookings },
      { count: confirmedBookings },
      { data: revenueData },
    ] = await Promise.all([
      supabase.from('leads').select('*', { count: 'exact', head: true }),
      supabase.from('leads').select('*', { count: 'exact', head: true }).eq('status', 'new'),
      supabase.from('bookings').select('*', { count: 'exact', head: true }),
      supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'confirmed'),
      supabase.from('bookings').select('total_amount, payment_status').eq('payment_status', 'paid'),
    ])

    // Calculate revenue
    const totalRevenue = revenueData?.reduce((sum, booking) => sum + Number(booking.total_amount), 0) || 0

    // Get recent leads
    const { data: recentLeads } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)

    // Get upcoming bookings
    const { data: upcomingBookings } = await supabase
      .from('bookings')
      .select('*, leads(*)')
      .gte('session_date', new Date().toISOString())
      .order('session_date', { ascending: true })
      .limit(10)

    // Get conversion rate
    const conversionRate = totalLeads ? ((confirmedBookings || 0) / totalLeads) * 100 : 0

    return NextResponse.json({
      stats: {
        totalLeads: totalLeads || 0,
        newLeads: newLeads || 0,
        totalBookings: totalBookings || 0,
        confirmedBookings: confirmedBookings || 0,
        totalRevenue,
        conversionRate: conversionRate.toFixed(2),
      },
      recentLeads: recentLeads || [],
      upcomingBookings: upcomingBookings || [],
    })
  } catch (error: any) {
    console.error('Dashboard stats error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
