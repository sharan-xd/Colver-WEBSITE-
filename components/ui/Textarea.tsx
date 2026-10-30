'use client'

import React, { forwardRef } from 'react'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, id, className = '', rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={textareaId} className="block text-[13px] font-semibold text-slate-300">
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${textareaId}-error` : undefined}
            className={`
              w-full p-4 text-sm rounded-lg resize-none
              bg-surface border text-foreground placeholder:text-slate-400
              border-border/40 focus:border-primary focus:ring-2 focus:ring-primary/20
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-150 outline-none
              ${error ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : ''}
              ${className}
            `}
            {...props}
          />
        </div>
        {error ? (
          <p id={`${textareaId}-error`} className="text-[13px] text-destructive animate-fade-in font-medium">
            {error}
          </p>
        ) : helperText ? (
          <p className="text-[13px] text-slate-400">{helperText}</p>
        ) : null}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
