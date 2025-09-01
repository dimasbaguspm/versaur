import { cva } from '@/utils/variants'

/**
 * Hr component variants using Versaur color system
 * Creates a horizontal line with border color and optional margin
 */
export const hrVariants = cva('h-px w-full bg-border border-0', {
  variants: {
    hasMargin: {
      true: 'mb-4',
      false: '',
    },
  },
  defaultVariants: {
    hasMargin: false,
  },
})
