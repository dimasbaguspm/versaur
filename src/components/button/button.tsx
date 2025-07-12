import React from 'react'
import { cn } from '@/utils/cn'
import { cva, type VariantProps } from '@/utils/variants'

type ComponentProps = React.ComponentProps<'button'>

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary-dark focus:ring-primary',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-dark focus:ring-secondary',
        tertiary:
          'bg-tertiary text-tertiary-foreground hover:bg-tertiary-dark focus:ring-tertiary',
        success:
          'bg-success text-success-foreground hover:bg-success-dark focus:ring-success',
        info: 'bg-info text-info-foreground hover:bg-info-dark focus:ring-info',
        warning:
          'bg-warning text-warning-foreground hover:bg-warning-dark focus:ring-warning',
        danger:
          'bg-danger text-danger-foreground hover:bg-danger-dark focus:ring-danger',
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

export interface ButtonProps
  extends ComponentProps,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
