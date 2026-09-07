'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { contactInfo } from '@/lib/contact'
import { fadeInUp } from '@/lib/motion'

const whatsappHref = `https://wa.me/${contactInfo.phoneTel.replace(/\D/g, '')}`

export default function CtaSection() {
  return (
    <section className="pb-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...fadeInUp}
          className="group relative overflow-hidden rounded-3xl border border-ink-400/80 bg-ink-100 px-6 py-12 md:py-16 text-center transition-colors duration-300 hover:border-brand-500/40"
        >
          {/* Accent wash that warms the whole panel on hover */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-brand-500/6 to-white/1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-32 h-64 opacity-60"
            style={{
              background:
                'radial-gradient(50% 100% at 50% 100%, rgba(235,120,12,0.16) 0%, transparent 100%)',
            }}
          />

          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-400">
              Let&apos;s build something
            </p>

            <h2 className="mx-auto mt-6 max-w-6xl text-4xl md:text-5xl font-semibold tracking-tight text-ink-950 leading-[1.05]">
              Have a product in mind? I can help you ship it.
            </h2>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                className="btn-sheen group/btn inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-white hover:bg-brand-500 transition-colors"
              >
                Start a project
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-ink-400 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-900 hover:border-brand-500/60 hover:text-brand-400 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
