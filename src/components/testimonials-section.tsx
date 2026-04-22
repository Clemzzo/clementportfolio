'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials, type Testimonial } from '@/lib/testimonials'
import { fadeInUp } from '@/lib/motion'

const avatarGradients = [
  'linear-gradient(135deg, oklch(88% 0.04 60), oklch(78% 0.05 40))',
  'linear-gradient(135deg, oklch(86% 0.05 90), oklch(76% 0.06 70))',
  'linear-gradient(135deg, oklch(87% 0.04 200), oklch(77% 0.05 220))',
  'linear-gradient(135deg, oklch(86% 0.05 30), oklch(76% 0.06 10))',
  'linear-gradient(135deg, oklch(88% 0.03 150), oklch(78% 0.04 170))',
  'linear-gradient(135deg, oklch(87% 0.05 270), oklch(77% 0.06 250))',
]

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="block">
      <path
        d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.77l-5.2 2.74.99-5.8L1.58 7.62l5.82-.85L10 1.5z"
        fill={filled ? 'var(--t-star)' : 'none'}
        stroke={filled ? 'var(--t-star)' : 'var(--t-ink-3)'}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Rating({ value }: { value: number }) {
  return (
    <div className="inline-flex items-center gap-[3px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} filled={i < value} />
      ))}
      <span className="ml-2 font-poppins text-[11px] font-medium tracking-[0.02em] text-[color:var(--t-ink-3)]">
        {value.toFixed(1)}
      </span>
    </div>
  )
}

function Avatar({ initials, i }: { initials: string; i: number }) {
  return (
    <div
      className="grid place-items-center w-11 h-11 rounded-full shrink-0 font-poppins text-base font-semibold tracking-[0.02em] text-[color:var(--t-ink)]"
      style={{
        background: avatarGradients[i % avatarGradients.length],
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)',
      }}
    >
      {initials}
    </div>
  )
}

function QuoteIcon() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="block shrink-0">
      <path
        d="M0 22V13.2C0 5.9 3.6 1.5 10.4 0v4.4C7 5.4 5.2 7.6 5.2 11H10v11H0zM16 22V13.2C16 5.9 19.6 1.5 26.4 0v4.4C23 5.4 21.2 7.6 21.2 11H26v11H16z"
        fill="var(--t-accent)"
        opacity="0.22"
      />
    </svg>
  )
}

function TestimonialCard({
  t,
  i,
  expanded,
  onToggle,
}: {
  t: Testimonial
  i: number
  expanded: boolean
  onToggle: (i: number) => void
}) {
  return (
    <article
      data-card
      className="group/card relative flex flex-col gap-4 shrink-0 w-[85vw] sm:w-[340px] md:w-[360px] p-6 pb-5 rounded-2xl bg-[color:var(--t-surface)] border border-[color:var(--t-rule)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(30,20,10,0.18),0_2px_6px_rgba(0,0,0,0.04)] hover:border-[color:color-mix(in_oklch,var(--t-accent)_25%,var(--t-rule))] snap-start"
      style={{ minHeight: expanded ? undefined : 320 }}
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex items-center gap-2 font-poppins text-[10.5px] font-medium uppercase tracking-[0.1em] text-[color:var(--t-ink)]">
          <span className="w-[5px] h-[5px] rounded-full bg-[color:var(--t-accent)]" />
          {t.project}
        </span>
        <QuoteIcon />
      </div>

      <p className="flex-1 m-0 font-poppins text-[16px] font-normal leading-[1.45] tracking-[-0.01em] text-[color:var(--t-ink)] [text-wrap:pretty]">
        <span className="text-[color:var(--t-ink-3)] mr-[2px]">“</span>
        {expanded ? t.full : t.short}
        <span className="text-[color:var(--t-ink-3)] ml-[2px]">”</span>
      </p>

      <button
        type="button"
        onClick={() => onToggle(i)}
        aria-expanded={expanded}
        className="self-start inline-flex items-center gap-1.5 font-poppins text-[12px] font-medium text-[color:var(--t-accent)] hover:opacity-80 transition-opacity"
      >
        {expanded ? 'Show less' : 'Read full review'}
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>

      <div className="flex items-center gap-3 pt-[18px] border-t border-[color:var(--t-rule)]">
        <Avatar initials={t.initials} i={i} />
        <div className="flex-1 min-w-0">
          <div className="font-poppins text-[14px] font-semibold tracking-[-0.005em] text-[color:var(--t-ink)]">
            {t.name}
          </div>
          <div className="mt-0.5 font-poppins text-[12px] text-[color:var(--t-ink-3)]">
            {t.role}
            <span className="mx-1 text-[color:var(--t-ink-3)]">·</span>
            <span className="text-[color:var(--t-ink-2)]">{t.company}</span>
          </div>
        </div>
        <Rating value={t.rating} />
      </div>
    </article>
  )
}

