import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Julius Callejo | Full Stack Engineer',
  description:
    'Full Stack Engineer with experience building high-scale, AI-integrated web applications. Expert in React 19, NestJS, and Python (FastAPI).',
  keywords: [
    'Full Stack Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'NestJS',
    'FastAPI',
    'Web Developer',
    'AI Integration',
  ],
  authors: [{ name: 'Julius Callejo' }],
  openGraph: {
    title: 'Julius Callejo | Full Stack Engineer',
    description:
      'Full Stack Engineer with experience building high-scale, AI-integrated web applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldBeDark = stored === 'dark' || (!stored && prefersDark);
                if (shouldBeDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased text-neutral-900 dark:text-neutral-100`}>
        {children}
      </body>
    </html>
  )
}
