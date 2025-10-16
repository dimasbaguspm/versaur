import { cva } from '@/utils/variants'
import type { ButtonIconProps } from './types'
import type { IconProps } from '../icon'

/**
 * Maps ButtonIcon variant to Icon color prop
 */
export function getIconColorFromVariant(
  variant: ButtonIconProps['variant'] = 'primary'
): IconProps['color'] {
  // For primary and destructive, use white icons
  if (variant === 'primary' || variant === 'destructive') {
    return 'white'
  }

  // For ghost and outline, inherit color from button text
  if (variant === 'ghost' || variant === 'outline') {
    return 'inherit'
  }

  return 'inherit'
}

export const buttonIconVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer',
  {
    variants: {
      variant: {
        // Primary variant - main action button with coral accent
        primary:
          'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary-light focus-visible:ring-offset-white shadow-sm hover:shadow-md',
        // Ghost variant - subtle, minimal visual weight
        ghost:
          'bg-white text-foreground hover:bg-ghost-soft focus-visible:ring-ghost-light focus-visible:ring-offset-white',
        // Outline variant - bordered, lightweight alternative
        outline:
          'border border-border text-foreground bg-white hover:bg-accent-soft focus-visible:ring-accent-soft focus-visible:ring-offset-white transition-all',
        // Destructive variant - for dangerous or irreversible actions
        destructive:
          'bg-danger text-white hover:bg-danger/90 focus-visible:ring-danger-soft focus-visible:ring-offset-white shadow-sm hover:shadow-md',
      },
      size: {
        sm: 'h-7 w-7',
        md: 'h-9 w-9',
        lg: 'h-10 w-10',
      },
      shape: {
        rounded: 'rounded-md',
        square: 'rounded-sm',
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'rounded',
    },
  }
)
