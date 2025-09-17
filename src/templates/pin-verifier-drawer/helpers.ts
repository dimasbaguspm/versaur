import { cva } from '@/utils/variants'

/**
 * Numeric keypad button variants
 */
export const keypadButtonVariants = cva(
  [
    'flex items-center justify-center',
    'text-lg font-medium',
    'transition-colors duration-200',
    'border border-border',
    'bg-background hover:bg-neutral-soft',
    'text-foreground',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:bg-neutral',
    'focus:outline-none focus:ring-2 focus:ring-primary/20',
    'rounded-lg',
  ],
  {
    variants: {
      size: {
        sm: 'h-10 w-10 text-sm',
        md: 'h-14 w-14 text-lg',
        lg: 'h-16 w-16 text-xl',
      },
      variant: {
        default: '',
        delete: [
          'bg-danger/5 hover:bg-danger/10',
          'text-danger',
          'border-danger/20',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
)

/**
 * Pin verifier container variants
 */
export const pinVerifierContainerVariants = cva({
  base: ['flex flex-col', 'max-w-sm mx-auto'],
  variants: {
    as: {
      modal: 'p-6 space-y-6',
      drawer: 'p-4 space-y-4',
    },
  },
  defaultVariants: {
    as: 'modal',
  },
})

/**
 * Numeric keypad grid variants
 */
export const keypadGridVariants = cva([
  'grid grid-cols-3 gap-4',
  'justify-items-center',
  'w-full max-w-[280px] mx-auto',
  'py-4',
])

/**
 * Utility to format PIN input (ensure only digits, max 6 characters)
 */
export const formatPinInput = (value: string): string => {
  return value.replace(/\D/g, '').slice(0, 6)
}

/**
 * Utility to check if PIN is complete
 */
export const isPinComplete = (value: string): boolean => {
  return formatPinInput(value).length === 6
}

/**
 * Generate numeric keypad data
 */
export const getKeypadNumbers = (): Array<string | null> => {
  return ['1', '2', '3', '4', '5', '6', '7', '8', '9', null, '0', 'delete']
}
