'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { contactItems } from '@/lib/contact'
import { fadeInUp } from '@/lib/motion'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (status !== 'success' && status !== 'error') return
    const t = setTimeout(() => setStatus('idle'), 3000)
    return () => clearTimeout(t)
  }, [status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: `New Message from ${formData.name}` }),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div {...fadeInUp} className="mb-16 max-w-2xl">
          <span className="text-brand-400 text-sm font-semibold uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-950 mt-2 tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-ink-600 mt-4 text-[15px] leading-relaxed">
            Have a project in mind, a role to fill, or just want to say hello?
            Drop a message. I usually reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">

          <motion.div {...fadeInUp} className="lg:col-span-2 space-y-4">
            <div className="bg-ink-100 rounded-2xl p-7 border border-ink-400/80 hover:border-brand-500/60 transition-colors">
              <p className="text-ink-700 text-[15px] leading-relaxed">
                Currently open to freelance projects and full-time roles in frontend, full-stack, and mobile development.
              </p>
            </div>

            <div className="bg-ink-100 rounded-2xl border border-ink-400/80 overflow-hidden hover:border-brand-500/60 transition-colors">
              {contactItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center gap-4 p-5 hover:bg-brand-500/10 transition-colors ${i !== contactItems.length - 1 ? 'border-b border-ink-400/60' : ''
                    }`}
                >
                  <div className="shrink-0 p-2.5 rounded-xl bg-linear-to-br from-brand-500/10 to-brand-500/10 border border-brand-500/20">
                    <item.icon className="w-4 h-4 text-brand-400" strokeWidth={2.25} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-600 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-ink-950 text-sm font-medium truncate">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-700 shrink-0 transition-all group-hover:text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 bg-ink-100 rounded-2xl p-8 border border-ink-400/80"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-ink-600">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className="h-11 rounded-lg border-ink-400 bg-ink-200/60 text-ink-950 placeholder:text-ink-600 focus-visible:ring-brand-500 focus-visible:bg-ink-100 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-ink-600">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="h-11 rounded-lg border-ink-400 bg-ink-200/60 text-ink-950 placeholder:text-ink-600 focus-visible:ring-brand-500 focus-visible:bg-ink-100 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-ink-600">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, timeline, and what you're looking for..."
                  rows={6}
                  className="rounded-lg border-ink-400 bg-ink-200/60 text-ink-950 placeholder:text-ink-600 focus-visible:ring-brand-500 focus-visible:bg-ink-100 resize-none transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <Button
                  type="submit"
                  className="group h-11 px-6 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold gap-2 shrink-0"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>

                <p className="text-xs text-ink-600">
                  Your details stay private — never shared, ever.
                </p>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <p className="text-emerald-300 text-sm font-medium">
                    Message sent — I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <p className="text-red-300 text-sm font-medium">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
