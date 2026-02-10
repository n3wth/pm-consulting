import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { sendLeadWelcome } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, company, role, phone, message, source = 'website' } = body

    if (!email || !name) {
      return NextResponse.json({ error: 'Email and name are required' }, { status: 400 })
    }

    const supabase = createServerClient()

    // Check if lead already exists
    const { data: existingLead } = await supabase
      .from('leads')
      .select('*')
      .eq('email', email)
      .single()

    let lead
    if (existingLead) {
      // Update existing lead
      const { data, error } = await supabase
        .from('leads')
        .update({
          name,
          company,
          role,
          phone,
          message,
          updated_at: new Date().toISOString(),
        })
        .eq('email', email)
        .select()
        .single()

      if (error) throw error
      lead = data
    } else {
      // Create new lead
      const { data, error } = await supabase
        .from('leads')
        .insert({
          email,
          name,
          company,
          role,
          phone,
          message,
          source,
          status: 'new',
        })
        .select()
        .single()

      if (error) throw error
      lead = data

      // Create activity
      await supabase.from('activities').insert({
        lead_id: lead.id,
        type: 'note',
        title: 'New lead created',
        description: `Lead submitted from ${source}`,
        metadata: { source, message },
      })

      // Send welcome email
      if (message) {
        await sendLeadWelcome(email, name, message)
      }
    }

    return NextResponse.json({ success: true, lead })
  } catch (error: any) {
    console.error('Lead creation error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const search = searchParams.get('search')

    const supabase = createServerClient()

    let query = supabase.from('leads').select('*').order('created_at', { ascending: false })

    if (status && status !== 'all') {
      query = query.eq('status', status)
    }

    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%`)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json({ leads: data })
  } catch (error: any) {
    console.error('Leads fetch error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
