'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function ResourcesPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState('')

  const leadMagnets = [
    {
      title: 'Product Strategy Checklist',
      description: 'The 47-point checklist Google PMs use to validate product strategy before launch.',
      benefit: 'Catch strategy flaws in 15 minutes',
      type: 'Checklist',
      download: 'product-strategy-checklist',
    },
    {
      title: 'Roadmap Planning Template',
      description: 'The exact template I use at Google to plan 12-month product roadmaps.',
      benefit: 'Go from chaotic to strategic',
      type: 'Template',
      download: 'roadmap-template',
    },
    {
      title: 'Feature Prioritization Matrix',
      description: 'RICE, KANO, and Value vs Effort frameworks compared and ready to use.',
      benefit: 'Prioritize with data',
      type: 'Framework',
      download: 'prioritization-matrix',
    },
    {
      title: 'OKR Template & Framework',
      description: 'Complete OKR system used by top tech companies. Includes quarterly planning guide.',
      benefit: 'Align your team around shared goals',
      type: 'Framework',
      download: 'okr-template-framework',
    },
    {
      title: 'Roadmap Critique Checklist',
      description: 'Evaluate any product roadmap like a Google PM. Identify what\'s missing in 10 min.',
      benefit: 'Spot roadmap gaps instantly',
      type: 'Checklist',
      download: 'roadmap-critique-template',
    },
    {
      title: 'Product Strategy Roadmap',
      description: 'End-to-end product strategy planning system. From customer research to launch.',
      benefit: 'Build strategy from first principles',
      type: 'Guide',
      download: 'roadmap-strategy-template',
    },
  ]

  const handleDownload = async (resource: string) => {
    if (!email.trim()) {
      setSubmitted('error')
      setTimeout(() => setSubmitted(''), 3000)
      return
    }

    try {
      // Log to /leads folder
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          resource,
          source: 'resources-page',
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitted('success')
        setEmail('')
        setTimeout(() => setSubmitted(''), 3000)
      }
    } catch (error) {
      setSubmitted('error')
      setTimeout(() => setSubmitted(''), 3000)
    }
  }

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            StrategyPM
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Free Product Strategy Resources
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            The same templates and checklists I used at Google. Download for free, or get personalized feedback from a $210k Google PM.
          </p>
          <p className="text-sm text-gray-500">
            Used by 2,000+ product managers at companies like Stripe, Notion, and Figma.
          </p>
        </div>

        {/* Email Capture */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h2 className="text-xl font-bold mb-4 text-white">Get All Resources Free</h2>
            <p className="text-gray-400 mb-6">
              Enter your email to download instantly. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={() => handleDownload('all')}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold whitespace-nowrap transition-colors"
              >
                Download Now
              </button>
            </div>
            {submitted === 'success' && (
              <p className="text-green-500 text-sm mt-3">Check your email for the download link!</p>
            )}
            {submitted === 'error' && (
              <p className="text-red-500 text-sm mt-3">Please enter a valid email address.</p>
            )}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {leadMagnets.map((item, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors group cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {item.type}
                </span>
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              <div className="mb-4 p-3 bg-gray-800/50 rounded border-l-2 border-blue-600">
                <p className="text-sm text-blue-400 font-medium">💡 {item.benefit}</p>
              </div>
              <button
                onClick={() => handleDownload(item.download)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 hover:bg-blue-600 text-white text-sm font-semibold transition-colors"
              >
                Download Free
              </button>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">Trusted by Product Leaders</h3>
          <div className="grid grid-cols-3 gap-6 text-center mb-8">
            <div>
              <p className="text-3xl font-bold text-blue-400">2,000+</p>
              <p className="text-gray-400 text-sm">Product Managers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">10 years</p>
              <p className="text-gray-400 text-sm">PM Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">$210K</p>
              <p className="text-gray-400 text-sm">Google Compensation</p>
            </div>
          </div>
          <p className="text-gray-400 mb-8">
            "These templates actually work. I went from confused to strategic in one week." - Sarah M., Product Lead at Series B Startup
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Want Personalized Feedback? Schedule a Call →
          </Link>
        </div>
      </div>
    </main>
  )
}
