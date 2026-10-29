'use client'

import React from 'react'

export default function AnimatedBackgroundClient() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Base gradient fill */}
      <div className="absolute inset-0 bg-background transition-colors duration-300" />

      {/* Subtle technical dot grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60" />

      {/* Primary ambient glow - top center */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[400px] rounded-full blur-[120px] opacity-25 transition-all duration-700"
        style={{
          background: 'radial-gradient(ellipse at center, var(--primary) 0%, transparent 70%)',
        }}
      />

      {/* Secondary accent glow - left */}
      <div 
        className="absolute top-[25%] -left-36 w-[480px] h-[480px] rounded-full blur-[130px] opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        }}
      />

      {/* Tertiary accent glow - right */}
      <div 
        className="absolute top-[60%] -right-36 w-[520px] h-[520px] rounded-full blur-[140px] opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
