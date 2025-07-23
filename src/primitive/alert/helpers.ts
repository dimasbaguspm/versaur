import { cva } from '@/utils/variants'

/**
 * Alert component variants using Versaur color system
 * Supports both default (soft) and outline variants for all colors
 */
export const alertVariants = cva(
  'relative flex items-center gap-2 rounded-md p-2 text-sm transition-all duration-200',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border',
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
    },
    compoundVariants: [
      // Default variant styles (soft backgrounds)
      {
        variant: 'default',
        color: 'primary',
        class: 'bg-coral-soft text-coral border border-coral',
      },
      {
        variant: 'default',
        color: 'secondary',
        class: 'bg-sage-soft text-sage border border-sage',
      },
      {
        variant: 'default',
        color: 'tertiary',
        class: 'bg-mist-soft text-mist border border-mist',
      },
      {
        variant: 'default',
        color: 'ghost',
        class: 'bg-slate-soft text-slate border border-slate',
      },
      {
        variant: 'default',
        color: 'neutral',
        class: 'bg-border/50 text-foreground border border-border',
      },
      {
        variant: 'default',
        color: 'success',
        class: 'bg-success-soft text-success border border-success',
      },
      {
        variant: 'default',
        color: 'info',
        class: 'bg-info-soft text-info border border-info',
      },
      {
        variant: 'default',
        color: 'warning',
        class: 'bg-warning-soft text-warning border border-warning',
      },
      {
        variant: 'default',
        color: 'danger',
        class: 'bg-danger-soft text-danger border border-danger',
      },

      // Outline variant styles
      {
        variant: 'outline',
        color: 'primary',
        class: 'bg-transparent text-coral border-coral',
      },
      {
        variant: 'outline',
        color: 'secondary',
        class: 'bg-transparent text-sage border-sage',
      },
      {
        variant: 'outline',
        color: 'tertiary',
        class: 'bg-transparent text-mist border-mist',
      },
      {
        variant: 'outline',
        color: 'ghost',
        class: 'bg-transparent text-slate border-slate',
      },
      {
        variant: 'outline',
        color: 'neutral',
        class: 'bg-transparent text-foreground border-border',
      },
      {
        variant: 'outline',
        color: 'success',
        class: 'bg-transparent text-success border-success',
      },
      {
        variant: 'outline',
        color: 'info',
        class: 'bg-transparent text-info border-info',
      },
      {
        variant: 'outline',
        color: 'warning',
        class: 'bg-transparent text-warning border-warning',
      },
      {
        variant: 'outline',
        color: 'danger',
        class: 'bg-transparent text-danger border-danger',
      },
    ],
    defaultVariants: {
      variant: 'default',
      color: 'neutral',
    },
  }
)

/**
 * Alert icon variants for proper sizing and spacing
 */
export const alertIconVariants = cva(
  'flex-shrink-0 flex justify-center items-center ',
  {
    variants: {
      size: {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
