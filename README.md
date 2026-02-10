# StrategyPM - Product Strategy Consulting

Expert product strategy consulting from a $210k Google PM with experience at Meta and Microsoft.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
vercel --prod
```

## Features

- ✅ Modern Next.js 15 with App Router
- ✅ Tailwind CSS + n3wth/ui design system
- ✅ Stripe payment integration
- ✅ Contact form with Google Forms backup
- ✅ Vercel Analytics
- ✅ Responsive design
- ✅ SEO optimized

## Configuration

### Stripe Payment Link
Update the payment link in `components/Pricing.tsx`:
```typescript
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/your-actual-link'
```

### Contact Form
The contact form uses a dual-submission strategy:
1. Primary: `/api/contact` endpoint
2. Backup: Google Forms (no-cors mode)

Update Google Form entry IDs in `components/ContactForm.tsx`

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Vercel Analytics

## License

MIT
