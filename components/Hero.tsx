'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 py-20">
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full glass-card text-sm font-semibold text-gray-300 mb-4">
            Product Strategy Consulting
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            <span className="block">Ship Products</span>
            <span className="block">That Matter</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Expert product strategy from a <span className="text-white font-semibold">$210k Google PM</span> with experience at Meta and Microsoft. 
            Get the roadmap, prioritization, and stakeholder alignment your company needs to scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Book Strategy Session
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 glass-card font-semibold rounded-xl hover:border-white/20 transition-all duration-300 text-center"
            >
              See How I Help
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
            {[
              { value: '$210k', label: 'Google PM Salary' },
              { value: '10+ Years', label: 'Product Leadership' },
              { value: 'Billions', label: 'Users Impacted' },
              { value: '3 Giants', label: 'Google, Meta, Microsoft' },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
