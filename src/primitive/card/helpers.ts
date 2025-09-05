import { cva } from 'class-variance-authority'

/**
 * Card component variants using class-variance-authority
 * All cards are clickable by default with hover effects
 */
export const cardVariants = cva(
  'flex justify-between transition-colors duration-200 w-full',
  {
    variants: {
      size: {
        none: 'p-0',
        xs: 'p-2 sm:p-2',
        sm: 'p-2 sm:p-3',
        md: 'p-3 sm:p-4',
        lg: 'p-4 sm:p-6',
        xl: 'p-6 sm:p-8',
      },
      shape: {
        rounded: 'rounded-lg',
        square: 'rounded-none',
      },
      bordered: {
        true: 'border border-border',
        false: '',
      },
      as: {
        button:
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light hover:bg-gray-50 cursor-pointer',

        div: '',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'rounded',
      bordered: false,
      as: 'button',
    },
  }
)
