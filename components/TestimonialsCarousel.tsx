'use client'

import { useState } from 'react'
import Image from 'next/image'
import testimonials from '@/testimonials.json'
import imageMetadata from '@/public/optimized/images.json'

// Create a map of author names to image metadata
const imageMap = imageMetadata.reduce((acc, img) => {
  acc[img.author] = img
  return acc
}, {} as Record<string, typeof imageMetadata[0]>)

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[current]
  const imageData = imageMap[testimonial.author]

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Product Leaders</h2>
          <p className="text-gray-400 text-lg">Companies that transformed their product strategy</p>
        </div>

        {/* Carousel */}
        <div className="glass-card p-12 space-y-8 animate-fade-in">
          {/* Testimonial Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {imageData ? (
                <Image
                  src={imageData.webp}
                  alt={testimonial.author}
                  width={64}
                  height={64}
                  placeholder="blur"
                  blurDataURL={imageData.blur}
                  className="w-16 h-16 rounded-full border-2 border-white/20 object-cover"
                  priority={current === 0}
                  sizes="64px"
                />
              ) : (
                <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-gray-700" />
              )}
              <div>
                <p className="font-semibold text-lg">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
                <p className="text-gray-500 text-xs">{testimonial.company}</p>
              </div>
            </div>

            <blockquote className="text-xl text-gray-200 leading-relaxed italic border-l-4 border-purple-500 pl-6">
              "{testimonial.quote}"
            </blockquote>

            {/* Metrics */}
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-blue-300">{testimonial.metric}</p>
                <p className="text-xs text-gray-500">{testimonial.timeframe}</p>
              </div>
              <div className="text-3xl text-blue-400">✓</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <button
              onClick={prevTestimonial}
              className="p-2 hover:bg-white/10 rounded-lg transition"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === current ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 hover:bg-white/10 rounded-lg transition"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-3 pt-4 text-sm text-gray-500">
            <span>✓ All verified customers</span>
            <span>•</span>
            <span>{testimonials.length}+ case studies</span>
          </div>
        </div>
      </div>
    </section>
  )
}
