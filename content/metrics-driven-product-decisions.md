# The Metrics Framework That Changed How We Make Product Decisions

**Reading time:** 7 minutes | **Best for:** Product managers, executives, cross-functional leaders

Your product team shipped 15 features last quarter. Only 3 moved the needle.

This isn't a failure of effort—it's a failure of measurement.

Most teams can't distinguish between "feature that looks good in demos" and "feature that actually drives value." Without this distinction, you end up shipping feel-good features that waste engineering cycles and dilute your product.

## The Real Problem: Vanity Metrics vs. True Impact

Let's say your user retention dropped from 60% to 58%. Your CEO notices. Engineering proposes a feature: "Improved onboarding flow."

Seems logical. Onboarding affects retention, right?

**But here's what you don't know:**
- 73% of churn happens in months 2-3, not month 1 (onboarding is fine)
- 89% of churned users never used Feature X (which you've been optimizing for all quarter)
- Your power users—5% of the base—drive 62% of revenue, and they're actually satisfied

So you build the onboarding. It ships. Nothing changes.

### Why This Happens

Teams optimize for **visibility**, not **impact**:

1. **Ease of measurement.** "Users clicked through 3 steps" is easy to track. "Did this increase lifetime value?" requires thinking.
2. **Stakeholder pressure.** The board wants to hear about "growth initiatives." Boring metrics don't excite.
3. **Gut feel over data.** "I think our onboarding is confusing" feels true, so it becomes true.
4. **Lack of framework.** Without a system, you default to politics—whoever yells loudest gets resources.

## The Framework: Three Layers of Metrics

We use this with every client. It works because it forces discipline.

### Layer 1: North Star (1 metric)

Your north star is the **one metric that represents product value.**

For a productivity tool: Daily Active Users using the core feature  
For an e-commerce platform: Revenue per user  
For a community: Engagement score (posts + replies + reactions)

**Not:**
- Monthly active users (too broad)
- Feature adoption (too narrow)
- Customer satisfaction (too vague)

**Why:** When everything matters, nothing matters. One north star gives you a focal point. Every feature should theoretically move this north star.

**At TechFlow (fintech):** North star = "Fraud detection accuracy rate" (they measured success as fewer false positives)

### Layer 2: Outcome Metrics (3-5 metrics)

These are the intermediate steps to your north star. They're the mechanisms by which features drive value.

For a productivity tool:
- Time to first task completion (activation)
- Average tasks completed per user per day (engagement)
- 30-day retention rate (retention)
- NPS from power users (loyalty)

For an e-commerce platform:
- Average order value (transaction quality)
- Cart abandonment rate (conversion)
- Repeat purchase rate (retention)
- Customer acquisition cost (efficiency)

**The key insight:** These metrics explain *how* features connect to your north star. If you ship a feature that doesn't move at least one outcome metric, it won't move the north star either.

**At TechFlow:** Outcome metrics included:
- False positive rate by transaction type
- Mean time to review alert (system responsiveness)
- User confidence score (how trusted the system felt)

### Layer 3: Input Metrics (the leading indicators)

These are what you directly control. They're *not* success metrics—they're effort metrics.

- Features shipped
- Engineering velocity
- Testing coverage
- Documentation quality

**Why distinguish?** Because shipping 20 features is not success if none of them move the needle. But if you only track north star (a lagging indicator), you don't course-correct until it's too late.

Input metrics let you see problems **before** they become north star problems.

## How to Use This in Practice

### Week 1: Define Your Framework

Gather your leadership team (CEO, CTO, VP Sales, VP Customer Success) and answer these three questions:

1. **What is the one metric that represents product success?** (North Star)
2. **What are the 3-5 mechanisms by which features drive this value?** (Outcome Metrics)
3. **What are we directly controlling to build toward these?** (Input Metrics)

This should take 4 hours. If it takes longer, you're overthinking it.

### Week 2-3: Map Your Current Features

List every feature you shipped in the last 6 months. For each one, ask:
- Which outcome metric did this move?
- By how much?
- Is it sustainable or a one-time bump?

You'll find that 60-70% of your features had no measurable impact on outcome metrics.

This is where the honesty happens. Document it anyway.

### Week 4+: Decision Framework

Every feature proposal now answers:
- Which outcome metric does this move?
- By how much (estimate)?
- What's our confidence level?
- How does this ladder up to the north star?

You'll get "I don't know" on many proposals. That's the point. It means you need more data before deciding.

## Real Example: StrategyPM's Q2 Decision

We helped a Series B SaaS team use this framework. Here's what happened:

**Incoming proposals for Q2:**
1. "Improved dashboard design" (Sales: "customers love dashboards")
2. "Advanced reporting API" (Customer Success: "power users keep asking for this")
3. "In-app notification system" (Product: "will increase engagement")
4. "Onboarding wizard overhaul" (Support: "new customers are confused")

**Without the framework:** All four would have been debated in meetings. Politics would win.

**With the framework:**

- **North Star:** Monthly recurring revenue per customer
- **Outcome Metrics:** Activation rate, feature adoption, support tickets per user, 12-month retention
- **Mapping:**
  - Dashboard design → No impact on any outcome metric (didn't ship)
  - Advanced reporting API → Feature adoption, 12-month retention (shipped, has data hypothesis)
  - In-app notifications → Activation rate, feature adoption (shipped with measurement)
  - Onboarding wizard → Activation rate (shipped immediately, highest ROI)

**Result:** Instead of spreading resources across 4 mediocre features, they doubled down on onboarding and the API. Activation rate jumped from 24% to 31%, 12-month retention moved from 68% to 73%, and the API became their fastest-growing revenue driver.

The dashboard redesign? It shipped 6 months later when it actually solved a measured problem.

## How to Know You've Got It Right

You're using the framework correctly when:

✅ **Leadership can explain in 30 seconds** why a feature matters (it connects to the outcome metric, which connects to the north star)

✅ **You kill features without a referendum.** If it doesn't move an outcome metric, it doesn't ship.

✅ **Your team debates metrics, not opinions.** Conversations sound like "this should move activation rate by 5%" instead of "customers will love this"

✅ **You can predict impact before shipping.** Not perfectly, but with 60% accuracy

✅ **You're ruthless about tradeoffs.** Resources go to features with highest impact per engineering hour

❌ **You're still shipping features because "the CEO wants it"**

❌ **Your north star doesn't move, but you're excited about feature adoption**

❌ **You measure activity (clicks, logins) instead of outcomes (retention, revenue)**

❌ **Each quarter is a surprise** (should be predictable by mid-quarter)

## The Template We Use

Copy this for your team:

```
FRAMEWORK DEFINITION
====================

North Star: [One metric that represents product value]

Outcome Metrics:
- [Mechanism 1: describes how users experience value]
- [Mechanism 2: describes how users experience value]
- [Mechanism 3: describes how users experience value]

Input Metrics:
- [What we control directly]
- [What we control directly]

FEATURE EVALUATION
==================

Feature: [Name]
Which outcome metric(s) does this move? 
Estimated impact: 
Confidence level: High / Medium / Low
North star connection: [explain the chain]
```

## Why This Matters Right Now

AI is changing what "product" means. Features are getting faster and easier to build. Without a metrics framework, you'll ship 100 things and 95 of them won't matter.

Teams with a metrics framework:
- Compress product cycles from 4 weeks to 1 week (clearer decisions)
- Reduce feature bloat by 60% (only high-impact work)
- Increase engineering satisfaction (they're building things that matter)
- Improve revenue predictability (outcomes are leading indicators)

The best product teams aren't the ones shipping the most. They're the ones shipping the *right* things.

---

## Get Started This Week

You don't need permission. You don't need perfect data. Pick three people from your leadership team and spend 2 hours defining your north star and three outcome metrics.

Everything else follows from there.

**Ready to systematize your product decisions?** We help teams build this framework and make it stick. Every framework we've implemented has increased measurable product impact by 40-60% in the first quarter.

[→ Schedule a 30-minute conversation](/contact)

---

**Next read:** [Stakeholder Alignment: The Real Reason Your Roadmap Fails](/content/stakeholder-alignment)

**Related resources:**
- [Case Study: How TechFlow Fixed Their Roadmap (40% Revenue Lift)](/content/case-study-techflow)
- [Product Strategy Template (Downloadable)](/resources/strategy-template)
