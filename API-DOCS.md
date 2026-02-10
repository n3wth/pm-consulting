# API Routes Documentation

## Overview
All API routes are serverless functions deployed with Next.js. Authentication is handled via Supabase, and payments via Stripe.

## Endpoints

### Leads

#### `POST /api/leads`
Create or update a lead from contact form submission.

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "company": "Acme Inc",
  "role": "Product Manager",
  "phone": "+1234567890",
  "message": "Need help with roadmap",
  "source": "website"
}
```

**Response:**
```json
{
  "success": true,
  "lead": { ...lead object }
}
```

#### `GET /api/leads?status=new&search=john`
Fetch all leads with optional filters.

**Query Parameters:**
- `status`: Filter by lead status (new, contacted, qualified, booked, completed, lost)
- `search`: Search by name, email, or company

#### `PATCH /api/leads/[id]`
Update a lead's details or status.

#### `DELETE /api/leads/[id]`
Delete a lead (soft delete via RLS).

---

### Bookings

#### `POST /api/bookings`
Create a new booking and generate Stripe payment intent.

**Request Body:**
```json
{
  "lead_id": "uuid",
  "user_id": "uuid",
  "session_date": "2026-02-15T10:00:00Z",
  "duration_minutes": 60,
  "hourly_rate": 300,
  "notes": "Focus on prioritization",
  "email": "user@example.com",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "success": true,
  "booking": { ...booking object },
  "clientSecret": "pi_xxx_secret_yyy"
}
```

#### `GET /api/bookings?user_id=uuid&status=confirmed`
Fetch bookings with optional filters.

**Query Parameters:**
- `user_id`: Filter by user
- `status`: Filter by booking status

#### `GET /api/bookings/[id]`
Get single booking with related data (lead, deliverables).

#### `PATCH /api/bookings/[id]`
Update booking details or status.

---

### Activities

#### `POST /api/activities`
Create an activity/timeline entry.

**Request Body:**
```json
{
  "lead_id": "uuid",
  "booking_id": "uuid",
  "type": "note",
  "title": "Follow-up call",
  "description": "Discussed prioritization frameworks",
  "metadata": {}
}
```

#### `GET /api/activities?lead_id=uuid&booking_id=uuid`
Fetch activities filtered by lead or booking.

---

### Deliverables

#### `POST /api/deliverables`
Upload a deliverable for a booking.

**Request Body:**
```json
{
  "booking_id": "uuid",
  "title": "Product Roadmap Template",
  "description": "Custom roadmap framework",
  "file_url": "https://...",
  "file_type": "pdf",
  "file_size": 1024000
}
```

#### `GET /api/deliverables?booking_id=uuid`
Fetch deliverables for a booking.

---

### Stripe

#### `POST /api/stripe/webhook`
Handle Stripe webhook events.

**Events Handled:**
- `payment_intent.succeeded` → Mark booking as paid, send confirmation
- `payment_intent.payment_failed` → Mark payment as failed
- `customer.subscription.*` → Update subscription status
- `invoice.paid` → Log subscription payment
- `invoice.payment_failed` → Mark subscription as past_due

**Headers Required:**
- `stripe-signature`: Webhook signature for verification

#### `POST /api/stripe/checkout`
Create Stripe Checkout session for booking payment.

---

### Admin

#### `GET /api/admin/stats`
Get dashboard statistics.

**Response:**
```json
{
  "stats": {
    "totalLeads": 50,
    "newLeads": 12,
    "totalBookings": 25,
    "confirmedBookings": 20,
    "totalRevenue": 6000,
    "conversionRate": "50.00"
  },
  "recentLeads": [...],
  "upcomingBookings": [...]
}
```

#### `GET /api/admin/export?type=leads|bookings|revenue`
Export data as CSV.

**Query Parameters:**
- `type`: Data type to export (leads, bookings, revenue)

**Response:** CSV file download

---

## Authentication

### Supabase Auth
Client portal requires authentication:
- Sign up: Email + password via Supabase
- Login: Handled by Supabase Auth
- Session: Stored in browser, auto-refresh enabled

### Admin Access
Admin routes check for `o@newth.ai` in JWT token. Configure in Supabase RLS policies.

---

## Error Handling

All endpoints return consistent error format:
```json
{
  "error": "Error message"
}
```

HTTP Status Codes:
- `200`: Success
- `400`: Bad request (missing params)
- `401`: Unauthorized
- `403`: Forbidden
- `500`: Server error

---

## Rate Limiting

Not implemented by default. Recommended to add Vercel Edge Config rate limiting in production.

---

## Webhooks

### Stripe Webhook Security
- Signature verification required
- Use `stripe.webhooks.constructEvent()` to validate
- Configure webhook secret in environment variables

### Webhook Testing
Use Stripe CLI for local testing:
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
stripe trigger payment_intent.succeeded
```
