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
    name: 'Priya Raman',
    role: 'VP Engineering',
    company: 'Lattice Systems',
    initials: 'PR',
    project: 'Realtime Sync Engine',
    rating: 5,
    short:
      'Rebuilt our sync layer from scratch and cut reconnect times by 94%. The kind of engineer you clone if you could.',
    full:
      "We hired a dozen contractors before finding the right fit. Within three weeks of starting, our realtime sync layer had been rebuilt from scratch — cleaner architecture, better backpressure handling, and reconnect times down from 2.1s to 120ms. What I appreciated most was the communication: every tricky decision came with a written RFC and two or three alternatives. Our team has adopted that habit permanently. The kind of engineer you clone if you could.",
  },
  {
    name: 'Marcus Okafor',
    role: 'Founder & CTO',
    company: 'Fernway',
    initials: 'MO',
    project: 'Checkout Migration',
    rating: 5,
    short:
      'Migrated our entire checkout off Stripe Elements to a custom flow without a single dropped conversion. Surgical work.',
    full:
      'Migrating payments is the scariest thing you can do as a small company — one bad deploy and your revenue goes to zero. We went from Stripe Elements to a fully custom checkout with saved cards, Apple Pay, and multi-currency, and our conversion rate actually went up 3.2%. The rollout plan was paranoid in the best way: shadow traffic for a week, then a 1% canary, then gradual ramp. Not one dropped transaction in the switch. Surgical work.',
  },
  {
    name: 'Hannah Weiss',
    role: 'Head of Product',
    company: 'Orbital Labs',
    initials: 'HW',
    project: 'Dashboard v3',
    rating: 5,
    short:
      "Shipped a dashboard rewrite in six weeks that our team had been circling for a year. Product sense you can't teach.",
    full:
      "Our v2 dashboard had been on the roadmap for a full year. Every engineer who touched it added two weeks to the estimate. Within six weeks we had v3 in production — faster, cleaner, and with a settings surface our support team actually understands. What makes this rare is the product sense. Decisions weren't just 'what's easy to build,' they were 'what does the user actually need at this step.' That's instinct you can't teach.",
  },
  {
    name: 'Diego Alvarez',
    role: 'Staff Engineer',
    company: 'Meridian Health',
    initials: 'DA',
    project: 'HIPAA Audit Pipeline',
    rating: 5,
    short:
      'Took our audit logs from a liability to an asset. Clear, queryable, compliant — and delivered two weeks early.',
    full:
      "Healthcare audit logging is a minefield — HIPAA, SOC 2, and a dozen customer-specific requirements all pulling in different directions. The pipeline we ended up with is elegant: append-only event stream, per-tenant encryption, queryable from a clean internal API. Delivered two weeks early, with documentation our compliance team actually reads. We've since passed two audits without a single finding tied to logging. Worth every cent.",
  },
]
