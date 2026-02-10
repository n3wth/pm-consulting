'use client'

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">StrategyPM</h3>
            <p className="text-sm text-gray-400">
              Product strategy consulting by Oliver Newth, Trust & Safety PM at Google. 
              Former Meta and Microsoft.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Roadmap Planning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Feature Prioritization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Stakeholder Alignment</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:o@newth.ai" className="hover:text-white transition-colors">
                  o@newth.ai
                </a>
              </li>
              <li>
                <a href="https://n3wth.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/olivernewth" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/n3wth" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} StrategyPM. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
