'use client'

import React from 'react'

export default function AnimatedBackgroundClient() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      {/* Solid grounding obsidian field */}
      <div className="absolute inset-0 bg-background" />
    </div>
  )
}
