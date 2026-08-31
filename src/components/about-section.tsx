'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Server } from 'lucide-react'
import { fadeInUp } from '@/lib/motion'
import { projects } from '@/lib/projects'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: `${projects.length}`, label: 'Projects Shipped' },
  { value: '100%', label: 'Client Satisfaction' },
]

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Pixel-perfect, performant web apps built with React and Next.js. From landing pages to complex dashboards and Admin dashboards.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Cloudflare'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that feel native. Built with React Native and Expo for iOS and Android.',
    tags: ['React Native', 'Expo', 'NativeWind'],
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Scalable server-side systems and REST APIs. Integrated with modern databases and cloud infrastructure.',
    tags: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Webhooks', 'Prisma', 'Drizzle', 'Supabase', 'Neon', 'Convex', 'PostgreSQL', 'Firebase', 'Redis', 'Auth & JWT', 'Stripe', 'Docker'],
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div {...fadeInUp} className="mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">About</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
            The Developer Behind The Product
          </h2>
        </motion.div>

        {/* Bio + Stats */}
        <div className="grid lg:grid-cols-12 gap-6 mb-6">

          {/* Bio */}
          <motion.div
            {...fadeInUp}
            className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 flex flex-col justify-between"
          >
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                I&apos;m a <span className="font-semibold text-slate-900">Senior Full Stack Software Developer</span> with 3+ years of experience building web and mobile products for founders, startups, and growing businesses.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                I take ownership of the entire product journey—from system architecture, backend and API development to responsive interfaces, integrations, testing, and deployment. My goal is simple: build software that is not only functional, but fast, scalable, maintainable, and ready for real users.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                I work closely with clients to understand their goals, turn ideas into practical solutions, and ship products with the right balance of technical quality, great user experience, and business value.
              </p>
               <p className="text-slate-700 leading-relaxed">
                Whether you're starting with an idea, building an MVP, or improving an existing product, I can help take it from concept to production.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-100">
              {['Problem Solver', 'Clean Code', 'Product Mindset', 'Scalable Systems'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 content-start">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                {...fadeInUp}
                transition={{ delay: index * 0.07 }}
                className="bg-blue-600 rounded-2xl p-5 border border-blue-600"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">{stat.value}</div>
                <div className="text-xs md:text-sm text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              {...fadeInUp}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200 group"
            >
              <div className="p-2.5 rounded-xl bg-blue-50 w-fit mb-5 group-hover:bg-blue-100 transition-colors">
                <service.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 text-slate-500 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
