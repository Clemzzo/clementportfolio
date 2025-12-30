'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Hirenest Marketplace',
    category: 'Full Stack Product',
    description: 'A robust marketplace connecting customers with verified pros across Nigeria. Features high-trust vetting systems.',
    image: '/hirenest.png',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL'],
    liveUrl: 'https://hirenest-app-one.vercel.app/',
  },
  {
    id: 2,
    title: 'Foody Express',
    category: 'Mobile Application',
    description: 'Premium food delivery solution with real-time tracking, restaurant analytics, and seamless payment integration.',
    image: '/Cover.png',
    technologies: ['React Native', 'Expo', 'PayStack'],
    liveUrl: 'https://expo.dev/accounts/clemzzy/projects/Foody/builds/b8d47e23-8586-4872-9029-3983b5213903',
  },
  {
    id: 3,
    title: 'ExpenseAI',
    category: 'AI / Fintech',
    description: 'Intelligent expense tracking utilizing AI to analyze spending patterns and provide actionable financial advice.',
    image: '/expense.png',
    technologies: ['Node.js', 'Firebase', 'Shadcn'],
    liveUrl: 'https://traefp8jjmzm.vercel.app/',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Case <span className="text-primary italic">Studies</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-lg">
              A curated selection of digital products built with performance and user experience at the core.
            </p>
          </div>
          <motion.a
            href="https://github.com/clemzzo"
            target="_blank"
            className="flex items-center gap-2 text-white font-semibold group"
          >
            <span>View all on GitHub</span>
            <div className="p-2 glass rounded-full group-hover:bg-primary group-hover:text-black transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col glass-card rounded-3xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Tech Badges on absolute bottom left */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span key={tech} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest glass text-primary rounded-lg border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 flex items-center justify-center gap-2 bg-white text-black font-bold rounded-2xl hover:bg-primary transition-colors text-sm"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/clemzzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center glass rounded-2xl text-white hover:text-primary border-white/5"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
