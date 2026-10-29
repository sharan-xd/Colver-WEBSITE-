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
      sm: 'h-8 px-3 text-xs gap-1.5 rounded-lg',
      md: 'h-10 px-4 text-sm gap-2 rounded-xl',
      lg: 'h-12 px-6 text-base gap-2.5 rounded-xl',
    }

    const variantClasses = {
      primary:
        'bg-primary text-white hover:bg-primary-hover shadow-sm active:scale-[0.98]',
      secondary:
        'bg-surface hover:bg-surface/80 text-foreground border border-border active:scale-[0.98]',
      ghost:
        'hover:bg-surface/60 text-muted hover:text-foreground active:scale-[0.98]',
      outline:
        'border border-border hover:border-primary/50 text-foreground hover:bg-surface/50 active:scale-[0.98]',
      destructive:
        'bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20 active:scale-[0.98]',
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={`
          inline-flex items-center justify-center font-medium select-none
          focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
          transition-all duration-150 cursor-pointer
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
