import { ResumeData } from '@/types'

export const resumeData: ResumeData = {
  personal: {
    name: 'Julius Callejo',
    title: 'Full Stack Engineer — AI, Fintech & Real-Time Systems',
    availability: 'Open to US remote opportunities',
    location: 'Quezon City, Metro Manila',
    email: 'callejojuls@gmail.com',
    phone: '+63 9995359698',
    linkedin: 'https://linkedin.com/in/jcallejo',
    github: 'https://github.com/aeolus87',
    whatsapp: '+639760861727',
    medium: 'https://medium.com/@aeothedev',
  },

  summary: `Full Stack Engineer specializing in RAG and LLMs, LLM-orchestrated production APIs, real-time UIs, and AI-backed products shipped end to end. Experienced with React 19, TypeScript, NestJS, Fastify, and FastAPI on MongoDB, Redis, and PostgreSQL, plus WebSockets, JWT auth, and Stripe. Proven delivery on voice automation at high caller scale (2M+), local speech stacks (VAD/STT/TTS, gRPC, Docker), Hyperliquid-native AI trading (DAG flows, strategy builder), and investor diligence with Qdrant and multi-connector hybrid retrieval.`,

  techStack: [
    {
      name: 'Frontend',
      skills: [
        'React 19',
        'Next.js',
        'Vite',
        'TypeScript',
        'Zustand',
        'TanStack Query',
        'Tailwind CSS',
        'Three.js',
        'Cesium',
      ],
    },
    {
      name: 'Backend',
      skills: [
        'Node.js (NestJS/Fastify)',
        'Python (FastAPI)',
        'REST APIs',
        'WebSockets / Socket.IO',
        'JWT auth',
        'Stripe (billing & webhooks)',
        'Redis (cache & rate limits)',
        'TypeORM',
      ],
    },
    {
      name: 'AI, RAG & Blockchain',
      skills: [
        'OpenAI API (embeddings & LLM)',
        'RAG (retrieval, grounding, citations)',
        'Gemini 2.0',
        'Groq (Llama)',
        'OpenRouter',
        'Ethers.js',
        'Solana Web3.js',
      ],
    },
    {
      name: 'Data & storage',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Qdrant (vector)', 'AWS S3'],
    },
    {
      name: 'DevOps & quality',
      skills: [
        'Docker',
        'docker-compose',
        'GitHub Actions CI/CD',
        'Git',
        'Swagger / OpenAPI',
        'Playwright (E2E)',
        'pytest',
        'Puppeteer',
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
        'Engineered voice automation infrastructure supporting high-scale caller traffic (2M+), with latency-sensitive paths and maintainable service boundaries.',
        'Integrated LLM orchestration through OpenRouter for in-house model routing and better end-to-end latency vs. third-party API dependency.',
        'Built real-time collaborative modules with NestJS and Socket.IO for synchronized workspace state without polling-heavy client patterns.',
        'Integrated Polygon.io live market data into charting experiences across sessions and multi-tenant deployments.',
        'Developed multi-tenant property inspection flows with Leaflet and Puppeteer-driven PDF report generation.',
        'Implemented Gemini 2.0 via OpenRouter for internal documentation and meeting summaries with explicit prompt and context contracts.',
      ],
      subsections: [
        {
          title: 'Dialbot Local Model',
          period: 'Jan 2026 – Mar 2026',
          achievements: [
            'Implemented CPU voice-activity migration to Silero (ONNX): session/config contracts, vad runner, Docker/env templates, and expanded VAD unit tests.',
            'Built GPU speech-to-text surface (Python): service entrypoints, requirements, and web harness scripts for end-to-end STT validation.',
            'Integrated operator tooling: pathway graph visualization (PathwayNodeMap.jsx) and Chat-aligned UI; updated routes/schemas for harness workflows.',
            'Developed TTS exploration: F5-TTS layout, voice assets, and repository normalization for consistent deployment references.',
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
        'Engineered Hotel Management System–to–CMS synchronization via MongoDB for bookings, inventory, and content consistency.',
        'Optimized admin dashboard responsiveness using MobX for high-throughput hospitality workflows.',
        'Migrated legacy frontends to React and TypeScript, reducing technical debt by ~30% through component and state standardization.',
      ],
    },
  ],

  projects: [
    {
      name: 'Moniq',
      subtitle:
        'Full-stack AI trading platform — graph-defined autonomous agents, exchange execution, MongoDB control plane',
      purpose:
        'Hyperliquid-centric trading with executable DAG flows, per-role AI agents, strategy builder, risk rules, and a production FastAPI + React operator surface.',
      techStack:
        'FastAPI, Motor/MongoDB, Redis, React, Vite, TypeScript, Hyperliquid, JWT, Stripe, Socket.IO, pytest',
      pinned: true,
      description: [
        'Modular FastAPI API (auth, RBAC, plans, wallets, orders, positions, market, flows, AI agents, strategy builder, risk, observability) with Redis caching, S3 avatars, Resend email, and standardized JSON envelopes.',
        'Executable DAG flow runtime: pipeline stages (scanner → analysts → vote_join → risk → entry → monitor), strategy modes, risk limits, pacing state, and plain-English flow summaries for review UI.',
        'Per-role AI agents with central model/prompt config, persisted decisions, and conversations APIs; Strategy Builder turns LLM research into deployable graphs via POST /api/v1/strategy-builder/create.',
        'React + Vite app: marketing/auth/onboarding, dashboard, user agents/logs, settings, admin consoles, dev-gated flow graph editor, and Polycopy vertical for copy-trading-style workflows.',
        'WebSocket-oriented position monitoring/alerts, encrypted credential storage for wallets/providers, optional HMAC-verified webhook ingest for external signals, and pytest suites with unit/functional/integration markers.',
      ],
    },
    {
      name: 'DealScannr',
      subtitle: 'B2B pre-call diligence — angels & micro-VCs',
      purpose:
        'ICP: investors screening high deal volume who need structured, source-backed answers before first calls—not another generic AI search. Positioned between Crunchbase-style snapshots and enterprise data rooms.',
      techStack: 'FastAPI, React 19, Vite, MongoDB, Qdrant, Redis, RAG, Stripe billing, Docker',
      pinned: true,
      link: 'https://github.com/aeolus87/dealscannr',
      description: [
        'Wedge: ~1-minute company scan pulling SEC, federal courts, GitHub, hiring, news, Wikipedia into one verdict + risk triage + 3 evidence-backed “questions to ask on the call.”',
        'Monetization-ready: Stripe-integrated product surface; designed for subscription tiers (e.g. pro SMB pricing), not one-off demos.',
        'Investor-grade trust: outputs are citation-grounded with validation and explicit INSUFFICIENT paths when evidence is thin—reduces reputational risk vs. black-box LLM answers.',
      ],
    },
    {
      name: 'HQ',
      subtitle: 'Full-stack work management — Jira-style boards, real-time collab, 2-person team',
      purpose:
        'Distributed team workspace with Socket.IO sync, LiveKit video, Gemini-assisted task creation, and Cesium/Three.js for spatial project context.',
      techStack: 'React 19, Node.js, Socket.IO, LiveKit, Gemini 2.0, Cesium, Three.js, Docker, GitHub Actions',
      description: [
        'Kanban/sprint boards with Socket.IO real-time updates, presence, and conflict-safe mutations for distributed teams.',
        'LiveKit video plus Gemini 2.0 assistant for natural-language task creation, linking discussion to tracked work.',
        'Geospatial/3D UX with Cesium and Three.js for globe-style project context beyond flat lists.',
        'Containerized modular backend (15+ feature modules) and GitHub Actions CI/CD for repeatable builds and deploys.',
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
      description: 'Covers fundamental cybersecurity concepts, attack vectors, and defense strategies. Relevant for SOC roles as it builds a foundational understanding of threats, vulnerabilities, and risk mitigation.',
    },
    {
      name: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco',
      year: '2023',
      description: 'Teaches networking basics like TCP/IP, routing, and switching. Important for SOC Analysts, as understanding network traffic is crucial for detecting anomalies and attacks.',
    },
    {
      name: 'CCNAv7: Enterprise Networking, Security, and Automation',
      issuer: 'Cisco',
      year: '2023',
      description: 'Covers advanced networking concepts, automation, and security best practices. Relevant for SOC Analysts who need to analyze security logs and identify threats in enterprise networks.',
    },
    {
      name: 'Network Security',
      issuer: 'Cisco',
      year: '2023',
      description: 'Focuses on securing networks, firewalls, VPNs, and intrusion prevention. Directly applies to SOC roles as analysts monitor and respond to security incidents in network environments.',
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      year: '2023',
      description: 'Introduces cybersecurity principles, security tools, and best practices. Useful for entry-level SOC roles as it gives a broad overview of security operations.',
    },
  ],

  education: {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'AMA University',
    graduationDate: '2025',
  },
}
