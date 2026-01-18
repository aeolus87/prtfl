import { ResumeData } from '@/types'

export const resumeData: ResumeData = {
  personal: {
    name: 'Julius Callejo',
    title: 'Full Stack Engineer',
    location: 'Quezon City, Metro Manila',
    email: 'callejojuls@gmail.com',
    phone: '+63 9995359698',
    linkedin: 'https://linkedin.com/in/jcallejo',
    portfolio: 'https://aeothedev.vercel.app',
  },

  summary: `Full Stack Engineer with experience building and maintaining high-scale, AI-integrated web applications. Proven track record in supporting platforms handling 2M+ callers, developing enterprise management tools, and implementing real-time collaborative systems. Expert in React 19, NestJS, and Python (FastAPI) with a focus on delivering clean, maintainable, and scalable codebases through continuous learning and modern architectural patterns.`,

  techStack: [
    {
      name: 'Frontend',
      skills: [
        'React 19',
        'Next.js',
        'TypeScript',
        'Zustand',
        'Tailwind CSS',
        'Radix UI',
        'Three.js',
        'Cesium',
      ],
    },
    {
      name: 'Backend',
      skills: [
        'Node.js (NestJS/Express 5)',
        'Python (FastAPI)',
        'WebSockets',
        'Redis caching',
        'TypeORM',
      ],
    },
    {
      name: 'AI & Blockchain',
      skills: ['Gemini 2.0', 'Groq (Llama)', 'OpenRouter', 'Ethers.js', 'Solana Web3.js'],
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'AWS S3'],
    },
    {
      name: 'DevOps',
      skills: ['Docker', 'GitHub Actions CI/CD', 'Git', 'Swagger/OpenAPI', 'Puppeteer'],
    },
  ],

  experience: [
    {
      company: 'Kooya',
      location: 'Laguna Beach, CA / BGC',
      role: 'Full Stack Developer',
      period: 'April 2025 – Present',
      current: true,
      achievements: [
        'Voice Automation & Scale: Contributed to the development and scaling of a voice automation infrastructure handling 2 million+ callers. Supported the transition from third-party APIs to an in-house LLM orchestration layer via OpenRouter, improving system latency.',
        'Collaborative Trading System: Implemented real-time collaborative modules using NestJS and Socket.IO. Integrated Polygon.io for live market data and assisted in building synchronized charting tools.',
        'Inspection & Survey Platform: Developed a multi-tenant property inspection system featuring map-based location tracking (Leaflet) and automated PDF report generation via Puppeteer.',
        'AI Feature Integration: Leveraged Gemini 2.0 via OpenRouter to implement automated internal documentation tools and real-time meeting summaries under team guidance.',
      ],
    },
    {
      company: 'FilDev',
      location: '',
      role: 'Full Stack Web Developer Intern',
      period: 'Sept 2024 – Dec 2024',
      achievements: [
        'Engineered a Hotel Management System (HMS) linked to a central CMS via MongoDB, ensuring data synchronization for guest bookings and inventory management.',
        'Utilized MobX for state management in high-interaction admin dashboards, improving UI responsiveness for hospitality staff.',
        'Migrated legacy codebases to React/TypeScript, reducing maintenance overhead and technical debt by 30%.',
      ],
    },
  ],

  projects: [
    {
      name: 'HQ',
      subtitle: 'Full-Stack Work Management Platform',
      techStack: 'React 19, Node.js, Socket.IO, LiveKit, Cesium',
      description: [
        'Developed a production-ready "Jira-style" platform with a 2-person team. Features include Kanban/Sprint boards, real-time collaboration (Socket.IO), and LiveKit video conferencing.',
        'Integrated an AI Assistant (Gemini 2.0) for natural language task creation and 3D globe visualizations using Cesium.',
        'Architected a modular backend with 15+ feature modules, Docker containerization, and GitHub Actions CI/CD.',
      ],
    },
    {
      name: 'Moniqo',
      subtitle: 'AI-Powered Trading Engine',
      techStack: 'FastAPI, React 19, MongoDB, Redis, AI Agents',
      description: [
        'Built a full-stack trading engine with automated agents utilizing Gemini and Groq for real-time sentiment analysis and decision-making.',
        'Connected Binance and Polygon.io for live market data and utilized Ethers.js/Solana Web3.js for secure blockchain wallet interactions.',
        'Implemented caching and rate-limiting patterns via Redis to ensure backend stability and performance during high-data-flow periods.',
      ],
    },
  ],

  education: {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'AMA University',
    graduationDate: 'Graduated October 2025',
  },
}
