import { cva } from '@/utils/variants'

/**
 * Variants for SwitchInput track
 * Fixed to primary color and medium size
 */
export const switchVariants = cva(
  'relative inline-flex items-center h-5 w-10 rounded-full transition-colors duration-200 border border-transparent',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
      checked: {
        true: 'bg-primary',
        false: 'bg-white border-border',
      },
    },
    defaultVariants: {
      disabled: false,
      checked: false,
    },
  }
)

/**
 * Variants for SwitchInput thumb
 * Fixed to medium size
 */
export const thumbVariants = cva(
  'absolute h-4 w-4 rounded-full transition-transform duration-200',
  {
    variants: {
      checked: {
        true: 'translate-x-full bg-white left-1.5',
        false: 'bg-neutral left-0.5',
      },
    },
    defaultVariants: {
      checked: false,
    },
  }
)
