import { cva } from '@/utils/variants'

export const calculatorInputVariants = cva(
  'relative w-full flex items-center rounded-md border border-[var(--color-neutral)] bg-white px-3 py-2 text-base text-[var(--color-foreground)] placeholder-[var(--color-ghost)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition',
  {
    variants: {
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)
