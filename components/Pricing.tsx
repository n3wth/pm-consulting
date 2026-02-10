'use client'

// Stripe Payment Link - Replace with your actual Stripe payment link
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_00000000000000000000'

const features = [
  '1-on-1 strategy sessions',
  'Product roadmap development',
  'Feature prioritization frameworks',
  'Stakeholder communication templates',
  'Async support via Slack/email',
  'Case studies from Google/Meta',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 md:px-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-lg">
            Get strategic product expertise at a fraction of a full-time hire
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 max-w-lg mx-auto border-2 border-white/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-center space-y-6">
            <div>
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Consulting Rate
              </div>
              <div className="text-6xl md:text-7xl font-bold mb-2">
                $300<span className="text-3xl text-gray-400">/hr</span>
              </div>
              <div className="text-gray-400">Billed hourly</div>
            </div>

            <p className="text-gray-300 border-t border-b border-white/10 py-6">
              Get the strategic product expertise of a Google PM at a fraction of a full-time hire.
            </p>

            <ul className="space-y-4 text-left">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <svg
                    className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5"
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

            <a
              href={STRIPE_PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Book Your First Session
            </a>

            <p className="text-xs text-gray-500">
              Secure payment via Stripe • Cancel anytime
            </p>
          </div>
        </div>

        {/* Alternative CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-gray-400">Not sure if this is right for you?</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 glass-card font-semibold rounded-lg hover:border-white/20 transition-all duration-300"
          >
            Schedule a Free 15-Min Call
          </a>
        </div>
      </div>
    </section>
  )
}
