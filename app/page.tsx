import { resumeData } from '@/data/resume'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Hero personal={resumeData.personal} />

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 pb-6">
          {/* Left column */}
          <div className="space-y-6">
            <About summary={resumeData.summary} />
            <TechStack techStack={resumeData.techStack} limit={2} />
            <Projects projects={resumeData.projects} />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <Experience experience={resumeData.experience} education={resumeData.education} />
            <Contact personal={resumeData.personal} />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
