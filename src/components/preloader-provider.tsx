'use client'

import { useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'

const Preloader = dynamic(() => import('@/components/preloader'), { ssr: false })

const STORAGE_KEY = 'clement-preloader-seen'

export default function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false)
  const [revealContent, setRevealContent] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setRevealContent(true)
    } else {
      setShowPreloader(true)
    }
  }, [])

  useEffect(() => {
    if (!showPreloader) return
    const { overflow } = document.documentElement.style
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = overflow
    }
  }, [showPreloader])

  const handleComplete = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setShowPreloader(false)
    setRevealContent(true)
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
