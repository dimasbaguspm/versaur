import React from 'react'
import { cn } from '@/utils/cn'
import { cva } from '@/utils/variants'
import type { ButtonProps } from './types'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-dark focus:ring-primary',
        'primary-outline':
          'border border-primary text-primary bg-transparent hover:bg-primary-light focus:ring-primary',
        'primary-ghost':
          'text-primary bg-transparent hover:bg-primary-light focus:ring-primary',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-dark focus:ring-secondary',
        'secondary-outline':
          'border border-secondary text-secondary bg-transparent hover:bg-secondary-light focus:ring-secondary',
        'secondary-ghost':
          'text-secondary bg-transparent hover:bg-secondary-light focus:ring-secondary',
        tertiary:
          'bg-tertiary text-tertiary-foreground hover:bg-tertiary-dark focus:ring-tertiary',
        'tertiary-outline':
          'border border-tertiary text-tertiary bg-transparent hover:bg-tertiary-light focus:ring-tertiary',
        'tertiary-ghost':
          'text-tertiary bg-transparent hover:bg-tertiary-light focus:ring-tertiary',
        success:
          'bg-success text-success-foreground hover:bg-success-dark focus:ring-success',
        'success-outline':
          'border border-success text-success bg-transparent hover:bg-success-light focus:ring-success',
        'success-ghost':
          'text-success bg-transparent hover:bg-success-light focus:ring-success',
        info: 'bg-info text-info-foreground hover:bg-info-dark focus:ring-info',
        'info-outline':
          'border border-info text-info bg-transparent hover:bg-info-light focus:ring-info',
        'info-ghost':
          'text-info bg-transparent hover:bg-info-light focus:ring-info',
        warning:
          'bg-warning text-warning-foreground hover:bg-warning-dark focus:ring-warning',
        'warning-outline':
          'border border-warning text-warning bg-transparent hover:bg-warning-light focus:ring-warning',
        'warning-ghost':
          'text-warning bg-transparent hover:bg-warning-light focus:ring-warning',
        danger:
          'bg-danger text-danger-foreground hover:bg-danger-dark focus:ring-danger',
        'danger-outline':
          'border border-danger text-danger bg-transparent hover:bg-danger-light focus:ring-danger',
        'danger-ghost':
          'text-danger bg-transparent hover:bg-danger-light focus:ring-danger',
        outline:
          'border border-border bg-background hover:bg-accent hover:text-accent-foreground focus:ring-ring',
        ghost: 'hover:bg-accent hover:text-accent-foreground focus:ring-ring',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive',
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
