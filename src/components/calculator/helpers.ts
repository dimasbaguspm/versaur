import { cva } from '@/utils/variants'

export const calculatorRootVariants = cva(
  'flex flex-col w-full max-w-xs rounded-lg bg-background',
  {
    variants: {
      disabled: {
        true: 'opacity-60 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

export const calculatorButtonVariants = cva(
  'flex-1 min-w-0 h-12 m-0.5 rounded text-lg font-medium transition-colors select-none',
  {
    variants: {
      variant: {
        default:
          'bg-neutral text-foreground hover:bg-neutral-soft hover:text-neutral',
        action:
          'bg-primary text-white hover:bg-primary-soft hover:text-primary',
        operator:
          'bg-secondary text-white hover:bg-secondary-soft hover:text-secondary',
        danger: 'bg-danger text-white hover:bg-danger-soft hover:text-danger',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      disabled: false,
    },
  }
)
