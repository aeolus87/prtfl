import { Project } from '@/types'
import { FolderGit2, ChevronRight } from 'lucide-react'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
          <h2 className="font-semibold text-neutral-900 dark:text-white">Recent Projects</h2>
        </div>
        <span className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
          View All
          <ChevronRight className="w-3 h-3" />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            <h3 className="text-sm font-medium text-neutral-900 dark:text-white">{project.name}</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
              {project.subtitle}
            </p>
            <span className="inline-block px-2 py-0.5 text-[10px] font-mono bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-neutral-500 dark:text-neutral-400">
              {project.link || project.techStack.split(',')[0].toLowerCase().replace(/\s/g, '-')}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
