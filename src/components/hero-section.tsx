'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, Download } from 'lucide-react'
import { GithubIcon, LinkedInIcon } from '@/components/icons'
import { contactInfo } from '@/lib/contact'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div className="lg:col-span-7">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Available for work
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-none mb-6"
            >
              Clement
              <br />
              Kingsley
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl"
            >
              Full Stack Software Developer specializing in building fast, scalable web and mobile products. I help founders, startups, and businesses turn ideas into polished digital experiences — from concept to deployment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg gap-2 h-11"
                asChild
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg gap-2 h-11 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                asChild
              >
                <a href="/Clement_Kingsley_Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex gap-2"
            >
              <a
                href="https://github.com/clemzzo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/clement-kingsley-ba8a90202"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Soft blue accent */}
              <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-60" />
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
                <Image
                  src="/clement.png"
                  alt="Clement Kingsley"
                  fill
                  priority
                  sizes="(max-width: 1024px) 384px, 420px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
