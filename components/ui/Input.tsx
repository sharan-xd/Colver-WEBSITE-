'use client'

import React, { forwardRef } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, className = '', ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-semibold uppercase tracking-wider text-muted">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={`
              w-full h-11 px-4 text-sm rounded-xl
              bg-surface/70 border text-foreground placeholder:text-muted/60
              border-border focus:border-primary focus:ring-2 focus:ring-primary/20
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-150 outline-none
              ${error ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : ''}
              ${className}
            `}
            {...props}
          />
        </div>
        {error ? (
          <p id={`${inputId}-error`} className="text-xs text-destructive animate-fade-in font-medium">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-xs text-muted">{helperText}</p>
        ) : null}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
