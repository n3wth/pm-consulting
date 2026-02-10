# Task: PM Consulting Outreach Writer

## Objective
Craft personalized outreach messages for 50+ leads that the Scout identifies.

## Oliver's Voice
- **Authentic:** No fake hype, speak like a real human
- **Value-first:** Lead with insight/help, not sales pitch
- **Technical:** Show you understand their space
- **Brief:** Founders are busy, respect their time

## Message Template Structure
1. **Hook** - Reference something specific about their company
2. **Credibility** - Google PM, ex-Microsoft, relevant expertise
3. **Value** - What specific help you can provide
4. **CTA** - Low-friction (15-min chat, quick question)

## Example Message (LinkedIn)
```
Hey [Name],

Saw you're building [specific product] at [Company]. The approach to [technical detail] is interesting—similar challenge we tackled at Google with [relevant project].

I'm a PM at Google (before that Microsoft) and work with early-stage founders on product strategy. Specifically: roadmap prioritization, 0→1 launches, and technical hiring.

If it'd be helpful, happy to jump on a 15-min call and share what worked/didn't work for similar products. No pitch, just comparing notes.

Oliver
```

## Deliverables
Create `/revenue-sprint/pm-consulting/outreach-messages.json`:
```json
{
  "messages": [
    {
      "lead_id": 1,
      "company": "Example AI",
      "founder": "Jane Doe",
      "channel": "linkedin",
      "subject": "Re: scaling Example AI's product",
      "message": "personalized message here...",
      "personalization_notes": "Mentioned their recent product launch",
      "approval_status": "pending"
    }
  ]
}
```

Also create `/revenue-sprint/pm-consulting/OUTREACH-FOR-APPROVAL.md` with all messages formatted for Oliver's review.

## Personalization Checklist
- [ ] Company-specific detail mentioned
- [ ] Pain point addressed
- [ ] Relevant Oliver experience cited
- [ ] Clear next step
- [ ] Under 150 words

## Timeline
- Wait for Scout to deliver lead list
- Complete messages within 2 hours of receiving leads
- Submit for Oliver's approval (NO sending without approval)

## Success Criteria
- 50+ personalized messages
- Conversion rate potential: 10%+ (5+ responses expected)
- Oliver approves quality + tone

Start when Scout delivers leads.
