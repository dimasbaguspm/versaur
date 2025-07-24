/**
 * Utility for menu positioning and variants
 * Supports Spenicle palette and Versaur design system
 * Follows the pattern used in badge/helpers.ts for consistency
 */
import { cva } from '@/utils/variants'

export const menuVariants = cva(
  // Modern, clean, accessible base style
  'z-50 min-w-40 bg-neutral-50 text-black rounded-lg shadow-md border border-transparent',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border bg-transparent',
      },
      size: {
        sm: 'py-2',
        md: 'py-2.5',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export const menuItemVariants = cva(
  'w-full text-left px-4 rounded-md cursor-pointer transition-colors duration-150 font-medium select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 hover:bg-ghost-100 active:bg-ghost-200 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border border-color-neutral',
      },
      size: {
        sm: 'text-sm py-2',
        md: 'text-base py-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)
