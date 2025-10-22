/**
 * Utility for menu variants
 * Supports Versaur design system
 * Follows the pattern used in badge/helpers.ts for consistency
 */
import { cva } from '@/utils/variants'

export const menuVariants = cva(
  'z-70 min-w-56 bg-background rounded-lg border border-border transition-all duration-200 ease-out will-change-transform shadow-lg',
  {
    variants: {
      size: {
        sm: 'py-1.5 px-1',
        md: 'py-2 px-1',
      },
      open: {
        true: 'opacity-100 scale-100',
        false: 'opacity-0 pointer-events-none scale-95',
      },
    },
    defaultVariants: {
      size: 'md',
      open: false,
    },
  }
)
