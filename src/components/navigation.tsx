'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '@/lib/nav'

export default function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const resolveHref = (href: string) => (isHome ? href : `/${href}`)

  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        })
      },
      { threshold: 0.5 }
    )
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${scrolled ? 'bg-ink-0 border-b border-ink-400 shadow-sm' : 'bg-ink-0/80 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 overflow-hidden rounded-full border border-ink-400">
            <Image src="/clemzzo.png" alt="Clement" fill sizes="32px" className="object-cover" />
          </div>
          <span className="text-sm font-semibold text-ink-950 group-hover:text-blue-400 transition-colors">
            Clement.K
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={resolveHref(item.href)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === item.href
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-ink-600 hover:text-blue-400 hover:bg-blue-500/10'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 rounded-md text-ink-600 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-ink-400 bg-ink-0 overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={resolveHref(item.href)}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.href
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-ink-600 hover:text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
