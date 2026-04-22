'use client'

import HeroSection from '@/components/hero-section'
import Navigation from '@/components/navigation'
import AboutSection from '@/components/about-section'
import ProjectsSection from '@/components/projects-section'
import TestimonialsSection from '@/components/testimonials-section'
import SkillsSection from '@/components/skills-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
