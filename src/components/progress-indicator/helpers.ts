import { cva } from 'class-variance-authority'

export const progressIndicatorLine = cva(
  'absolute left-0 top-0 h-full rounded transition-all duration-500',
  {
    variants: {
      color: {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
        ghost: 'bg-ghost',
        neutral: 'bg-neutral',
        success: 'bg-success',
        info: 'bg-info',
        warning: 'bg-warning',
        danger: 'bg-danger',
      },
      indeterminate: {
        true: 'animate-progress-indicator-indeterminate w-full',
        false: '',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      color: 'primary',
      indeterminate: false,
    },
  }
)
