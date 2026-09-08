'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, Database, Server, Layout, Cpu, Wrench, Braces, Layers, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { fadeInUp } from '@/lib/motion'
import SectionHeader from '@/components/section-header'

const TECH_ICONS: Record<string, string> = {
  'Next.js': '/next.svg',
  'Vercel': '/vercel.svg',
  'Express': '/expressjs.svg',
  'JWT': '/jwtlogo.svg',
  'REST API': '/restapi.svg',
  'Stripe': '/stripe.svg',
  'Sentry': '/sentry.svg',
  'TypeScript': '/typscript.svg',
  'Tailwindcss': '/tailwindcss.svg',
  'NativeWind': '/nativewind.svg',
  'Framer Motion': '/framermotion.svg',
  'Reanimated': '/react.svg',
  'Expo': '/expo.svg',
  'Node.js': '/nodejs.svg',
  'Shadcn UI': '/shadcn.svg',
  'Firebase': '/firebase.svg',
  'FirebaseDB': '/firebasedb.svg',
  'PostgreSQL': '/postgresql.svg',
  'Supabase': '/supabase.svg',
  'Neon': '/neon.png',
  'MongoDB': '/mongo.svg',
  'Cloudflare': '/cloudflare.svg',
  'Convex': '/convex.png',
  'GitHub': '/github.svg',
  'Postman': '/postman.svg',
  'VS Code': '/vscode.svg',
  'NPM': '/npm.svg',
  'Git': '/git.svg',
  'Figma': '/figma.svg',
}

function TechIcon({ name, color }: { name: string; color: string }) {
  if (name === 'React' || name === 'React Native') {
    return (
      <svg viewBox="0 0 100 100" className="w-4 h-4" fill={color}>
        <circle cx="50" cy="50" r="10" />
        <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={color} strokeWidth="2" />
        <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={color} strokeWidth="2" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={color} strokeWidth="2" transform="rotate(120 50 50)" />
      </svg>
    )
  }
  const src = TECH_ICONS[name]
  if (src) return <Image src={src} alt="" width={16} height={16} className="w-4 h-4" />
  return <Code className="w-4 h-4" style={{ color }} />
}

type SkillCategory = {
  title: string
  description: string
  icon: LucideIcon
  /** Render plain text chips — for non-technology skills with no logo. */
  iconless?: boolean
  skills: { name: string; color?: string }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Crafting fast, responsive interfaces with modern frameworks.',
    icon: Layout,
    skills: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#000000' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwindcss', color: '#06B6D4' },
      { name: 'Framer Motion', color: '#E11D48' },
      { name: 'Shadcn UI', color: '#000000' },
    ],
  },
  {
    title: 'Mobile',
    description: 'Building native-feeling apps with smooth animations.',
    icon: Cpu,
    skills: [
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Expo', color: '#000000' },
      { name: 'Reanimated', color: '#E11D48' },
      { name: 'NativeWind', color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Designing reliable services and clean API contracts.',
    icon: Server,
    skills: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express', color: '#000000' },
      { name: 'REST API', color: '#61DAFB' },
      { name: 'Stripe', color: '#635BFF' },
      { name: 'Sentry', color: '#362D59' },
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'JWT', color: '#000000' },
    ],
  },
  {
    title: 'Database & Cloud',
    description: 'Storing, scaling, and shipping with confidence.',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'Supabase', color: '#3ECF8E' },
      { name: 'Neon', color: '#00E599' },
      { name: 'Convex', color: '#EE342F' },
      { name: 'FirebaseDB', color: '#FFCA28' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Cloudflare', color: '#F38020' },
      { name: 'Vercel', color: '#000000' },
    ],
  },
  {
    title: 'Languages',
    description: 'The core languages I write in every day, front to back.',
    icon: Braces,
    skills: [
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS', color: '#1572B6' },
      { name: 'SQL', color: '#4479A1' },
    ],
  },
  {
    title: 'State Management',
    description: 'Keeping client and server state predictable and in sync.',
    icon: Layers,
    skills: [
      { name: 'Redux', color: '#764ABC' },
      { name: 'Zustand', color: '#B8860B' },
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'Prisma', color: '#2D3748' },
    ],
  },
  {
    title: 'Practice',
    description: 'How I work — the habits behind shipping software teams can rely on.',
    icon: Target,
    iconless: true,
    skills: [
      { name: 'Problem Solving' },
      { name: 'Team Collaboration' },
      { name: 'Performance' },
      { name: 'Responsive and Cross Browser' },
      { name: 'Technical Writing' },
    ],
  },
  {
    title: 'Infra and Tooling',
    description: 'The everyday workbench — version control and developer experience.',
    icon: Wrench,
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'VS Code' },
      { name: 'NPM' },
      { name: 'pnpm' },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-ink-0">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeader
          id="skills"
          label="Stack"
          title="Tech Arsenal"
          description="The modern toolkit I reach for to design, build, and ship scalable, high-performance products end-to-end."
        />

        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              {...fadeInUp}
              transition={{ delay: index * 0.08 }}
              className="group relative bg-ink-100 rounded-2xl p-7 border border-ink-400/80 hover:border-brand-500/60 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0 p-2.5 rounded-xl bg-linear-to-br from-brand-500/10 to-brand-500/10 border border-brand-500/20">
                  <category.icon className="w-5 h-5 text-brand-400" strokeWidth={2.25} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-ink-950">{category.title}</h3>
                    <span className="text-[11px] font-medium text-ink-600 tabular-nums">
                      {category.skills.length}
                    </span>
                  </div>
                  <p className="text-[13px] text-ink-600 mt-0.5 leading-snug">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink-200 border border-ink-400/60 rounded-full text-[13px] font-medium text-ink-800 hover:bg-brand-500/10 hover:border-brand-500/60 hover:text-brand-300 hover:shadow-sm hover:shadow-brand-500/10 transition-all"
                  >
                    {!category.iconless && (
                      <TechIcon name={skill.name} color={skill.color ?? '#64748b'} />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
