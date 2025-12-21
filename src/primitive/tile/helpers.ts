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
        primary: 'bg-primary border border-primary',
        secondary: 'bg-secondary border border-secondary',
        tertiary: 'bg-tertiary border border-tertiary',
        ghost: 'bg-transparent border border-ghost',
        success: 'bg-success border border-success',
        info: 'bg-info border border-info',
        warning: 'bg-warning border border-warning',
        danger: 'bg-danger border border-danger',
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
