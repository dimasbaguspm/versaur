import { cva } from 'class-variance-authority'

export const snackbarVariants = cva(
  'flex items-center gap-2 px-4 py-2 rounded-sm w-fit max-w-sm relative bg-white shadow-sm',
  {
    variants: {
      color: {
        success: 'text-success bg-success/5 border-l-4 border-success',
        info: 'text-info bg-info/5 border-l-4 border-info',
        warning: 'text-warning bg-warning/5 border-l-4 border-warning',
        danger: 'text-danger bg-danger/5 border-l-4 border-danger',
      },
    },
    defaultVariants: {
      color: 'success',
    },
  }
)

/**
 * Returns the ButtonIcon variant for the given snackbar color
 * @param color - Snackbar color prop
 */
export function getSnackbarButtonIconVariant(
  color?: 'success' | 'info' | 'warning' | 'danger'
) {
  switch (color) {
    case 'info':
      return 'info-ghost'
    case 'warning':
      return 'warning-ghost'
    case 'danger':
      return 'danger-ghost'
    case 'success':
    default:
      return 'success-ghost'
  }
}
