import { cva } from 'class-variance-authority'

export const filterChipVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer text-sm leading-none',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary:
          'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary-light focus-visible:ring-offset-white shadow-sm',
        secondary:
          'bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary-light focus-visible:ring-offset-white shadow-sm',
        tertiary:
          'bg-tertiary text-white hover:bg-tertiary/90 focus-visible:ring-tertiary-light focus-visible:ring-offset-white shadow-sm',
        ghost:
          'bg-ghost-soft text-foreground hover:bg-ghost-light focus-visible:ring-ghost-light focus-visible:ring-offset-white',
        neutral:
          'bg-neutral text-foreground hover:bg-neutral/80 focus-visible:ring-foreground-light focus-visible:ring-offset-white',

        // Outline variants
        'primary-outline':
          'border border-primary text-primary bg-white hover:bg-primary-soft focus-visible:ring-primary-light focus-visible:ring-offset-white',
        'secondary-outline':
          'border border-secondary text-secondary bg-white hover:bg-secondary-soft focus-visible:ring-secondary-light focus-visible:ring-offset-white',
        'tertiary-outline':
          'border border-tertiary text-tertiary bg-white hover:bg-tertiary-soft focus-visible:ring-tertiary-light focus-visible:ring-offset-white',
        'ghost-outline':
          'border border-ghost text-ghost bg-white hover:bg-ghost-soft focus-visible:ring-ghost-light focus-visible:ring-offset-white',
        'neutral-outline':
          'border border-neutral text-foreground bg-white hover:bg-neutral/20 focus-visible:ring-foreground-light focus-visible:ring-offset-white',

        // Semantic variants
        success:
          'bg-success text-white hover:bg-success/90 focus-visible:ring-success-light focus-visible:ring-offset-white shadow-sm',
        'success-outline':
          'border border-success text-success bg-white hover:bg-success-soft focus-visible:ring-success-light focus-visible:ring-offset-white',
        info: 'bg-info text-white hover:bg-info/90 focus-visible:ring-info-light focus-visible:ring-offset-white shadow-sm',
        'info-outline':
          'border border-info text-info bg-white hover:bg-info-soft focus-visible:ring-info-light focus-visible:ring-offset-white',
        warning:
          'bg-warning text-white hover:bg-warning/90 focus-visible:ring-warning-light focus-visible:ring-offset-white shadow-sm',
        'warning-outline':
          'border border-warning text-warning bg-white hover:bg-warning-soft focus-visible:ring-warning-light focus-visible:ring-offset-white',
        danger:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger-light focus-visible:ring-offset-white shadow-sm',
        'danger-outline':
          'border border-danger text-danger bg-white hover:bg-danger-soft focus-visible:ring-danger-light focus-visible:ring-offset-white',
      },
      size: {
        sm: 'h-7 px-3 text-xs',
        md: 'h-8 px-4 text-sm',
        lg: 'h-9 px-5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'neutral-outline',
      size: 'md',
    },
  }
)
