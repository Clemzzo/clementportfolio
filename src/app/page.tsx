'use client'

import HeroSection from '@/components/hero-section'
import Navigation from '@/components/navigation'
import AboutSection from '@/components/about-section'
import ProjectsSection from '@/components/projects-section'
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
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
