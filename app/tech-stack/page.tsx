import { resumeData } from '@/data/resume'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Tech Stack</h1>
        </div>

        <div className="space-y-8">
          {resumeData.techStack.map((category) => (
            <div key={category.name}>
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                {category.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
