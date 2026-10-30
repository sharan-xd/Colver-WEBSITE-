'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Home, 
  Sparkles, 
  Layers, 
  Cpu, 
  BookOpen, 
  Compass, 
  FileText, 
  Users, 
  Briefcase, 
  Mail, 
  ShieldCheck, 
  Lock, 
  FileCheck, 
  Sun, 
  Moon, 
  X,
  ArrowRight
} from '@/components/ui/Icons'
import { useTheme } from '@/lib/theme'

interface CommandItem {
  id: string
  label: string
  description: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  action: () => void
}

export function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const items: CommandItem[] = [
    {
      id: 'home',
      label: 'Home',
      description: 'Landing page and core overview',
      category: 'Navigation',
      icon: Home,
      action: () => { router.push('/'); onClose(); },
    },
    {
      id: 'features',
      label: 'Features',
      description: 'Explore our AI capabilities and tools',
      category: 'Navigation',
      icon: Sparkles,
      action: () => { router.push('/features'); onClose(); },
    },
    {
      id: 'showcase',
      label: 'Showcase',
      description: 'Interactive gallery of products built with Colver',
      category: 'Navigation',
      icon: Layers,
      action: () => { router.push('/showcase'); onClose(); },
    },
    {
      id: 'services',
      label: 'Services',
      description: 'Custom software, web apps, ecommerce & operations platforms',
      category: 'Navigation',
      icon: Cpu,
      action: () => { router.push('/services'); onClose(); },
    },
    {
      id: 'docs',
      label: 'Documentation',
      description: 'Guides and architectural references',
      category: 'Resources',
      icon: BookOpen,
      action: () => { router.push('/docs'); onClose(); },
    },
    {
      id: 'guides',
      label: 'Guides',
      description: 'Tutorials and step-by-step walkthroughs',
      category: 'Resources',
      icon: Compass,
      action: () => { router.push('/guides'); onClose(); },
    },
    {
      id: 'blog',
      label: 'Blog',
      description: 'Engineering notes and design essays',
      category: 'Resources',
      icon: FileText,
      action: () => { router.push('/blog'); onClose(); },
    },
    {
      id: 'about',
      label: 'About Colver',
      description: 'Our story, mission, and craftsmanship',
      category: 'Company',
      icon: Users,
      action: () => { router.push('/about'); onClose(); },
    },
    {
      id: 'careers',
      label: 'Careers',
      description: 'Join our team and build the future',
      category: 'Company',
      icon: Briefcase,
      action: () => { router.push('/careers'); onClose(); },
    },
    {
      id: 'contact',
      label: 'Contact',
      description: 'Get in touch with our team or enterprise sales',
      category: 'Company',
      icon: Mail,
      action: () => { router.push('/contact'); onClose(); },
    },
    {
      id: 'security',
      label: 'Security',
      description: 'Enterprise data compliance and controls',
      category: 'Trust & Legal',
      icon: ShieldCheck,
      action: () => { router.push('/security'); onClose(); },
    },
    {
      id: 'privacy',
      label: 'Privacy Policy',
      description: 'Data protection and user privacy commitments',
      category: 'Trust & Legal',
      icon: Lock,
      action: () => { router.push('/privacy'); onClose(); },
    },
    {
      id: 'terms',
      label: 'Terms of Service',
      description: 'Commercial service terms and conditions',
      category: 'Trust & Legal',
      icon: FileCheck,
      action: () => { router.push('/terms'); onClose(); },
    },
    {
      id: 'theme-toggle',
      label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`,
      description: 'Toggle interface visual theme',
      category: 'Preferences',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => { toggleTheme(); onClose(); },
    },
  ]

  const filteredItems = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else {
          // Open handled by parent or custom event
        }
      }
      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredItems, selectedIndex, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90] flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl bg-card rounded-xl shadow-2xl overflow-hidden border border-border/40 z-10 flex flex-col max-h-[75vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-border/40 gap-3">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setSelectedIndex(0)
                }}
                placeholder="Search pages, documentation, actions..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-md text-slate-400 hover:text-foreground hover:bg-surface"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-sm text-slate-400">
                  No matching results for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const Icon = item.icon
                  const isSelected = index === selectedIndex

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`
                        w-full flex items-center justify-between p-3 rounded-lg text-left
                        transition-all duration-150 cursor-pointer
                        ${isSelected ? 'bg-surface text-foreground font-semibold' : 'text-slate-400 hover:bg-surface/50'}
                      `}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-primary text-white' : 'bg-surface text-slate-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground">
                            {item.label}
                          </p>
                          <p className="text-[13px] text-slate-400 truncate">{item.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[13px] font-medium px-2 py-0.5 rounded bg-surface text-slate-400">
                          {item.category}
                        </span>
                        {isSelected && <ArrowRight className="w-4 h-4 text-primary" />}
                      </div>
                    </button>
                  )
                })
              )}
            </div>

            {/* Footer helper */}
            <div className="px-4 py-2.5 border-t border-border/40 bg-surface/50 flex items-center justify-between text-[13px] text-slate-400">
              <span>Navigate with <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border">↓</kbd></span>
              <span>Select with <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border">Enter</kbd></span>
              <span>Close with <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border">Esc</kbd></span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CommandPalette
