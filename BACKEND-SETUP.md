# StrategyPM Booking + CRM Backend Setup Guide

## 🎯 What's Been Built

A complete booking and CRM system for StrategyPM with:

### ✅ Features Implemented

1. **Booking System**
   - Stripe payment integration ($300/hr sessions)
   - Cal.com ready (needs config)
   - Automated confirmation emails
   - Booking dashboard
   - Session management

2. **CRM System**
   - Lead capture from contact forms
   - Full lead pipeline (new → contacted → qualified → booked → completed)
   - Activity timeline tracking
   - Notes and comments
   - Email templates

3. **Client Portal**
   - Secure login via Supabase Auth
   - View upcoming/past sessions
   - Download deliverables
   - Session history

4. **Admin Dashboard**
   - Real-time stats (leads, bookings, revenue, conversion rate)
   - Lead management interface
   - Booking management
   - CSV export (leads, bookings, revenue)
   - Analytics overview

5. **Payment System**
   - Stripe Checkout integration
   - Payment intent handling
   - Webhook processing
   - Invoice generation ready
   - Subscription support (retainer clients)

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
cd /Users/n3wth/.openclaw/workspace/revenue-sprint/pm-consulting
npm install
```

### 2. Supabase Setup

1. Go to https://supabase.com and create a new project
2. Copy your project URL and anon key
3. In Supabase SQL Editor, run the entire `supabase-schema.sql` file
4. Enable Row Level Security and verify policies are created
5. Go to Authentication settings and configure email auth

### 3. Stripe Setup

1. Go to https://stripe.com/dashboard
2. Get your publishable and secret keys (use test mode first)
3. Create a Product for "PM Strategy Session" ($300)
4. Get the Price ID
5. Set up webhook endpoint: `https://yourdomain.com/api/stripe/webhook`
   - Events to listen for:
     - `payment_intent.succeeded`
     - `payment_intent.payment_failed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.paid`
     - `invoice.payment_failed`
6. Copy the webhook signing secret

### 4. Resend Setup

1. Go to https://resend.com
2. Create an account and verify your domain
3. Generate an API key
4. Add your sending email (defaults to `o@newth.ai`)

### 5. Cal.com Setup (Optional)

1. Go to https://cal.com
2. Create your booking page
3. Get your Cal.com username
4. Generate an API key from Settings → Developer

### 6. Environment Variables

Update `.env.local` with your actual credentials:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Cal.com
NEXT_PUBLIC_CALCOM_USERNAME=your-username
CALCOM_API_KEY=your-api-key

# Resend
RESEND_API_KEY=re_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000  # Change to production URL
ADMIN_EMAIL=o@newth.ai
```

### 7. Run Development Server

```bash
npm run dev
```

Visit:
- **Homepage**: http://localhost:3000
- **Booking Page**: http://localhost:3000/book
- **Admin Dashboard**: http://localhost:3000/admin
- **Client Portal**: http://localhost:3000/portal

### 8. Test the Flow

#### Test Booking Flow:
1. Go to `/book`
2. Fill in booking form
3. Submit to create lead + booking
4. Use Stripe test card: `4242 4242 4242 4242`
5. Complete payment
6. Verify:
   - Lead created in Supabase
   - Booking created with payment
   - Confirmation email sent
   - Activity logged

#### Test Contact Form:
1. Submit contact form on homepage
2. Verify lead created
3. Check welcome email sent
4. See lead in admin dashboard

### 9. Production Deployment

#### Vercel (Recommended):

```bash
vercel --prod
```

Then:
1. Add all environment variables in Vercel dashboard
2. Update `NEXT_PUBLIC_APP_URL` to your production URL
3. Update Stripe webhook URL to production endpoint
4. Test full flow in production

#### Environment Variables to Set in Vercel:
- All variables from `.env.local`
- Make sure webhook secret is production webhook secret

### 10. Stripe Webhook in Production

1. Go to Stripe Dashboard → Webhooks
2. Add endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select all payment and subscription events
4. Copy the new webhook signing secret
5. Update `STRIPE_WEBHOOK_SECRET` in Vercel

## 📁 Project Structure

```
app/
├── api/
│   ├── leads/              # Lead CRUD operations
│   ├── bookings/           # Booking management
│   ├── activities/         # Activity timeline
│   ├── deliverables/       # File management
│   ├── stripe/
│   │   ├── webhook/        # Stripe webhooks
│   │   └── checkout/       # Checkout sessions
│   └── admin/
│       ├── stats/          # Dashboard statistics
│       └── export/         # CSV exports
├── admin/                  # Admin dashboard
├── portal/                 # Client portal
├── book/                   # Booking page
└── page.tsx               # Homepage

