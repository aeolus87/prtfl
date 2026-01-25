import { Certification } from '@/types'
import { Award, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface CertificationsProps {
    certifications: Certification[]
    limit?: number
}

export default function Certifications({ certifications, limit }: CertificationsProps) {
    const displayedCerts = limit ? certifications.slice(0, limit) : certifications

    return (
        <div className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                    <h2 className="font-semibold text-neutral-900 dark:text-white">Certifications</h2>
                </div>
                {limit && (
                    <Link
                        href="/certifications"
                        className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                    >
                        View All
                        <ArrowUpRight className="w-3 h-3" />
                    </Link>
                )}
            </div>
            <div className="space-y-3">
                {displayedCerts.map((cert) => (
                    <div
                        key={cert.name}
                        className="p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-100 dark:border-neutral-700/50"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-medium text-neutral-900 dark:text-white leading-tight">
                                    {cert.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-xs text-neutral-400 dark:text-neutral-500">•</span>
                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                        {cert.year}
                                    </span>
                                </div>
                            </div>
                            {cert.issuer === 'Cisco' && (
                                <span className="shrink-0 px-2 py-0.5 text-[10px] font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                                    Cisco
                                </span>
                            )}
                            {cert.issuer === 'Cybrary' && (
                                <span className="shrink-0 px-2 py-0.5 text-[10px] font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded">
                                    Cybrary
                                </span>
                            )}
                        </div>
                        {cert.description && (
                            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                {cert.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
