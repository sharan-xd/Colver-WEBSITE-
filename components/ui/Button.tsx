'use client'

import React, { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  icon?: React.ReactNode
  iconRight?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      icon,
      iconRight,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'h-9 px-3.5 text-xs gap-1.5 rounded-md font-medium',
      md: 'h-11 px-5 text-sm gap-2 rounded-lg font-medium',
      lg: 'h-12 px-6 text-base gap-2.5 rounded-lg font-semibold',
    }

    const variantClasses = {
      primary:
        'bg-primary text-white hover:bg-primary-hover active:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      secondary:
        'bg-surface hover:bg-surface/80 text-foreground border border-border focus-visible:ring-2 focus-visible:ring-primary',
      ghost:
        'hover:bg-surface text-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary',
      outline:
        'border border-border hover:border-primary text-foreground hover:bg-surface/60 focus-visible:ring-2 focus-visible:ring-primary',
      destructive:
        'bg-destructive/15 text-destructive border border-destructive/30 hover:bg-destructive/25',
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={`
          inline-flex items-center justify-center select-none
          disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
          transition-colors duration-150 cursor-pointer
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          icon
        )}
        <span>{children}</span>
        {!isLoading && iconRight}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
