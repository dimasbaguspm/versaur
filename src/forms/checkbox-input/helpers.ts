import { cva } from '@/utils/variants'

export const checkboxGroupVariants = cva('space-y-2', {
  variants: {
    direction: {
      vertical: 'space-y-2 space-x-0',
      horizontal: 'flex flex-wrap gap-4 space-y-0',
    },
  },
  defaultVariants: {
    direction: 'vertical',
  },
})

export const checkboxVariants = cva(
  'relative h-4 w-4 rounded border cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-white border-primary/40 checked:bg-primary checked:border-primary focus:ring-primary/20'
)

export const checkboxLabelVariants = cva(
  'text-sm text-foreground cursor-pointer select-none',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)
