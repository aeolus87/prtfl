'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Read current theme from DOM (set by script in layout.tsx)
    const html = document.documentElement
    const currentlyDark = html.classList.contains('dark')
    setIsDark(currentlyDark)
    setMounted(true)
  }, [])

  const toggle = () => {
    const html = document.documentElement
    const currentlyDark = html.classList.contains('dark')
    const newValue = !currentlyDark
    
    // Update DOM and localStorage synchronously
    if (newValue) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    
    // Update React state
    setIsDark(newValue)
  }

  if (!mounted) {
    return <div className="w-14 h-7 bg-neutral-200 rounded-full" />
  }

  return (
    <button
      onClick={toggle}
      type="button"
      className={`relative w-14 h-7 rounded-full p-1 transition-colors ${
        isDark ? 'bg-neutral-700' : 'bg-neutral-200'
      }`}
      aria-label="Toggle dark mode"
    >
      <div
        className={`absolute top-1 w-5 h-5 rounded-full shadow-sm transition-all duration-200 flex items-center justify-center ${
          isDark ? 'translate-x-7 bg-neutral-900' : 'translate-x-0 bg-white'
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-neutral-400" />
        ) : (
          <Sun className="w-3 h-3 text-amber-500" />
        )}
      </div>
    </button>
  )
}
