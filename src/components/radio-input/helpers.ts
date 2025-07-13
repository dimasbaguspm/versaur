import { cva } from '@/utils/variants'

export const radioGroupVariants = cva('space-y-2', {
  variants: {
    direction: {
      vertical: 'space-y-2 space-x-0',
      horizontal: 'flex flex-wrap gap-4 space-y-0',
    },
  },
  defaultVariants: {
    direction: 'vertical',
  },
})

export const radioOptionVariants = cva(
  'relative h-4 w-4 rounded-full border cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-white',
  {
    variants: {
      variant: {
        // Core variants using Versaur color system
        primary:
          'border-coral/40 checked:bg-coral checked:border-coral focus:ring-coral/20',
        secondary:
          'border-sage/40 checked:bg-sage checked:border-sage focus:ring-sage/20',
        tertiary:
          'border-mist/40 checked:bg-mist checked:border-mist focus:ring-mist/20',
        ghost:
          'border-slate/40 checked:bg-slate checked:border-slate focus:ring-slate/20',
        neutral:
          'border-gray-300 checked:bg-gray-500 checked:border-gray-500 focus:ring-gray-400/20',

        // Outline variants
        'primary-outline':
          'border-coral checked:bg-white checked:border-coral focus:ring-coral/20',
        'secondary-outline':
          'border-sage checked:bg-white checked:border-sage focus:ring-sage/20',
        'tertiary-outline':
          'border-mist checked:bg-white checked:border-mist focus:ring-mist/20',
        'ghost-outline':
          'border-slate checked:bg-white checked:border-slate focus:ring-slate/20',
        'neutral-outline':
          'border-gray-400 checked:bg-white checked:border-gray-400 focus:ring-gray-500/20',

        // Semantic variants
        success:
          'border-success/40 checked:bg-success checked:border-success focus:ring-success/20',
        'success-outline':
          'border-success checked:bg-white checked:border-success focus:ring-success/20',

        info: 'border-info/40 checked:bg-info checked:border-info focus:ring-info/20',
        'info-outline':
          'border-info checked:bg-white checked:border-info focus:ring-info/20',

        warning:
          'border-warning/40 checked:bg-warning checked:border-warning focus:ring-warning/20',
        'warning-outline':
          'border-warning checked:bg-white checked:border-warning focus:ring-warning/20',

        danger:
          'border-danger/40 checked:bg-danger checked:border-danger focus:ring-danger/20',
        'danger-outline':
          'border-danger checked:bg-white checked:border-danger focus:ring-danger/20',
      },
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export const radioLabelVariants = cva(
  'text-foreground cursor-pointer select-none',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
)
