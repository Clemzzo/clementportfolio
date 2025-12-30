'use client'

import { motion } from 'framer-motion'
import { Code, Database, Palette, Server, Cpu, Globe, Layout, Shield } from 'lucide-react'

const TechIcon = ({ name, color }: { name: string; color: string }) => {
  switch (name) {
    case 'React':
    case 'React Native':
      return (
        <svg viewBox="0 0 100 100" className="w-6 h-6" fill={color}>
          <circle cx="50" cy="50" r="10" />
          <path d="M50 15c-15 0-35 15-35 35s20 35 35 35 35-15 35-35-20-35-35-35zm0 60c-10 0-25-10-25-25s15-25 25-25 25 10 25 25-15 25-25 25z" opacity="0.3" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={color} strokeWidth="2" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={color} strokeWidth="2" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={color} strokeWidth="2" transform="rotate(120 50 50)" />
        </svg>
      )
    case 'Next.js':
      return (
        <img src="/next.svg" alt="Next.js" className="w-6 h-6" />
      )
    case 'Vercel':
      return (
        <img src="/vercel.svg" alt="Vercel" className="w-6 h-6" />
      )
    case 'Express':
      return (
        <img src="/expressjs.svg" alt="Express" className="w-6 h-6" />
      )
    case 'Recharts':
      return (
        <img src="/react.svg" alt="Recharts" className="w-6 h-6" />
      )
    case 'REST API':
      return (
        <img src="/restapi.svg" alt="REST API" className="w-6 h-6" />
      )
    case 'TypeScript':
      return (
        <img src="/typscript.svg" alt="TypeScript" className="w-6 h-6" />
      )
    case 'Tailwindcss':
      return (
        <img src="/tailwindcss.svg" alt="Tailwindcss" className="w-6 h-6" />
      )
    case 'NativeWind':
      return (
        <img src="/nativewind.svg" alt="NativeWind" className="w-6 h-6" />
      )
    case 'Framer Motion':
      return (
        <img src="/framermotion.svg" alt="Framer Motion" className="w-6 h-6" />
      )
    case 'Reanimated':
      return (
        <img src="/react.svg" alt="Reanimated" className="w-6 h-6" />
      )
    case 'Expo':
      return (
        <img src="/expo.svg" alt="Expo" className="w-6 h-6" />
      )
    case 'Node.js':
      return (
        <img src="/nodejs.svg" alt="Node.js" className="w-6 h-6" />
      )
    case 'Shadcn UI':
      return (
        <img src="/shadcn.svg" alt="Shadcn UI" className="w-6 h-6" />
      )
    case 'Firebase':
      return (
        <img src="/firebase.svg" alt="Firebase" className="w-6 h-6" />
      )
    case 'FirebaseDB':
      return (
        <img src="/firebasedb.svg" alt="Firebase" className="w-6 h-6" />
      )
    case 'PostgreSQL':
      return (
        <img src="/postgresql.svg" alt="PostgreSQL" className="w-6 h-6" />
      )
    case 'Supabase':
      return (
        <img src="/supabase.svg" alt="Supabase" className="w-6 h-6" />
      )
    case 'MongoDB':
      return (
        <img src="/mongo.svg" alt="MongoDB" className="w-6 h-6" />
      )
    case 'GitHub':
      return (
        <img src="/github.svg" alt="GitHub" className="w-6 h-6 invert" />
      )
    case 'Postman':
      return (
        <img src="/postman.svg" alt="Postman" className="w-6 h-6 invert" />
      )
    case 'VS Code':
      return (
        <img src="/vscode.svg" alt="VS Code" className="w-6 h-6 invert" />
      )
    case 'NPM':
      return (
        <img src="/npm.svg" alt="NPM" className="w-6 h-6 invert" />
      )
    case 'Git':
      return (
        <img src="/git.svg" alt="Git" className="w-6 h-6 invert" />
      )
    case 'Figma':
      return (
        <img src="/figma.svg" alt="Figma" className="w-6 h-6 invert" />
      )
    default:
      return <Code className="w-6 h-6" style={{ color }} />
  }
}

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#FFFFFF' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwindcss', color: '#06B6D4' },
      { name: 'Framer Motion', color: '#E11D48' },
      { name: 'Shadcn UI', color: '#E11D48' },
    ],
    color: 'text-emerald-400',
  },
  {
    title: 'Mobile Apps',
    icon: Cpu,
    skills: [
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Expo', color: '#FFFFFF' },
      { name: 'Reanimated', color: '#E11D48' },
      { name: 'NativeWind', color: '#06B6D4' },
    ],
    color: 'text-blue-400',
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    skills: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express', color: '#FFFFFF' },
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'Recharts', color: '#E10098' },
      { name: 'REST API', color: '#61DAFB' },
    ],
    color: 'text-purple-400',
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'Supabase', color: '#3ECF8E' },
      { name: 'FirebaseDB', color: '#FFCA28' },
      { name: 'MongoDB', color: '#6C47FF' },
      { name: 'Vercel', color: '#FFFFFF' },
    ],
    color: 'text-amber-400',
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Tech <span className="text-primary italic">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive set of modern technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 group hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${category.color} group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 w-full">
                  {category.skills.map((skill: any) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 group/skill">
                      <div className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center group-hover/skill:border-primary/50 transition-all">
                        <TechIcon name={skill.name} color={skill.color} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover/skill:text-white transition-colors text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-6">Other Tools</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 py-10 border-t border-white/5"
        >
          {['Figma', 'Git', 'GitHub', 'Postman', 'VS Code', 'NPM'].map((tool) => (
            <div key={tool} className="flex flex-col items-center gap-3 group/tool">
              <div className="w-14 h-14 rounded-2xl glass border-white/5 flex items-center justify-center group-hover/tool:border-primary/50 transition-all duration-300">
                <TechIcon name={tool} color="#9CA3AF" />
              </div>
              <span className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px] group-hover/tool:text-white transition-colors">
                {tool}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
