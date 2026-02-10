import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function PATCH(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const { params } = props
  const { id } = await params
  
  try {
    const body = await request.json()
    const supabase = createServerClient()

    const { data, error } = await supabase
      .from('leads')
      .update(body)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    // Log status change activity
    if (body.status) {
      await supabase.from('activities').insert({
        lead_id: id,
        type: 'status_change',
        title: `Status changed to ${body.status}`,
        description: `Lead status updated`,
        metadata: { new_status: body.status },
      })
    }

    return NextResponse.json({ success: true, lead: data })
  } catch (error: any) {
    console.error('Lead update error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const { params } = props
  const { id } = await params
  
  try {
    const supabase = createServerClient()

    const { error } = await supabase.from('leads').delete().eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Lead delete error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
