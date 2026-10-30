'use client'

import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'info' | 'purple'
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
    default: 'bg-surface text-foreground border-border',
    outline: 'bg-transparent text-muted border-border',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    purple: 'bg-primary/10 text-primary border-primary/20',
  }

  const dotClasses = {
    default: 'bg-muted',
    outline: 'bg-muted',
    success: 'bg-emerald-400',
    warning: 'bg-amber-400',
    info: 'bg-blue-400',
    purple: 'bg-primary',
  }

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[13px] font-medium border
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
