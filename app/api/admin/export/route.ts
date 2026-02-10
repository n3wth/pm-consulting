import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Check if required env vars are present
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ error: 'Supabase not configured' }, { status: 503 })
    }

    const { createServerClient } = await import('@/lib/supabase')
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'leads' // leads, bookings, revenue

    const supabase = createServerClient()

    if (type === 'leads') {
      const { data } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      const csv = convertToCSV(data || [], [
        'id',
        'email',
        'name',
        'company',
        'role',
        'phone',
        'status',
        'source',
        'created_at',
      ])

      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="leads-${Date.now()}.csv"`,
        },
      })
    }

    if (type === 'bookings') {
      const { data } = await supabase
        .from('bookings')
        .select('*, leads(email, name, company)')
        .order('session_date', { ascending: false })

      const flatData = data?.map((b) => ({
        id: b.id,
        lead_email: b.leads?.email,
        lead_name: b.leads?.name,
        lead_company: b.leads?.company,
        session_date: b.session_date,
        duration_minutes: b.duration_minutes,
        total_amount: b.total_amount,
        status: b.status,
        payment_status: b.payment_status,
        created_at: b.created_at,
      }))

      const csv = convertToCSV(flatData || [], [
        'id',
        'lead_email',
        'lead_name',
        'lead_company',
        'session_date',
        'duration_minutes',
        'total_amount',
        'status',
        'payment_status',
        'created_at',
      ])

      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="bookings-${Date.now()}.csv"`,
        },
      })
    }

    if (type === 'revenue') {
      const { data } = await supabase
        .from('bookings')
        .select('session_date, total_amount, payment_status, leads(name, email, company)')
        .eq('payment_status', 'paid')
        .order('session_date', { ascending: false })

      const flatData = data?.map((b: any) => ({
        date: b.session_date,
        amount: b.total_amount,
        client_name: Array.isArray(b.leads) ? b.leads[0]?.name : b.leads?.name,
        client_email: Array.isArray(b.leads) ? b.leads[0]?.email : b.leads?.email,
        client_company: Array.isArray(b.leads) ? b.leads[0]?.company : b.leads?.company,
      }))

      const csv = convertToCSV(flatData || [], [
        'date',
        'amount',
        'client_name',
        'client_email',
        'client_company',
      ])

      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="revenue-${Date.now()}.csv"`,
        },
      })
    }

    return NextResponse.json({ error: 'Invalid export type' }, { status: 400 })
  } catch (error: any) {
    console.error('Export error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

function convertToCSV(data: any[], columns: string[]): string {
  if (!data.length) return ''

  const header = columns.join(',')
  const rows = data.map((row) => {
    return columns
      .map((col) => {
        const value = row[col]
        if (value === null || value === undefined) return ''
        // Escape commas and quotes
        const strValue = String(value)
        if (strValue.includes(',') || strValue.includes('"') || strValue.includes('\n')) {
          return `"${strValue.replace(/"/g, '""')}"`
        }
        return strValue
      })
      .join(',')
  })

  return [header, ...rows].join('\n')
}
