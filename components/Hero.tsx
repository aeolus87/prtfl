import { PersonalInfo } from '@/types'
import { Mail, MapPin, Github, MessageCircle, Linkedin } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

interface HeroProps {
  personal: PersonalInfo
}

export default function Hero({ personal }: HeroProps) {
  return (
    <section className="pt-12 pb-8">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Avatar */}
        <div className="relative w-32 h-32 md:w-38 md:h-38">
          {/* Light mode image */}
          <Image
            src="/capybara_day.jpg"
            alt="Profile"
            fill
            className="rounded-2xl object-cover dark:hidden"
            priority
          />
          {/* Dark mode image */}
          <Image
            src="/capybara_night.png"
            alt="Profile"
            fill
            className="rounded-2xl object-cover hidden dark:block"
            priority
          />
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
              Email
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={`https://wa.me/${personal.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-green-500 text-green-600 dark:text-green-400 text-sm rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
