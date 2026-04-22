'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Download, Folder, Star, TrendingUp, Zap } from 'lucide-react'

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
        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
        }`}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center mb-8 ${highlight ? 'bg-white/20' : 'bg-blue-50'
          }`}
      >
        <Icon className={`w-[18px] h-[18px] ${highlight ? 'text-white' : 'text-blue-600'}`} />
      </div>
      <div
        className={`text-[11px] font-medium uppercase tracking-wider mb-1.5 ${highlight ? 'text-white/80' : 'text-slate-500'
          }`}
      >
        {label}
      </div>
      <div
        className={`text-2xl md:text-3xl font-bold tracking-tight leading-none ${highlight ? 'text-white' : 'text-slate-900'
          }`}
      >
        {value}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white pt-16">
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
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
                <Image
                  src="/clement.png"
                  alt="Clement Kingsley"
                  fill
                  priority
                  sizes="56px"
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Hi, I&apos;m Clement.
              <br />
              Software Developer
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-xl"
            >
              I'm a Full Stack Software Developer specializing in building fast, scalable web and mobile products. I help founders, startups, and businesses turn ideas into polished digital experiences — from concept to deployment.
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
                    className="w-12 h-12 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-2xl shadow-sm"
                    aria-hidden="true"
                  >
                    {flag}
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <div className="text-[13px] font-medium text-slate-700">
                  Trusted by founders & startups worldwide
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
                  Let&apos;s talk now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full gap-2 h-12 px-6 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                asChild
              >
                <a href="/Clement_Kingsley_Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
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
              <StatCard icon={Zap} label="Avg. Delivery Time" value="7 weeks" />
              <StatCard icon={Award} label="Experience" value="3 yrs 8 mo" highlight />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
