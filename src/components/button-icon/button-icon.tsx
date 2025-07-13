import React from 'react'
import { cn } from '@/utils/cn'
import { cva } from '@/utils/variants'
import type { ButtonIconProps } from './types'

const buttonIconVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary:
          'bg-coral text-white hover:bg-coral/90 focus-visible:ring-coral/20 focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        secondary:
          'bg-sage text-white hover:bg-sage/90 focus-visible:ring-sage/20 focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        tertiary:
          'bg-mist text-white hover:bg-mist/90 focus-visible:ring-mist/20 focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        ghost:
          'bg-transparent text-foreground hover:bg-slate/10 focus-visible:ring-slate/20 focus-visible:ring-offset-white',
        neutral:
          'bg-neutral text-foreground border border-border hover:bg-neutral/80 focus-visible:ring-foreground/20 focus-visible:ring-offset-white shadow-sm',

        // Outline variants
        'primary-outline':
          'border border-coral text-coral bg-transparent hover:bg-coral hover:text-white focus-visible:ring-coral/20 focus-visible:ring-offset-white transition-all',
        'secondary-outline':
          'border border-sage text-sage bg-transparent hover:bg-sage hover:text-white focus-visible:ring-sage/20 focus-visible:ring-offset-white transition-all',
        'tertiary-outline':
          'border border-mist text-mist bg-transparent hover:bg-mist hover:text-white focus-visible:ring-mist/20 focus-visible:ring-offset-white transition-all',
        'ghost-outline':
          'border border-slate text-slate bg-transparent hover:bg-slate hover:text-white focus-visible:ring-slate/20 focus-visible:ring-offset-white transition-all',
        'neutral-outline':
          'border border-neutral text-foreground bg-transparent hover:bg-neutral hover:text-foreground focus-visible:ring-foreground/20 focus-visible:ring-offset-white transition-all',

        // Ghost variants (subtle)
        'primary-ghost':
          'text-coral bg-transparent hover:bg-coral/10 focus-visible:ring-coral/20 focus-visible:ring-offset-white',
        'secondary-ghost':
          'text-sage bg-transparent hover:bg-sage/10 focus-visible:ring-sage/20 focus-visible:ring-offset-white',
        'tertiary-ghost':
          'text-mist bg-transparent hover:bg-mist/10 focus-visible:ring-mist/20 focus-visible:ring-offset-white',
        'neutral-ghost':
          'text-foreground bg-transparent hover:bg-neutral/70 focus-visible:ring-foreground/20 focus-visible:ring-offset-white',

        // Semantic variants
        success:
          'bg-success text-white hover:bg-success/90 focus-visible:ring-success/20 focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'success-outline':
          'border border-success text-success bg-transparent hover:bg-success hover:text-white focus-visible:ring-success/20 focus-visible:ring-offset-white transition-all',
        'success-ghost':
          'text-success bg-transparent hover:bg-success/10 focus-visible:ring-success/20 focus-visible:ring-offset-white',

        info: 'bg-info text-white hover:bg-info/90 focus-visible:ring-info/20 focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'info-outline':
          'border border-info text-info bg-transparent hover:bg-info hover:text-white focus-visible:ring-info/20 focus-visible:ring-offset-white transition-all',
        'info-ghost':
          'text-info bg-transparent hover:bg-info/10 focus-visible:ring-info/20 focus-visible:ring-offset-white',

        warning:
          'bg-warning text-white hover:bg-warning/90 focus-visible:ring-warning/20 focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'warning-outline':
          'border border-warning text-warning bg-transparent hover:bg-warning hover:text-white focus-visible:ring-warning/20 focus-visible:ring-offset-white transition-all',
        'warning-ghost':
          'text-warning bg-transparent hover:bg-warning/10 focus-visible:ring-warning/20 focus-visible:ring-offset-white',

        danger:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger/20 focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'danger-outline':
          'border border-danger text-danger bg-transparent hover:bg-danger hover:text-white focus-visible:ring-danger/20 focus-visible:ring-offset-white transition-all',
        'danger-ghost':
          'text-danger bg-transparent hover:bg-danger/10 focus-visible:ring-danger/20 focus-visible:ring-offset-white',

        // Utility variants
        outline:
          'border border-border text-foreground bg-transparent hover:bg-accent/10 focus-visible:ring-accent/20 focus-visible:ring-offset-white transition-all',
        destructive:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger/20 focus-visible:ring-offset-white shadow-sm hover:shadow-md',
      },
      size: {
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
      },
      shape: {
        rounded: 'rounded-md',
        square: 'rounded-sm',
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'rounded',
    },
  }
)

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  function ButtonIcon(
    {
      className,
      variant = 'primary',
      size = 'md',
      shape = 'rounded',
      disabled = false,
      children,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        type='button'
        className={cn(buttonIconVariants({ variant, size, shape }), className)}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        inert={disabled ? true : undefined}
        {...props}
      >
        {children}
      </button>
    )
  }
)
