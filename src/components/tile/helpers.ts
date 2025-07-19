import { cva } from 'class-variance-authority'

/**
 * Tile component variants using class-variance-authority
 */
export const tileVariants = cva(
  // Base classes
  'block transition-colors duration-200',
  {
    variants: {
      variant: {
        white: 'bg-white border border-border',
        neutral: 'bg-neutral border border-gray-200',
        primary: 'bg-coral-soft border border-coral',
        secondary: 'bg-sage-soft border border-sage',
        tertiary: 'bg-mist-soft border border-mist',
        ghost: 'bg-transparent border border-slate',
        success: 'bg-success-soft border border-success',
        info: 'bg-info-soft border border-info',
        warning: 'bg-warning-soft border border-warning',
        danger: 'bg-danger-soft border border-danger',
      },
      size: {
        xs: 'p-2',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8',
      },
      shape: {
        rounded: 'rounded-lg',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'white',
      size: 'md',
      shape: 'rounded',
    },
  }
)
