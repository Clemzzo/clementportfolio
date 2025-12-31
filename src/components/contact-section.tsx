'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: `New Message from ${formData.name}`
        })
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

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Contact Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-left">
                Let&apos;s Build <br />
                <span className="text-primary italic">Something Great</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                I'm currently available for freelance work and full-time positions. If you have a project in mind, let&apos;s talk.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'clememento444@gmail.com', href: 'mailto:clememento444@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+234 8132 652982', href: 'tel:+2348132652982' },
                { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: '#' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="p-4 glass rounded-2xl group-hover:bg-primary group-hover:text-black transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.label}</p>
                    <a href={item.href} className="text-white font-semibold hover:text-primary transition-colors">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-8 md:p-12 border-white/5 relative"
          >
            <div className="absolute -top-6 -right-6 p-4 glass rounded-3xl rotate-12">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter full name"
                    className="h-14 rounded-2xl glass border-white/5 focus:border-primary/50 text-white placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email address"
                    className="h-14 rounded-2xl glass border-white/5 focus:border-primary/50 text-white placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="rounded-2xl glass border-white/5 focus:border-primary/50 text-white placeholder:text-gray-600 py-4"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-2xl bg-white text-black font-bold hover:scale-[1.02] transition-transform flex gap-2"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </Button>

              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
