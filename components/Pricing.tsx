'use client'

import { useState } from 'react'

// Stripe Payment Link - Replace with your actual Stripe payment link
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_00000000000000000000'

const features = [
  '1-on-1 strategy sessions (30min deep-dive)',
  'Custom product roadmap development',
  'Feature prioritization frameworks (RICE + custom)',
  'Stakeholder communication templates',
  'Async support via Slack/email (24hr response)',
  'Case studies and templates from Google/Meta',
]

const CTA_VARIANTS = {
  primary: "🎯 Lock In Your Strategy Session Now",
  urgency: "⏰ Start This Week – Limited Availability",
  benefit: "✨ Get Your Roadmap Done Today",
}

export default function Pricing() {
  const [selectedVariant, setSelectedVariant] = useState<keyof typeof CTA_VARIANTS>('primary')

  return (
    <section id="pricing" className="py-20 px-6 md:px-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-lg">
            Get strategic product expertise at a fraction of a full-time hire. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 max-w-lg mx-auto border-2 border-white/20 animate-fade-in shadow-2xl" style={{ animationDelay: '0.2s' }}>
          <div className="text-center space-y-6">
            <div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Consulting Rate
              </div>
              <div className="text-6xl md:text-7xl font-bold mb-2">
                $300<span className="text-3xl text-gray-400">/hr</span>
              </div>
              <div className="text-gray-400">Hourly blocks • 100% refundable within 24hrs</div>
            </div>

            <p className="text-gray-300 border-t border-b border-white/10 py-6 text-lg font-medium">
              The strategic product expertise of a $210k Google PM. <br/>
              <span className="text-sm text-gray-400 font-normal">At 1/4 the cost of a junior hire.</span>
            </p>

            <ul className="space-y-3 text-left">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <svg
                    className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/50 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="font-bold text-blue-300">⚡ First session tip:</span> Come prepared with your current roadmap. We'll identify 3-5 quick wins in the first 30 minutes.
              </p>
            </div>

            <a
              href={STRIPE_PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-bold rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300 transform hover:scale-105 text-center text-lg shadow-lg"
              aria-label="Book your strategy session"
            >
              {CTA_VARIANTS[selectedVariant]}
            </a>

            <p className="text-xs text-gray-500">
              🔒 Secure Stripe payment • 24-hour cancellation • 100% satisfaction guaranteed
            </p>
          </div>
        </div>

        {/* Alternative CTA with stronger urgency */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-gray-400 font-medium">Still deciding?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
            aria-label="Schedule a free 15-minute consultation call"
          >
            📞 Free 15-Min Discovery Call (No Credit Card)
          </a>
          <p className="text-xs text-gray-500">
            Answer 3 questions → 15 min call → See if we're a good fit
          </p>
        </div>

        {/* Social proof tie-in */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm mb-6">
            ⭐ Trusted by Product Managers at Series B & C companies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['TechFlow', 'ShopFlow', 'PaymentCo', 'DataStack'].map((company, i) => (
              <div key={i} className="text-xs text-gray-500 px-3 py-1 rounded-full border border-gray-700">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
