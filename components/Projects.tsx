'use client'

import { Project } from '@/types'
import { FolderGit2, Pin, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react'
import { useMemo, useState } from 'react'

interface ProjectsProps {
  projects: Project[]
  githubProfileUrl?: string
  className?: string
}

function techChips(techStack: string) {
  return techStack.split(',').map((s) => s.trim()).filter(Boolean)
}

export default function Projects({
  projects,
  githubProfileUrl = 'https://github.com/aeolus87',
  className,
}: ProjectsProps) {
  const ordered = useMemo(() => {
    const pinned = projects.filter((p) => p.pinned)
    const rest = projects.filter((p) => !p.pinned)
    return [...pinned, ...rest]
  }, [projects])

  const [openName, setOpenName] = useState<string | null>(
    () => ordered.find((p) => p.pinned)?.name ?? null,
  )

  const toggle = (name: string) => {
    setOpenName((prev) => (prev === name ? null : name))
  }

  return (
    <div
      className={`p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 ${className || ''}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
          <h2 className="font-semibold text-sm text-neutral-900 dark:text-white">Projects</h2>
        </div>
        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          GitHub
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="flex flex-col gap-1.5">
        {ordered.map((project) => {
          const isOpen = openName === project.name
          const chips = techChips(project.techStack)

          return (
            <div
              key={project.name}
              className={`rounded-md border transition-colors ${
                project.pinned
                  ? 'border-amber-200/80 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/15'
                  : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/40'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(project.name)}
                className="w-full text-left py-2 px-2.5 flex items-start gap-2 rounded-md hover:bg-neutral-100/90 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <span className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400">
                  {project.pinned ? (
                    <Pin className="w-3.5 h-3.5 fill-current" aria-hidden />
                  ) : (
                    <ChevronRight
                      className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                      aria-hidden
                    />
                  )}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="flex flex-wrap items-center gap-1.5">
                    <span className="text-sm font-medium text-neutral-900 dark:text-white leading-tight">
                      {project.name}
                    </span>
                    {project.pinned && (
                      <span className="text-[9px] font-semibold uppercase tracking-wide px-1 py-px rounded bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200">
                        Pinned
                      </span>
                    )}
                  </span>
                  <span className="block text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                    {project.subtitle}
                  </span>
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 text-neutral-400 transition-transform mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>

              {isOpen && (
                <div className="px-2.5 pb-2.5 pt-1 pl-9 space-y-2 border-t border-neutral-200/70 dark:border-neutral-700/60">
                  {project.purpose && (
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-300 leading-snug">
                      {project.purpose}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1">
                    {chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-1.5 py-px text-[10px] font-mono rounded border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1 text-[11px] text-neutral-600 dark:text-neutral-300 list-disc pl-3.5 leading-snug">
                    {project.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Repo
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md border border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
