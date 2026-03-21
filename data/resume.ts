import { ResumeData } from '@/types'

export const resumeData: ResumeData = {
  personal: {
    name: 'Julius Callejo',
    title: 'Full Stack Engineer | Aspiring SOC Analyst',
    location: 'Quezon City, Metro Manila',
    email: 'callejojuls@gmail.com',
    phone: '+63 9995359698',
    linkedin: 'https://linkedin.com/in/jcallejo',
    github: 'https://github.com/aeolus87',
    whatsapp: '+639760861727',
    medium: 'https://medium.com/@aeothedev',
  },

  summary: `Full Stack Engineer who ships fast: AI-integrated products, real-time systems, and full-stack features from idea to production. Strong in React 19, NestJS, and Python (FastAPI)—comfortable owning APIs, UIs, and infra touches (Docker, CI/CD) while keeping codebases clear and easy to extend.`,

  socSummary: `Aspiring SOC Analyst with a strong foundation in networking, cybersecurity fundamentals, and hands-on experience in security monitoring, log analysis, and threat detection. Skilled in using SIEM tools, conducting incident response, and building homelabs for practical experience. Currently expanding knowledge through TryHackMe and Cybrary's SOC Analyst course. Passionate about cybersecurity and seeking an entry-level SOC Analyst role.`,

  techStack: [
    {
      name: 'Frontend',
      skills: [
        'React 19',
        'Next.js',
        'Vite',
        'TypeScript',
        'Zustand',
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

  socSkills: [
    {
      name: 'Networking',
      skills: ['TCP/IP', 'Firewalls', 'VLANs', 'OSI Model'],
    },
    {
      name: 'Cybersecurity Tools',
      skills: ['Wazuh', 'Splunk (basic)', 'Wireshark', 'Nmap', 'Burp Suite'],
    },
    {
      name: 'SIEM & Log Analysis',
      skills: ['Wazuh (hands-on)', 'Basic Splunk'],
    },
    {
      name: 'Threat Intelligence',
      skills: ['MITRE ATT&CK', 'IDS/IPS concepts'],
    },
    {
      name: 'Operating Systems',
      skills: ['Windows', 'Linux (Kali, Ubuntu, Debian)'],
    },
    {
      name: 'Scripting & Automation',
      skills: ['Basic Python', 'Bash'],
    },
    {
      name: 'Virtualization & Homelab',
      skills: ['VMware', 'VirtualBox'],
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
        'Voice & LLM: Shipped voice-automation features quickly across iterations—moved from third-party APIs to an in-house LLM orchestration layer via OpenRouter for better latency and control.',
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
      subtitle: 'Work management platform',
      techStack: 'React 19, Node.js, Socket.IO, LiveKit, Cesium',
      description: [
        'Jira-style boards, real-time collab (Socket.IO), LiveKit video, Gemini assistant, Cesium globe.',
        'Modular backend (15+ modules), Docker, GitHub Actions.',
      ],
    },
    {
      name: 'Moniqo',
      subtitle: 'AI trading engine',
      techStack: 'FastAPI, React 19, MongoDB, Redis',
      description: [
        'Agents + Gemini/Groq for sentiment; Binance & Polygon.io data; Ethers/Solana wallets.',
        'Redis caching and rate limits for stable high-throughput API.',
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
    graduationDate: 'Graduated October 2025',
  },
}
