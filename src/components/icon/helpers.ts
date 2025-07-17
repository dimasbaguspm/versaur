import { cva } from 'class-variance-authority'

export const iconVariants = cva('inline-flex items-center justify-center', {
  variants: {
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      ghost: 'text-ghost',
      neutral: 'text-neutral',
      success: 'text-success',
      info: 'text-info',
      warning: 'text-warning',
      danger: 'text-danger',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})
