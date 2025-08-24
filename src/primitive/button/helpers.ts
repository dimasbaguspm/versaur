import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary:
          'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary-light focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        secondary:
          'bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary-light focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        tertiary:
          'bg-tertiary text-white hover:bg-tertiary/90 focus-visible:ring-tertiary-light focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        ghost:
          'bg-white text-foreground hover:bg-ghost-soft focus-visible:ring-ghost-light focus-visible:ring-offset-white',
        neutral:
          'bg-neutral text-foreground border border-border hover:bg-neutral/80 focus-visible:ring-foreground-light focus-visible:ring-offset-white shadow-sm',

        // Outline variants
        'primary-outline':
          'border border-primary text-primary bg-white hover:bg-primary hover:text-white focus-visible:ring-primary-light focus-visible:ring-offset-white transition-all',
        'secondary-outline':
          'border border-secondary text-secondary bg-white hover:bg-secondary hover:text-white focus-visible:ring-secondary-light focus-visible:ring-offset-white transition-all',
        'tertiary-outline':
          'border border-tertiary text-tertiary bg-white hover:bg-tertiary hover:text-white focus-visible:ring-tertiary-light focus-visible:ring-offset-white transition-all',
        'ghost-outline':
          'border border-ghost text-ghost bg-white hover:bg-ghost hover:text-white focus-visible:ring-ghost-light focus-visible:ring-offset-white transition-all',
        'neutral-outline':
          'border border-border text-foreground bg-white hover:bg-neutral hover:text-foreground focus-visible:ring-foreground-light focus-visible:ring-offset-white transition-all',

        // Ghost variants (subtle)
        'primary-ghost':
          'text-primary bg-white hover:bg-primary/20 focus-visible:ring-primary focus-visible:ring-offset-white',
        'secondary-ghost':
          'text-secondary bg-white hover:bg-secondary/20 focus-visible:ring-secondary focus-visible:ring-offset-white',
        'tertiary-ghost':
          'text-tertiary bg-white hover:bg-tertiary/20 focus-visible:ring-tertiary focus-visible:ring-offset-white',
        'neutral-ghost':
          'text-foreground bg-white hover:bg-neutral/50 focus-visible:ring-foreground focus-visible:ring-offset-white',

        // Semantic variants
        success:
          'bg-success text-white hover:bg-success/90 focus-visible:ring-success-light focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'success-outline':
          'border border-success text-success bg-white hover:bg-success hover:text-white focus-visible:ring-success-light focus-visible:ring-offset-white transition-all',
        'success-ghost':
          'text-success bg-white hover:bg-success/20 focus-visible:ring-success-light focus-visible:ring-offset-white',

        info: 'bg-info text-white hover:bg-info/90 focus-visible:ring-info-light focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'info-outline':
          'border border-info text-info bg-white hover:bg-info hover:text-white focus-visible:ring-info-light focus-visible:ring-offset-white transition-all',
        'info-ghost':
          'text-info bg-white hover:bg-info/20 focus-visible:ring-info-light focus-visible:ring-offset-white',

        warning:
          'bg-warning text-white hover:bg-warning/90 focus-visible:ring-warning-light focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'warning-outline':
          'border border-warning text-warning bg-white hover:bg-warning hover:text-white focus-visible:ring-warning-light focus-visible:ring-offset-white transition-all',
        'warning-ghost':
          'text-warning bg-white hover:bg-warning/20 focus-visible:ring-warning-light focus-visible:ring-offset-white',

        danger:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger-light focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        'danger-outline':
          'border border-danger text-danger bg-white hover:bg-danger hover:text-white focus-visible:ring-danger-light focus-visible:ring-offset-white transition-all',
        'danger-ghost':
          'text-danger bg-white hover:bg-danger/20 focus-visible:ring-danger-light focus-visible:ring-offset-white',

        // Utility variants
        outline:
          'border border-border text-foreground bg-white hover:bg-accent-soft focus-visible:ring-accent-soft focus-visible:ring-offset-white transition-all',
        destructive:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger-soft focus-visible:ring-offset-white shadow-sm hover:shadow-md',
      },
      size: {
        sm: 'h-7 px-3 text-sm min-w-[2.25rem]',
        md: 'h-9 px-4 text-sm min-w-[2.5rem]',
        lg: 'h-10 px-8 text-lg min-w-[2.75rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)
