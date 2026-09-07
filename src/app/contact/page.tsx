"use client"

import Navigation from '@/components/navigation'
import ContactSection from '@/components/contact-section'
import CtaSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactSection />
      <CtaSection />
      <Footer />
    </main>
  )
}

