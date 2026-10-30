import React from 'react'
import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full p-8 sm:p-14 rounded-[2px] bg-[#101010] text-center space-y-8">
        <div className="space-y-3">
          <div className="font-mono text-sm font-semibold text-[#C8FF00] tracking-widest uppercase">
            // HTTP 404 UNRESOLVED
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight text-[#F4F1EA]">
            Route Not Located.
          </h1>
          <p className="text-base text-[#BFC3C9] leading-relaxed max-w-md mx-auto">
            The architectural endpoint or resource you requested could not be resolved across our edge cluster.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/" className="w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <span>Return to Overview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/docs" className="w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto h-12 px-6 rounded-[2px] bg-[#181818] hover:bg-[#222222] text-[#F4F1EA] font-semibold text-base tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Browse Docs</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
