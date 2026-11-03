'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Header from './Header'
import MobileDrawer from './MobileDrawer'
import CommandPalette from '@/components/ui/CommandPalette'
import Footer from './Footer'

export interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCommandOpen, setIsCommandOpen] = useState(false)

  // Stable callbacks — these never change identity, so MobileDrawer's
  // useEffect([pathname, onClose]) won't fire on every render.
  const openMobileMenu = useCallback(() => setIsMobileOpen(true), [])
  const closeMobileMenu = useCallback(() => setIsMobileOpen(false), [])
  const openCommand = useCallback(() => setIsCommandOpen(true), [])
  const closeCommand = useCallback(() => setIsCommandOpen(false), [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsCommandOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen flex flex-col relative text-foreground bg-background selection:bg-primary/20 selection:text-primary">
      <Header
        onOpenMobileMenu={openMobileMenu}
        onOpenCommand={openCommand}
      />

      <main className="flex-1 w-full">
        {children}
      </main>

      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={closeMobileMenu}
        onOpenCommand={openCommand}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={closeCommand}
      />

      <Footer />
    </div>
  )
}
