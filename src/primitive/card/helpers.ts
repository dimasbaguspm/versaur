import { cva } from 'class-variance-authority'

/**
 * Card component variants using class-variance-authority
 * All cards are clickable by default with hover effects
 */
export const cardVariants = cva(
  'block transition-colors duration-200 cursor-pointer',
  {
    variants: {
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
      size: 'md',
      shape: 'rounded',
    },
  }
)
