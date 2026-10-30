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
  X,
  ArrowRight
} from '@/components/ui/Icons'

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
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const items: CommandItem[] = [
    {
      id: 'home',
      label: 'Home',
      description: 'Landing page and architecture overview',
      category: 'Navigation',
      icon: Home,
      action: () => { router.push('/'); onClose(); },
    },
    {
      id: 'showcase',
      label: 'Selected Work & Showcase',
      description: 'Production systems, live portals and architecture specs',
      category: 'Work',
      icon: Layers,
      action: () => { router.push('/showcase'); onClose(); },
    },
    {
      id: 'services',
      label: 'Services & Capabilities',
      description: 'Custom software, web systems, transactional commerce, AI pipelines',
      category: 'Services',
      icon: Cpu,
      action: () => { router.push('/services'); onClose(); },
    },
    {
      id: 'pricing',
      label: 'Pricing & Sprints',
      description: 'Engineering sprints, dedicated squads, transparent delivery rates',
      category: 'Commercial',
      icon: Sparkles,
      action: () => { router.push('/pricing'); onClose(); },
    },
    {
      id: 'docs',
      label: 'Architecture Documentation',
      description: 'Technical standards, API schemas, deployment specifications',
      category: 'Docs',
      icon: BookOpen,
      action: () => { router.push('/docs'); onClose(); },
    },
    {
      id: 'guides',
      label: 'Engineering Guides',
      description: 'Production patterns, edge caching, high-concurrency walkthroughs',
      category: 'Docs',
      icon: Compass,
      action: () => { router.push('/guides'); onClose(); },
    },
    {
      id: 'blog',
      label: 'Engineering Blog',
      description: 'Insights on systems, performance, design engineering and AI',
      category: 'Editorial',
      icon: FileText,
      action: () => { router.push('/blog'); onClose(); },
    },
    {
      id: 'about',
      label: 'About Studio',
      description: 'Studio philosophy, engineering craftsmanship, Bangalore team',
      category: 'Company',
      icon: Users,
      action: () => { router.push('/about'); onClose(); },
    },
    {
      id: 'careers',
      label: 'Careers & Engineering Roles',
      description: 'Open engineering positions in Bengaluru',
      category: 'Company',
      icon: Briefcase,
      action: () => { router.push('/careers'); onClose(); },
    },
    {
      id: 'contact',
      label: 'Discuss Architecture Spec',
      description: 'Schedule a discovery session with senior engineering architects',
      category: 'Company',
      icon: Mail,
      action: () => { router.push('/contact'); onClose(); },
    },
    {
      id: 'security',
      label: 'Security & Trust',
      description: 'Zero secrets, hardened CSP, Cloudflare edge audit specifications',
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl bg-[#0e0e0e] rounded-[2px] shadow-2xl overflow-hidden border border-white/20 z-10 flex flex-col max-h-[75vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-[#121212]">
              <Search className="w-4 h-4 text-[#C8FF00] shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setSelectedIndex(0)
                }}
                placeholder="Search commands, architectural specs, pages..."
                className="w-full bg-transparent text-xs font-mono text-[#F4F1EA] placeholder:text-[#8E929A] focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-[2px] text-[#8E929A] hover:text-[#F4F1EA] hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-xs font-mono text-[#8E929A]">
                  NO COMMANDS MATCHING &ldquo;{query}&rdquo;
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
                        w-full flex items-center justify-between p-3 rounded-[2px] text-left
                        transition-all duration-150 cursor-pointer
                        ${isSelected ? 'bg-white/10 text-[#C8FF00] font-bold border-l-2 border-[#C8FF00]' : 'text-[#8E929A] hover:bg-white/5'}
                      `}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-[2px] flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-[#C8FF00] text-black' : 'bg-white/5 text-[#8E929A]'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className={`text-xs font-mono ${isSelected ? 'text-[#F4F1EA]' : 'text-[#D0D4DC]'}`}>
                            {item.label}
                          </p>
                          <p className="text-[11px] text-[#8E929A] truncate font-sans">{item.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-[2px] bg-white/5 text-[#8E929A] uppercase">
                          {item.category}
                        </span>
                        {isSelected && <ArrowRight className="w-3.5 h-3.5 text-[#C8FF00]" />}
                      </div>
                    </button>
                  )
                })
              )}
            </div>

            {/* Footer helper */}
            <div className="px-4 py-2 border-t border-white/10 bg-[#080808] flex items-center justify-between text-[10px] font-mono text-[#8E929A]">
              <span>NAVIGATE: <kbd className="px-1 py-0.5 rounded bg-white/10 border border-white/10">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white/10 border border-white/10">↓</kbd></span>
              <span>SELECT: <kbd className="px-1 py-0.5 rounded bg-white/10 border border-white/10">ENTER</kbd></span>
              <span>CLOSE: <kbd className="px-1 py-0.5 rounded bg-white/10 border border-white/10">ESC</kbd></span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CommandPalette