components/
├── ContactForm.tsx        # Lead capture form
└── BookingForm.tsx        # Booking + payment form

lib/
├── supabase.ts           # Supabase client + types
├── stripe.ts             # Stripe utilities
└── email.ts              # Email templates
```

## 🔐 Security Notes

1. **Row Level Security**: All Supabase tables have RLS enabled
2. **Admin Access**: Only `o@newth.ai` can access admin functions
3. **API Routes**: All protected with proper validation
4. **Webhook Security**: Stripe webhooks verify signatures
5. **Client Portal**: Requires authentication via Supabase Auth

## 📊 Database Schema

- **leads**: Contact form submissions + CRM data
- **bookings**: Session bookings with payment info
- **activities**: Timeline of all lead/booking actions
- **deliverables**: Files for client download
- **email_templates**: Reusable email templates
- **subscriptions**: Retainer/subscription clients

## 🎨 Customization

### Update Branding:
- Colors: Edit `tailwind.config.ts` (currently purple/indigo gradient)
- Emails: Modify templates in `lib/email.ts`
- Logo: Add to `public/` and update components

### Add New Email Templates:
```sql
INSERT INTO email_templates (name, subject, body, variables) VALUES
('template_name', 'Subject', 'Body with {{variables}}', '["var1", "var2"]');
```

### Pricing Changes:
Update hourly rate in:
1. `app/api/bookings/route.ts` (default hourly_rate)
2. `components/BookingForm.tsx` (display text)
3. `app/book/page.tsx` (pricing card)

## 🚨 Troubleshooting

### Emails Not Sending:
- Verify Resend API key
- Check domain verification in Resend dashboard
- Ensure from email matches verified domain

### Stripe Webhooks Failing:
- Verify webhook secret matches
- Check webhook endpoint is publicly accessible
- Test with Stripe CLI: `stripe listen --forward-to localhost:3000/api/stripe/webhook`

### Database Errors:
- Verify RLS policies are created
- Check Supabase service role key is correct
- Ensure tables were created from schema

### Payment Not Processing:
- Verify Stripe publishable/secret keys
- Check payment intent is created before form submission
- Ensure webhook is receiving events

## 📈 Next Steps

1. **Cal.com Integration**: Connect calendar for automated scheduling
2. **Zoom Integration**: Auto-generate meeting links
3. **Email Sequences**: Automated follow-ups based on lead status
4. **Retainer Plans**: Activate subscription pricing for monthly clients
5. **Analytics**: Add conversion tracking, revenue forecasting
6. **Mobile App**: React Native client portal

## 🎯 Production Checklist

- [ ] All environment variables set
- [ ] Supabase tables created with RLS
- [ ] Stripe webhook configured and tested
- [ ] Resend domain verified
- [ ] Test full booking flow (sandbox)
- [ ] Verify email delivery
- [ ] Test admin dashboard
- [ ] Test client portal auth
- [ ] Switch Stripe to live mode
- [ ] Test production booking
- [ ] Monitor webhook logs

---

**Status**: ✅ Backend fully implemented and ready for production

**Time to Deploy**: ~15 minutes (after setting up third-party accounts)

**Contact**: o@newth.ai for support
