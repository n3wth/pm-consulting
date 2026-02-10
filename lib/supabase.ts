import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'

export const createBrowserClient = () => {
  return createClientComponentClient()
}

export const createServerClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )
}

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          email: string
          name: string
          company: string | null
          role: string | null
          phone: string | null
          message: string | null
          status: 'new' | 'contacted' | 'qualified' | 'booked' | 'completed' | 'lost'
          source: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          company?: string
          role?: string
          phone?: string
          message?: string
          status?: 'new' | 'contacted' | 'qualified' | 'booked' | 'completed' | 'lost'
          source?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          company?: string
          role?: string
          phone?: string
          message?: string
          status?: 'new' | 'contacted' | 'qualified' | 'booked' | 'completed' | 'lost'
          source?: string
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          lead_id: string | null
          user_id: string | null
          calcom_booking_id: string | null
          session_date: string
          duration_minutes: number
          hourly_rate: number
          total_amount: number
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show'
          payment_status: 'pending' | 'paid' | 'refunded' | 'failed'
          stripe_payment_intent_id: string | null
          zoom_link: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          lead_id?: string
          user_id?: string
          calcom_booking_id?: string
          session_date: string
          duration_minutes?: number
          hourly_rate?: number
          total_amount: number
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show'
          payment_status?: 'pending' | 'paid' | 'refunded' | 'failed'
          stripe_payment_intent_id?: string
          zoom_link?: string
          notes?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          lead_id?: string
          user_id?: string
          calcom_booking_id?: string
          session_date?: string
          duration_minutes?: number
          hourly_rate?: number
          total_amount?: number
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no_show'
          payment_status?: 'pending' | 'paid' | 'refunded' | 'failed'
          stripe_payment_intent_id?: string
          zoom_link?: string
          notes?: string
          created_at?: string
          updated_at?: string
        }
      }
      activities: {
        Row: {
          id: string
          lead_id: string | null
          booking_id: string | null
          type: 'note' | 'email' | 'call' | 'meeting' | 'status_change' | 'payment' | 'booking'
          title: string
          description: string | null
          metadata: any
          created_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          lead_id?: string
          booking_id?: string
          type: 'note' | 'email' | 'call' | 'meeting' | 'status_change' | 'payment' | 'booking'
          title: string
          description?: string
          metadata?: any
          created_by?: string
          created_at?: string
        }
      }
      deliverables: {
        Row: {
          id: string
          booking_id: string
          title: string
          description: string | null
          file_url: string
          file_type: string | null
          file_size: number | null
          created_at: string
        }
        Insert: {
          id?: string
          booking_id: string
          title: string
          description?: string
          file_url: string
          file_type?: string
          file_size?: number
          created_at?: string
        }
      }
      email_templates: {
        Row: {
          id: string
          name: string
          subject: string
          body: string
          variables: string[]
          created_at: string
          updated_at: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          lead_id: string | null
          stripe_subscription_id: string
          stripe_customer_id: string | null
          status: 'active' | 'cancelled' | 'past_due' | 'incomplete'
          plan_name: string
          monthly_rate: number
          hours_included: number
          current_period_start: string | null
          current_period_end: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lead_id?: string
          stripe_subscription_id: string
          stripe_customer_id?: string
          status?: 'active' | 'cancelled' | 'past_due' | 'incomplete'
          plan_name: string
          monthly_rate: number
          hours_included?: number
          current_period_start?: string
          current_period_end?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lead_id?: string
          stripe_subscription_id?: string
          stripe_customer_id?: string
          status?: 'active' | 'cancelled' | 'past_due' | 'incomplete'
          plan_name?: string
          monthly_rate?: number
          hours_included?: number
          current_period_start?: string
          current_period_end?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
