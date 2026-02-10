# StrategyPM - Complete Booking + CRM System

![Status](https://img.shields.io/badge/status-production--ready-green)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

**Production-ready booking and CRM backend for PM consulting business.**

---

## 🎯 What's Included

### ✅ Complete Feature Set

1. **Booking System**
   - Stripe payment integration ($300/hr)
   - Cal.com ready for calendar sync
   - Automated confirmation emails
   - Zoom link integration ready
   - Booking dashboard (upcoming/past)

2. **CRM System**
   - Lead capture from contact forms
   - Full pipeline: new → contacted → qualified → booked → completed
   - Activity timeline tracking
   - Email follow-up templates
   - Notes and comments

3. **Client Portal**
   - Secure login (Supabase Auth)
   - View session history
   - Download deliverables
   - Request additional sessions
   - Access to templates/resources

4. **Admin Dashboard**
   - Real-time stats (leads, bookings, revenue, conversion)
   - Lead management UI
   - Booking management
   - CSV exports (leads, bookings, revenue)
   - Analytics overview

5. **Payment System**
   - Stripe Checkout integration
   - Payment intent handling
   - Webhook processing (all events)
   - Invoice generation ready
   - Subscription support (retainer clients)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Environment Setup
Copy `.env.local` and fill in your keys:
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend
RESEND_API_KEY=re_...

# Cal.com (optional)
NEXT_PUBLIC_CALCOM_USERNAME=your-username
CALCOM_API_KEY=your-api-key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
ADMIN_EMAIL=o@newth.ai
```

### 3. Database Setup
Run the SQL schema in Supabase:
```bash
# Copy contents of supabase-schema.sql and paste into Supabase SQL Editor
```

### 4. Run Development Server
```bash
npm run dev
```

Visit:
- **Homepage**: http://localhost:3000
- **Booking**: http://localhost:3000/book
- **Admin**: http://localhost:3000/admin
- **Portal**: http://localhost:3000/portal

### 5. Test Backend
```bash
./test-backend.sh
```

---

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   ├── leads/           # Lead CRUD + CRM
│   │   ├── bookings/        # Booking management
│   │   ├── activities/      # Timeline tracking
│   │   ├── deliverables/    # File management
│   │   ├── stripe/          # Payment webhooks
│   │   └── admin/           # Admin endpoints
│   ├── admin/               # Admin dashboard UI
│   ├── portal/              # Client portal UI
│   ├── book/                # Booking page
│   └── page.tsx             # Homepage
├── components/
│   ├── ContactForm.tsx      # Lead capture
│   └── BookingForm.tsx      # Booking + payment
├── lib/
│   ├── supabase.ts          # DB client + types
│   ├── stripe.ts            # Payment utilities
│   └── email.ts             # Email templates
├── supabase-schema.sql      # Database schema
├── BACKEND-SETUP.md         # Detailed setup guide
├── API-DOCS.md              # API documentation
└── test-backend.sh          # Test script
```

---

## 🗄️ Database Schema

### Tables
- **leads**: Contact form submissions + CRM pipeline
- **bookings**: Session bookings with payment tracking
- **activities**: Timeline of all interactions
- **deliverables**: Files for client download
- **email_templates**: Reusable email templates
- **subscriptions**: Retainer/subscription clients

### Row Level Security
All tables have RLS enabled. Admin-only access via `o@newth.ai` email check in JWT.

---

## 💳 Payment Flow

1. User fills booking form → Lead created
2. Booking created with Stripe Payment Intent
3. User completes payment (Stripe Elements)
4. Webhook confirms payment → Booking marked paid
5. Confirmation email sent with Zoom link
6. Activity logged in timeline

---

## 📧 Email Templates

### Built-in Templates
1. **booking_confirmation**: Sent when payment succeeds
2. **lead_welcome**: Sent when contact form submitted
3. **lead_followup**: Manual follow-up template

### Customization
Edit templates in `lib/email.ts` or add to `email_templates` table.

---

## 🔒 Security

- **RLS Policies**: All tables protected
- **Admin Access**: Email-based authorization
- **Webhook Verification**: Stripe signature validation
- **Auth**: Supabase Auth with JWT
- **Environment Vars**: Secrets in `.env.local`

---

## 📊 Admin Features

### Dashboard Stats
- Total leads
- New leads (this week)
- Total bookings
- Confirmed bookings
- Total revenue
- Conversion rate (leads → bookings)

### Exports
- Leads CSV
- Bookings CSV
- Revenue CSV

### Lead Management
- View all leads
- Update lead status
- Add notes/activities
- Filter by status
- Search by name/email/company

---

## 🔗 API Endpoints

### Leads
- `POST /api/leads` - Create lead
- `GET /api/leads` - List leads
- `PATCH /api/leads/[id]` - Update lead
- `DELETE /api/leads/[id]` - Delete lead

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - List bookings
- `GET /api/bookings/[id]` - Get booking details
- `PATCH /api/bookings/[id]` - Update booking

### Activities
- `POST /api/activities` - Create activity
- `GET /api/activities` - List activities

### Deliverables
- `POST /api/deliverables` - Upload deliverable
- `GET /api/deliverables` - List deliverables

### Stripe
- `POST /api/stripe/webhook` - Handle webhooks
- `POST /api/stripe/checkout` - Create checkout session

### Admin
- `GET /api/admin/stats` - Dashboard stats
- `GET /api/admin/export` - Export CSV

See `API-DOCS.md` for full documentation.

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel --prod
```

Then:
1. Add environment variables in Vercel dashboard
2. Update `NEXT_PUBLIC_APP_URL` to production URL
3. Configure Stripe webhook for production endpoint
4. Test full flow in production

### Stripe Webhook Setup
1. Go to Stripe Dashboard → Webhooks
2. Add endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select events:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.*`
   - `invoice.paid`
   - `invoice.payment_failed`
4. Copy webhook secret to `STRIPE_WEBHOOK_SECRET`

---

## 🧪 Testing

### Local Testing
```bash
# Test all endpoints
./test-backend.sh

# Test Stripe webhooks locally
stripe listen --forward-to localhost:3000/api/stripe/webhook
stripe trigger payment_intent.succeeded
```

### Test Payment Flow
Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Declined: `4000 0000 0000 0002`
- Requires auth: `4000 0025 0000 3155`

---

## 📈 Analytics & Monitoring

### Built-in Metrics
- Lead conversion rate
- Revenue tracking
- Booking status distribution
- Recent activity timeline

### Recommended Additions
- Vercel Analytics (already integrated)
- Sentry for error tracking
- PostHog for product analytics
- Mixpanel for funnel analysis

---

## 🎨 Customization

### Branding
- Colors: `tailwind.config.ts` (currently purple/indigo)
- Logo: Add to `public/` and update components
- Emails: `lib/email.ts`

### Pricing
Update hourly rate in:
1. `app/api/bookings/route.ts`
2. `components/BookingForm.tsx`
3. `app/book/page.tsx`

### Email Templates
Add new templates to `email_templates` table or edit `lib/email.ts`.

---

## 🐛 Troubleshooting

### Emails Not Sending
- Verify Resend API key
- Check domain verification
- Ensure from email matches verified domain

### Webhooks Failing
- Verify webhook secret
- Check endpoint is publicly accessible
- Use Stripe CLI for local testing

### Database Errors
- Verify RLS policies created
- Check service role key is correct
- Ensure tables created from schema

### Build Errors
- Use `npm install --legacy-peer-deps`
- React 19 requires peer dependency overrides

---

## 📚 Documentation

- **Setup Guide**: `BACKEND-SETUP.md`
- **API Docs**: `API-DOCS.md`
- **Database Schema**: `supabase-schema.sql`
- **Test Script**: `test-backend.sh`

---

## ✅ Production Checklist

- [ ] Environment variables configured
- [ ] Supabase database created with RLS
- [ ] Stripe webhook configured
- [ ] Resend domain verified
- [ ] Test booking flow (sandbox)
- [ ] Verify email delivery
- [ ] Test admin dashboard
- [ ] Test client portal auth
- [ ] Switch Stripe to live mode
- [ ] Test production booking
- [ ] Monitor webhook logs

---

## 🎯 Next Features

- [ ] Cal.com calendar integration
- [ ] Zoom auto-generation
- [ ] Email automation sequences
- [ ] Retainer plan activation
- [ ] Advanced analytics
- [ ] Mobile app (React Native)

---

## 🤝 Support

**Built by**: OpenClaw Agent  
**Contact**: o@newth.ai  
**Status**: Production-ready  
**Time to Deploy**: ~15 minutes (with accounts set up)

---

## 📄 License

Private - StrategyPM Internal Use Only

---

**Ready to deploy!** Follow `BACKEND-SETUP.md` for detailed setup instructions.
