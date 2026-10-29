'use client'

import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean
  hover?: boolean
}

export function Card({
  children,
  className = '',
  glass = true,
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl p-6 md:p-8
        ${glass ? 'glass-card' : 'bg-card border border-border'}
        ${hover ? 'hover:border-primary/40' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
