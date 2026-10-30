'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  Search,
  Sun,
  Moon,
  Menu,
  ArrowRight,
  BookOpen,
  Compass,
  FileText,
  Sparkles,
} from '@/components/ui/Icons'
import { useTheme } from '@/lib/theme'
import Button from '@/components/ui/Button'

export interface HeaderProps {
  onOpenMobileMenu?: () => void
  onOpenCommand?: () => void
}

interface ResourceItem {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const resourceItems: ResourceItem[] = [
  {
    title: 'Documentation',
    description: 'Technical architecture, API specs and guides',
    href: '/docs',
    icon: BookOpen,
  },
  {
    title: 'Guides',
    description: 'Engineering walkthroughs and production patterns',
    href: '/guides',
    icon: Compass,
  },
  {
    title: 'Engineering Blog',
    description: 'Insights on systems, performance and design',
    href: '/blog',
    icon: FileText,
  },
  {
    title: 'Platform Features',
    description: 'Overview of engineering primitives and tools',
    href: '/features',
    icon: Sparkles,
  },
]

export default function Header({
  onOpenMobileMenu,
  onOpenCommand,
}: HeaderProps) {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setResourcesOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname?.startsWith(href + '/')
  }

  const isResourcesActive = resourceItems.some((item) => isActive(item.href))

  return (
    <header
      className={`
        sticky top-0 z-40 w-full transition-colors duration-150
        ${scrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-background'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-label="Colver Home"
          >
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 bg-white rounded-sm" />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">
              Colver
            </span>
          </Link>

          {/* Desktop Horizontal Navigation (lg and up) */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            <Link
              href="/"
              aria-current={isActive('/') ? 'page' : undefined}
              className={`
                px-3 py-1.5 rounded-md text-sm font-medium transition-colors
                ${isActive('/') ? 'text-foreground bg-surface font-semibold' : 'text-slate-400 hover:text-foreground hover:bg-surface/60'}
              `}
            >
              Home
            </Link>

            <Link
              href="/services"
              aria-current={isActive('/services') ? 'page' : undefined}
              className={`
                px-3 py-1.5 rounded-md text-sm font-medium transition-colors
                ${isActive('/services') ? 'text-foreground bg-surface font-semibold' : 'text-slate-400 hover:text-foreground hover:bg-surface/60'}
              `}
            >
              Services
            </Link>

            <Link
              href="/showcase"
              aria-current={isActive('/showcase') ? 'page' : undefined}
              className={`
                px-3 py-1.5 rounded-md text-sm font-medium transition-colors
                ${isActive('/showcase') ? 'text-foreground bg-surface font-semibold' : 'text-slate-400 hover:text-foreground hover:bg-surface/60'}
              `}
            >
              Showcase
            </Link>

            <Link
              href="/about"
              aria-current={isActive('/about') ? 'page' : undefined}
              className={`
                px-3 py-1.5 rounded-md text-sm font-medium transition-colors
                ${isActive('/about') ? 'text-foreground bg-surface font-semibold' : 'text-slate-400 hover:text-foreground hover:bg-surface/60'}
              `}
            >
              About
            </Link>

            {/* Resources Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setResourcesOpen((prev) => !prev)}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer
                  ${isResourcesActive ? 'text-foreground bg-surface font-semibold' : 'text-slate-400 hover:text-foreground hover:bg-surface/60'}
                `}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${resourcesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {resourcesOpen && (
                <div
                  className="
                    absolute top-full left-0 mt-2 w-72 rounded-lg p-2 bg-card
                    z-50
                  "
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="space-y-1">
                    {resourceItems.map((item) => {
                      const Icon = item.icon
                      const itemActive = isActive(item.href)
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setResourcesOpen(false)}
                          className={`
                            flex items-start gap-3 p-2.5 rounded-md transition-colors
                            ${itemActive ? 'bg-surface text-foreground font-medium' : 'hover:bg-surface text-foreground'}
                          `}
                        >
                          <div
                            className={`
                              w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5
                              ${itemActive ? 'bg-primary text-white' : 'bg-surface text-slate-400'}
                            `}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold leading-snug">
                              {item.title}
                            </p>
                            <p className="text-[13px] text-slate-400 leading-relaxed mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right: Quick Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Search Shortcut Trigger */}
          <button
            type="button"
            onClick={onOpenCommand}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] bg-surface hover:bg-surface/80 text-slate-300 hover:text-foreground transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Open quick search dialog"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-md text-slate-400 hover:text-foreground hover:bg-surface transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="w-4 h-4 text-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-foreground" />
            )}
          </button>

          {/* Primary CTA Button (Desktop lg+) */}
          <Link href="/contact" className="hidden lg:inline-block">
            <Button
              size="sm"
              variant="primary"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Discuss Your Project
            </Button>
          </Link>

          {/* Mobile & Tablet Menu Hamburger Button (up to lg) */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Open navigation menu"
            className="lg:hidden p-2 rounded-md text-slate-300 hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
