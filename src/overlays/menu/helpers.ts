/**
 * Utility for menu positioning and variants
 * Supports Spenicle palette and Versaur design system
 * Follows the pattern used in badge/helpers.ts for consistency
 */
import { cva } from '@/utils/variants'

export const menuVariants = cva(
  'z-30 min-w-40 bg-background text-black rounded-lg border border-border',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border bg-transparent',
      },
      size: {
        sm: 'py-1.5 px-1',
        md: 'py-2 px-1',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export const menuItemVariants = cva(
  'w-full text-left px-4 rounded-sm cursor-pointer transition-colors duration-150 select-none hover:bg-background-light outline-none border border-transparent focus-visible:border-primary-light disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'text-sm py-1',
        md: 'text-base py-1',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
