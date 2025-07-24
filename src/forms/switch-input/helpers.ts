import { cva } from '@/utils/variants'

/**
 * Variants for SwitchInput track
 * Controls color, size, checked, and disabled state
 */
export const switchVariants = cva(
  'relative inline-flex items-center transition-colors duration-200 border border-transparent',
  {
    variants: {
      color: {
        primary: '',
        secondary: '',
        tertiary: '',
        ghost: '',
        neutral: '',
        success: '',
        info: '',
        warning: '',
        danger: '',
      },
      size: {
        sm: 'h-4 w-8',
        md: 'h-5 w-10',
        lg: 'h-6 w-12',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
      disabled: false,
      checked: false,
    },
    compoundVariants: [
      {
        checked: true,
        color: 'primary',
        class: 'bg-primary',
      },
      {
        checked: true,
        color: 'secondary',
        class: 'bg-secondary',
      },
      { checked: true, color: 'tertiary', class: 'bg-tertiary' },
      { checked: true, color: 'ghost', class: 'bg-ghost' },
      { checked: true, color: 'neutral', class: 'bg-neutral' },
      { checked: true, color: 'success', class: 'bg-success' },
      { checked: true, color: 'info', class: 'bg-info' },
      { checked: true, color: 'warning', class: 'bg-warning' },
      { checked: true, color: 'danger', class: 'bg-danger' },
      { checked: false, class: 'bg-white border-border' },
    ],
  }
)

/**
 * Variants for SwitchInput thumb
 * Controls size and checked state
 */
export const thumbVariants = cva(
  'absolute rounded-full transition-transform duration-200',
  {
    variants: {
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
      checked: {
        true: 'translate-x-full bg-white left-1.5',
        false: 'bg-neutral left-0.5',
      },
    },
    defaultVariants: {
      size: 'md',
      checked: false,
    },
  }
)
