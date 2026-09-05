'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Download, Folder, Star, TrendingUp, Zap } from 'lucide-react'

const marqueeItems = [
  'Web App Development',
  'Mobile Apps',
  'Backend & APIs',
  'Branding & Identity',
  'UI/UX',
  'MVP to Production',
]

type StatCardProps = {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  highlight?: boolean
}

function StatCard({ icon: Icon, label, value, highlight = false }: StatCardProps) {
  return (
    <div
      className={`relative p-5 md:p-6 rounded-2xl border transition-colors ${highlight
        ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/20'
        : 'bg-ink-100 border-ink-400 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/10'
        }`}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center mb-8 ${highlight ? 'bg-white/20' : 'bg-blue-500/10'
          }`}
      >
        <Icon className={`w-[18px] h-[18px] ${highlight ? 'text-white' : 'text-blue-400'}`} />
      </div>
      <div
        className={`text-[11px] font-medium uppercase tracking-wider mb-1.5 ${highlight ? 'text-white/80' : 'text-ink-600'
          }`}
      >
        {label}
      </div>
      <div
        className={`text-2xl md:text-3xl font-bold tracking-tight leading-none ${highlight ? 'text-white' : 'text-ink-950'
          }`}
      >
        {value}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-ink-0 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-7">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-ink-400 bg-ink-100 shadow-sm">
                <Image
                  src="/clement.png"
                  alt="Clement Kingsley"
                  fill
                  priority
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-4xl font-bold text-ink-950 tracking-tight leading-[1.1] mb-6"
            >
              Hi, I&apos;m Clement.
              <br />
             I Build Digital Products That Turn Ideas Into Real Businesses.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-lg text-ink-800 leading-relaxed mb-8 max-w-xl"
            >
              I’m a Senior Full-Stack Developer helping founders, startups, and businesses build scalable web & mobile apps, SaaS, 
              AI-powered products, and custom business systems—from MVP to production. 
              I focus on clean architecture, great UX, performance, and building products ready for real users and growth.
            </motion.p>

            {/* Trust indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-5 mb-10"
            >
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
                  Trusted by founders & startups
                </div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full gap-2 h-12 px-6"
                asChild
              >
                <a href="#contact">
                  Let&apos;s build your product
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full gap-2 h-12 px-6 border-ink-500 text-ink-800 hover:bg-blue-500/10 hover:border-blue-500/60 hover:text-blue-300"
                asChild
              >
                <a href="#projects">View Work</a>
              </Button>
              {/* Tertiary action — an underlined link, so it sits below the two
                  buttons in the visual hierarchy rather than competing with them */}
              <a
                href="/Clement_Kingsley_Resume.pdf"
                download
                className="inline-flex items-center gap-2 h-12 px-3 text-sm font-medium text-ink-700 hover:text-blue-400 transition-colors"
              >
                <span className="link-underline">Resume</span>
                <Download className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <StatCard icon={TrendingUp} label="Success Rate" value="95%" />
              <StatCard icon={Folder} label="Total Projects" value="10+" />
              <StatCard icon={Zap} label="Avg. Delivery Time" value="10 weeks" />
              <StatCard icon={Award} label="Experience" value="3+ yrs Building" highlight />
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
          className="marquee-shell -mx-6 mt-12 md:mt-16 border-y border-ink-400/60 py-5"
        >
          <div className="marquee-track text-ink-700 text-lg sm:text-xl md:text-3xl font-medium">
            {Array.from({ length: 2 }).map((_, half) => (
              <div key={half} className="flex items-center gap-8 pr-8 shrink-0">
                {marqueeItems.concat(marqueeItems).map((item, i) => (
                  <span key={i} className="flex items-center gap-8">
                    <span className="text-ink-800">{item}</span>
                    <span className="text-blue-400">✦</span>
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
