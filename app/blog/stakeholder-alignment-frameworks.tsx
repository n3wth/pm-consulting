'use client'

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-black text-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Meta Information */}
        <div className="mb-12 pb-8 border-b border-gray-800">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Stakeholder Alignment 101: 5 Frameworks Used at Meta & Microsoft
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
              <p className="font-semibold text-gray-300">8 minutes</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <p className="text-xl text-gray-300 leading-relaxed">
              You've built a great product strategy. Your team loves it. Then you present it to leadership, and... everything falls apart.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Sales wants you to prioritize customer retention. Marketing wants brand-new features for lead gen. Engineering is worried about technical debt. The CEO wants growth.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Everyone's right. But they're all pulling in different directions. Welcome to stakeholder misalignment—and how to fix it.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Why Stakeholder Misalignment Is Your #1 Problem</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I've been in hundreds of product meetings. The most dysfunctional teams aren't the ones with bad ideas. They're the ones where stakeholders are playing different games.
            </p>

            <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-6 my-6">
              <p className="text-red-300 mb-3">🚨 <strong>The Cost of Misalignment:</strong></p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 40% of your engineering velocity goes to rework (building the "wrong" thing)</li>
                <li>• Meetings grow longer and more heated (everyone's defending their territory)</li>
                <li>• Good people quit (they're tired of fighting)</li>
                <li>• Decision-making slows to a crawl (nobody trusts the direction)</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Alignment isn't about making everyone happy. It's about making sure everyone understands the decision—and why it was made—even if they disagree.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Framework 1: The Context-Setting Meeting (Before You Decide)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is the most important meeting you'll have. And most teams skip it.
            </p>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 space-y-6 my-8">
              <div>
                <h3 className="text-xl font-bold text-blue-300 mb-3">The Goal:</h3>
                <p className="text-gray-300 text-sm">
                  Get everyone (engineering, sales, marketing, leadership) in the same room and agree on: What problem are we solving? What constraints do we have? What's success look like?
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-bold text-blue-300 mb-3">The Structure (90 minutes):</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div>
                    <p className="font-semibold text-gray-200">30 min: Context Setting</p>
                    <p className="text-gray-400">You present: market trends, customer feedback, competitive landscape, internal data. Nobody talks. Just listen.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">20 min: Questions of Clarification</p>
                    <p className="text-gray-400">Stakeholders ask clarifying questions ONLY. "How many customers asked for this?" not "I think we should do X."</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">20 min: Concern Mapping</p>
                    <p className="text-gray-400">Every stakeholder shares their top concern. Not a debate. Just: "Here's what worries me about this direction."</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">20 min: Next Steps</p>
                    <p className="text-gray-400">"Here's how we'll address each concern. Here's when we'll decide. Here's how we'll keep everyone informed."</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              This meeting moves you from "everyone talking past each other" to "everyone working from the same facts." Game changer.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Framework 2: The Constraints List (What We Can't Do)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most strategy discussions focus on what to do. The best teams focus on what NOT to do.
            </p>

            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-300 mb-3">📋 Example Constraints List:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• We can't raise prices (competitive constraint)</li>
                <li>• We can't hire more engineers in Q2 (budget constraint)</li>
                <li>• We can't build on new tech stack (infrastructure constraint)</li>
                <li>• We can't ignore top 10 customers' feedback (revenue constraint)</li>
                <li>• We can't kill legacy product (support/revenue constraint)</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              When everyone sees the constraints, magical things happen:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• Sales stops asking for features that require 6 new engineers</li>
              <li>• Engineering stops suggesting rewrites that violate budget constraints</li>
              <li>• Marketing stops planning campaigns for products that don't exist</li>
            </ul>

            <p className="text-gray-300 leading-relaxed">
              Everyone's operating in the same reality. Debates become shorter. Decisions become faster.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Framework 3: The Decision Framework (How We'll Decide)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The best teams agree in advance on how they'll make decisions. Not what the decision will be—how they'll make it.
            </p>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 space-y-6 my-8">
              <div>
                <h3 className="text-xl font-bold text-blue-300 mb-3">Decision Framework Examples:</h3>
                <div className="space-y-3">
                  <div className="bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-white mb-2">At Google:</p>
                    <p className="text-gray-300 text-sm">Data + Customer interviews + Eng feasibility = Decision. If 2 out of 3 vote for it, we move forward.</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-white mb-2">At Meta:</p>
                    <p className="text-gray-300 text-sm">Growth metrics > everything. We rank all options by projected impact on [northstar]. Highest wins.</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded">
                    <p className="font-semibold text-white mb-2">At Microsoft:</p>
                    <p className="text-gray-300 text-sm">Enterprise customer needs > internal preferences. If 3+ enterprise customers ask, we do it.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              When everyone knows the decision framework in advance, you avoid 90% of post-decision complaints. "I don't like the decision, but I understand how we made it" is good enough.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Framework 4: The Communication Plan (Keeping Everyone Informed)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Misalignment often happens because stakeholders don't know what's happening—so they assume the worst.
            </p>

            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-6 my-6">
              <p className="font-semibold text-blue-300 mb-3">📢 What Every Stakeholder Needs to Know:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <strong>Weekly:</strong> What shipped? What's blocked? What needs escalation?</li>
                <li>• <strong>Monthly:</strong> Are we hitting our northstar? What's the story we're telling investors?</li>
                <li>• <strong>Quarterly:</strong> Are we still aligned on strategy? Do we need to adjust?</li>
                <li>• <strong>On-demand:</strong> When something changes, communicate immediately (not in a 3-week-later status report)</li>
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Different stakeholders need different information. Sales needs to know how new features help close deals. Engineering needs to know how new priorities impact technical roadmap. Marketing needs to know timing so they can plan campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Framework 5: The Escalation Protocol (What If Someone Disagrees?)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sometimes, after all the meetings and alignment, a stakeholder still disagrees. That's fine. Here's how to handle it.
            </p>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 space-y-4 my-8">
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-white mb-2">Step 1: Assume Good Intent</p>
                  <p className="text-gray-300 text-sm">They're not trying to sabotage. They have information or constraints you might not have. Ask: "What am I missing?"</p>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <p className="font-semibold text-white mb-2">Step 2: Revisit the Decision Framework</p>
                  <p className="text-gray-300 text-sm">Apply the decision framework. If the framework still leads to the same decision, you're done. The disagreeing party may not like it, but they understand it.</p>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <p className="font-semibold text-white mb-2">Step 3: Escalate If Needed</p>
                  <p className="text-gray-300 text-sm">If the disagreement is material (e.g., "We'll lose a major customer"), escalate to CEO/leadership. But frame it as: "Here's my position. Here's why the team decided differently. Here's what I think we should do."</p>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <p className="font-semibold text-white mb-2">Step 4: Commit (Disagree and Commit)</p>
                  <p className="text-gray-300 text-sm">Once leadership decides, everyone commits. You don't need to agree. But you do need to execute. This is the "disagree and commit" principle.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Putting It All Together: A Real Example</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Let me show you how these 5 frameworks work in real life.
            </p>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 space-y-6 my-8">
              <p className="text-blue-300 font-semibold mb-2">Scenario: You're a PM at a 50-person SaaS company. Engineering capacity for Q1 = 10 weeks.</p>

              <div>
                <p className="font-semibold text-white mb-2">Marketing wants: New feature for lead gen</p>
                <p className="text-gray-300 text-sm">Sales wants: Better onboarding to reduce churn</p>
                <p className="text-gray-300 text-sm">CEO wants: 50% growth in ARR</p>
                <p className="text-gray-300 text-sm">Engineering wants: Fix technical debt (5 weeks)</p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <p className="font-semibold text-white mb-3">How You'd Handle This:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>1. <strong>Context-Setting Meeting:</strong> Bring everyone together. Share data on churn rate (40%), new customer acquisition cost ($500), competitor activity, etc. Everyone now knows the landscape.</li>
                  <li>2. <strong>Constraints List:</strong> "We have 10 weeks of engineering. Technical debt is a blocker. We can't hire more people in Q1." Everyone now knows the boundaries.</li>
                  <li>3. <strong>Decision Framework:</strong> "We'll rank options by: (1) impact on ARR, (2) engineering feasibility, (3) customer requests. Highest score wins."</li>
                  <li>4. <strong>Apply Framework:</strong> Churn reduction (via better onboarding) scores highest. It saves $2K/month in lost ARR. Lead gen feature scores lower (uncertain ROI). Technical debt is necessary but doesn't directly drive ARR.</li>
                  <li>5. <strong>Communicate:</strong> Marketing is disappointed about the lead gen feature. But they understand the math. You commit to revisiting lead gen in Q2 when you have more capacity.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-800">
            <div className="bg-gray-900 rounded-lg p-8">
              <p className="text-gray-300 mb-4">
                <strong className="text-white">Building alignment is hard. But it's worth it.</strong> Teams with strong stakeholder alignment ship 3x faster, have better employee retention, and make better decisions.
              </p>
              <p className="text-gray-400 text-sm">
                I help teams build alignment frameworks, run decision-making processes, and create communication plans that actually work. <a href="/" className="text-blue-400 hover:text-blue-300">Let's work together →</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
