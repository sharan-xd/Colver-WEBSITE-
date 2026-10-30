'use client'

import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'info' | 'purple' | 'lime' | 'chrome' | 'orange' | 'blue'
  dot?: boolean
}

export function Badge({
  children,
  className = '',
  variant = 'default',
  dot = false,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-white/5 text-[#F4F1EA] border-white/10',
    outline: 'bg-transparent text-[#8E929A] border-white/15',
    success: 'bg-[#C8FF00]/10 text-[#C8FF00] border-[#C8FF00]/30',
    lime: 'bg-[#C8FF00]/10 text-[#C8FF00] border-[#C8FF00]/40',
    warning: 'bg-[#FF5A1F]/10 text-[#FF5A1F] border-[#FF5A1F]/30',
    orange: 'bg-[#FF5A1F]/10 text-[#FF5A1F] border-[#FF5A1F]/30',
    info: 'bg-[#405CFF]/15 text-[#8599FF] border-[#405CFF]/30',
    blue: 'bg-[#405CFF]/15 text-[#8599FF] border-[#405CFF]/30',
    purple: 'bg-[#405CFF]/15 text-[#8599FF] border-[#405CFF]/30',
    chrome: 'bg-gradient-to-r from-white/15 via-[#BFC3C9]/10 to-white/15 text-[#F4F1EA] border-white/30 shadow-inner',
  }

  const dotClasses = {
    default: 'bg-[#8E929A]',
    outline: 'bg-[#8E929A]',
    success: 'bg-[#C8FF00]',
    lime: 'bg-[#C8FF00]',
    warning: 'bg-[#FF5A1F]',
    orange: 'bg-[#FF5A1F]',
    info: 'bg-[#405CFF]',
    blue: 'bg-[#405CFF]',
    purple: 'bg-[#405CFF]',
    chrome: 'bg-[#BFC3C9]',
  }

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] text-xs font-mono uppercase tracking-wider border
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotClasses[variant]}`} />}
      {children}
    </span>
  )
}

export default Badge
