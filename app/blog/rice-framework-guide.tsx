'use client'

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-black text-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Meta Information */}
        <div className="mb-12 pb-8 border-b border-gray-800">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The RICE Framework: Prioritize Features Like a Google PM
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
              <p className="font-semibold text-gray-300">9 minutes</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-xl text-gray-300 leading-relaxed">
              You've got 47 feature requests. Your engineering team has capacity for 3. Everyone's got an opinion on which ones matter most. Your CEO wants the one that makes them look good in investor calls. Your biggest customer wants the one that solves their specific problem.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              How do you choose? You use RICE.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What is RICE?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              RICE is a prioritization framework invented at Intercom. It's used by product teams at Google, Airbnb, Amazon, and most sophisticated tech companies. It removes opinion from the process.
            </p>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 space-y-6 my-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">R = Reach (quarterly impact)</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  How many users will be affected by this feature in the next quarter? This is your unit of impact.
                </p>
                <p className="text-gray-400 text-sm mt-2 italic">
                  Example: "Our app has 10,000 users. 3,000 will use the new export feature. Reach = 3,000."
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl font-bold text-blue-300 mb-3">I = Impact (per-user impact)</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  How much value does this create for each affected user? Assign a multiplier.
                </p>
                <p className="text-gray-400 text-sm mt-2">3x = massive impact | 2x = high | 1x = medium | 0.5x = low</p>
                <p className="text-gray-400 text-sm mt-2 italic">
                  Example: "Export saves users 2 hours of manual work. That's massive. Impact = 3x."
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl font-bold text-blue-300 mb-3">C = Confidence (how confident are you?)</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  This is key. You're forcing yourself to be honest about uncertainty. Express as a percentage.
                </p>
                <p className="text-gray-400 text-sm mt-2">100% = we've validated this | 75% = pretty sure | 50% = guess | 25% = total shot in the dark</p>
                <p className="text-gray-400 text-sm mt-2 italic">
                  Example: "3 customers specifically asked for export. But we haven't talked to the other 2,997. Confidence = 60%."
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl font-bold text-blue-300 mb-3">E = Effort (in person-weeks)</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  How long will this take? Be honest. Pad your estimates by 20%.
                </p>
                <p className="text-gray-400 text-sm mt-2 italic">
                  Example: "Export feature: 2 weeks of engineering, 1 week QA. Total = 3 person-weeks."
                </p>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-300 mb-2">📐 The Formula:</p>
              <p className="text-gray-300 font-mono text-lg">
                RICE Score = (Reach × Impact × Confidence) / Effort
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed mt-6">
              Higher scores float to the top. Lower scores drop. You rank by score, and boom—your roadmap is decided by data, not politics.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Real Example: Export vs. Dark Mode</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Let's say you're choosing between two features. CEO wants dark mode (makes the app look modern). Customers want export (solves a real workflow problem). Who wins?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Export Feature</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div>
                    <p className="text-gray-500">Reach</p>
                    <p className="font-semibold">3,000 users</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Impact</p>
                    <p className="font-semibold">3x (saves 2 hours)</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Confidence</p>
                    <p className="font-semibold">60%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Effort</p>
                    <p className="font-semibold">3 weeks</p>
                  </div>
                  <div className="border-t border-gray-700 pt-3 mt-3">
                    <p className="text-gray-400">Score:</p>
                    <p className="font-bold text-blue-300 text-lg">(3,000 × 3 × 0.6) / 3 = <span className="text-2xl">1,800</span></p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Dark Mode</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div>
                    <p className="text-gray-500">Reach</p>
                    <p className="font-semibold">10,000 users (everyone)</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Impact</p>
                    <p className="font-semibold">1x (nice to have)</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Confidence</p>
                    <p className="font-semibold">100%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Effort</p>
                    <p className="font-semibold">6 weeks</p>
                  </div>
                  <div className="border-t border-gray-700 pt-3 mt-3">
                    <p className="text-gray-400">Score:</p>
                    <p className="font-bold text-blue-300 text-lg">(10,000 × 1 × 1.0) / 6 = <span className="text-2xl">1,667</span></p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Export wins. Not because I say so. Because the math says so. It creates more value per engineering week. It's that simple.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">How to Actually Use RICE (Without It Becoming Theater)</h2>

            <div className="space-y-6">
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
                <p className="font-semibold text-blue-300 mb-3">✅ Do This: Make Assumptions Explicit</p>
                <p className="text-gray-300 text-sm">
                  When you estimate reach, write it down. "We're assuming 3,000 users because 3 customers asked for this and they represent ~30% of revenue." This lets you revisit assumptions later.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
                <p className="font-semibold text-blue-300 mb-3">✅ Do This: Validate Confidence Before Ranking</p>
                <p className="text-gray-300 text-sm">
                  If you have low confidence in reach or impact, go talk to 5 customers before RICE scoring. An hour of research is better than 6 weeks building the wrong thing.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
                <p className="font-semibold text-blue-300 mb-3">✅ Do This: Build in Batching</p>
                <p className="text-gray-300 text-sm">
                  Don't RICE score every feature individually. Every quarter, batch your top 10-20 candidates, score them together, and pick the top 3-4. This creates healthy debate and forces prioritization.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
                <p className="font-semibold text-blue-300 mb-3">❌ Don't Do This: Pretend It's Perfect</p>
                <p className="text-gray-300 text-sm">
                  RICE is not a magic formula. It's a forcing function. If the #1 ranked feature feels wrong, that's a signal. Maybe your estimates are off. That's worth investigating before you commit 6 weeks of engineering.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Common Mistakes (And How to Avoid Them)</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-red-500 bg-red-500/5 p-4">
                <p className="font-semibold text-red-300 mb-2">❌ Mistake: Confusing "Reach" with Revenue</p>
                <p className="text-gray-300 text-sm">
                  "This feature will reach our 5 biggest customers (who generate 50% of revenue)." Wrong. Reach should be number of users, not revenue impact. If you want to weight by revenue, that's a separate calculation.
                </p>
              </div>

              <div className="border-l-4 border-red-500 bg-red-500/5 p-4">
                <p className="font-semibold text-red-300 mb-2">❌ Mistake: Underestimating Effort</p>
                <p className="text-gray-300 text-sm">
                  I see this constantly. A feature that "should be 1 week" becomes 3 weeks because of edge cases, QA, support training, docs, etc. Pad your estimates by 20%. Always.
                </p>
              </div>

              <div className="border-l-4 border-red-500 bg-red-500/5 p-4">
                <p className="font-semibold text-red-300 mb-2">❌ Mistake: Ignoring Confidence</p>
                <p className="text-gray-300 text-sm">
                  A feature with high reach, high impact, and low confidence (you just guessed) will score high but fail in the market. Confidence is your check on wishful thinking.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">The RICE Template</h2>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 my-6 overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 px-2 font-semibold">Feature</th>
                    <th className="text-left py-2 px-2 font-semibold">Reach</th>
                    <th className="text-left py-2 px-2 font-semibold">Impact</th>
                    <th className="text-left py-2 px-2 font-semibold">Confidence</th>
                    <th className="text-left py-2 px-2 font-semibold">Effort</th>
                    <th className="text-left py-2 px-2 font-semibold">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 px-2">[Feature Name]</td>
                    <td className="py-2 px-2">[# users]</td>
                    <td className="py-2 px-2">[0.5-3x]</td>
                    <td className="py-2 px-2">[%]</td>
                    <td className="py-2 px-2">[weeks]</td>
                    <td className="py-2 px-2 font-semibold text-blue-300">auto</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-400 text-xs mt-4">
                Pro tip: Use a spreadsheet. Build a formula that auto-calculates the score. Let the data do the talking.
              </p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-800">
            <div className="bg-gray-900 rounded-lg p-8">
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Ready to use RICE on your roadmap?</strong> Most teams that adopt RICE see 3x improvement in feature adoption rates within the first quarter.
              </p>
              <p className="text-gray-400 text-sm">
                I help product teams implement RICE, build prioritization processes that stick, and create roadmaps that customers actually want. <a href="/" className="text-blue-400 hover:text-blue-300">Let's talk →</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
