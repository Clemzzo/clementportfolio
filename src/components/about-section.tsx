'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Server, Palette } from 'lucide-react'
import { fadeInUp } from '@/lib/motion'
import { projects } from '@/lib/projects'
import SectionHeader from '@/components/section-header'

const facts = [
  { k: 'Experience', v: '3+ years' },
  { k: 'Projects shipped', v: `${projects.length}` },
  { k: 'Client satisfaction', v: '100%' },
  { k: 'Avg. delivery', v: '10 weeks' },
]

const services = [
  {
    icon: Monitor,
    title: 'Web App Development',
    description: 'High-performance, scalable web applications designed around your business goals—from landing pages and MVPs to complex dashboards and full-scale platforms.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST APIs'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Modern, cross-platform mobile applications built for iOS and Android with smooth experiences, reusable components, and scalable architecture.',
    tags: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'REST APIs'],
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Secure and scalable backend systems that power reliable applications, APIs, authentication, data management, integrations, and business logic.',
    tags: ['Node.js', 'Express', 'REST APIs', 'Webhooks', 'Drizzle', 'Supabase', 'Neon', 'Convex', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Cohesive brand systems that make a product feel considered—logo, typography, colour, and the interface components that carry that identity across every screen.',
    tags: ['Figma', 'Design Systems', 'Brand Guidelines', 'UI Kits'],
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          id="about"
          label="About"
          title={
            <>
              The developer behind
              <span className="font-instrument italic font-normal text-brand-400"> the product.</span>
            </>
          }
        />

        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-x-6 gap-y-12">

          {/* Bio + fact sheet */}
          <motion.div {...fadeInUp} className="col-span-12 lg:col-span-7">
            <div className="space-y-5 text-ink-800 text-[15px] sm:text-base md:text-lg leading-[1.65] text-balance">
              <p>
                I&apos;m a <span className="text-ink-950 font-medium">Senior Full Stack Software Developer</span> with 3+ years of experience building web and mobile products for founders, startups, and growing businesses.
              </p>
              <p>
                I take ownership of the entire product journey—from system architecture, backend and API development to responsive interfaces, integrations, testing, and deployment. My goal is simple: build software that is not only functional, but fast, scalable, maintainable, and ready for real users.
              </p>
              <p>
                I work closely with clients to understand their goals, turn ideas into practical solutions, and ship products with the right balance of technical quality, great user experience, and business value.
              </p>
              <p>
                Whether you&apos;re starting with an idea, building an MVP, or improving an existing product, I can help take it from concept to production.
              </p>
            </div>

            {/* gap-px over a tinted parent renders the 1px rules between cells */}
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-400/50 bg-ink-400/30">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.k}
                  {...fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  className="bg-ink-0 px-5 py-4"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-600">
                    {fact.k}
                  </dt>
                  <dd className="mt-1 text-[15px] font-medium text-ink-950">{fact.v}</dd>
                </motion.div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-2 mt-8">
              {['Problem Solver', 'Clean Code', 'Product Mindset', 'Scalable Systems'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-ink-200 text-ink-700 text-xs font-semibold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* What I do */}
          <div className="col-span-12 lg:col-span-5 lg:pl-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-600">
              What I do
            </p>

            <div className="mt-5 space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl border border-ink-400 bg-ink-100 p-5 hover:border-brand-500/60 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 font-mono text-[11px] text-brand-400 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <service.icon className="w-4 h-4 text-brand-400 shrink-0" />
                        <h3 className="text-lg font-semibold text-ink-950">{service.title}</h3>
                      </div>

                      <p className="mt-1.5 text-sm text-ink-700 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-medium bg-ink-200 text-ink-600 rounded-full border border-transparent group-hover:border-brand-500/30 group-hover:text-brand-300 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
