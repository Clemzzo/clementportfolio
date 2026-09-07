'use client'

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'

const Preloader = dynamic(() => import('@/components/preloader'), { ssr: false })

const STORAGE_KEY = 'clement-preloader-seen'

const subscribeToSeen = () => () => {}

function getSeenSnapshot() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== null
  } catch {
    return false
  }
}

const getSeenServerSnapshot = () => false

export default function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const alreadySeen = useSyncExternalStore(subscribeToSeen, getSeenSnapshot, getSeenServerSnapshot)
  const [dismissed, setDismissed] = useState(false)

  const showPreloader = !alreadySeen && !dismissed
  const revealContent = alreadySeen || dismissed

  useEffect(() => {
    if (!showPreloader) return
    const { overflow } = document.documentElement.style
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = overflow
    }
  }, [showPreloader])

  const handleComplete = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // sessionStorage unavailable (private mode, blocked site data) — reveal anyway
    }
    setDismissed(true)
  }, [])

  return (
    <>
      <AnimatePresence>
        {showPreloader && <Preloader onComplete={handleComplete} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: revealContent ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-full overflow-x-clip"
      >
        {children}
      </motion.div>
    </>
  )
}
