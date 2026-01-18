import { PersonalInfo } from '@/types'
import { Mail, Calendar, MapPin } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

interface HeroProps {
  personal: PersonalInfo
}

export default function Hero({ personal }: HeroProps) {
  return (
    <section className="pt-12 pb-8">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Avatar placeholder */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-600 flex items-center justify-center text-3xl font-bold text-neutral-500 dark:text-neutral-300">
          JC
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
              {personal.name}
            </h1>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{personal.location}</span>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 font-medium mb-4">
            {personal.title}
          </p>

          <div className="flex flex-wrap gap-2">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
            <a
              href={personal.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Visit Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
