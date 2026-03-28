import { Experience as ExperienceType, Education as EducationType } from '@/types'
import { Briefcase } from 'lucide-react'

interface ExperienceProps {
  experience: ExperienceType[]
  education: EducationType
}

export default function Experience({ experience, education }: ExperienceProps) {
  return (
    <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
        <h2 className="font-semibold text-neutral-900 dark:text-white">Experience</h2>
      </div>
      <div className="space-y-4">
        {experience.map((job, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1.5">
              <div
                className={`w-2 h-2 rounded-full ${job.current ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-300 dark:bg-neutral-600'}`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                    {job.role}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{job.company}</p>
                  {job.location && (
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">
                      {job.location}
                    </p>
                  )}
                </div>
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400 text-right max-w-[7.5rem] leading-tight px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded shrink-0">
                  {job.period}
                </span>
              </div>
              {job.achievements.length > 0 && (
                <ul className="mt-2 space-y-1 text-[11px] text-neutral-600 dark:text-neutral-400 list-disc pl-3.5 leading-snug">
                  {job.achievements.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

        {/* Education in timeline */}
        <div className="flex items-start gap-3">
          <div className="mt-1.5">
            <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                  {education.degree}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {education.institution}
                </p>
              </div>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded shrink-0">
                {education.graduationDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
