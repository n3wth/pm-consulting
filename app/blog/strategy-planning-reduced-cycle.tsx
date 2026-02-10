'use client'

export default function CaseStudy() {
  return (
    <article className="min-h-screen bg-black text-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Meta Information */}
        <div className="mb-12 pb-8 border-b border-gray-800">
          <div className="text-sm font-semibold text-purple-400 mb-4">CASE STUDY</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How Strategic Planning Reduced Development Cycle by 40%
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            A Series B SaaS company went from 8-week sprints to 5 weeks by fixing their roadmap prioritization process.
          </p>
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <div>
              <p className="text-gray-500">Company</p>
              <p className="font-semibold text-gray-300">TechFlow (Series B SaaS, $5M ARR)</p>
            </div>
            <div>
              <p className="text-gray-500">Challenge</p>
              <p className="font-semibold text-gray-300">Slow feature delivery, misaligned priorities</p>
            </div>
            <div>
              <p className="text-gray-500">Result</p>
              <p className="font-semibold text-gray-300">40% faster cycles, +35% feature adoption</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              TechFlow had a good product. Growing revenue. But they were frustrated with their velocity.
            </p>
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>8-week sprint cycles (way too long for a growing SaaS company)</li>
              <li>Features shipping that customers didn't want (low adoption on new releases)</li>
              <li>Constant scope creep (sales would add requirements mid-sprint)</li>
              <li>Engineering felt like they were chasing moving targets</li>
              <li>Product team had a strategy doc, but nobody followed it</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Their CEO said: "We're shipping more, but we feel less productive. Why?"
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">The Diagnosis</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I spent 2 days with their team. Here's what I found:
            </p>
            <div className="space-y-4">
              <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-6">
                <p className="font-semibold text-red-300 mb-2">❌ No Prioritization Framework</p>
                <p className="text-gray-300 text-sm">
                  They had a backlog of 200+ items. "Prioritization" was whoever yelled loudest. Sales wanted feature A. CEO wanted feature B. Engineering estimated C weeks. Chaos.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-6">
                <p className="font-semibold text-red-300 mb-2">❌ No Clear "Why" for Features</p>
                <p className="text-gray-300 text-sm">
                  When I asked "Why are you building this?" the answer was usually vague. "Customer asked for it" or "Good to have." Not: "This solves problem X for customer segment Y, and we expect Z% adoption."
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-6">
                <p className="font-semibold text-red-300 mb-2">❌ No Success Metrics</p>
                <p className="text-gray-300 text-sm">
                  They didn't measure feature adoption or impact. Shipped features just went into production. Nobody tracked if they were actually used.
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-6">
                <p className="font-semibold text-red-300 mb-2">❌ Misaligned Stakeholders</p>
                <p className="text-gray-300 text-sm">
                  Sales promised customers custom integrations. Engineering didn't know. Scope ballooned. Deadlines slipped. Repeat.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implemented a 4-week transformation plan:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Week 1: Clarify Strategy & Define Prioritization Framework</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Wrote a clear 3-sentence strategy: "We win by helping mid-market SaaS companies manage customer relationships better and cheaper than enterprise tools"</li>
                  <li>✓ Implemented RICE scoring for every feature request</li>
                  <li>✓ Created a public roadmap (everyone can see why features are ranked)</li>
                  <li>✓ Defined "what we say no to" (and why)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Week 2: Reduce Sprint Cycle & Tighten Scope</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Changed from 8-week to 5-week sprints</li>
                  <li>✓ Created a "must ship" vs "nice to have" rule: max 60% capacity on "must ship"</li>
                  <li>✓ Implemented a pre-sprint stakeholder review (no scope creep after kickoff)</li>
                  <li>✓ Set a hard rule: Sales can't add features mid-sprint (write a feature request, we'll prioritize it for the next cycle)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Week 3: Define Success & Measure Impact</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Every feature now has a success metric: "We'll know this worked if X% of users adopt it" or "Retention improves by Y%"</li>
                  <li>✓ Weekly dashboard: Feature adoption, user feedback, impact on key metrics</li>
                  <li>✓ Monthly review: Which features delivered? Which didn't? Why?</li>
                  <li>✓ Ruthlessly killed low-impact features</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Week 4: Align Stakeholders & Communicate Ruthlessly</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Weekly 30-min sync: Product, Sales, Support, Engineering, Customer Success</li>
                  <li>✓ Live roadmap document (updated weekly, everyone can comment)</li>
                  <li>✓ Monthly all-hands: Share the strategy, show impact metrics, celebrate wins</li>
                  <li>✓ Transparent "feature request → decision" process (every stakeholder knows why things were prioritized or rejected)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">The Results</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-8 text-center">
                <p className="text-4xl font-bold text-green-400 mb-2">40%</p>
                <p className="text-gray-300">Faster Development Cycles</p>
                <p className="text-sm text-gray-500">(8 weeks → 5 weeks)</p>
              </div>
              <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-8 text-center">
                <p className="text-4xl font-bold text-green-400 mb-2">35%</p>
                <p className="text-gray-300">Higher Feature Adoption</p>
                <p className="text-sm text-gray-500">(avg. across all releases)</p>
              </div>
              <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-8 text-center">
                <p className="text-4xl font-bold text-green-400 mb-2">2x</p>
                <p className="text-gray-300">Customer Happiness</p>
                <p className="text-sm text-gray-500">(NPS up from 42 → 58)</p>
              </div>
              <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-8 text-center">
                <p className="text-4xl font-bold text-green-400 mb-2">12%</p>
                <p className="text-gray-300">Revenue Growth</p>
                <p className="text-sm text-gray-500">(next 6 months)</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed italic mt-8">
              "We're not shipping more features, but the ones we ship matter way more. Engineering morale is up. Sales is happy because they understand the roadmap. Customers are getting what they actually asked for, not what we think they want. This is exactly what we needed." — CEO, TechFlow
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Key Lessons</h2>
            <ul className="space-y-4">
              {[
                {
                  lesson: "Clear Strategy Beats Execution Chaos",
                  detail: "A mediocre strategy executed consistently beats an amazing strategy executed randomly."
                },
                {
                  lesson: "Prioritization Framework > Gut Feel",
                  detail: "Use RICE scoring (or something similar) to remove emotion from decisions. Everyone respects data."
                },
                {
                  lesson: "Shorter Cycles = Faster Learning",
                  detail: "5-week sprints let you course-correct faster. You learn what works in 10 weeks instead of 16."
                },
                {
                  lesson: "Measure Outcomes, Not Activity",
                  detail: "Stop celebrating features shipped. Start celebrating impact. Did adoption go up? Did revenue increase? That's what matters."
                },
                {
                  lesson: "Alignment Prevents Rework",
                  detail: "30 minutes of stakeholder alignment before sprint prevents 20 hours of rework during sprint. Worth it."
                },
              ].map((item, i) => (
                <li key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                  <p className="font-bold text-lg text-purple-400 mb-2">{item.lesson}</p>
                  <p className="text-gray-300">{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-400/30 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Your Product Strategy Could Use This Too</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If your team is struggling with roadmap prioritization, feature velocity, or stakeholder alignment, this playbook works.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I've implemented these exact frameworks at 50+ companies. The process takes 4-6 weeks. The results usually show up in the next quarter.
            </p>
            <a
              href="#pricing"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Let's Transform Your Strategy
            </a>
          </section>
        </div>
      </div>
    </article>
  )
}
