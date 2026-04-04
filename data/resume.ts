import { ResumeData } from '@/types'

export const resumeData: ResumeData = {
  personal: {
    name: 'Julius Callejo',
    title: 'AI Solutions Engineer | Full-Stack AI Engineer',
    location: 'Quezon City, Metro Manila',
    email: 'callejojuls@gmail.com',
    phone: '+63 9995359698',
    linkedin: 'https://linkedin.com/in/jcallejo',
    github: 'https://github.com/aeolus87',
    whatsapp: '+639760861727',
    medium: 'https://medium.com/@aeothedev',
  },

  summary: `Full-stack engineer who architects and ships production AI systems across orchestration, retrieval, grounding, agents, and inference routing. Leads AI tool evaluation and adoption across engineering, product, and operations at Kooya. Shipped DealScannr (grounded diligence RAG), Moniq (DAG-based trading agents on Hyperliquid), and HQ (real-time work management with Gemini and LiveKit).`,

  techStack: [
    {
      name: 'AI / LLMs',
      skills: [
        'RAG',
        'Hybrid retrieval',
        'Grounding',
        'LLM orchestration',
        'Structured outputs',
        'Agents',
        'OpenRouter',
        'Gemini',
        'Claude',
        'OpenAI',
        'Grok',
        'Qdrant',
      ],
    },
    {
      name: 'Backend',
      skills: [
        'FastAPI',
        'NestJS',
        'Python',
        'Node.js',
        'MongoDB',
        'Redis',
        'PostgreSQL',
        'WebSockets',
        'JWT',
        'Stripe',
      ],
    },
    {
      name: 'Frontend & Infra',
      skills: [
        'React 19',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Docker',
        'GitHub Actions',
        'AWS S3',
      ],
    },
    {
      name: 'Testing & Tooling',
      skills: [
        'Playwright',
        'pytest',
        'Puppeteer',
        'OpenAPI / Swagger',
        'BullMQ',
      ],
    },
  ],

  experience: [
    {
      company: 'Kooya',
      location: 'Laguna Beach, CA / BGC',
      role: 'Full Stack Developer',
      period: 'Apr 2025 – Present',
      current: true,
      achievements: [
        'Led AI tool evaluation and the adoption roadmap across engineering, product, and operations (CEO-appointed), covering coding assistants, inference routing, and production LLM workflows company-wide.',
        'Supported 2M+ callers on voice automation infrastructure with latency-sensitive paths and clear service boundaries.',
        'Routed core LLM inference through OpenRouter for hosted product surfaces, decoupling single-vendor lock-in and enabling per-workload model selection.',
        'Standardized Gemini 2.0 usage behind explicit prompt and context contracts for internal documentation, meeting summaries, and workflow automation.',
        'Synchronized workspace state with NestJS and Socket.IO without polling-heavy client patterns.',
        'Integrated Polygon.io live market data into charting across sessions and multi-tenant deployments.',
        'Automated field-to-PDF inspection reports with Leaflet map flows and Puppeteer-driven PDF generation.',
      ],
      subsections: [
        {
          title: 'Dialbot Local Model',
          period: 'Jan 2026 – Mar 2026',
          achievements: [
            'Chose Silero ONNX for CPU voice-activity detection to tighten the VAD path with session contracts, a dedicated runner, Docker templates, and expanded unit tests before GPU STT.',
            'Built a GPU speech-to-text surface in Python with service entrypoints, requirements, and web harness scripts for repeatable end-to-end STT checks.',
            'Shipped operator tooling including pathway graph visualization and Chat-aligned UI; updated web-app routes and schemas for harness workflows.',
            'Normalized F5-TTS layouts, voice assets, and deployment references for consistent TTS rollouts.',
          ],
        },
      ],
    },
    {
      company: 'FilDev',
      location: '',
      role: 'Full Stack Web Developer Intern',
      period: 'Sep 2024 – Dec 2024',
      achievements: [
        'Synchronized hotel management and CMS data in MongoDB for bookings, inventory, and content under concurrent updates.',
        'Improved admin dashboard responsiveness with MobX for high-throughput front-desk workflows.',
        'Cut technical debt about 30% by migrating legacy frontends to React and TypeScript with standardized components and state patterns.',
      ],
    },
  ],

  projects: [
    {
      name: 'DealScannr',
      subtitle: 'B2B investor diligence — grounded, citation-backed RAG',
      purpose:
        'Surfaces defensible pre-call answers by combining hybrid retrieval with grounded, citation-backed LLM output.',
      techStack: 'RAG, Qdrant, FastAPI, React, Redis, Stripe',
      pinned: true,
      link: 'https://github.com/aeolus87/dealscannr',
      description: [
        'Chose hybrid retrieval over pure vector search to anchor results on SEC EDGAR, CourtListener, GitHub, hiring signals, news, and Wikipedia, with web fallbacks for litigation-heavy questions.',
        'Designed the grounding layer with chunk-linked claims, citation rules, validation passes, and explicit insufficient-data paths.',
        'Shipped subscription monetization with Stripe credits, tiered access, and webhook-aligned billing.',
        'Shipped verdict-oriented outputs (MEET / PASS / FLAG / INSUFFICIENT), risk triage, executive briefs, and call-prep prompts from retrieved chunks; covered APIs with pytest and E2E with Playwright.',
      ],
    },
    {
      name: 'Moniq',
      subtitle: 'Autonomous trading on Hyperliquid — DAG-based agent flows',
      purpose:
        'Graph-defined agent flows so risk limits, pacing, and execution stages stay explicit and reviewable before capital moves.',
      techStack: 'FastAPI, Redis, React, MongoDB, Hyperliquid, TypeScript',
      pinned: true,
      description: [
        'Architected DAG-based agent flows instead of a single linear chain to isolate scanner, analyst, risk, entry, and monitor stages with limits, cooldowns, and pacing for safer autonomous trading.',
        'Built the AI Strategy Builder from natural-language intent to deployable graphs via StrategyProfile, a deterministic compiler, and risk presets; centralized per-role agents with persisted decisions.',
        'Unified trading, billing, and identity in one modular FastAPI service with Motor MongoDB, Redis caching and rate limiting, JWT, S3 avatars, and Resend email.',
        'Shipped a React/Vite client with onboarding, dashboards, admin, and a dev-gated flow editor; added WebSocket position monitoring and an optional HMAC-verified partner webhook path that safely disables when unconfigured.',
      ],
    },
    {
      name: 'HQ',
      subtitle: 'Distributed work management — live boards, voice/video, natural-language task capture',
      purpose:
        'Ties live boards, voice/video, and natural-language task capture so discussion and tracked work stay in one product surface.',
      techStack: 'Gemini, LiveKit, Socket.IO, Docker, GitHub Actions',
      description: [
        'Synchronized Kanban and sprint boards with presence and conflict-safe mutations for distributed teams by choosing Socket.IO over polling.',
        'Captured natural-language tasks from live discussion in the same workspace as tracked work using LiveKit and Gemini 2.0.',
        'Built globe-style project context with Cesium and Three.js for spatial oversight beyond flat lists.',
        'Containerized a modular backend with 15+ feature modules and automated builds and deploys with GitHub Actions CI/CD.',
      ],
    },
  ],

  blogs: [
    {
      title: 'Home Security Lab',
      subtitle: 'Personal Security Operations Lab',
      description: [
        'Built a homelab using VMware with Kali Linux and Windows machines for hands-on security practice.',
        'Deployed Wazuh SIEM for log collection and threat detection across the virtual environment.',
        'Simulated real-world attacks (brute-force, malware analysis) and analyzed logs to understand attack patterns.',
      ],
      link: 'https://medium.com/@aeothedev/building-a-private-test-lab-connecting-windows-11-and-kali-linux-in-vmware-5e24ba347dd8',
    },
  ],

  certifications: [
    {
      name: 'SOC Analyst Level 1',
      issuer: 'Cybrary',
      year: '2025',
      description: 'Hands-on experience in log analysis, security monitoring, and incident response.',
    },
    {
      name: 'Cybersecurity Essentials',
      issuer: 'Cisco',
      year: '2024',
      description: 'Covers fundamental cybersecurity concepts, attack vectors, and defense strategies.',
    },
    {
      name: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco',
      year: '2023',
      description: 'Networking basics — TCP/IP, routing, and switching.',
    },
    {
      name: 'CCNAv7: Enterprise Networking, Security, and Automation',
      issuer: 'Cisco',
      year: '2023',
      description: 'Advanced networking concepts, automation, and security best practices.',
    },
    {
      name: 'Network Security',
      issuer: 'Cisco',
      year: '2023',
      description: 'Securing networks, firewalls, VPNs, and intrusion prevention.',
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      year: '2023',
      description: 'Cybersecurity principles, security tools, and best practices.',
    },
  ],

  education: {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'AMA University',
    graduationDate: '2025',
  },
}
