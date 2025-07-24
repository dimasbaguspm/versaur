import { cva } from '@/utils/variants'

export const bottomBarVariants = cva(
  'sticky bottom-0 left-0 w-full flex justify-between items-center bg-white border-t border-border shadow-xs z-40 safe-bottom px-8 py-1',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        ghost: '',
        neutral: '',
        tertiary: '',
      },
      size: {
        sm: 'h-12 text-sm',
        md: 'h-16 text-base',
        lg: 'h-20 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export const bottomBarItemVariants = cva(
  'flex flex-col items-center justify-center gap-1 px-2 py-1',
  {
    variants: {
      active: {
        true: 'font-semibold text-primary',
        false: 'text-ghost',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)
