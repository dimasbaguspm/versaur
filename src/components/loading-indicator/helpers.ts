import { cva } from '@/utils/variants'

export const spinnerVariants = cva(
  'inline-block border animate-spin rounded-full',
  {
    variants: {
      size: {
        sm: 'w-4 h-4 border-2',
        md: 'w-6 h-6 border-2',
        lg: 'w-8 h-8 border-4',
      },
      color: {
        primary: 'border-coral border-t-transparent ',
        secondary: 'border-sage border-t-transparent',
        tertiary: 'border-mist border-t-transparent',
        ghost: 'border-slate border-t-transparent',
        neutral: 'border-neutral border-t-transparent',
        success: 'border-success border-t-transparent',
        info: 'border-info border-t-transparent',
        warning: 'border-warning border-t-transparent',
        danger: 'border-danger border-t-transparent',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  }
)

export const barVariants = cva('relative w-full h-1 overflow-hidden rounded', {
  variants: {
    color: {
      primary: 'bg-coral',
      secondary: 'bg-sage',
      tertiary: 'bg-mist',
      ghost: 'bg-slate',
      neutral: 'bg-neutral',
      success: 'bg-success',
      info: 'bg-info',
      warning: 'bg-warning',
      danger: 'bg-danger',
    },
    size: {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})

export const getBarBgClass = (color: string) => {
  switch (color) {
    case 'primary':
      return 'bg-coral'
    case 'secondary':
      return 'bg-sage'
    case 'tertiary':
      return 'bg-mist'
    case 'ghost':
      return 'bg-slate'
    case 'neutral':
      return 'bg-neutral'
    case 'success':
      return 'bg-success'
    case 'info':
      return 'bg-info'
    case 'warning':
      return 'bg-warning'
    case 'danger':
      return 'bg-danger'
    default:
      return 'bg-coral'
  }
}
