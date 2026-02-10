'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: 'dark' | 'light'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  // Initial load
  useEffect(() => {
    setMounted(true)

    const stored = localStorage.getItem('colver-theme') as Theme | null
    const initialTheme = stored ?? 'dark'
    setThemeState(initialTheme)

    const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialResolved =
      initialTheme === 'system'
        ? systemIsDark ? 'dark' : 'light'
        : initialTheme

    setResolvedTheme(initialResolved)
    document.documentElement.classList.toggle('dark', initialResolved === 'dark')
  }, [])

  // Apply theme changes
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    let nextResolved: 'dark' | 'light'

    if (theme === 'system') {
      nextResolved = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    } else {
      nextResolved = theme
    }

    setResolvedTheme(nextResolved)
    root.classList.toggle('dark', nextResolved === 'dark')
  }, [theme, mounted])

  // System theme listener
  useEffect(() => {
    if (!mounted || theme !== 'system') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      const next = e.matches ? 'dark' : 'light'
      setResolvedTheme(next)
      document.documentElement.classList.toggle('dark', next === 'dark')
    }

    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [theme, mounted])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    localStorage.setItem('colver-theme', next)
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  // Avoid FOUC without blocking layout
  if (!mounted) return null

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
