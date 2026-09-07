'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'

type Role = {
  role: string
  company: string
  country: string
  kind: string
  period: string
  note: string
}

const roles: Role[] = [
  {
    role: 'Mobile App Developer',
    company: 'Foody Express',
    country: 'Nigeria',
    kind: 'Freelance',
    period: 'Nov 2024 — Feb 2025',
    note: 'Built the customer app for iOS and Android — real-time order tracking, native animations, and Paystack checkout — plus the analytics dashboard restaurant partners run every shift.',
  },
  {
    role: 'Solo Full Stack Developer',
    company: 'ExpenseAI',
    country: 'Nigeria',
    kind: 'Freelance',
    period: 'May 2025 — Oct 2025',
    note: 'Shipped an AI expense tracker end to end: receipt scanning, automatic categorisation, spending analytics, Firebase auth, and Paystack subscription billing.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Perpetual Wealth',
    country: 'United States',
    kind: 'Freelance (Contract)',
    period: 'Jan 2026 — Apr 2026',
    note: 'Delivered v1 of an AI wealth-management platform — a concierge agent, personalised playbooks, an encrypted document vault, and the admin dashboard behind it.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Power Prompts Lab',
    country: 'Columbia',
    kind: 'Freelance · Full-time',
    period: 'Jun 2026 — Present',
    note: 'Building a mobile-first subscription learning platform that teaches practical AI skills to adults aged 55+, on Next.js 16, Clerk, Neon, Drizzle, and Stripe.',
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-ink-0">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12 md:mb-16 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-400">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-950 mt-3 tracking-tight max-w-3xl mx-auto text-balance">
            Three years, four products
            <span className="font-instrument italic font-normal text-brand-400"> still shipping.</span>
          </h2>
        </motion.div>

        <ol className="space-y-3">
          {roles.map((item, index) => (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-12 gap-x-6 gap-y-2 items-baseline rounded-2xl border border-ink-400 bg-ink-100 p-6 md:p-7 hover:border-brand-500/60 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-200"
            >
              <div className="col-span-12 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-400">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="col-span-12 md:col-span-4">
                <h3 className="text-xl md:text-2xl font-semibold text-ink-950 tracking-tight">
                  {item.role}
                </h3>
                <p className="mt-1 text-ink-700 text-sm">{item.company}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-600">
                  {item.country}
                </p>
              </div>

              <div className="col-span-12 md:col-span-5">
                <p className="text-ink-700 text-sm leading-relaxed">{item.note}</p>
              </div>

              <div className="col-span-12 md:col-span-2 md:text-right font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700">
                <div>{item.period}</div>
                <div className="text-ink-600 mt-0.5">{item.kind}</div>
              </div>
            </motion.li>
          ))}
        </ol>

      </div>
    </section>
  )
}
