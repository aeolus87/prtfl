import { Experience as ExperienceType, Education as EducationType } from '@/types'
import { Briefcase, ChevronDown } from 'lucide-react'

interface ExperienceProps {
  experience: ExperienceType[]
  education: EducationType
}

export default function Experience({ experience, education }: ExperienceProps) {
  return (
    <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2 mb-3">
        <Briefcase className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
        <h2 className="font-semibold text-neutral-900 dark:text-white">Experience</h2>
      </div>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {experience.map((job, index) => (
          <details
            key={index}
            className="pt-3 first:pt-0 pb-3 last:pb-0 [&[open]_summary_.exp-chevron]:rotate-180"
          >
            <summary className="flex cursor-pointer list-none gap-3 [&::-webkit-details-marker]:hidden">
              <div className="mt-1.5 shrink-0 w-2 flex justify-center">
                <div
                  className={`w-2 h-2 rounded-full ${job.current ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-300 dark:bg-neutral-600'}`}
                />
              </div>
              <div className="flex-1 min-w-0 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-white leading-snug">
                    {job.role}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{job.company}</p>
                  {job.location && (
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 line-clamp-1">
                      {job.location}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-[10px] text-neutral-500 dark:text-neutral-400 text-right max-w-[6.5rem] leading-tight px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">
                    {job.period}
                  </span>
                  <ChevronDown
                    className="exp-chevron w-3.5 h-3.5 text-neutral-400 transition-transform shrink-0"
                    aria-hidden
                  />
                </div>
              </div>
            </summary>
            {job.achievements.length > 0 && (
              <ul className="mt-2 ml-5 pl-3.5 space-y-1 text-[11px] text-neutral-600 dark:text-neutral-400 list-disc leading-snug">
                {job.achievements.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}
          </details>
        ))}

        <div className="flex items-start gap-3 pt-3">
          <div className="mt-1.5 shrink-0 w-2 flex justify-center">
            <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
          </div>
          <div className="flex-1 min-w-0 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {education.institution}
              </p>
            </div>
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded shrink-0">
              {education.graduationDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
