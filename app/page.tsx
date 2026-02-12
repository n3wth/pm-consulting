'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import SocialProof from '@/components/SocialProof'
import ContactForm from '@/components/ContactForm'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <SocialProof />
      <TestimonialsCarousel />
      <Pricing />
      <div id="contact" className="py-20 px-6 md:px-12 bg-gray-950">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Talk Strategy</h2>
            <p className="text-gray-400 text-lg">
              Tell me about your challenges. I'll send you a personalized strategy recommendation.
            </p>
          </div>
          <div className="glass-card p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Exit Intent Popup - Last chance to convert */}
      <ExitIntentPopup
        title="Wait! One moment..."
        message="Get a free 15-min strategy call. No sales pitch—just actionable insights for your product roadmap."
        cta="Get Free 15-Min Call"
        ctaHref="#contact"
        email={true}
      />
    </main>
  )
}
