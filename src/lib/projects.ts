export type ProjectFeature = {
  title: string
  description: string
}

export type Project = {
  id: number
  slug: string
  title: string
  category: string
  description: string
  overview: string
  image: string
  technologies: string[]
  liveUrl: string
  repoUrl?: string
  features: ProjectFeature[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'foody-express',
    title: 'Foody Express',
    category: 'Mobile App',
    description:
      'Premium food delivery solution with real-time tracking, restaurant analytics, and seamless payment integration.',
    overview:
      'Foody Express is a native mobile experience built for customers who expect speed, clarity, and polish from the moment they open the app. Every interaction — from browsing menus across different restaurants to placing an order — was designed to feel instant and effortless, while the restaurant-side tooling gives operators the data they need to run a tight kitchen.',
    image: '/Cover.png',
    technologies: ['React Native', 'TypeScript', 'Expo', 'PayStack'],
    liveUrl:
      'https://expo.dev/accounts/clemzzy/projects/Foody/builds/b8d47e23-8586-4872-9029-3983b5213903',
    features: [
      {
        title: 'Real-time order tracking',
        description:
          'Live map updates and status timelines so customers always know exactly where their order is.',
      },
      {
        title: 'Restaurant analytics',
        description:
          'A dashboard for partners to monitor orders, revenue, and peak performance hours at a glance.',
      },
      {
        title: 'Secure Paystack payments',
        description:
          'One-tap checkout with saved cards, transfers, and split payments handled by Paystack.',
      },
      {
        title: 'Smooth native animations',
        description:
          'Fluid transitions and micro-interactions powered by Reanimated for a premium feel.',
      },
      {
        title: 'Modular design system',
        description:
          'A reusable component library keeps the UI consistent and fast to extend across new flows.',
      },
    ],
  },
  {
    id: 2,
    slug: 'expense-ai',
    title: 'ExpenseAI',
    category: 'Web App',
    description:
      'ExpenseAI is an AI powered Expense tracking App that helps you control your spending, manage your expenses, Create Budgets and gives you best suggestions on how to minimise expenses.',
    overview:
      'ExpenseAI turns everyday transactions into clear, actionable insights. It combines automatic categorization, pattern detection, and AI-driven advice to help users understand where their money actually goes and what to do about it through a clean, data-rich dashboard.',
    image: '/expense.png',
    technologies: [
      'Node.js',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'Paystack',
      'Shadcn',
      'REST API',
    ],
    liveUrl: 'https://expense-ai-ebon.vercel.app/',
    features: [
      {
        title: 'AI-driven spending analysis',
        description:
          'Detects recurring patterns, anomalies, and category trends to surface what matters.',
      },
      {
        title: 'Scan Receipt with AI',
        description:
          'Scan your receipts and let AI extract the relevant information and automatically categorize your expenses.',
      },
      {
        title: 'AI-powered insights',
        description:
          'Get personalized recommendations for saving, cutting back, and reaching goals faster.',
      },
      {
        title: 'Interactive dashboards',
        description:
          'Rich charts and summaries make monthly and yearly views easy to scan.',
      },
      {
        title: 'Secure authentication',
        description:
          'Firebase-backed auth with best-practice session handling and encrypted storage.',
      },
      {
        title: 'Paystack Integration',
        description:
          'Paystack-backed payments for users in-app subscriptions',
      },
    ],
  },
  {
    id: 3,
    slug: 'perpetual-wealth',
    title: 'Perpetual Wealth',
    category: 'Web App',
    description:
      'Full stack AI-driven financial intelligence platform for high-income earners that centralizes financial information, reduces complexity, and delivers actionable wealth strategies.',
    overview:
      'Perpetual Wealth AI isn\'t just a dashboard, it\'s an intelligent decision system that continuously scans, organizes, and optimizes your financial life.',
    image: '/pw.png',
    technologies: [
      'Node.js',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn',
      'Supabase',
      'Stripe',
      'Anthropic SDK',
      'Cloudflare',
      'Sentry',
      'Resend',
      'REST API',
    ],
    liveUrl: 'https://perpetualwealth.io/',
    features: [
      {
        title: 'Personalized onboarding',
        description:
          'Personalized onboarding based on your financial situation',
      },
      {
        title: 'Financial Document Vault',
        description:
          'Encrypted vault for tax returns, insurance, and estate plans.',
      },
      {
        title: 'Personalized Playbooks',
        description:
          'Delivers your personalized wealth playbook instantly. Stop guessing what to do next. Get a personalized, step-by-step wealth playbook tailored to your unique financial situation.',
      },
      {
        title: 'Solomon AI concierge Agent',
        description:
          'The AI agent is your financial concierge that organizes, answers questions, and provides instant analysis.',
      },
      {
        title: 'Tax Optimization Tools',
        description:
          'Perpetual Wealth helps you uncover tax-saving strategies in advance, so you can ask better questions and keep more of what you earn.',
      },
      {
        title: 'Cash Flow Tools',
        description:
          'Upload your financial documents to the Vault, and let Solomon AI do the rest.',
      },
      {
        title: 'Estate Planning',
        description:
          'Perpetual Wealth helps you understand what\'s at risk, organize what matters, and identify smart planning strategies, so you can protect your family and reduce unnecessary taxes.',
      },
      {
        title: 'Retirement Planning',
        description:
          'Perpetual Wealth helps you understand your options, model future outcomes, and continuously optimize savings, taxes, and investments so you can retire with clarity and confidence.',
      },
      {
        title: 'Admin Dashboard',
        description:
          'Admin dashboard for managing users, subscriptions, and other platform features.',
      },
      {
        title: 'Stripe subscription billing',
        description:
          'End-to-end subscription management with upgrades, trials, and invoicing handled by Stripe.',
      },
      {
        title: 'Production-grade infrastructure',
        description:
          'Cloudflare for edge performance, Sentry for observability, and Resend for transactional email.',
      },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
