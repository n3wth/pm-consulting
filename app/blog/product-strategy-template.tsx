'use client'

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-black text-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Meta Information */}
        <div className="mb-12 pb-8 border-b border-gray-800">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How to Write a Product Strategy That Actually Sticks (Template Included)
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <div>
              <p className="text-gray-500">By</p>
              <p className="font-semibold text-gray-300">Oliver Newth</p>
              <p className="text-xs text-gray-600">Product Strategy Consultant @ Google PM</p>
            </div>
            <div>
              <p className="text-gray-500">Published</p>
              <p className="font-semibold text-gray-300">February 13, 2026</p>
            </div>
            <div>
              <p className="text-gray-500">Reading Time</p>
              <p className="font-semibold text-gray-300">10 minutes</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-xl text-gray-300 leading-relaxed">
              Most product strategies die in a Google Doc. They're either too vague ("We'll be the Airbnb of X"), too detailed (50-page specs that nobody reads), or they change every quarter when someone new joins the team.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Here's how to write one that actually sticks—and gets your whole team aligned.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Why Most Product Strategies Fail</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I've reviewed 50+ product strategies in the past 3 years. The ones that fail have one thing in common: they try to answer too many questions at once.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              They tackle who customers are, what problem you're solving, how you'll solve it differently, why the market is big, when you'll ship, and what success looks like. By question 3, everyone's eyes glaze over.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The best strategies I've seen answer one core question really well:
            </p>
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-300 mb-2">❓ The Core Question:</p>
              <p className="text-gray-300">
                "What will we be known for, in a way that matters to our customers and can't be easily copied?"
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">The 3-Part Product Strategy Framework</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Here's the structure I use with every client. It's simple, it's memorable, and it works.
            </p>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 space-y-6 my-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Part 1: The Market Context (1 paragraph)</h3>
                <p className="text-gray-300 mb-4">
                  <strong>What's changing in the world that makes your product possible now?</strong>
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Don't talk about yourself. Talk about external forces: technology shifts, market gaps, emerging customer needs, regulatory changes, or macro trends.
                </p>
                <p className="text-gray-300 italic">
                  Example: "AI-driven copilots are now reliable enough to handle complex product workflows. Wireframing tools haven't updated in 10 years. Designers now spend 60% of time on repetitive tasks instead of solving hard design problems."
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl font-bold text-white mb-3">Part 2: Your Wedge (1-2 sentences)</h3>
                <p className="text-gray-300 mb-4">
                  <strong>How will you win by being different?</strong>
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  This is your competitive advantage. It should be specific enough that a competitor couldn't say the same thing. Avoid "We'll be the best" or "We'll have the best UX." Those mean nothing.
                </p>
                <p className="text-gray-300 italic">
                  Example: "We'll win by combining AI design automation with human creative direction, so designers can spend 80% of time on novel ideas instead of production work."
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl font-bold text-white mb-3">Part 3: Your North Star (1 metric)</h3>
                <p className="text-gray-300 mb-4">
                  <strong>How will you know you're winning?</strong>
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  Pick one metric that matters. Not vanity metrics (DAU, signups). Pick what your customer actually cares about.
                </p>
                <p className="text-gray-300 italic">
                  Example: "Our north star is: average time to design a complete wireframe goes from 3 hours to 30 minutes."
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">How to Actually Write This (Without It Being Obvious Nonsense)</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Here's where most people get stuck. They write something that sounds good but falls apart under scrutiny. Here's how to avoid that:
            </p>

            <div className="space-y-6">
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
                <p className="font-semibold text-blue-300 mb-3">✅ Step 1: Ground It in Data</p>
                <p className="text-gray-300">
                  Don't guess about market context. Talk to 10 customers. Find external research that proves your market shift is real. Link the data to your strategy.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Bad: "Designers need better tools." Good: "Designers spend 60% of time on repetitive tasks (Forrester 2025). In our user interviews, 8 of 10 said they'd pay to reduce this."
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
                <p className="font-semibold text-blue-300 mb-3">✅ Step 2: Be Brutally Specific About Your Wedge</p>
                <p className="text-gray-300">
                  The more specific you are, the more your team can say "no" to things that don't fit. Vague strategies create scope creep.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Bad: "We'll be AI-first." Good: "We'll only build features that reduce designer production time by at least 30%. We won't build creative feedback loops or asset management."
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
                <p className="font-semibold text-blue-300 mb-3">✅ Step 3: Make Your North Star Measurable</p>
                <p className="text-gray-300">
                  If you can't measure it in 6 months, it's not a north star. It's a dream.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Bad: "Designers will love us." Good: "Average time to design a wireframe: 3 hours → 30 minutes. We'll measure this with in-app time tracking."
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">The Template (Copy & Use)</h2>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 my-6 font-mono text-sm text-gray-300 overflow-x-auto">
              <p className="mb-4 text-blue-300">## Our Product Strategy</p>
              <p className="mb-4 text-blue-300">### Market Context</p>
              <p className="mb-6">{"[Describe the external shift. Link 2-3 data points. Avoid talking about your product.]"}</p>

              <p className="mb-4 text-blue-300">### Our Wedge</p>
              <p className="mb-6">{"[1-2 sentences on how you'll be different. Specific enough that competitors can't copy it.]"}</p>

              <p className="mb-4 text-blue-300">### North Star Metric</p>
              <p className="mb-4">{"[One metric. Current state → Target state. Measurable in 6 months.]"}</p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              That's it. Print it. Put it on a wall. Reference it in every meeting. When someone proposes a feature that doesn't fit your strategy, you have language to say no.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Real Example: How This Works</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Let me show you a real strategy that worked. Names changed to protect the client.
            </p>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 my-6 space-y-4">
              <div>
                <p className="text-blue-300 font-semibold mb-2">Market Context:</p>
                <p className="text-gray-300 text-sm">
                  "Product managers at Series A-C startups spend 40% of time in meetings trying to align stakeholders on priorities. Existing tools (spreadsheets, Jira) make prioritization visible but don't surface the reasoning. When strategies change, nobody knows what to update."
                </p>
              </div>
              <div>
                <p className="text-blue-300 font-semibold mb-2">Wedge:</p>
                <p className="text-gray-300 text-sm">
                  "We'll win by making strategy visible and updatable. When the market shifts, PMs change strategy once, and the roadmap updates automatically. Everyone stays aligned with less meetings."
                </p>
              </div>
              <div>
                <p className="text-blue-300 font-semibold mb-2">North Star:</p>
                <p className="text-gray-300 text-sm">
                  "Time to update product strategy when markets shift: 3 weeks of meetings → 1 day (measured by customer surveys and in-app time tracking)"
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mt-6">
              The result? When the CEO proposed a feature for "real-time collaboration," the team said: "Does this reduce time to update strategy when markets shift?" Answer: No. Feature killed. Time saved: 6 weeks of engineering.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">One More Thing: Review Quarterly</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Markets change. Your strategy should too. But not every quarter. And not because a new executive joined.
            </p>

            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-300 mb-3">📋 Quarterly Review Checklist:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Has the market shifted in a way that makes our wedge less relevant?</li>
                <li>• Are we hitting our north star metric?</li>
                <li>• Have we learned something new from customers that changes our market context?</li>
                <li>• Is our strategy still specific enough to say "no" to things?</li>
              </ul>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-800">
            <div className="bg-gray-900 rounded-lg p-8">
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Need help writing your product strategy?</strong> That's what I do. I help product leaders and founders build strategies that stick—and then use them to ship faster.
              </p>
              <p className="text-gray-400 text-sm">
                Book a call with me. $300/hr. We'll review your strategy, identify gaps, and give you a playbook to get your team aligned. <a href="/" className="text-blue-400 hover:text-blue-300">Get started →</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
