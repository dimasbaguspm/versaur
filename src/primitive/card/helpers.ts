import { cva } from 'class-variance-authority'

/**
 * Card component variants using class-variance-authority
 * All cards are clickable by default with hover effects
 */
export const cardVariants = cva(
  'flex justify-between transition-colors duration-200 cursor-pointer w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light hover:bg-gray-50',
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
      bordered: {
        true: 'border border-border',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'rounded',
      bordered: false,
    },
  }
)
