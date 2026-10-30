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
      sm: 'h-9 px-4 text-sm gap-2 rounded-[2px] font-medium tracking-wide',
      md: 'h-11 px-5 text-sm gap-2 rounded-[2px] font-semibold tracking-wide',
      lg: 'h-12 px-6 text-base gap-2.5 rounded-[2px] font-semibold tracking-wide',
    }

    const variantClasses = {
      primary:
        'bg-[#C8FF00] text-[#080808] font-bold hover:bg-[#b8ea00] active:scale-[0.98]',
      secondary:
        'bg-[#181818] hover:bg-[#222222] text-[#F4F1EA] active:scale-[0.98]',
      ghost:
        'hover:bg-white/5 text-[#BFC3C9] hover:text-[#F4F1EA]',
      outline:
        'border border-white/20 hover:border-[#C8FF00] text-[#F4F1EA] hover:text-[#C8FF00] bg-transparent active:scale-[0.98]',
      destructive:
        'bg-[#FF334B]/20 text-[#FF334B] hover:bg-[#FF334B]/30',
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={`
          inline-flex items-center justify-center select-none cursor-pointer
          disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
          transition-colors duration-150 relative
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
