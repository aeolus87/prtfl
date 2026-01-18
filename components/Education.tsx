import { Education as EducationType } from '@/types'
import { GraduationCap } from 'lucide-react'

interface EducationProps {
  education: EducationType
}

export default function Education({ education }: EducationProps) {
  const year = education.graduationDate.match(/\d{4}/)?.[0] || ''

  return (
    <div className="flex items-start gap-3">
      <div className="mt-1.5">
        <div className="w-2 h-2 rounded-full bg-neutral-300" />
      </div>
      <div className="flex-1 flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-neutral-400" />
            <h3 className="text-sm font-medium text-neutral-900">
              {education.degree.replace('Bachelor of Science in ', 'BS ')}
            </h3>
          </div>
          <p className="text-xs text-neutral-500">{education.institution}</p>
        </div>
        <span className="text-xs text-neutral-400">{year}</span>
      </div>
    </div>
  )
}
