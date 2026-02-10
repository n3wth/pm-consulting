#!/bin/bash

# StrategyPM Quick Start Script
# Automated setup and validation

set -e

echo "🚀 StrategyPM Backend Quick Start"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
  echo "❌ Error: Must run from project root"
  exit 1
fi

# Step 1: Check Node.js
echo "1️⃣ Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "✅ Node.js $NODE_VERSION"
echo ""

# Step 2: Install dependencies
echo "2️⃣ Installing dependencies..."
if [ ! -d "node_modules" ]; then
  npm install --legacy-peer-deps
  echo "✅ Dependencies installed"
else
  echo "✅ Dependencies already installed"
fi
echo ""

# Step 3: Check environment variables
echo "3️⃣ Checking environment configuration..."
if [ ! -f ".env.local" ]; then
  echo "⚠️  .env.local not found. Creating from template..."
  cat > .env.local << 'EOF'
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret

# Cal.com
NEXT_PUBLIC_CALCOM_USERNAME=your-calcom-username
CALCOM_API_KEY=your-calcom-api-key

# Resend
RESEND_API_KEY=your-resend-api-key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
ADMIN_EMAIL=o@newth.ai
EOF
  echo "⚠️  .env.local created. Please update with your actual keys!"
  echo ""
  echo "📋 Required Keys:"
  echo "   - Supabase: https://supabase.com"
  echo "   - Stripe: https://stripe.com/dashboard"
  echo "   - Resend: https://resend.com"
  echo ""
  read -p "Press Enter after updating .env.local..."
else
  echo "✅ .env.local exists"
fi
echo ""

# Step 4: Check if keys are configured
echo "4️⃣ Validating environment variables..."
source .env.local 2>/dev/null || true

MISSING_KEYS=()

if [[ "$NEXT_PUBLIC_SUPABASE_URL" == "your-supabase-url" ]] || [ -z "$NEXT_PUBLIC_SUPABASE_URL" ]; then
  MISSING_KEYS+=("NEXT_PUBLIC_SUPABASE_URL")
fi

if [[ "$STRIPE_SECRET_KEY" == "your-stripe-secret-key" ]] || [ -z "$STRIPE_SECRET_KEY" ]; then
  MISSING_KEYS+=("STRIPE_SECRET_KEY")
fi

if [[ "$RESEND_API_KEY" == "your-resend-api-key" ]] || [ -z "$RESEND_API_KEY" ]; then
  MISSING_KEYS+=("RESEND_API_KEY")
fi

if [ ${#MISSING_KEYS[@]} -gt 0 ]; then
  echo "⚠️  Missing or placeholder keys detected:"
  for key in "${MISSING_KEYS[@]}"; do
    echo "   - $key"
  done
  echo ""
  echo "Please update .env.local with real keys before continuing."
  echo ""
  read -p "Press Enter when ready to continue anyway, or Ctrl+C to exit..."
else
  echo "✅ All required keys configured"
fi
echo ""

# Step 5: Start development server
echo "5️⃣ Starting development server..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌐 Server will start at:"
echo "   http://localhost:3000"
echo ""
echo "📄 Available pages:"
echo "   → Homepage:       http://localhost:3000"
echo "   → Booking Page:   http://localhost:3000/book"
echo "   → Admin Dashboard: http://localhost:3000/admin"
echo "   → Client Portal:  http://localhost:3000/portal"
echo ""
echo "📚 Documentation:"
echo "   → Setup Guide:    BACKEND-SETUP.md"
echo "   → API Docs:       API-DOCS.md"
echo "   → Delivery Report: DELIVERY-REPORT.md"
echo ""
echo "🧪 Test backend:"
echo "   → Run: ./test-backend.sh"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Starting in 3 seconds... (Ctrl+C to cancel)"
sleep 3

npm run dev
