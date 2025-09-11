import { cva } from 'class-variance-authority'

/**
 * ActionCard component variants using class-variance-authority
 * Action cards are clickable items with hover effects, icon containers, and navigation arrows
 */
export const actionCardVariants = cva(
  'group flex items-center justify-between transition-all duration-200 w-full',
  {
    variants: {
      size: {
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-5',
      },
      as: {
        button:
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light hover:bg-gray-50 cursor-pointer',
        div: '',
      },
    },
    defaultVariants: {
      size: 'md',
      as: 'button',
    },
  }
)

/**
 * Icon container variants for the ActionCard
 */
export const iconContainerVariants = cva(
  'bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-primary-soft group-hover:to-primary-light duration-200',
  {
    variants: {
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

/**
 * Arrow icon variants for the ActionCard
 */
export const arrowVariants = cva(
  'inline-flex items-center justify-center text-ghost-bold transition-colors duration-200',
  {
    variants: {
      size: {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
