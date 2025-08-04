import { cva } from 'class-variance-authority'

export const sideBarItemClass = cva(
  'flex items-center gap-2 px-4 py-2 rounded-md hover:text-primary focus:outline-none transition-colors',
  {
    variants: {
      active: {
        true: 'bg-primary/10 text-primary',
        false: 'text-ghost',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
      disabled: false,
    },
  }
)
