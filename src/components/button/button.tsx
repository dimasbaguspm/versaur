import React from 'react'
import { cn } from '@/utils/cn'
import { cva } from '@/utils/variants'
import type { ButtonProps } from './types'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        // Core variants using Spenicle color system
        primary: 'bg-coral text-white hover:bg-coral/90 focus:ring-coral',
        secondary: 'bg-sage text-white hover:bg-sage/90 focus:ring-sage',
        tertiary: 'bg-mist text-white hover:bg-mist/90 focus:ring-mist',
        ghost:
          'bg-transparent text-foreground hover:bg-slate/10 focus:ring-slate',
        neutral:
          'bg-neutral text-foreground border border-border hover:bg-neutral/80 focus:ring-foreground',

        // Outline variants
        'primary-outline':
          'border border-coral text-coral bg-transparent hover:bg-coral hover:text-white focus:ring-coral',
        'secondary-outline':
          'border border-sage text-sage bg-transparent hover:bg-sage hover:text-white focus:ring-sage',
        'tertiary-outline':
          'border border-mist text-mist bg-transparent hover:bg-mist hover:text-white focus:ring-mist',
        'ghost-outline':
          'border border-slate text-slate bg-transparent hover:bg-slate hover:text-white focus:ring-slate',
        'neutral-outline':
          'border border-neutral text-foreground bg-transparent hover:bg-neutral hover:text-foreground focus:ring-foreground',

        // Ghost variants (subtle)
        'primary-ghost':
          'text-coral bg-transparent hover:bg-coral/10 focus:ring-coral',
        'secondary-ghost':
          'text-sage bg-transparent hover:bg-sage/10 focus:ring-sage',
        'tertiary-ghost':
          'text-mist bg-transparent hover:bg-mist/10 focus:ring-mist',
        'neutral-ghost':
          'text-foreground bg-transparent hover:bg-neutral/70 focus:ring-foreground',

        // Semantic variants
        success: 'bg-success text-white hover:bg-success/90 focus:ring-success',
        'success-outline':
          'border border-success text-success bg-transparent hover:bg-success hover:text-white focus:ring-success',
        'success-ghost':
          'text-success bg-transparent hover:bg-success/10 focus:ring-success',

        info: 'bg-info text-white hover:bg-info/90 focus:ring-info',
        'info-outline':
          'border border-info text-info bg-transparent hover:bg-info hover:text-white focus:ring-info',
        'info-ghost':
          'text-info bg-transparent hover:bg-info/10 focus:ring-info',

        warning: 'bg-warning text-white hover:bg-warning/90 focus:ring-warning',
        'warning-outline':
          'border border-warning text-warning bg-transparent hover:bg-warning hover:text-white focus:ring-warning',
        'warning-ghost':
          'text-warning bg-transparent hover:bg-warning/10 focus:ring-warning',

        danger: 'bg-danger text-white hover:bg-danger/90 focus:ring-danger',
        'danger-outline':
          'border border-danger text-danger bg-transparent hover:bg-danger hover:text-white focus:ring-danger',
        'danger-ghost':
          'text-danger bg-transparent hover:bg-danger/10 focus:ring-danger',

        // Utility variants
        outline:
          'border border-border text-foreground bg-transparent hover:bg-accent/10 focus:ring-accent',
        destructive:
          'bg-danger text-white hover:bg-danger/90 focus:ring-danger',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-11 px-8 text-lg',
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
      disabled,
      children,
      ...props
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)
