import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project not found' }
  return {
    title: `${project.title} — Clement Kingsley`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-ink-0">
      <Navigation />

      <article className="pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-brand-400 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Back to projects
          </Link>

          <header className="mb-10">
            <span className="inline-flex items-center text-brand-400 text-sm font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink-950 mt-3 tracking-tight">
              {project.title}
            </h1>
            <p className="text-ink-600 text-lg leading-relaxed mt-5 max-w-2xl">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-7">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 h-11 px-5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
              >
                Visit Live Site
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </header>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-ink-400 bg-ink-200 mb-14">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              priority
              className="object-cover"
            />
          </div>

          <section className="mb-14">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-600 mb-4">
              Overview
            </h2>
            <p className="text-ink-800 text-[17px] leading-[1.75]">
              {project.overview}
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-600 mb-6">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-5 bg-ink-100/80 rounded-2xl border border-ink-400/80"
                >
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500/10 to-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-400" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-ink-950 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] text-ink-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-600 mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-[13px] font-medium bg-ink-100 border border-ink-400 text-ink-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
