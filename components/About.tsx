'use client'

import { useState } from 'react'
import { FileText, Code, Shield } from 'lucide-react'

interface AboutProps {
  summary: string
  socSummary: string
}

export default function About({ summary, socSummary }: AboutProps) {
  const [activeTab, setActiveTab] = useState<'dev' | 'soc'>('dev')

  return (
    <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
        <h2 className="font-semibold text-neutral-900 dark:text-white">About</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('dev')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${activeTab === 'dev'
              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
        >
          <Code className="w-3 h-3" />
          Full Stack Dev
        </button>
        <button
          onClick={() => setActiveTab('soc')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${activeTab === 'soc'
              ? 'bg-green-600 dark:bg-green-500 text-white'
              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
        >
          <Shield className="w-3 h-3" />
          SOC Analyst
        </button>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {activeTab === 'dev' ? summary : socSummary}
      </p>
    </div>
  )
}
