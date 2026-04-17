'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GithubIcon, LinkedInIcon, XIcon } from '@/components/icons'
import { navItems } from '@/lib/nav'
import { contactInfo } from '@/lib/contact'
import { fadeInUp } from '@/lib/motion'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/clemzzo', icon: <GithubIcon /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/clement-kingsley-ba8a90202', icon: <LinkedInIcon /> },
  { label: 'X', href: 'https://x.com/intent/follow?screen_name=kings_clem53541', icon: <XIcon /> },
  {
    label: 'Email',
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`,
    icon: <Mail className="h-5 w-5" />,
  },
]

export default function Footer() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const resolveHref = (href: string) => (isHome ? href : `/${href}`)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <motion.div {...fadeInUp} className="space-y-4">
            <span className="text-lg font-bold text-white">Clement Kingsley</span>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer passionate about creating innovative digital solutions that make a difference.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.08 }} className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {navItems.map((link) => (
                <li key={link.name}>
                  <Link
                    href={resolveHref(link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeInUp} transition={{ delay: 0.16 }} className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0" />
                {contactInfo.email}
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" />
                {contactInfo.phone}
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0" />
                {contactInfo.location}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Clement Kingsley. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-slate-500 text-sm">Built with Next.js & Tailwind CSS</p>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
