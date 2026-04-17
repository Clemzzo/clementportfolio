'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { projects, type Project } from '@/lib/projects'
import { GithubIcon } from '@/components/icons'
import { fadeInUp } from '@/lib/motion'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = descRef.current
    if (!el) return

    const measure = () => {
      if (expanded) return
      setIsOverflowing(el.scrollHeight > el.clientHeight + 1)
    }

    const raf = requestAnimationFrame(measure)
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [expanded, project.description])

  return (
    <motion.article
      {...fadeInUp}
      transition={{ delay: index * 0.08 }}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 shrink-0 w-[85vw] sm:w-[340px] md:w-[360px] snap-start"
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} details`}
        className="absolute inset-0 z-0"
      />

      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 85vw, 360px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-slate-700 rounded-full border border-slate-200/50 shadow-sm">
            {project.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 text-[10px] font-mono text-white/90 bg-slate-900/60 backdrop-blur-sm px-1.5 py-0.5 rounded">
          0{project.id}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p
          ref={descRef}
          className={`text-slate-500 text-[13px] leading-relaxed mb-2 ${expanded ? '' : 'line-clamp-3'}`}
        >
          {project.description}
        </p>

        {isOverflowing && (
          <button
            type="button"
            onClick={() => setExpanded(v => !v)}
            className="relative z-10 self-start inline-flex items-center gap-1 text-[12px] font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-4"
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Read more'}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}

        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-600 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-slate-100">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-1 text-[13px] font-semibold text-slate-900 hover:text-blue-600 transition-colors"
          >
            Live Site
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
          {project.repoUrl && (
            <>
              <span className="text-slate-300">·</span>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
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
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateButtons = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    updateButtons()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateButtons, { passive: true })
    window.addEventListener('resize', updateButtons)
    return () => {
      el.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = 380
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="py-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div {...fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
              Selected Projects
            </h2>
            <p className="text-slate-500 mt-4 max-w-lg">
              A handpicked lineup of products I&apos;ve designed, built, and shipped, where pixel-perfect design meets production-ready code.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll to previous projects"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll to next projects"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <a
              href="https://github.com/clemzzo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              View all on GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-6 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
        <div className="shrink-0 w-4" aria-hidden="true" />
      </div>
    </section>
  )
}
