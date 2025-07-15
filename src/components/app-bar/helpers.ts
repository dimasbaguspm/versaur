// Utility for AppBar variants (cva)
import { cva } from 'class-variance-authority'

export const appBarVariants = cva(
  'w-full flex items-center px-4 py-3 gap-2 bg-white',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        tertiary: '',
        ghost: '',
        neutral: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export const appBarCenterVariants = cva(
  'flex flex-col justify-center w-full min-w-0 ',
  {
    variants: {
      placement: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
      },
    },
    defaultVariants: {
      placement: 'start',
    },
  }
)
