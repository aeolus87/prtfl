import { TechCategory } from '@/types'
import { Layers, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface TechStackProps {
  techStack: TechCategory[]
  limit?: number
}

export default function TechStack({ techStack, limit = 2 }: TechStackProps) {
  const displayedCategories = techStack.slice(0, limit)

  return (
    <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
          <h2 className="font-semibold text-neutral-900 dark:text-white">Tech Stack</h2>
        </div>
        <Link
          href="/tech-stack"
          className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          View All
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="space-y-4">
        {displayedCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-xs font-medium text-neutral-900 dark:text-white mb-2">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.slice(0, 6).map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
