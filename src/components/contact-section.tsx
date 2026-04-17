'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'clemento444@gmail.com', href: 'mailto:clemento444@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+234 813 265 2982', href: 'tel:+2348132652982' },
    { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: '#' },
  ]

  return (
    <section id="contact" className="py-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-500 mt-4 text-[15px] leading-relaxed">
            Have a project in mind, a role to fill, or just want to say hello?
            Drop a message. I usually reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80">
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Currently open to freelance projects and full-time roles in frontend, full-stack, and mobile development.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden">
              {contactItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center gap-4 p-5 hover:bg-slate-50/80 transition-colors ${i !== contactItems.length - 1 ? 'border-b border-slate-100' : ''
                    }`}
                >
                  <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100">
                    <item.icon className="w-4 h-4 text-blue-600" strokeWidth={2.25} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-slate-900 text-sm font-medium truncate">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 shrink-0 transition-all group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 border border-slate-200/80"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className="h-11 rounded-lg border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500 focus-visible:bg-white transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="h-11 rounded-lg border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500 focus-visible:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, timeline, and what you're looking for..."
                  rows={6}
                  className="rounded-lg border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500 focus-visible:bg-white resize-none transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <Button
                  type="submit"
                  className="group h-11 px-6 rounded-lg bg-blue-600 hover:bg-slate-800 text-white font-semibold gap-2 shrink-0"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>

                <p className="text-xs text-slate-400">
                  Your details stay private — never shared, ever.
                </p>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 px-4 py-3 bg-green-50 border border-green-100 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <p className="text-green-700 text-sm font-medium">
                    Message sent — I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-100 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <p className="text-red-700 text-sm font-medium">
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
