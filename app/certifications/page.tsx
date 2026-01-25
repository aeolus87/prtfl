import { resumeData } from '@/data/resume'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
    title: 'Certifications | Julius Callejo',
    description: 'Professional certifications and achievements',
}

export default function CertificationsPage() {
    return (
        <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12 px-4 md:px-6">
            <div className="max-w-2xl mx-auto space-y-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Profile
                </Link>

                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Certifications</h1>
                    <p className="text-neutral-500 dark:text-neutral-400">
                        Professional certifications and continuing education.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {resumeData.certifications.map((cert) => (
                        <div
                            key={cert.name}
                            className="p-4 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 transition-colors hover:border-neutral-300 dark:hover:border-neutral-700"
                        >
                            <div className="flex items-start justify-between gap-3 mb-2">
                                <h3 className="font-semibold text-neutral-900 dark:text-white leading-tight">
                                    {cert.name}
                                </h3>
                                {(cert.issuer === 'Cisco' || cert.issuer === 'Cybrary') && (
                                    <span className={`shrink-0 px-2 py-0.5 text-[10px] font-medium rounded ${cert.issuer === 'Cisco'
                                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                        : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                                        }`}>
                                        {cert.issuer}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-2 mb-3 text-sm text-neutral-500 dark:text-neutral-400">
                                <span>{cert.issuer}</span>
                                <span>•</span>
                                <span>{cert.year}</span>
                            </div>

                            {cert.description && (
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {cert.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
