'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ArrowUp, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/clemzzo', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=clement-kingsley-ba8a90202', label: 'LinkedIn' },
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.628-7.584-6.442 7.584H.474l8.479-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
      href: 'https://x.com/intent/follow?screen_name=kings_clem53541',
      label: 'X'
    },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=clememento444@gmail.com', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">Clement Kingsley</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Full-stack developer passionate about creating innovative digital solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="link"
                    className="text-gray-400 hover:text-white p-0 h-auto font-normal"
                    asChild
                  >
                    <Link href={link.href} scroll onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        const el = document.querySelector(link.href)
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          history.pushState(null, '', link.href)
                        }
                      }
                    }}>
                      {link.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> clemento444@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +2348132652982</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Lagos, Nigeria</p>
              <p className="text-sm pt-2">
                Available for freelance projects and collaborations
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Clement Kingsley. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-sm">
              Built with love using Next.js & Tailwind CSS
            </p>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
