'use client'

import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { sectionNumber, type SectionId } from '@/lib/sections'
import { cn } from '@/lib/utils'

/* The wrapper only schedules, each line carries the movement */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const line: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

type SectionHeaderProps = {
  id: SectionId
  label: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export default function SectionHeader({
  id,
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
      className={cn(
        'grid grid-cols-12 gap-x-6 gap-y-4 border-t border-ink-400/60 pt-6 md:pt-8',
        className,
      )}
    >
      <motion.div
        variants={line}
        className="col-span-12 md:col-span-3 flex items-center gap-3"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-500/40 font-mono text-[10px] text-brand-400">
          {sectionNumber(id)}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-700">
          {label}
        </span>
      </motion.div>

      <div className="col-span-12 md:col-span-9">
        <motion.h2
          variants={line}
          className="font-semibold text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.03] tracking-tight text-ink-950 text-balance"
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            variants={line}
            className="mt-4 max-w-2xl text-ink-700 text-sm md:text-base leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.header>
  )
}
