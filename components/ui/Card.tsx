'use client'

import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean
  hover?: boolean
}

export function Card({
  children,
  className = '',
  glass = false,
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-lg p-6 sm:p-8 bg-card border border-border
        ${hover ? 'hover:border-border-hover transition-colors' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
