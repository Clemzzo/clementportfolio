'use client'

import { motion } from 'framer-motion'
import { Award, Coffee, Users, Code, Sparkles, Zap, Globe } from 'lucide-react'

const stats = [
  { icon: Code, label: 'Lines of Code', value: '50K+', color: 'text-emerald-400' },
  { icon: Award, label: 'Experience', value: '3+ Yrs', color: 'text-blue-400' },
  { icon: Users, label: 'Collaborations', value: '15+', color: 'text-purple-400' },
  { icon: Coffee, label: 'Caffeine', value: '100% Opt', color: 'text-amber-400' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Header & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Story Behind The <span className="text-primary italic text-4xl md:text-6xl">Code</span>
            </h2>
          </motion.div>

          {/* Main Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>

            <div className="space-y-6 relative z-10">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I&apos;m a <span className="text-white font-semibold">Full Stack Developer</span> with a passion for building software that feels as good as it looks. With over 3 years of experience, I&apos;ve specialized in translating complex business requirements into seamless digital experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My approach combines <span className="text-primary">technical precision</span> with <span className="text-primary">creative problem-solving</span>. Whether it's a high-performance web application or a cross-platform mobile app, I focus on clean architecture and user-centric design.
              </p>

              <div className="pt-6 flex flex-wrap gap-3">
                {['Creative', 'Strategic', 'Performant', 'Scalable'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl glass border-white/5 text-xs font-semibold text-gray-300 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Stats */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl p-6 flex items-center gap-4 hover:scale-[1.03]"
              >
                <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
          >
            {[
              { icon: Zap, title: 'Speed', desc: 'Optimized for performance and fast loading times.' },
              { icon: Globe, title: 'Modern', desc: 'Using the latest tech stacks like Next.js 16 and React.' },
              { icon: Zap, title: 'Responsive', desc: 'Flawless experience across all device sizes.' },
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border-white/5 hover:border-primary/20">
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
