import { cva } from '@/utils/variants'

/**
 * Badge component variants using Versaur color system
 * Supports default and outline variants with various colors and sizes
 */
export const badgeVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 select-none gap-1 min-h-[1.25rem]',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border bg-transparent',
      },
      color: {
        // Core colors
        primary: '',
        secondary: '',
        tertiary: '',
        ghost: '',
        neutral: '',
        // Semantic colors
        success: '',
        info: '',
        warning: '',
        danger: '',
      },
      shape: {
        rounded: 'rounded-full',
        square: 'rounded-md',
      },
      size: {
        sm: 'text-xs px-1 py-0.25 h-3',
        md: 'text-xs px-1.5 py-0.5 h-4',
        lg: 'text-sm px-2 py-1 h-6',
      },
      iconOnly: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Default variant color combinations - using light/soft backgrounds
      {
        variant: 'default',
        color: 'primary',
        className: 'bg-coral-soft text-coral',
      },
      {
        variant: 'default',
        color: 'secondary',
        className: 'bg-sage-soft text-sage',
      },
      {
        variant: 'default',
        color: 'tertiary',
        className: 'bg-mist-soft text-mist',
      },
      {
        variant: 'default',
        color: 'ghost',
        className: 'bg-slate-soft text-slate',
      },
      {
        variant: 'default',
        color: 'neutral',
        className: 'bg-neutral text-foreground',
      },
      {
        variant: 'default',
        color: 'success',
        className: 'bg-success-soft text-success',
      },
      {
        variant: 'default',
        color: 'info',
        className: 'bg-info-soft text-info',
      },
      {
        variant: 'default',
        color: 'warning',
        className: 'bg-warning-soft text-warning',
      },
      {
        variant: 'default',
        color: 'danger',
        className: 'bg-danger-soft text-danger',
      },

      // Outline variant color combinations
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-coral text-coral',
      },
      {
        variant: 'outline',
        color: 'secondary',
        className: 'border-sage text-sage',
      },
      {
        variant: 'outline',
        color: 'tertiary',
        className: 'border-mist text-mist',
      },
      {
        variant: 'outline',
        color: 'ghost',
        className: 'border-slate text-slate',
      },
      {
        variant: 'outline',
        color: 'neutral',
        className: 'border-neutral text-foreground',
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'border-success text-success',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-info text-info',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-warning text-warning',
      },
      {
        variant: 'outline',
        color: 'danger',
        className: 'border-danger text-danger',
      },

      // Icon-only size adjustments
      {
        iconOnly: true,
        size: 'sm',
        className: 'px-1 py-1 w-5 h-5',
      },
      {
        iconOnly: true,
        size: 'md',
        className: 'px-1.5 py-1.5 w-6 h-6',
      },
      {
        iconOnly: true,
        size: 'lg',
        className: 'px-2 py-2 w-7 h-7',
      },
    ],
    defaultVariants: {
      variant: 'default',
      color: 'primary',
      shape: 'square',
      size: 'md',
      iconOnly: false,
    },
  }
)
