import { cva } from 'class-variance-authority'

// ButtonFloat uses the same variant/size system as Button
export const buttonFloatVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'rounded-lg',
    'font-medium',
    'transition-all',
    'duration-200',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:opacity-50',
    'disabled:pointer-events-none',
    'select-none',
    'shadow-lg',
    'transition-transform',
    'transition-shadow',
    'will-change-transform,opacity,box-shadow',
    'hover:scale-105',
    'active:scale-95',
    'focus-visible:shadow-xl',
    'hover:shadow-xl',
    'active:shadow-md',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'bg-coral text-white hover:bg-coral/90 focus-visible:ring-coral-soft focus-visible:ring-offset-white',
        secondary:
          'bg-sage text-white hover:bg-sage/90 focus-visible:ring-sage-soft focus-visible:ring-offset-white',
        tertiary:
          'bg-mist text-white hover:bg-mist/90 focus-visible:ring-mist-soft focus-visible:ring-offset-white',
        ghost:
          'bg-transparent text-foreground hover:bg-slate-soft focus-visible:ring-slate-soft focus-visible:ring-offset-white',
        neutral:
          'bg-neutral text-foreground border border-border hover:bg-neutral/80 focus-visible:ring-foreground-soft focus-visible:ring-offset-white',
        'primary-outline':
          'border border-coral text-coral bg-transparent hover:bg-coral hover:text-white focus-visible:ring-coral-soft focus-visible:ring-offset-white',
        'secondary-outline':
          'border border-sage text-sage bg-transparent hover:bg-sage hover:text-white focus-visible:ring-sage-soft focus-visible:ring-offset-white',
        'tertiary-outline':
          'border border-mist text-mist bg-transparent hover:bg-mist hover:text-white focus-visible:ring-mist-soft focus-visible:ring-offset-white',
        'ghost-outline':
          'border border-slate text-slate bg-transparent hover:bg-slate hover:text-white focus-visible:ring-slate-soft focus-visible:ring-offset-white',
        'neutral-outline':
          'border border-neutral text-foreground bg-transparent hover:bg-neutral hover:text-foreground focus-visible:ring-foreground-soft focus-visible:ring-offset-white',
        'primary-ghost':
          'text-coral bg-transparent hover:bg-coral-soft focus-visible:ring-coral-soft focus-visible:ring-offset-white',
        'secondary-ghost':
          'text-sage bg-transparent hover:bg-sage-soft focus-visible:ring-sage-soft focus-visible:ring-offset-white',
        'tertiary-ghost':
          'text-mist bg-transparent hover:bg-mist-soft focus-visible:ring-mist-soft focus-visible:ring-offset-white',
        'neutral-ghost':
          'text-foreground bg-transparent hover:bg-neutral/70 focus-visible:ring-foreground-soft focus-visible:ring-offset-white',
        success:
          'bg-success text-white hover:bg-success/90 focus-visible:ring-success-soft focus-visible:ring-offset-white',
        'success-outline':
          'border border-success text-success bg-transparent hover:bg-success hover:text-white focus-visible:ring-success-soft focus-visible:ring-offset-white',
        'success-ghost':
          'text-success bg-transparent hover:bg-success-soft focus-visible:ring-success-soft focus-visible:ring-offset-white',
        info: 'bg-info text-white hover:bg-info/90 focus-visible:ring-info-soft focus-visible:ring-offset-white',
        'info-outline':
          'border border-info text-info bg-transparent hover:bg-info hover:text-white focus-visible:ring-info-soft focus-visible:ring-offset-white',
        'info-ghost':
          'text-info bg-transparent hover:bg-info-soft focus-visible:ring-info-soft focus-visible:ring-offset-white',
        warning:
          'bg-warning text-white hover:bg-warning/90 focus-visible:ring-warning-soft focus-visible:ring-offset-white',
        'warning-outline':
          'border border-warning text-warning bg-transparent hover:bg-warning hover:text-white focus-visible:ring-warning-soft focus-visible:ring-offset-white',
        'warning-ghost':
          'text-warning bg-transparent hover:bg-warning-soft focus-visible:ring-warning-soft focus-visible:ring-offset-white',
        danger:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger-soft focus-visible:ring-offset-white',
        'danger-outline':
          'border border-danger text-danger bg-transparent hover:bg-danger hover:text-white focus-visible:ring-danger-soft focus-visible:ring-offset-white',
        'danger-ghost':
          'text-danger bg-transparent hover:bg-danger-soft focus-visible:ring-danger-soft focus-visible:ring-offset-white',
        outline:
          'border border-border text-foreground bg-transparent hover:bg-accent-soft focus-visible:ring-accent-soft focus-visible:ring-offset-white',
        destructive:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger-soft focus-visible:ring-offset-white',
      },
      size: {
        sm: 'h-12 w-12 min-w-12 min-h-12 text-base',
        md: 'h-14 w-14 min-w-14 min-h-14 text-lg',
        lg: 'h-16 w-16 min-w-16 min-h-16 text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)
