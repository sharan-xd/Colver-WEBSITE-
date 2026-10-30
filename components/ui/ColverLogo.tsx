import React from 'react'
import Image from 'next/image'

interface ColverLogoProps {
  variant?: 'full' | 'emblem'
  className?: string
  ariaLabel?: string
  priority?: boolean
}

/**
 * ColverLogo renders the exact original Colver logo image as provided by the user.
 * Preserves the authentic design and proportions without AI re-generation.
 */
export default function ColverLogo({
  variant = 'full',
  className = 'h-9 w-auto',
  ariaLabel = 'Colver',
  priority = false,
}: ColverLogoProps) {
  return (
    <span className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/brand/colver-logo.png"
        alt={ariaLabel}
        width={100}
        height={100}
        priority={priority}
        className="w-full h-full object-contain select-none"
      />
    </span>
  )
}
