/**
 * Utility for menu positioning and variants
 * Supports Spenicle palette and Versaur design system
 * Follows the pattern used in badge/helpers.ts for consistency
 */
import { cva } from '@/utils/variants'

export const menuVariants = cva(
  'absolute z-30 min-w-40 bg-background rounded-lg border border-border transition-all duration-200 ease-out will-change-transform',
  {
    variants: {
      size: {
        sm: 'py-1.5 px-1',
        md: 'py-2 px-1',
      },
      open: {
        true: 'opacity-100 translate-y-1',
        false: 'opacity-0 pointer-events-none translate-y-3',
      },
    },
    defaultVariants: {
      size: 'md',
      open: false,
    },
  }
)

export const menuItemVariants = cva(
  'w-full text-sm text-left px-2 py-1 rounded-md cursor-pointer duration-150 select-none hover:bg-background-bold outline-none border border-transparent focus-visible:border-primary-light disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-background active:bg-background-light '
)
