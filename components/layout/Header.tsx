'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Zap,
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
    description: 'Technical architecture, API specs & guides',
    href: '/docs',
    icon: BookOpen,
  },
  {
    title: 'Guides',
    description: 'Walkthroughs, best practices & patterns',
    href: '/guides',
    icon: Compass,
  },
  {
    title: 'Engineering Blog',
    description: 'Insights on systems, performance & design',
    href: '/blog',
    icon: FileText,
  },
  {
    title: 'Platform Features',
    description: 'Overview of engineering primitives & tools',
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
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on pathname change
  useEffect(() => {
    setResourcesOpen(false)
  }, [pathname])

  // Close dropdown on click outside or Escape
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
        sticky top-0 z-40 w-full transition-all duration-200
        ${scrolled ? 'glass-nav border-b border-border shadow-sm py-2.5' : 'bg-background/80 backdrop-blur-md border-b border-border/40 py-3.5'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            aria-label="Colver Home"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary via-indigo-600 to-accent flex items-center justify-center shrink-0 shadow-sm shadow-primary/20 group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
              Colver
            </span>
          </Link>
        </div>

        {/* Center: Desktop Horizontal Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            aria-current={isActive('/') ? 'page' : undefined}
            className={`
              px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150
              ${isActive('/') ? 'text-primary bg-primary/10' : 'text-muted hover:text-foreground hover:bg-surface/60'}
            `}
          >
            Home
          </Link>

          <Link
            href="/services"
            aria-current={isActive('/services') ? 'page' : undefined}
            className={`
              px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150
              ${isActive('/services') ? 'text-primary bg-primary/10 font-semibold' : 'text-muted hover:text-foreground hover:bg-surface/60'}
            `}
          >
            Services
          </Link>

          <Link
            href="/showcase"
            aria-current={isActive('/showcase') ? 'page' : undefined}
            className={`
              px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150
              ${isActive('/showcase') ? 'text-primary bg-primary/10' : 'text-muted hover:text-foreground hover:bg-surface/60'}
            `}
          >
            Showcase
          </Link>

          <Link
            href="/about"
            aria-current={isActive('/about') ? 'page' : undefined}
            className={`
              px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150
              ${isActive('/about') ? 'text-primary bg-primary/10' : 'text-muted hover:text-foreground hover:bg-surface/60'}
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
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer
                ${isResourcesActive ? 'text-primary bg-primary/10' : 'text-muted hover:text-foreground hover:bg-surface/60'}
              `}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? 'rotate-180 text-primary' : ''}`}
              />
            </button>

            {/* Dropdown Menu Panel */}
            {resourcesOpen && (
              <div
                className="
                  absolute top-full right-0 mt-2 w-72 rounded-2xl p-2 glass-panel border border-border shadow-xl
                  animate-scale-in z-50
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
                          flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group
                          ${itemActive ? 'bg-primary/10 text-primary' : 'hover:bg-surface/80 text-foreground'}
                        `}
                      >
                        <div
                          className={`
                            w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5
                            ${itemActive ? 'bg-primary text-white' : 'bg-surface border border-border/80 text-muted group-hover:text-primary group-hover:border-primary/40'}
                          `}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold leading-snug">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-muted leading-tight mt-0.5 line-clamp-1">
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

        {/* Right: Quick Actions (Search, Theme, Primary CTA, Mobile Hamburger) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Shortcut Trigger (⌘K) */}
          <button
            type="button"
            onClick={onOpenCommand}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs bg-surface/60 hover:bg-surface border border-border/70 text-muted hover:text-foreground transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Open search dialog"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Quick Search</span>
            <kbd className="hidden sm:inline px-1 py-0.2 rounded bg-card text-[10px] font-mono border border-border">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-surface/60 border border-transparent hover:border-border/60 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          {/* Primary CTA Button: Discuss Your Project */}
          <Link href="/contact" className="hidden sm:inline-block">
            <Button
              size="sm"
              variant="primary"
              className="shadow-sm shadow-primary/20"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Discuss Your Project
            </Button>
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Open navigation menu"
            className="md:hidden p-2 rounded-xl text-muted hover:text-foreground hover:bg-surface/60 border border-border/60 transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
