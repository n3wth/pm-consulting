'use client'

const services = [
  {
    title: 'Roadmap Planning',
    description: 'Build a product roadmap that aligns with business goals and engineering capacity.',
    features: [
      'Quarterly planning frameworks',
      'Resource allocation strategy',
      'Dependency mapping',
      'Timeline estimation',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Feature Prioritization',
    description: 'Cut through the noise and focus on features that drive measurable business impact.',
    features: [
      'RICE scoring frameworks',
      'Customer feedback analysis',
      'Competitive positioning',
      'Impact vs effort mapping',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Stakeholder Alignment',
    description: 'Get everyone rowing in the same direction with clear communication frameworks.',
    features: [
      'Executive stakeholder updates',
      'Cross-functional collaboration',
      'Decision-making frameworks',
      'Conflict resolution strategies',
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How I Help You Ship</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proven frameworks from Google, Meta, and Microsoft
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card p-8 space-y-6 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-white">{service.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="text-sm text-gray-400 flex items-start">
                    <span className="text-gray-600 mr-2">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
