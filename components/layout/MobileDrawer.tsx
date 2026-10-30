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
      { label: 'Services', href: '/services', icon: Cpu },
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

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

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
            className="fixed inset-0 bg-black/70"
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
            className="relative w-4/5 max-w-sm h-full bg-card border-r border-border flex flex-col z-10"
          >
            {/* Header */}
            <div className="h-16 px-5 flex items-center justify-between border-b border-border shrink-0">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                  <span className="w-2.5 h-2.5 bg-white rounded-sm" />
                </div>
                <span className="font-bold text-lg tracking-tight text-foreground">
                  Colver
                </span>
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick search button */}
            <div className="p-4 border-b border-border">
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenCommand()
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-[13px] bg-surface text-slate-300 hover:text-foreground transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  <span>Search pages or docs...</span>
                </div>
              </button>
            </div>

            {/* Links list */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
              {mobileNavGroups.map((group) => (
                <div key={group.title} className="space-y-1">
                  <p className="px-3 pb-1 text-[13px] font-semibold text-foreground">
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
                          flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                          ${
                            isActive
                              ? 'bg-surface text-foreground font-semibold'
                              : 'text-muted hover:text-foreground hover:bg-surface/50'
                          }
                        `}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted'}`} />
                        <span className="flex-1">{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              ))}
            </nav>

            {/* Footer controls */}
            <div className="p-4 border-t border-border bg-card flex items-center justify-between">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 text-[13px] text-slate-400 hover:text-foreground p-2 rounded-md hover:bg-surface transition-colors cursor-pointer"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-foreground" />
                ) : (
                  <Moon className="w-4 h-4 text-foreground" />
                )}
                <span className="capitalize">{theme} mode</span>
              </button>

              <Link
                href="/contact"
                onClick={onClose}
                className="px-4 py-2 rounded-md bg-primary text-white text-[13px] font-semibold hover:bg-primary-hover transition-colors"
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
