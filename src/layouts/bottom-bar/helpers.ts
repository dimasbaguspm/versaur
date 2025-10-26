import { cva } from '@/utils/variants'

export const bottomBarVariants = cva(
  'sticky bottom-0 w-full flex justify-around items-center bg-white z-40 safe-bottom gap-4 select-none px-8',
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
  'flex flex-col items-center justify-center gap-1',
  {
    variants: {
      active: {
        true: 'text-primary',
        false: 'text-ghost',
      },
      as: {
        button:
          'transition-all duration-200 h-8 w-8 outline-none cursor-pointer active:scale-98 focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:rounded-full',
        div: '',
      },
    },
    defaultVariants: {
      active: false,
      as: 'button',
    },
  }
)
