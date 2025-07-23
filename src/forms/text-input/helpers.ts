import { cva } from '@/utils/variants'

export const textInputVariants = cva(
  'block w-full rounded-md border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:bg-gray-50',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary:
          'border-coral/30 text-foreground focus:border-coral focus:ring-coral/20',
        secondary:
          'border-sage/30 text-foreground focus:border-sage focus:ring-sage/20',
        tertiary:
          'border-mist/30 text-foreground focus:border-mist focus:ring-mist/20',
        ghost:
          'border-slate/30 text-foreground focus:border-slate focus:ring-slate/20',
        neutral:
          'border-gray-300 text-foreground focus:border-gray-400 focus:ring-gray-400/20',

        // Outline variants
        'primary-outline':
          'border-coral text-foreground focus:border-coral focus:ring-coral/20',
        'secondary-outline':
          'border-sage text-foreground focus:border-sage focus:ring-sage/20',
        'tertiary-outline':
          'border-mist text-foreground focus:border-mist focus:ring-mist/20',
        'ghost-outline':
          'border-slate text-foreground focus:border-slate focus:ring-slate/20',
        'neutral-outline':
          'border-gray-400 text-foreground focus:border-gray-500 focus:ring-gray-500/20',

        // Semantic variants
        success:
          'border-success/30 text-foreground focus:border-success focus:ring-success/20',
        'success-outline':
          'border-success text-foreground focus:border-success focus:ring-success/20',

        info: 'border-info/30 text-foreground focus:border-info focus:ring-info/20',
        'info-outline':
          'border-info text-foreground focus:border-info focus:ring-info/20',

        warning:
          'border-warning/30 text-foreground focus:border-warning focus:ring-warning/20',
        'warning-outline':
          'border-warning text-foreground focus:border-warning focus:ring-warning/20',

        danger:
          'border-danger bg-danger/5 text-foreground focus:border-danger focus:ring-danger/20',
        'danger-outline':
          'border-danger bg-danger/5 text-foreground focus:border-danger focus:ring-danger/20',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)
