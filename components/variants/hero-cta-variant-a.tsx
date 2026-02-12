/**
 * StrategyPM - Hero CTA Variant A (Control)
 * "Book Consultation"
 */

import { useCTATracking, useVariantTracking } from '@/shared/lib/variant-analytics'

export function HeroCTAVariantA() {
  const { trackClick } = useCTATracking('strategypm-hero-cta', 'A')
  useVariantTracking('strategypm-hero-cta', 'A')

  return (
    <section className="hero-cta-variant-a relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Done-For-You Product Strategy
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Strategic consulting for product leaders who want to scale faster. Expert guidance on roadmaps, pricing, and go-to-market strategy.
        </p>

        {/* Variant A: "Book Consultation" - formal/professional */}
        <button
          onClick={() => trackClick('Book Consultation', 'hero')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          📅 Book Consultation
        </button>

        <p className="mt-4 text-sm text-gray-500">No credit card required. 30-min strategy call.</p>
      </div>
    </section>
  )
}