function CarouselArrow({
  dir,
  onClick,
  disabled,
}: {
  dir: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
}) {
  const Icon = dir === 'prev' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
      className="w-[46px] h-[46px] grid place-items-center rounded-full bg-[color:var(--t-surface)] border border-[color:var(--t-rule)] text-[color:var(--t-ink)] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:scale-105 enabled:hover:shadow-[0_6px_18px_-6px_rgba(0,0,0,0.15)] enabled:hover:border-[color:var(--t-accent)]"
    >
      <Icon className="w-4 h-4" />
    </button>
  )
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<number | null>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [activeIdx, setActiveIdx] = useState(0)

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)

    const cards = [...el.querySelectorAll<HTMLElement>('[data-card]')]
    const padLeft = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0
    const anchor = el.scrollLeft + padLeft
    let best = 0
    let bestDist = Infinity
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - anchor)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    })
    setActiveIdx(best)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scrollBy = (dir: 'prev' | 'next') => {
    const el = trackRef.current
    if (!el) return
    const delta = el.clientWidth * 0.7 * (dir === 'next' ? 1 : -1)
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  const scrollToIdx = (i: number) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelectorAll<HTMLElement>('[data-card]')[i]
    if (!card) return
    const padLeft = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0
    el.scrollTo({ left: card.offsetLeft - padLeft, behavior: 'smooth' })
  }

  const toggleExpand = (i: number) => setExpanded(expanded === i ? null : i)

  const avgRating = (
    testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length
  ).toFixed(1)

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-28 overflow-hidden"
      style={{
        ['--t-bg' as string]: '#ffffff',
        ['--t-surface' as string]: '#fbf6eb',
        ['--t-ink' as string]: '#1d1a16',
        ['--t-ink-2' as string]: '#4a4437',
        ['--t-ink-3' as string]: '#8a8170',
        ['--t-rule' as string]: '#e4d8bf',
        ['--t-accent' as string]: 'oklch(52% 0.17 258)',
        ['--t-star' as string]: 'oklch(72% 0.15 70)',
        background: 'var(--t-bg)',
        color: 'var(--t-ink)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.header
          {...fadeInUp}
          className="flex flex-wrap items-end justify-between gap-10 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--t-ink-2)]">
              <span className="w-7 h-px bg-[color:var(--t-ink-3)] opacity-50" />
              <span>Testimonials</span>
            </div>
            <h2 className="max-w-[780px] m-0 font-poppins font-semibold text-[clamp(40px,6vw,68px)] leading-[1.02] tracking-[-0.02em] text-[color:var(--t-ink)] [text-wrap:balance]">
              Kind words from teams I&apos;ve{' '}
              <span className="font-instrument italic font-normal text-[color:var(--t-accent)]">
                shipped
              </span>{' '}
              with.
            </h2>
          </div>

          <div className="flex items-center gap-5 pb-1.5">
            <div
              className="font-instrument text-[52px] leading-none font-medium tracking-[-0.02em] text-[color:var(--t-ink)]"
            >
              {avgRating}
            </div>
            <div>
              <Rating value={Math.round(parseFloat(avgRating))} />
              <div className="mt-2 max-w-[160px] text-[12px] leading-[1.5] text-[color:var(--t-ink-3)]">
                Average across {testimonials.length} reviews from engineering and product leads.
              </div>
            </div>
          </div>
        </motion.header>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          style={{
            maskImage: `linear-gradient(to right, ${
              canPrev ? 'transparent 0, rgba(0,0,0,0.3) 40px, #000 140px' : '#000 0'
            }, ${
              canNext
                ? '#000 calc(100% - 140px), rgba(0,0,0,0.3) calc(100% - 60px), transparent 100%'
                : '#000 100%'
            })`,
            WebkitMaskImage: `linear-gradient(to right, ${
              canPrev ? 'transparent 0, rgba(0,0,0,0.3) 40px, #000 140px' : '#000 0'
            }, ${
              canNext
                ? '#000 calc(100% - 140px), rgba(0,0,0,0.3) calc(100% - 60px), transparent 100%'
                : '#000 100%'
            })`,
          }}
          className="flex gap-5 overflow-x-auto overflow-y-visible snap-x snap-mandatory pt-2 pb-7 px-[max(1.5rem,calc(50%-34.5rem))] scroll-px-[max(1.5rem,calc(50%-34.5rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-[mask-image] duration-300"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              t={t}
              i={i}
              expanded={expanded === i}
              onToggle={toggleExpand}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-5 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => {
            const active = activeIdx === i
            return (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="h-1.5 rounded-full border-0 p-0 cursor-pointer transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,1)]"
                style={{
                  width: active ? 24 : 6,
                  background: active ? 'var(--t-accent)' : 'var(--t-ink-3)',
                  opacity: active ? 1 : 0.3,
                }}
              />
            )
          })}
        </div>
        <div className="flex gap-2.5">
          <CarouselArrow dir="prev" onClick={() => scrollBy('prev')} disabled={!canPrev} />
          <CarouselArrow dir="next" onClick={() => scrollBy('next')} disabled={!canNext} />
        </div>
      </div>
    </section>
  )
}
