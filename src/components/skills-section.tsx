'use client'

import { motion } from 'framer-motion'
import { Code, Database, Server, Layout, Cpu, Wrench } from 'lucide-react'

const TechIcon = ({ name, color }: { name: string; color: string }) => {
  switch (name) {
    case 'React':
    case 'React Native':
      return (
        <svg viewBox="0 0 100 100" className="w-4 h-4" fill={color}>
          <circle cx="50" cy="50" r="10" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={color} strokeWidth="2" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={color} strokeWidth="2" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke={color} strokeWidth="2" transform="rotate(120 50 50)" />
        </svg>
      )
    case 'Next.js': return <img src="/next.svg" alt="" className="w-4 h-4" />
    case 'Vercel': return <img src="/vercel.svg" alt="" className="w-4 h-4" />
    case 'Express': return <img src="/expressjs.svg" alt="" className="w-4 h-4" />
    case 'JWT': return <img src="/jwtlogo.svg" alt="" className="w-4 h-4" />
    case 'REST API': return <img src="/restapi.svg" alt="" className="w-4 h-4" />
    case 'TypeScript': return <img src="/typscript.svg" alt="" className="w-4 h-4" />
    case 'Tailwindcss': return <img src="/tailwindcss.svg" alt="" className="w-4 h-4" />
    case 'NativeWind': return <img src="/nativewind.svg" alt="" className="w-4 h-4" />
    case 'Framer Motion': return <img src="/framermotion.svg" alt="" className="w-4 h-4" />
    case 'Reanimated': return <img src="/react.svg" alt="" className="w-4 h-4" />
    case 'Expo': return <img src="/expo.svg" alt="" className="w-4 h-4" />
    case 'Node.js': return <img src="/nodejs.svg" alt="" className="w-4 h-4" />
    case 'Shadcn UI': return <img src="/shadcn.svg" alt="" className="w-4 h-4" />
    case 'Firebase': return <img src="/firebase.svg" alt="" className="w-4 h-4" />
    case 'FirebaseDB': return <img src="/firebasedb.svg" alt="" className="w-4 h-4" />
    case 'PostgreSQL': return <img src="/postgresql.svg" alt="" className="w-4 h-4" />
    case 'Supabase': return <img src="/supabase.svg" alt="" className="w-4 h-4" />
    case 'MongoDB': return <img src="/mongo.svg" alt="" className="w-4 h-4" />
    case 'Cloudflare': return <img src="/cloudflare.svg" alt="" className="w-4 h-4" />
    case 'GitHub': return <img src="/github.svg" alt="" className="w-4 h-4" />
    case 'Postman': return <img src="/postman.svg" alt="" className="w-4 h-4" />
    case 'VS Code': return <img src="/vscode.svg" alt="" className="w-4 h-4" />
    case 'NPM': return <img src="/npm.svg" alt="" className="w-4 h-4" />
    case 'Git': return <img src="/git.svg" alt="" className="w-4 h-4" />
    case 'Figma': return <img src="/figma.svg" alt="" className="w-4 h-4" />
    default: return <Code className="w-4 h-4" style={{ color }} />
  }
}

const skillCategories = [
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
      { name: 'FirebaseDB', color: '#FFCA28' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Cloudflare', color: '#F38020' },
      { name: 'Vercel', color: '#000000' },
    ],
  },
]

const tools = ['Figma', 'Git', 'GitHub', 'Postman', 'VS Code', 'NPM']

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 tracking-tight">
            Tech Arsenal
          </h2>
          <p className="text-slate-500 mt-4 text-[15px] leading-relaxed">
            The modern toolkit I reach for to design, build, and ship
            scalable, high-performance products end-to-end.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/[0.04] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100">
                  <category.icon className="w-5 h-5 text-blue-600" strokeWidth={2.25} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">{category.title}</h3>
                    <span className="text-[11px] font-medium text-slate-400 tabular-nums">
                      {category.skills.length}
                    </span>
                  </div>
                  <p className="text-[13px] text-slate-500 mt-0.5 leading-snug">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[13px] font-medium text-slate-700 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all"
                  >
                    <TechIcon name={skill.name} color={skill.color} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/[0.04] transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 p-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100">
              <Wrench className="w-5 h-5 text-blue-600" strokeWidth={2.25} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">Daily Tools</h3>
                <span className="text-[11px] font-medium text-slate-400 tabular-nums">
                  {tools.length}
                </span>
              </div>
              <p className="text-[13px] text-slate-500 mt-0.5 leading-snug">
                The everyday workbench — design, version control, and developer experience.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <div
                key={tool}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[13px] font-medium text-slate-700 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <TechIcon name={tool} color="#64748b" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
