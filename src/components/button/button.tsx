import React from 'react'
import { cn } from '@/utils/cn'
import { cva } from '@/utils/variants'
import type { ButtonProps } from './types'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary:
          'bg-coral text-white hover:bg-coral/90 focus-visible:ring-coral-soft focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        secondary:
          'bg-sage text-white hover:bg-sage/90 focus-visible:ring-sage-soft focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        tertiary:
          'bg-mist text-white hover:bg-mist/90 focus-visible:ring-mist-soft focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        ghost:
          'bg-white text-foreground hover:bg-slate-soft focus-visible:ring-slate-soft focus-visible:ring-offset-white',
        neutral:
          'bg-neutral text-foreground border border-border hover:bg-neutral/80 focus-visible:ring-foreground-soft focus-visible:ring-offset-white shadow-sm',

        // Outline variants
        'primary-outline':
          'border border-coral text-coral bg-white hover:bg-coral hover:text-white focus-visible:ring-coral-soft focus-visible:ring-offset-white transition-all',
        'secondary-outline':
          'border border-sage text-sage bg-white hover:bg-sage hover:text-white focus-visible:ring-sage-soft focus-visible:ring-offset-white transition-all',
        'tertiary-outline':
          'border border-mist text-mist bg-white hover:bg-mist hover:text-white focus-visible:ring-mist-soft focus-visible:ring-offset-white transition-all',
        'ghost-outline':
          'border border-slate text-slate bg-white hover:bg-slate hover:text-white focus-visible:ring-slate-soft focus-visible:ring-offset-white transition-all',
        'neutral-outline':
          'border border-neutral text-foreground bg-white hover:bg-neutral hover:text-foreground focus-visible:ring-foreground-soft focus-visible:ring-offset-white transition-all',

        // Ghost variants (subtle)
        'primary-ghost':
          'text-coral bg-white hover:bg-coral-soft focus-visible:ring-coral-soft focus-visible:ring-offset-white',
        'secondary-ghost':
          'text-sage bg-white hover:bg-sage-soft focus-visible:ring-sage-soft focus-visible:ring-offset-white',
        'tertiary-ghost':
          'text-mist bg-white hover:bg-mist-soft focus-visible:ring-mist-soft focus-visible:ring-offset-white',
        'neutral-ghost':
          'text-foreground bg-white hover:bg-neutral/70 focus-visible:ring-foreground-soft focus-visible:ring-offset-white',

        // Semantic variants
        success:
          'bg-success text-white hover:bg-success/90 focus-visible:ring-success-soft focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'success-outline':
          'border border-success text-success bg-white hover:bg-success hover:text-white focus-visible:ring-success-soft focus-visible:ring-offset-white transition-all',
        'success-ghost':
          'text-success bg-white hover:bg-success-soft focus-visible:ring-success-soft focus-visible:ring-offset-white',

        info: 'bg-info text-white hover:bg-info/90 focus-visible:ring-info-soft focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'info-outline':
          'border border-info text-info bg-white hover:bg-info hover:text-white focus-visible:ring-info-soft focus-visible:ring-offset-white transition-all',
        'info-ghost':
          'text-info bg-white hover:bg-info-soft focus-visible:ring-info-soft focus-visible:ring-offset-white',

        warning:
          'bg-warning text-white hover:bg-warning/90 focus-visible:ring-warning-soft focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'warning-outline':
          'border border-warning text-warning bg-white hover:bg-warning hover:text-white focus-visible:ring-warning-soft focus-visible:ring-offset-white transition-all',
        'warning-ghost':
          'text-warning bg-white hover:bg-warning-soft focus-visible:ring-warning-soft focus-visible:ring-offset-white',

        danger:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger-soft focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'danger-outline':
          'border border-danger text-danger bg-white hover:bg-danger hover:text-white focus-visible:ring-danger-soft focus-visible:ring-offset-white transition-all',
        'danger-ghost':
          'text-danger bg-white hover:bg-danger-soft focus-visible:ring-danger-soft focus-visible:ring-offset-white',

        // Utility variants
        outline:
          'border border-border text-foreground bg-white hover:bg-accent-soft focus-visible:ring-accent-soft focus-visible:ring-offset-white transition-all',
        destructive:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger-soft focus-visible:ring-offset-white shadow-sm hover:shadow-md',
      },
      size: {
        sm: 'h-8 px-3 text-sm min-w-[2.25rem]',
        md: 'h-10 px-4 text-sm min-w-[2.5rem]',
        lg: 'h-12 px-8 text-lg min-w-[2.75rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      type = 'button',
      children,
      ...props
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled}
        aria-disabled={disabled}
        inert={disabled ? true : undefined}
        {...props}
      >
        {children}
      </button>
    )
  }
)
