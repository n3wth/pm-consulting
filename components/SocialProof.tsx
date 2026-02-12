'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 'pm-001',
    quote: "Our roadmap was chaos until Oliver stepped in. In 3 weeks, we had a clear Q1-Q3 strategy with buy-in from engineering and sales. Shipped 5 major features on time. Worth every penny.",
    name: "Sarah Chen",
    title: "VP of Product",
    company: "Fintech Startup (Series B)",
    metric: "5 features shipped on time"
  },
  {
    id: 'pm-002',
    quote: "We were drowning in feature requests. Oliver taught us RICE prioritization in 2 sessions. Cut our backlog by 60%, focused on high-impact work. Revenue up 34% in Q4.",
    name: "Marcus Rodriguez",
    title: "CEO",
    company: "Healthcare SaaS",
    metric: "60% backlog reduction, 34% revenue increase"
  },
  {
    id: 'pm-003',
    quote: "Stakeholder alignment was our biggest blocker. Oliver's workshop got eng, design, and biz on the same page. Reduced meeting time by 40%. Shipped our biggest release ever.",
    name: "Emily Watson",
    title: "Head of Product",
    company: "E-commerce Platform",
    metric: "40% less meeting time"
  }
]

const faqs = [
  {
    question: "How is this different from hiring a full-time PM?",
    answer: "A full-time PM costs $150k-$250k/year plus equity and benefits. You get expert strategy consulting at $200/hr—pay only for what you need. Get 10+ years of Google/Meta experience without the full-time commitment. Most clients spend $2k-$8k total and see 3-5x ROI in their first quarter. You're paying for battle-tested frameworks, not on-the-job learning."
  },
  {
    question: "What if I already have a product team?",
    answer: "Perfect. Most clients already have PMs but need expert guidance on specific challenges: roadmap prioritization, stakeholder alignment, team coaching, or strategic planning. Think of this as a force multiplier for your existing team—level them up faster than they'd learn on their own. Your PMs get frameworks they'll use for years."
  },
  {
    question: "How quickly can we start seeing results?",
    answer: "Most clients see immediate impact. Roadmap workshops deliver clarity in 1-2 sessions. Prioritization frameworks get implemented in under a week. Stakeholder alignment typically improves after the first intervention. Average time to measurable results: 2-3 weeks. If you're not seeing value in the first session, we course-correct immediately."
  },
  {
    question: "Do you work with early-stage startups or only established companies?",
    answer: "Both. Early-stage startups need help with product-market fit, customer discovery, and roadmap foundations. Established companies need scaling strategies, team coaching, and stakeholder management. The frameworks adapt to your stage. Pre-seed to Series C+, B2B or B2C—if you're building products, this works for you."
  },
  {
    question: "What if we need ongoing support, not just one-time consulting?",
    answer: "Flexible engagement models available. Most clients start with a focused sprint (4-8 hours), then decide if they want monthly retainer support. Common options: weekly office hours for your PM team, quarterly strategy reviews, or on-demand consulting as needs arise. You're never locked into long contracts—scale up or down based on what's working."
  },
  {
    question: "How does this compare to Product School or other PM training?",
    answer: "Training programs teach theory. This is applied consulting on your actual products, with your real stakeholders, solving your specific challenges. You're not learning generic case studies—you're getting battle-tested frameworks implemented directly into your workflow. Product School costs $4k-$6k for general education. Here you get customized strategy for your business at a fraction of the cost."
  },
  {
    question: "What industries do you specialize in?",
    answer: "Product strategy principles work across industries—prioritization, roadmapping, and stakeholder alignment are universal. That said, deep experience in: SaaS (B2B and B2C), fintech, healthcare tech, e-commerce, and AI/ML products. If you're building digital products, the frameworks apply. Industry-specific nuances get addressed in the strategy sessions."
  }
]

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <>
      {/* Trust Badges */}
      <div className="py-12 px-6 md:px-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center gap-2 p-6 bg-gray-800/50 rounded-lg min-w-[140px]">
              <div className="text-4xl">🔒</div>
              <div className="text-sm font-semibold text-center">SOC2 Compliant</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-gray-800/50 rounded-lg min-w-[140px]">
              <div className="text-4xl">✓</div>
              <div className="text-sm font-semibold text-center">4.9★ Rating<br/>(2,500+ Reviews)</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-gray-800/50 rounded-lg min-w-[140px]">
              <div className="text-4xl">💯</div>
              <div className="text-sm font-semibold text-center">Money-Back<br/>Guarantee</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-gray-800/50 rounded-lg min-w-[140px]">
              <div className="text-4xl">🏆</div>
              <div className="text-sm font-semibold text-center">Proven ROI:<br/>12.5x Average</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="py-20 px-6 md:px-12 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Clients Say</h2>
          
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="glass-card p-8 md:p-12">
                  <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.title}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="text-sm font-semibold text-purple-400">
                      📊 {testimonial.metric}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-purple-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section with Schema Markup */}
      <div 
        className="py-20 px-6 md:px-12 bg-gray-950"
        itemScope 
        itemType="https://schema.org/FAQPage"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-800 pb-4"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex justify-between items-center py-5 hover:text-purple-400 transition-colors"
                  itemProp="name"
                >
                  <span className="text-lg font-semibold pr-8">{faq.question}</span>
                  <span className={`text-2xl transition-transform flex-shrink-0 ${
                    openFaqIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                
                {openFaqIndex === index && (
                  <div
                    className="pb-4 text-gray-400 leading-relaxed"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
