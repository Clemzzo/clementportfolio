'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { projects, type Project } from '@/lib/projects'
import { GithubIcon } from '@/components/icons'
import { fadeInUp } from '@/lib/motion'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-400/80 bg-ink-100 hover:border-brand-500/60 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300"
    >
      {/* Card-wide link sits under the interactive footer row */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="absolute inset-0 z-0"
      />

      <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden bg-ink-200">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          priority={index === 0}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-0/60 via-transparent to-transparent" />

        <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-800 rounded-full bg-ink-0/50 px-2.5 py-1 backdrop-blur">
          {project.category}
        </div>
        <div className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-800 rounded-full bg-ink-0/50 px-2.5 py-1 backdrop-blur">
          {project.year}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl font-semibold text-ink-950 tracking-tight">
            {project.title}
          </h3>
          <span className="text-ink-600 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-400">
            ↗
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm text-ink-700 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink-400/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-600 transition-colors group-hover:border-brand-500/30 group-hover:text-brand-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="relative z-10 mt-5 flex items-center gap-3 border-t border-ink-400/60 pt-4 font-mono text-[10px] uppercase tracking-[0.16em]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-1 text-ink-800 hover:text-brand-400 transition-colors"
          >
            Live site
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
          {project.repoUrl && (
            <>
              <span className="text-ink-600">·</span>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-600 hover:text-brand-400 transition-colors"
              >
                <GithubIcon className="w-3 h-3" />
                Source
              </a>
            </>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header — numbered index and label beside the statement */}
        <motion.header
          {...fadeInUp}
          className="grid grid-cols-12 gap-x-6 gap-y-4 border-t border-ink-400/60 pt-6 md:pt-8"
        >
          <div className="col-span-12 md:col-span-3 flex items-center gap-3">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-500/40 font-mono text-[10px] text-brand-400">
              02
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-700">
              Selected work
            </span>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h2 className="font-semibold text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.03] tracking-tight text-ink-950 text-balance">
              Things I&apos;ve shipped
              <span className="font-instrument italic font-normal text-brand-400"> end to end.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-ink-700 text-sm md:text-base leading-relaxed">
              A selection of products, applications, and systems I&apos;ve designed, built, and
              shipped — focused on solving real problems with clean, scalable, production-ready
              code. Each card opens a full case study.
            </p>
          </div>
        </motion.header>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink-400/60 pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-600">
          <p>Every project here shipped to production.</p>
          <a
            href="https://github.com/clemzzo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-900 hover:text-brand-400 transition-colors"
          >
            See more on GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}
