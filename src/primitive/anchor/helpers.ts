import { cva } from '@/utils/variants'

export const anchorVariants = cva(
  [
    'inline-flex items-center transition-colors underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    // pseudo selectors for anchor
    'hover:no-underline',
  ],
  {
    variants: {
      color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        ghost: 'text-ghost',
        danger: 'text-danger',
        neutral: 'text-neutral',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  }
)
