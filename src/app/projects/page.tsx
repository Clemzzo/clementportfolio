"use client"

import Navigation from '@/components/navigation'
import ProjectsSection from '@/components/projects-section'
import Footer from '@/components/footer'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ProjectsSection />
      <Footer />
    </main>
  )
}

