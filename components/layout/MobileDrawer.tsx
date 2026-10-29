'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Search,
  Sun,
  Moon,
  Zap,
  Home,
  Layers,
  Sparkles,
  BookOpen,
  Compass,
  FileText,
  Users,
  Mail,
  ShieldCheck,
  Cpu,
} from '@/components/ui/Icons'
import { useTheme } from '@/lib/theme'

export interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  onOpenCommand: () => void
}

const mobileNavGroups = [
  {
    title: 'Core Navigation',
    items: [
      { label: 'Home', href: '/', icon: Home },
      { label: 'Services', href: '/services', icon: Cpu, badge: 'Tailored' },
      { label: 'Showcase', href: '/showcase', icon: Layers },
      { label: 'About', href: '/about', icon: Users },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '/docs', icon: BookOpen },
      { label: 'Guides', href: '/guides', icon: Compass },
      { label: 'Engineering Blog', href: '/blog', icon: FileText },
      { label: 'Platform Features', href: '/features', icon: Sparkles },
    ],
  },
  {
    title: 'Company & Security',
    items: [
      { label: 'Discuss Your Project', href: '/contact', icon: Mail },
      { label: 'Security & Trust', href: '/security', icon: ShieldCheck },
    ],
  },
]

export default function MobileDrawer({
  isOpen,
  onClose,
  onOpenCommand,
}: MobileDrawerProps) {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  // Close when pathname changes
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Sheet */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-4/5 max-w-sm h-full glass-panel border-r border-border flex flex-col shadow-2xl z-10"
          >
            {/* Header */}
            <div className="h-16 px-5 flex items-center justify-between border-b border-border/60 shrink-0">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary via-indigo-600 to-accent flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight text-foreground">
                  Colver
                </span>
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-surface/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick search button */}
            <div className="p-4 border-b border-border/40">
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenCommand()
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs bg-surface/70 border border-border/60 text-muted hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  <span>Search pages or docs...</span>
                </div>
                <kbd className="px-1.5 py-0.5 rounded bg-card text-[10px] font-mono border border-border">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Links list */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
              {mobileNavGroups.map((group) => (
                <div key={group.title} className="space-y-1">
                  <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted/70">
                    {group.title}
                  </p>

                  {group.items.map((item) => {
                    const Icon = item.icon
                    const isActive =
                      item.href === '/'
                        ? pathname === '/'
                        : pathname === item.href || pathname?.startsWith(item.href + '/')

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className={`
                          flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
                          ${
                            isActive
                              ? 'bg-primary/10 text-primary border border-primary/20'
                              : 'text-muted hover:text-foreground hover:bg-surface/50'
                          }
                        `}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted'}`} />
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-full bg-primary/20 text-primary">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )
                  })}
                </div>
              ))}
            </nav>

            {/* Footer controls */}
            <div className="p-4 border-t border-border/60 bg-surface/30 flex items-center justify-between">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 text-xs text-muted hover:text-foreground p-2 rounded-lg hover:bg-surface/60 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-400" />
                )}
                <span className="capitalize">{theme} mode</span>
              </button>

              <Link
                href="/contact"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-sm transition-colors"
              >
                Discuss Project
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
