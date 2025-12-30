'use client'

import { useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  color: string
  speed: number
  angle: number
  orbitRadius: number
  orbitSpeed: number
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const particleCount = Math.floor((width * height) / 5000)

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 2 + 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`,
        speed: Math.random() * 0.5 + 0.2,
        angle: Math.random() * Math.PI * 2,
        orbitRadius: Math.random() * 30 + 10,
        orbitSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      })
    }
    return particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = initParticles(canvas.width, canvas.height)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      timeRef.current += 1

      particlesRef.current.forEach((particle) => {
        // Update angle for continuous orbit
        particle.angle += particle.orbitSpeed

        // Calculate orbit position
        const orbitX = particle.baseX + Math.cos(particle.angle) * particle.orbitRadius
        const orbitY = particle.baseY + Math.sin(particle.angle) * particle.orbitRadius

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          particle.x -= Math.cos(angle) * force * 3
          particle.y -= Math.sin(angle) * force * 3
        } else {
          // Smoothly move towards orbit position
          particle.x += (orbitX - particle.x) * 0.02
          particle.y += (orbitY - particle.y) * 0.02
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Interactive Particle Background */}
      <ParticleBackground />

      {/* Accent Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-xs md:text-sm font-medium text-primary shadow-xl mx-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for work
          </motion.div>

          {/* Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
            >
              <span className="text-white">Clement </span>
              <span className="text-primary italic">Kingsley</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Software Developer crafting <span className="text-white">premium digital experiences</span> with React, Next.js, and Mobile technologies.
            </motion.p>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="h-14 px-8 rounded-full bg-primary text-white font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(161,72,70,0.3)] group"
              asChild
            >
              <a href="#projects">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 rounded-full glass border-white/10 text-white font-semibold hover:bg-white/5 transition-all"
              asChild
            >
              <a href="/CLEMENT KINGSLEY RESUME.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-6 pt-10"
          >
            {[
              { icon: Github, href: 'https://github.com/clemzzo', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/clement-kingsley', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:clememento444@gmail.com', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full text-gray-400 hover:text-white hover:scale-110 transition-all border-white/5"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-12 rounded-full border border-white/20 glass flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Side Icons */}
        <FloatingIcon
          delay={0}
          className="top-[15%] left-[3%] md:top-[20%] md:left-[10%]"
          icon={<NextJsIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white/15 md:text-white/20" />}
        />
        <FloatingIcon
          delay={0.5}
          className="top-[45%] left-[5%] md:top-[50%] md:left-[15%]"
          icon={<SupabaseIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-emerald-500/15 md:text-emerald-500/20" />}
        />
        <FloatingIcon
          delay={1}
          className="top-[75%] left-[2%] md:top-[70%] md:left-[8%]"
          icon={<TailwindIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-sky-400/15 md:text-sky-400/20" />}
        />

        {/* Right Side Icons */}
        <FloatingIcon
          delay={0.2}
          className="top-[18%] right-[3%] md:top-[25%] md:right-[12%]"
          icon={<ReactIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-sky-500/15 md:text-sky-500/20" />}
        />
        <FloatingIcon
          delay={0.7}
          className="top-[50%] right-[2%] md:top-[45%] md:right-[8%]"
          icon={<Github className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white/15 md:text-white/20" />}
        />
        <FloatingIcon
          delay={1.2}
          className="top-[80%] right-[5%] md:top-[75%] md:right-[15%]"
          icon={<FirebaseIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-orange-500/15 md:text-orange-500/20" />}
        />
      </div>
    </section>
  )
}

function FloatingIcon({ icon, className, delay = 0 }: { icon: React.ReactNode, className: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
      }}
      className={`absolute z-0 ${className} p-4 glass rounded-2xl border-white/5 backdrop-blur-sm`}
    >
      {icon}
    </motion.div>
  )
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

function NextJsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="none">
      <mask id="mask0_next" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_next)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.1836L134.452 157.482C139.201 154.557 143.585 151.205 147.535 147.458L149.508 157.52Z" fill="white" />
        <path d="M115.245 54H102V125.967H115.245V54Z" fill="url(#paint0_linear_next)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_next" x1="109" y1="67" x2="109" y2="125" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function FirebaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className}>
      <path d="M5.992 23.328l1.528-9.616 1.832-3.416c.168-.312.6-.312.768 0l1.832 3.416z" fill="#FFC107" />
      <path d="M16 4.968l-2.488 4.72-2.312 4.392-1.832-3.416c-.168-.312-.6-.312-.768 0L5.992 23.328 16 12.04z" fill="#FFA000" />
      <path d="M26.008 23.328l-4.144-14.776c-.088-.312-.52-.36-.672-.08l-5.192 9.568z" fill="#F4B400" />
      <path d="M16 12.04l-7.368 11.288-1.528 2.504c-.16.272.04.608.352.608h17.088c.312 0 .512-.336.352-.608l-1.528-2.504z" fill="#FF8F00" />
    </svg>
  )
}

function SupabaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21.362 9.354H12V.338a.342.342 0 00-.596-.227L2.4 11.166a.425.425 0 00.31.734h9.362v9.016a.342.342 0 00.596.227L22.012 10.08a.425.425 0 00-.65-.726z" />
    </svg>
  )
}

function TailwindIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.177-1.194-2.538-2.576-5.512-2.576z" />
    </svg>
  )
}
