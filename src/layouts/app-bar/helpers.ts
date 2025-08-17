// Utility for AppBar variants (cva)
import { cva } from 'class-variance-authority'

export const appBarVariants = cva(
  'w-full flex flex-wrap items-center pt-3 mb-3 gap-2 bg-white [&>[data-versaur-appbar-bottom]]:basis-full [&>[data-versaur-appbar-bottom]]:w-full [&:has([data-versaur-appbar-bottom])>[data-versaur-appbar-leading]]:pl-4 [&:has([data-versaur-appbar-bottom])>[data-versaur-appbar-trailing]]:pr-4 [&:not(:has([data-versaur-appbar-bottom]))]:px-4',
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
  'flex flex-col justify-center min-w-0 flex-grow',
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
