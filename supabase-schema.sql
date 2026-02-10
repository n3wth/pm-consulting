-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leads table
CREATE TABLE leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  role VARCHAR(255),
  phone VARCHAR(50),
  message TEXT,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'booked', 'completed', 'lost')),
  source VARCHAR(100) DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  calcom_booking_id VARCHAR(255),
  session_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  hourly_rate DECIMAL(10, 2) DEFAULT 300.00,
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled', 'no_show')),
  payment_status VARCHAR(50) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded', 'failed')),
  stripe_payment_intent_id VARCHAR(255),
  zoom_link TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activities table (for CRM timeline)
CREATE TABLE activities (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL CHECK (type IN ('note', 'email', 'call', 'meeting', 'status_change', 'payment', 'booking')),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  metadata JSONB,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Deliverables table
CREATE TABLE deliverables (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_type VARCHAR(50),
  file_size INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Email templates table
CREATE TABLE email_templates (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  subject VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  variables JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subscriptions table (for retainer clients)
CREATE TABLE subscriptions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
  stripe_subscription_id VARCHAR(255) UNIQUE NOT NULL,
  stripe_customer_id VARCHAR(255),
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'past_due', 'incomplete')),
  plan_name VARCHAR(255) NOT NULL,
  monthly_rate DECIMAL(10, 2) NOT NULL,
  hours_included INTEGER DEFAULT 0,
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_lead_id ON bookings(lead_id);
CREATE INDEX idx_bookings_session_date ON bookings(session_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_activities_lead_id ON activities(lead_id);
CREATE INDEX idx_activities_booking_id ON activities(booking_id);
CREATE INDEX idx_activities_created_at ON activities(created_at);
CREATE INDEX idx_deliverables_booking_id ON deliverables(booking_id);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_stripe_subscription_id ON subscriptions(stripe_subscription_id);

-- Row Level Security (RLS) policies
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE deliverables ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Admin can see all
CREATE POLICY "Admin can view all leads" ON leads FOR SELECT USING (auth.jwt() ->> 'email' = 'o@newth.ai');
CREATE POLICY "Admin can insert leads" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can update all leads" ON leads FOR UPDATE USING (auth.jwt() ->> 'email' = 'o@newth.ai');

-- Users can view their own bookings
CREATE POLICY "Users can view own bookings" ON bookings FOR SELECT USING (auth.uid() = user_id OR auth.jwt() ->> 'email' = 'o@newth.ai');
CREATE POLICY "Users can insert own bookings" ON bookings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admin can update all bookings" ON bookings FOR UPDATE USING (auth.jwt() ->> 'email' = 'o@newth.ai');

-- Activities viewable by admins and related users
CREATE POLICY "Admin can view all activities" ON activities FOR SELECT USING (auth.jwt() ->> 'email' = 'o@newth.ai');
CREATE POLICY "Admin can insert activities" ON activities FOR INSERT WITH CHECK (auth.jwt() ->> 'email' = 'o@newth.ai');

-- Users can view deliverables for their bookings
CREATE POLICY "Users can view own deliverables" ON deliverables FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM bookings WHERE bookings.id = deliverables.booking_id AND bookings.user_id = auth.uid()
  ) OR auth.jwt() ->> 'email' = 'o@newth.ai'
);
CREATE POLICY "Admin can insert deliverables" ON deliverables FOR INSERT WITH CHECK (auth.jwt() ->> 'email' = 'o@newth.ai');

-- Users can view own subscriptions
CREATE POLICY "Users can view own subscriptions" ON subscriptions FOR SELECT USING (auth.uid() = user_id OR auth.jwt() ->> 'email' = 'o@newth.ai');

-- Functions for updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_email_templates_updated_at BEFORE UPDATE ON email_templates FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default email templates
INSERT INTO email_templates (name, subject, body, variables) VALUES
('booking_confirmation', 'Your PM Strategy Session is Confirmed', 
'Hi {{name}},

Your strategy session is confirmed for {{date}} at {{time}}.

Join via Zoom: {{zoom_link}}

Looking forward to helping you level up your product roadmap!

Best,
Oliver', 
'["name", "date", "time", "zoom_link"]'),

('lead_welcome', 'Thanks for Your Interest in PM Strategy Consulting',
'Hi {{name}},

Thanks for reaching out! I received your message about {{topic}}.

I''ll review your needs and get back to you within 24 hours with next steps.

In the meantime, here''s a free resource: {{resource_link}}

Best,
Oliver',
'["name", "topic", "resource_link"]'),

('lead_followup', 'Following Up: Your PM Strategy Needs',
'Hi {{name}},

Just following up on your inquiry about {{topic}}.

Are you still interested in exploring how we can help with:
- Product roadmap clarity
- Strategic frameworks
- Stakeholder alignment

Let me know if you''d like to schedule a quick 15-min call.

Best,
Oliver',
'["name", "topic"]');
