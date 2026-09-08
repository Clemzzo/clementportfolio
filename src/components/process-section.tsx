'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Rocket, type LucideIcon } from 'lucide-react'
import { fadeInUp } from '@/lib/motion'
import SectionHeader from '@/components/section-header'

type Step = {
  icon: LucideIcon
  title: string
  description: string
  deliverables: string[]
}

const steps: Step[] = [
  {
    icon: Search,
    title: 'Understand the problem',
    description:
      'Before writing code, I take time to understand your idea, your users, your goals, and what success looks like. The goal is to make sure we\'re solving the right problem—not just building another feature.',
    deliverables: ['Discovery call', 'Scope & timeline', 'Success metrics'],
  },
  {
    icon: PenTool,
    title: 'Design & build the solution',
    description:
      'Once we know what we\'re building, I turn the idea into a clear, intuitive product and build it with the right technology. From the frontend to the backend, I focus on clean experiences, solid foundations, and room to grow.',
    deliverables: ['UI/UX design', 'System architecture', 'Weekly demos'],
  },
  {
    icon: Rocket,
    title: 'Ship, measure, and grow revenue',
    description:
      'Getting the product live is only the beginning. I ship early, pay attention to how real users interact with it, and use feedback and data to improve what matters—from engagement and retention to growth and revenue.',
    deliverables: ['Deploy & monitor', 'Analytics', 'Iterate'],
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-ink-0">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          id="process"
          label="My Process"
          title={
            <>
              How I turn ideas into products
              <span className="font-instrument italic font-normal text-brand-400"> that work.</span>
            </>
          }
          description="I keep the process simple: understand the problem, build the right solution, and ship it to real users — from the first conversation to launch, and the revenue that follows."
        />

        <ol className="mt-10 md:mt-14 grid gap-4 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              {...fadeInUp}
              transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-ink-400 bg-ink-100 transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-brand-500/60 hover:shadow-xl hover:shadow-brand-500/10 motion-safe:hover:-translate-y-1.5"
            >
              
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-12 top-full h-4 w-px bg-brand-500/30 transition-colors duration-300 group-hover:bg-brand-500/70 md:left-full md:top-12 md:h-px md:w-6"
                />
              )}

              <span
                aria-hidden
                className="card-bloom pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-400 bg-ink-200 text-brand-400 transition-[border-color,background-color,color,transform] duration-300 group-hover:border-brand-500/50 group-hover:bg-brand-500/10 group-hover:text-brand-300 motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-brand-400 transition-[color,transform] duration-300 group-hover:text-brand-300 motion-safe:group-hover:-translate-y-0.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-5 text-xl md:text-2xl font-semibold text-ink-950 tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-ink-700 leading-relaxed">{step.description}</p>

                {/* mt-auto aligns the chip rows across all three cards */}
                <ul className="flex flex-wrap gap-1.5 mt-auto pt-5 border-t border-ink-400/60 transition-colors duration-300 group-hover:border-brand-500/25">
                  {step.deliverables.map((deliverable, chipIndex) => (
                    <li
                      key={deliverable}
                      // Staggers the chips on hover; Tailwind has no per-index delay variant
                      style={{ transitionDelay: `${chipIndex * 40}ms` }}
                      className="px-2 py-0.5 text-[10px] font-medium bg-ink-200 text-ink-600 rounded-full border border-transparent transition-[border-color,color,background-color,transform] duration-300 group-hover:border-brand-500/30 group-hover:bg-brand-500/5 group-hover:text-brand-300 motion-safe:group-hover:-translate-y-0.5"
                    >
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>

      </div>
    </section>
  )
}
