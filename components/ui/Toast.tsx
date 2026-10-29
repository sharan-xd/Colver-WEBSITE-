'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'info'

export interface ToastItem {
  id: string
  title: string
  description?: string
  type: ToastType
}

interface ToastContextType {
  toast: (title: string, description?: string, type?: ToastType) => void
  dismiss: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback(
    (title: string, description?: string, type: ToastType = 'success') => {
      const id = Math.random().toString(36).substring(2, 9)
      const newToast: ToastItem = { id, title, description, type }
      setToasts((prev) => [...prev.slice(-3), newToast])

      setTimeout(() => {
        dismiss(id)
      }, 4500)
    },
    [dismiss]
  )

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4"
      >
        <AnimatePresence mode="popLayout">
          {toasts.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="pointer-events-auto p-4 rounded-xl glass-panel border border-border shadow-2xl flex items-start gap-3 relative overflow-hidden"
            >
              <div className="shrink-0 mt-0.5">
                {item.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                {item.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400" />}
                {item.type === 'info' && <Info className="w-5 h-5 text-blue-400" />}
              </div>

              <div className="flex-1 min-w-0 pr-6">
                <p className="text-sm font-semibold text-foreground tracking-tight">{item.title}</p>
                {item.description && (
                  <p className="text-xs text-muted mt-0.5 leading-relaxed">{item.description}</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => dismiss(item.id)}
                aria-label="Dismiss notification"
                className="absolute top-3.5 right-3.5 p-1 rounded-md text-muted hover:text-foreground hover:bg-surface/50 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    return {
      toast: () => {},
      dismiss: () => {},
    }
  }
  return context
}
