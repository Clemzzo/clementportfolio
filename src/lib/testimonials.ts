export type Testimonial = {
  name: string
  role: string
  company: string
  initials: string
  project: string
  rating: number
  short: string
  full: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Tolu Adeyemi',
    role: 'Founder & CEO',
    company: 'Foody Express',
    initials: 'TA',
    project: 'Foody Express Mobile App',
    rating: 5,
    short:
      'Designed and developed Foody Express on iOS and Android with real-time order tracking, buttery smooth animations, and a Paystack checkout that converts on the first tap. The kind of engineer you clone if you could.',
    full:
      "We'd been stuck on a React Native prototype for months — sluggish screens, janky transitions, and a checkout our beta testers refused to use. In under eight weeks Foody Express was built: real-time order tracking with status timelines,with animations that genuinely feel native, and a Paystack checkout handling cards, transfers, and split payments without a single failed transaction in beta. Our restaurant partners even got an analytics dashboard they actually open every shift — order volume, revenue, and peak hours, all at a glance. What I appreciated most was the communication: every tricky decision — offline queues, push delivery, session handling — came with a written RFC and two or three alternatives.",
  },
  {
    name: 'Kreg Henry',
    role: 'Founder & CTO',
    company: 'ExpenseAI',
    initials: 'KH',
    project: 'ExpenseAI Launch',
    rating: 5,
    short:
      'Shipped ExpenseAI end-to-end in under eight weeks — AI receipt scanning, spend analytics, Paystack billing, and a dashboard users actually open daily.',
    full:
      "We'd been scoping an AI expense tracker for months — receipt OCR, automatic categorization, AI-driven insights, and Paystack subscriptions all had to land together or not at all. In under eight weeks ExpenseAI was in production: receipt scanning that pulls the right line items on the first try, spending analysis that surfaces anomalies and recurring drains before the user notices them, and interactive dashboards that turned monthly reviews into a habit instead of a chore. Firebase auth handled cleanly, Paystack billing wired end-to-end, and the rollout was paranoid in the best way — instrumented every flow, staged onboarding, not a single dropped subscription in the switch. Surgical work.",
  },
  {
    name: 'Donny Gamble',
    role: 'Founder',
    company: 'Perpetual Wealth',
    initials: 'DG',
    project: 'Advanced Intelligent Wealth Management Platform',
    rating: 5,
    short:
      "Shipped our first advanced intelligent AI agent and tools for wealth optimization with user personalized dashboard and admin dashboard in seven weeks that our team had been circling for months. Product sense you can't teach.",
    full:
      "Building an AI-driven wealth platform for high-income earners had been on our roadmap for months — every estimate came back in quarters, and the complexity of tax, estate, and retirement tooling kept scaring engineers off. In seven weeks we had v1 in production: Solomon, the concierge agent that actually understands our users' financial lives, alongside personalized playbooks, an encrypted document vault, and an admin dashboard our ops team runs on daily. What makes this rare is the product sense. Decisions weren't just 'what's easy to build,' they were 'what does a high-income earner actually need at this step.' Stripe billing, Cloudflare at the edge, Sentry, Resend — the whole stack landed production-grade from day one. That's instinct you can't teach.",
  },
]
