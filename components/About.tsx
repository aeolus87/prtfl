import { FileText } from 'lucide-react'

interface AboutProps {
  summary: string
}

export default function About({ summary }: AboutProps) {
  return (
    <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
        <h2 className="font-semibold text-neutral-900 dark:text-white">About</h2>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{summary}</p>
    </div>
  )
}
