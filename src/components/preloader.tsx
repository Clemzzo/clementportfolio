'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const BOOT_LINES = [
  'Initializing portfolio...',
  'Loading 10+ shipped projects...',
  'Compiling 3 yrs 8 mo of experience...',
  'Optimizing for teams and founders...',
  'Ready to build with you 🚀',
]

const STATUS_LINES = [
  'Solving real business problems...',
  'Building products that grow revenue...',
  'Designing for scale and impact...',
  'Open to freelance and full time roles...',
]

const STATS: { value: number | null; suffix?: string; symbol?: string; label: string }[] = [
  { value: 95, suffix: '%', label: 'Success Rate' },
  { value: 10, suffix: '+', label: 'Total Projects' },
  { value: 3.8, suffix: ' yrs', label: 'Experience' },
  { value: null, symbol: '∞', label: 'Problem Solver' },
]

const TOTAL_DURATION = 3200
const BAR_SEGMENTS = 16

function CountUp({
  target,
  suffix = '',
  duration = 1200,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true

    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased * 10) / 10)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration])

  const display = Number.isInteger(target) ? Math.round(value) : value.toFixed(1)

  return (
    <>
      {display}
      <span className="text-blue-400 text-xl">{suffix}</span>
    </>
  )
}

function useTypewriter(lines: string[], charDelay = 26, linePause = 160) {
  const [displayLines, setDisplayLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setDone(true)
      return
    }

    const line = lines[lineIndex]

    if (charIndex < line.length) {
      const timer = setTimeout(() => {
        setCurrentLine(line.slice(0, charIndex + 1))
        setCharIndex((i) => i + 1)
      }, charDelay)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setDisplayLines((prev) => [...prev, line])
      setCurrentLine('')
      setCharIndex(0)
      setLineIndex((i) => i + 1)
    }, linePause)
    return () => clearTimeout(timer)
  }, [lines, lineIndex, charIndex, charDelay, linePause])

  return { displayLines, currentLine, done }
}

function MatrixRain() {
  const columns = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: `${(i / 18) * 100}%`,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
      chars: Array.from({ length: 12 }, () => '01<>/{}[]'[Math.floor(Math.random() * 9)]),
    }))
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.12]">
      {columns.current.map((column) => (
        <div
          key={column.id}
          className="absolute top-0 font-mono text-[10px] text-blue-400 leading-tight animate-matrix-fall"
          style={{
            left: column.x,
            animationDelay: `${column.delay}s`,
            animationDuration: `${column.duration}s`,
          }}
        >
          {column.chars.map((char, i) => (
            <div key={i}>{char}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'welcome' | 'exit'>('loading')
  const [showStats, setShowStats] = useState(false)
  const startedAt = useRef(Date.now())
  const finished = useRef(false)

  const { displayLines, currentLine, done } = useTypewriter(BOOT_LINES)

  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    setPhase('exit')
    setTimeout(onComplete, 700)
  }, [onComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Math.min((Date.now() - startedAt.current) / TOTAL_DURATION, 1)
      setProgress(elapsed)
      setStatusIndex(Math.min(Math.floor(elapsed * STATUS_LINES.length), STATUS_LINES.length - 1))
      if (elapsed > 0.35) setShowStats(true)
      if (elapsed >= 1 && done) {
        setPhase('welcome')
        setTimeout(finish, 900)
      }
    }, 16)
    return () => clearInterval(interval)
  }, [done, finish])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') finish()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [finish])

  const filled = Math.round(BAR_SEGMENTS * progress)

  return (
    <motion.div
      className="fixed inset-0 z-200 flex items-center justify-center bg-ink-0"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-ink-0 via-ink-50 to-ink-100" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <MatrixRain />

      <button
        onClick={finish}
        aria-label="Skip intro"
        className="absolute top-6 right-6 z-10 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-600 hover:text-blue-400 transition-colors px-3 py-1.5 rounded border border-ink-400 hover:border-blue-400/40"
      >
        Skip →
      </button>

      <div className="relative w-full max-w-xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-blue-400">
            Full Stack · Web · Product · Design
          </p>
          <p className="text-lg text-ink-950 font-semibold mt-1">
            Clement Kingsley — building products that ship
          </p>
          <p className="font-mono text-[10px] text-ink-600 mt-1.5">
            Available for freelance projects and full time roles
          </p>
        </motion.div>

        <div className="rounded-lg border border-ink-400 bg-ink-100/80 backdrop-blur-sm p-5 md:p-6 font-mono text-[12px] md:text-[13px] leading-relaxed min-h-40">
          {displayLines.map((line, i) => (
            <div key={i} className="text-ink-700 mb-1">
              <span className="text-blue-400/70 mr-2">&gt;</span>
              {line}
            </div>
          ))}
          {currentLine && (
            <div className="text-ink-900">
              <span className="text-blue-400/70 mr-2">&gt;</span>
              {currentLine}
              <span className="inline-block w-[0.55ch] h-[1em] bg-blue-400 ml-0.5 align-[-0.12em] animate-blink" />
            </div>
          )}
          <AnimatePresence>
            {phase === 'welcome' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-ink-950 mt-3"
              >
                <span className="text-blue-400 mr-2">&gt;</span>
                Welcome. Let&apos;s build something great.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-3 font-mono text-[11px] text-ink-700">
            <span className="text-blue-400 tracking-wider shrink-0">
              [{'#'.repeat(filled)}
              {'░'.repeat(BAR_SEGMENTS - filled)}]
            </span>
            <motion.span
              key={statusIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="truncate"
            >
              {STATUS_LINES[statusIndex]}
            </motion.span>
          </div>
          <div className="mt-2 h-px bg-ink-300 overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-blue-500/60 via-blue-400 to-blue-500/60"
              style={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        <AnimatePresence>
          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-10 grid grid-cols-2 gap-4 md:gap-6"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="rounded-lg border border-ink-400 px-4 py-3 bg-ink-100/60"
                >
                  <div className="text-2xl md:text-3xl font-bold tracking-tight text-ink-950 tabular-nums">
                    {stat.symbol ? (
                      <span className="text-blue-400">{stat.symbol}</span>
                    ) : (
                      <CountUp target={stat.value as number} suffix={stat.suffix} />
                    )}
                  </div>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-600">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
