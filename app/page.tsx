import { resumeData } from '@/data/resume'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Hero personal={resumeData.personal} />

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 pb-6">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <About summary={resumeData.summary} socSummary={resumeData.socSummary} />
            <TechStack techStack={resumeData.techStack} limit={4} />
            <TechStack
              techStack={resumeData.socSkills}
              limit={3}
              title="Security Skills"
              variant="security"
            />
            <Projects
              projects={resumeData.projects}
              githubProfileUrl={resumeData.personal.github}
              className="flex-1"
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <Experience experience={resumeData.experience} education={resumeData.education} />
            <Certifications certifications={resumeData.certifications} limit={3} />
            <Blog blogs={resumeData.blogs} className="flex-1" />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
