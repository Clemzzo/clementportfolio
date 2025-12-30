"use client"

import Navigation from '@/components/navigation'
import SkillsSection from '@/components/skills-section'
import Footer from '@/components/footer'

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <SkillsSection />
      <Footer />
    </main>
  )
}

