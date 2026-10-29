'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Sparkles,
  Layers,
  CreditCard,
  BookOpen,
  Compass,
  FileText,
  History,
  Users,
  Briefcase,
  Mail,
  ShieldCheck,
  Lock,
  FileCheck,
  LifeBuoy,
  ChevronLeft,
  ChevronRight,
  Search,
  Sun,
  Moon,
  Zap,
  Cpu,
} from '@/components/ui/Icons'
import { useTheme } from '@/lib/theme'

export interface NavGroup {
  title: string
  items: {
    label: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    badge?: string
  }[]
}

export const navigationGroups: NavGroup[] = [
  {
    title: 'Platform',
    items: [
      { label: 'Overview', href: '/', icon: Home },
      { label: 'Services', href: '/services', icon: Cpu, badge: 'Tailored' },
      { label: 'Showcase', href: '/showcase', icon: Layers },
      { label: 'Features', href: '/features', icon: Sparkles },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Docs', href: '/docs', icon: BookOpen },
      { label: 'Guides', href: '/guides', icon: Compass },
      { label: 'Blog', href: '/blog', icon: FileText },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about', icon: Users },
      { label: 'Careers', href: '/careers', icon: Briefcase },
      { label: 'Contact', href: '/contact', icon: Mail },
    ],
  },
  {
    title: 'Trust & Legal',
    items: [
      { label: 'Security', href: '/security', icon: ShieldCheck },
      { label: 'Privacy', href: '/privacy', icon: Lock },
      { label: 'Terms', href: '/terms', icon: FileCheck },
      { label: 'Support', href: '/support', icon: LifeBuoy },
    ],
  },
]

export interface SidebarProps {
  isCollapsed: boolean
  onToggleCollapse: () => void
  onOpenCommand: () => void
}

export default function Sidebar({
  isCollapsed,
  onToggleCollapse,
  onOpenCommand,
}: SidebarProps) {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <aside
      aria-label="Sidebar navigation"
      className={`
        hidden lg:flex flex-col fixed top-0 bottom-0 left-0 z-40
        glass-panel border-r border-border select-none
        transition-all duration-300 ease-expo-out
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}
    >
      {/* Brand Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-border/60 shrink-0">
        <Link
          href="/"
          className="flex items-center gap-3 overflow-hidden group focus-visible:ring-1 focus-visible:ring-primary rounded-lg p-1"
        >
          {/* Logo Mark */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary via-indigo-600 to-accent flex items-center justify-center shrink-0 shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-white" />
          </div>

          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              className="flex items-center gap-2"
            >
              <span className="font-bold text-lg tracking-tight text-foreground">
                Colver
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-surface border border-border text-muted">
                v1.4
              </span>
            </motion.div>
          )}
        </Link>

        {/* Collapse Toggle Button */}
        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-surface/60 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Quick Search Trigger */}
      <div className="p-3 border-b border-border/40 shrink-0">
        <button
          type="button"
          onClick={onOpenCommand}
          className={`
            w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs
            bg-surface/60 hover:bg-surface border border-border/60 text-muted
            hover:text-foreground hover:border-border transition-all
            ${isCollapsed ? 'justify-center px-0' : 'justify-between'}
          `}
          title={isCollapsed ? 'Quick Search (⌘K)' : undefined}
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 shrink-0 text-muted" />
            {!isCollapsed && <span>Quick search...</span>}
          </div>
          {!isCollapsed && (
            <kbd className="px-1.5 py-0.5 rounded bg-card text-[10px] font-mono border border-border text-muted">
              ⌘K
            </kbd>
          )}
        </button>
      </div>

      {/* Navigation Groups (Scrollable) */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navigationGroups.map((group) => (
          <div key={group.title} className="space-y-1">
            {!isCollapsed && (
              <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted/70">
                {group.title}
              </p>
            )}

            {group.items.map((item) => {
              const Icon = item.icon
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname?.startsWith(item.href + '/')

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className={`
                      relative flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium
                      transition-all duration-150 group
                      ${
                        isActive
                          ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm'
                          : 'text-muted hover:text-foreground hover:bg-surface/50 border border-transparent'
                      }
                      ${isCollapsed ? 'justify-center px-0 h-10' : ''}
                    `}
                  >
                    {/* Active accent pill indicator */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
                    )}

                    <Icon
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                        isActive ? 'text-primary' : 'text-muted group-hover:text-foreground'
                      }`}
                    />

                    {!isCollapsed && (
                      <div className="flex-1 flex items-center justify-between min-w-0">
                        <span className="truncate">{item.label}</span>
                        {item.badge && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-full bg-primary/20 text-primary border border-primary/30">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>

                  {/* Tooltip when sidebar is collapsed */}
                  {isCollapsed && hoveredItem === item.href && (
                    <div
                      role="tooltip"
                      className="absolute left-full ml-3 top-1/2 -translate-y-1/2 z-50 whitespace-nowrap
                                 px-2.5 py-1.5 rounded-lg glass-panel text-xs font-medium text-foreground
                                 shadow-xl border border-border pointer-events-none animate-fade-in"
                    >
                      <div className="flex items-center gap-1.5">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-primary/20 text-primary">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Sidebar Footer Controls */}
      <div className="p-3 border-t border-border/60 shrink-0 space-y-2 bg-surface/20">
        {/* Status indicator */}
        {!isCollapsed ? (
          <div className="px-3 py-2 rounded-xl bg-surface/50 border border-border/40 flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-xs text-muted truncate">Systems Operational</span>
            </div>
            <Link
              href="/security"
              className="text-[10px] text-primary hover:underline shrink-0"
            >
              Status
            </Link>
          </div>
        ) : (
          <div
            className="flex justify-center p-2"
            title="All systems operational"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        )}

        {/* Theme Switcher in Sidebar */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className={`
            w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs
            text-muted hover:text-foreground hover:bg-surface/70 transition-colors
            ${isCollapsed ? 'justify-center px-0' : 'justify-between'}
          `}
          title={isCollapsed ? `Theme: ${theme}` : undefined}
        >
          <div className="flex items-center gap-2">
            {mounted && theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
            {!isCollapsed && (
              <span className="capitalize">{mounted ? `${theme} mode` : 'Theme'}</span>
            )}
          </div>
          {!isCollapsed && (
            <span className="text-[10px] text-muted uppercase">Toggle</span>
          )}
        </button>
      </div>
    </aside>
  )
}
