import { Blog } from '@/types'
import { BookOpen, ExternalLink } from 'lucide-react'

interface BlogProps {
    blogs: Blog[]
    className?: string
}

export default function BlogList({ blogs, className }: BlogProps) {
    if (!blogs || blogs.length === 0) return null

    return (
        <div className={`p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 ${className || ''}`}>
            <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                <h2 className="font-semibold text-neutral-900 dark:text-white">Recent Posts</h2>
            </div>
            <div className="space-y-4">
                {blogs.map((blog) => (
                    <a
                        key={blog.title}
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                    >
                        <h3 className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors flex items-center gap-2">
                            {blog.title}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        {blog.subtitle && (
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 mb-2">
                                {blog.subtitle}
                            </p>
                        )}
                        <div className="space-y-1">
                            {blog.description.map((desc, i) => (
                                <p key={i} className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    • {desc}
                                </p>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
