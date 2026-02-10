'use client'

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-black text-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Meta Information */}
        <div className="mb-12 pb-8 border-b border-gray-800">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            5 Common Product Strategy Mistakes (And How to Fix Them)
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <div>
              <p className="text-gray-500">By</p>
              <p className="font-semibold text-gray-300">Oliver Newth</p>
              <p className="text-xs text-gray-600">Product Strategy Consultant @ Google PM</p>
            </div>
            <div>
              <p className="text-gray-500">Published</p>
              <p className="font-semibold text-gray-300">February 10, 2026</p>
            </div>
            <div>
              <p className="text-gray-500">Reading Time</p>
              <p className="font-semibold text-gray-300">8 minutes</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-xl text-gray-300 leading-relaxed">
              I've reviewed product strategies for 50+ companies in the past 3 years. I've seen billion-dollar companies get it right and promising startups derail because of a few preventable mistakes.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Here are the 5 most common mistakes I see—and the exact fixes that work.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">1. Building What You Think Customers Want (Not What They Actually Need)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is the #1 cause of wasted engineering cycles. You brainstorm a feature, everyone nods, you ship it, and... crickets. No adoption. No value.
            </p>
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-300 mb-2">💡 The Fix:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Spend 1-2 hours per week talking directly to customers (not product managers)</li>
                <li>• Ask: "What problem is this solving?" not "Do you like this feature?"</li>
                <li>• Use RICE scoring: Rate vs. Confidence—force yourself to rank ideas</li>
                <li>• Validate before you build: prototype, get feedback, iterate</li>
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong>Real example:</strong> A SaaS client was about to build a "custom reporting" feature. Seemed obvious. Then we talked to 10 customers. 8 said "We don't have time to learn custom reporting. Just give us the standard reports but make them exportable." Cost difference: 4 weeks of engineering time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">2. Saying Yes to Everything (No Strategy is Still a Strategy... a Bad One)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Every stakeholder has pet features. Every customer request feels urgent. So you add them all. Your backlog balloons. Nothing ships. Everyone's frustrated.
            </p>
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-300 mb-2">💡 The Fix:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Create a 3-sentence strategy statement: "We win by..."</li>
                <li>• Use it to evaluate every request: Does this move us toward the goal?</li>
                <li>• Say "no" explicitly. Better: "We're prioritizing X instead because..."</li>
                <li>• Review quarterly. Markets change. Adapt your strategy, not your roadmap.</li>
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong>Real example:</strong> A fintech client was adding "crypto support" because one major customer asked for it. But their strategy was "B2B SMB financial inclusion." Crypto didn't fit. We said no, doubled down on the core strategy, and saw 3x faster feature adoption from their actual target market.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">3. Not Aligning Stakeholders Before Shipping</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You ship a feature. Sales expected something else. Customers expected another thing. Support gets flooded with complaints. You iterate frantically. Chaos.
            </p>
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-300 mb-2">💡 The Fix:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Weekly 30-min syncs: Product, Sales, Support, Engineering leads</li>
                <li>• Share the roadmap publicly. Live doc. Updated weekly.</li>
                <li>• Pre-launch review: All stakeholders understand what ships and why</li>
                <li>• Post-launch: Share metrics. Show impact. Close the loop.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">4. Focusing on Activity (Shipped Features) Not Outcomes (Customer Value)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your roadmap is full. You're shipping constantly. But your revenue growth stalled 6 months ago. Why? You're measuring the wrong thing.
            </p>
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-300 mb-2">💡 The Fix:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• For every feature, define success: "We'll know this worked if X metric moves by Y%"</li>
                <li>• Track outcomes, not outputs. "Features shipped" doesn't matter. "Revenue growth" does.</li>
                <li>• Measure impact: Adoption, retention, revenue impact, NPS lift</li>
                <li>• Kill features that don't deliver value. Ruthlessly.</li>
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <strong>Real example:</strong> A marketplace platform shipped 8 features in 6 months. None moved the needle on retention. We audited and found they shipped the wrong things—features they thought mattered, not ones customers actually needed. Pivoted to 2 high-impact features. Retention went from 65% to 72% in the next quarter.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">5. Not Having a Clear Prioritization Framework</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your prioritization is based on whoever yelled loudest. Or the CEO's pet idea. Or intuition. This is chaos disguised as strategy.
            </p>
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-300 mb-2">💡 The Fix: Use RICE Scoring</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <strong>R</strong>each: How many customers does this reach? (per quarter)</li>
                <li>• <strong>I</strong>mpact: How much value per customer? (10x, 3x, 1x, 0.5x)</li>
                <li>• <strong>C</strong>onfidence: How sure are you? (0-100%)</li>
                <li>• <strong>E</strong>ffort: How many weeks of engineering? (0-13 weeks)</li>
                <li>• <strong>Score</strong> = (R × I × C) / E</li>
                <li>• Rank by score. It's not perfect, but it's WAY better than gut feel.</li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-400/30 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">The Pattern Behind Successful PMs</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The best PMs I know share one trait: they're obsessed with customer value, not feature velocity.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              They say no. They measure outcomes. They align stakeholders. They iterate based on data.
            </p>
            <p className="text-lg text-gray-100 font-semibold">
              Do that, and you'll build products that matter.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-800">
            <div className="bg-blue-500/5 border border-blue-400/20 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-3">Want Help With Your Product Strategy?</h3>
              <p className="text-gray-300 mb-6">
                I work with PMs at Series A-C companies to fix these exact issues. If you're struggling with roadmap prioritization, stakeholder alignment, or feature velocity, let's talk.
              </p>
              <a
                href="#pricing"
                className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Book Your Strategy Session
              </a>
            </div>
          </section>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-8">More from the Blog</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/roadmap-strategy" className="group">
              <div className="glass-card p-6 hover:border-white/40 transition">
                <h4 className="text-lg font-semibold group-hover:text-purple-400 transition">How to Build a Product Roadmap That Actually Ships</h4>
                <p className="text-gray-400 text-sm mt-2">Tested frameworks for turning strategy into a roadmap your team believes in</p>
              </div>
            </a>
            <a href="/blog/stakeholder-alignment" className="group">
              <div className="glass-card p-6 hover:border-white/40 transition">
                <h4 className="text-lg font-semibold group-hover:text-purple-400 transition">Stakeholder Alignment 101: Getting Everyone on the Same Page</h4>
                <p className="text-gray-400 text-sm mt-2">The frameworks that work when everyone wants something different</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
