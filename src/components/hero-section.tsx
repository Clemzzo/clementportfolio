'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const marqueeItems = [
  'Web App Development',
  'Mobile Apps',
  'Backend & APIs',
  'Branding & Identity',
  'UI/UX',
  'MVP to Production',
]

const stats = [
  { value: '95%', label: 'Success Rate' },
  { value: '10+', label: 'Total Projects' },
  { value: '10 weeks', label: 'Avg. Delivery' },
  { value: '3+ yrs', label: 'Building' },
]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5 },
})

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-x-clip bg-ink-0 pt-24 sm:pt-28 md:pt-36 pb-10">
      {/* Backdrop: graph paper faded out at the edges, plus a warm bloom top-right */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="absolute -top-24 right-0 h-64 w-64 sm:-right-8 sm:h-96 sm:w-96 md:-right-16 md:h-[520px] md:w-[520px] glow-brand blur-2xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-y-12 items-center">

          {/* Left: copy */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-ink-400/70 bg-ink-100/60 px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-ink-800 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 animate-pulse-ring" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for freelance and full time
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.15)}
              className="mt-4 font-semibold text-ink-950 leading-[1.02] tracking-[-0.035em] text-balance text-[8.8vw] sm:text-[7vw] md:text-[5.6vw] lg:text-[3.4vw] xl:text-[3.2rem]"
            >
              Hi, I&apos;m Clement. I Build Digital Products That Turn Ideas Into{' '}
              <span className="accent-gradient">Real Businesses.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 max-w-xl text-ink-800 text-[15px] sm:text-base md:text-[17px] leading-[1.65] text-balance"
            >
              I&rsquo;m a Senior Full-Stack Developer helping founders, startups, and businesses build
              scalable web &amp; mobile apps, SaaS, AI-powered products, and custom business systems
              &mdash; from MVP to production. I focus on clean architecture, great UX, performance, and
              building products ready for real users and growth.
            </motion.p>

            <motion.div {...fadeUp(0.25)} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="btn-sheen group/btn inline-flex items-center gap-2.5 rounded-full bg-brand-500 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-0 hover:bg-brand-400 transition-colors"
              >
                <span>Start a project</span>
                <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 rounded-full border border-ink-400 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 hover:border-brand-500/60 hover:text-brand-400 transition-colors"
              >
                <span>View work</span>
              </a>

              <a
                href="/Clement_Kingsley_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-700 hover:text-ink-950 transition-colors"
              >
                <span className="link-underline">Résumé</span>
                <span className="text-ink-600">↗</span>
              </a>
            </motion.div>

            {/* Trust indicator */}
            <motion.div {...fadeUp(0.3)} className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
                {['🇺🇸', '🇬🇧', '🇨🇦', '🇳🇬'].map((flag, i) => (
                  <span
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-ink-0 bg-ink-200 flex items-center justify-center text-2xl shadow-sm"
                    aria-hidden="true"
                  >
                    {flag}
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <div className="text-[13px] font-medium text-ink-800">
                  Trusted by founders &amp; startups
                </div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stat strip — hairline dividers come from the gap showing the parent through */}
            <motion.dl
              {...fadeUp(0.35)}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-ink-400/50 bg-ink-400/30"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="bg-ink-0 px-4 py-5">
                  <dt className="text-2xl md:text-3xl font-semibold text-ink-950 tracking-tight">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-600">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="col-span-12 lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end mb-2 lg:mb-0"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[420px] mx-auto lg:mx-0">
              <div aria-hidden className="absolute -inset-4 sm:-inset-6 glow-brand blur-2xl opacity-90 pointer-events-none" />

              <div className="relative rounded-[22px] sm:rounded-[26px] p-0.5 overflow-hidden">
                <div aria-hidden className="absolute inset-0 rounded-[22px] sm:rounded-[26px] ring-shimmer opacity-70 scale-105 sm:scale-110" />
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-3xl border border-ink-400/60 bg-ink-100">
                  <Image
                    src="/clemzzo.png"
                    alt="Clement Kingsley"
                    width={768}
                    height={1024}
                    priority
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 420px"
                    className="h-auto w-full object-cover"
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink-0/70 to-transparent" />
                </div>
              </div>

              <div className="mt-4 sm:mt-0 sm:absolute sm:-left-4 md:-left-6 sm:bottom-8 sm:animate-float rounded-2xl border border-ink-400/70 bg-ink-100/90 px-4 py-3 backdrop-blur shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] w-full sm:w-auto text-center sm:text-left">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">
                  Currently 
                </p>
                <p className="mt-0.5 text-sm font-medium text-ink-950">Full Stack Dev @ Power Prompts Lab</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I do — decorative scroller; the same services are listed in full in About.
            Negative margin bleeds it to the container edge, past the horizontal padding. */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
          className="marquee-shell -mx-6 mt-16 md:mt-24 border-y border-ink-400/60 py-5"
        >
          <div className="marquee-track text-ink-700 text-lg sm:text-xl md:text-3xl font-medium">
            {Array.from({ length: 2 }).map((_, half) => (
              <div key={half} className="flex items-center gap-8 pr-8 shrink-0">
                {marqueeItems.concat(marqueeItems).map((item, i) => (
                  <span key={i} className="flex items-center gap-8">
                    <span className="text-ink-800">{item}</span>
                    <span className="text-brand-400">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
