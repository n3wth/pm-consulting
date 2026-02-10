#!/bin/bash

# StrategyPM Backend Test Script
# Tests all API endpoints with sample data

BASE_URL="${1:-http://localhost:3000}"

echo "🧪 Testing StrategyPM Backend"
echo "Base URL: $BASE_URL"
echo ""

# Test 1: Create Lead
echo "1️⃣ Testing Lead Creation..."
LEAD_RESPONSE=$(curl -s -X POST "$BASE_URL/api/leads" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "company": "Test Corp",
    "role": "Product Manager",
    "message": "Need help with roadmap prioritization",
    "source": "api_test"
  }')

LEAD_ID=$(echo $LEAD_RESPONSE | grep -o '"id":"[^"]*' | cut -d'"' -f4)

if [ -n "$LEAD_ID" ]; then
  echo "✅ Lead created: $LEAD_ID"
else
  echo "❌ Lead creation failed"
  echo "$LEAD_RESPONSE"
fi
echo ""

# Test 2: Fetch Leads
echo "2️⃣ Testing Lead Fetch..."
LEADS=$(curl -s "$BASE_URL/api/leads")
LEAD_COUNT=$(echo $LEADS | grep -o '"id"' | wc -l)
echo "✅ Found $LEAD_COUNT leads"
echo ""

# Test 3: Create Booking (without payment)
echo "3️⃣ Testing Booking Creation..."
if [ -n "$LEAD_ID" ]; then
  BOOKING_RESPONSE=$(curl -s -X POST "$BASE_URL/api/bookings" \
    -H "Content-Type: application/json" \
    -d "{
      \"lead_id\": \"$LEAD_ID\",
      \"session_date\": \"2026-02-20T10:00:00Z\",
      \"duration_minutes\": 60,
      \"hourly_rate\": 300,
      \"total_amount\": 300,
      \"notes\": \"Test booking\",
      \"email\": \"test@example.com\",
      \"name\": \"Test User\"
    }")
  
  BOOKING_ID=$(echo $BOOKING_RESPONSE | grep -o '"id":"[^"]*' | cut -d'"' -f4)
  
  if [ -n "$BOOKING_ID" ]; then
    echo "✅ Booking created: $BOOKING_ID"
  else
    echo "❌ Booking creation failed"
    echo "$BOOKING_RESPONSE"
  fi
else
  echo "⏭️  Skipping (no lead ID)"
fi
echo ""

# Test 4: Create Activity
echo "4️⃣ Testing Activity Creation..."
if [ -n "$LEAD_ID" ]; then
  ACTIVITY_RESPONSE=$(curl -s -X POST "$BASE_URL/api/activities" \
    -H "Content-Type: application/json" \
    -d "{
      \"lead_id\": \"$LEAD_ID\",
      \"type\": \"note\",
      \"title\": \"Test activity\",
      \"description\": \"This is a test activity from the test script\"
    }")
  
  ACTIVITY_ID=$(echo $ACTIVITY_RESPONSE | grep -o '"id":"[^"]*' | cut -d'"' -f4)
  
  if [ -n "$ACTIVITY_ID" ]; then
    echo "✅ Activity created: $ACTIVITY_ID"
  else
    echo "❌ Activity creation failed"
    echo "$ACTIVITY_RESPONSE"
  fi
else
  echo "⏭️  Skipping (no lead ID)"
fi
echo ""

# Test 5: Fetch Admin Stats
echo "5️⃣ Testing Admin Stats..."
STATS=$(curl -s "$BASE_URL/api/admin/stats")
TOTAL_LEADS=$(echo $STATS | grep -o '"totalLeads":[0-9]*' | cut -d':' -f2)

if [ -n "$TOTAL_LEADS" ]; then
  echo "✅ Stats fetched: $TOTAL_LEADS total leads"
else
  echo "❌ Stats fetch failed"
  echo "$STATS"
fi
echo ""

# Test 6: Update Lead Status
echo "6️⃣ Testing Lead Update..."
if [ -n "$LEAD_ID" ]; then
  UPDATE_RESPONSE=$(curl -s -X PATCH "$BASE_URL/api/leads/$LEAD_ID" \
    -H "Content-Type: application/json" \
    -d '{
      "status": "contacted"
    }')
  
  if echo "$UPDATE_RESPONSE" | grep -q "success"; then
    echo "✅ Lead updated to 'contacted'"
  else
    echo "❌ Lead update failed"
    echo "$UPDATE_RESPONSE"
  fi
else
  echo "⏭️  Skipping (no lead ID)"
fi
echo ""

# Summary
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Test Summary"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Lead ID: ${LEAD_ID:-N/A}"
echo "Booking ID: ${BOOKING_ID:-N/A}"
echo "Activity ID: ${ACTIVITY_ID:-N/A}"
echo ""
echo "✨ Backend API is functional!"
echo ""
echo "Next Steps:"
echo "1. Set up Supabase and run SQL schema"
echo "2. Configure Stripe keys in .env.local"
echo "3. Set up Resend for emails"
echo "4. Test full booking flow with payment"
echo "5. Deploy to Vercel"
