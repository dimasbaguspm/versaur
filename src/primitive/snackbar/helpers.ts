import { cva } from 'class-variance-authority'

export const snackbarVariants = cva(
  'flex items-center gap-2 px-4 py-2 rounded-sm w-fit relative shadow-sm',
  {
    variants: {
      color: {
        success: 'text-success-bold bg-success-soft border-l-4 border-success',
        info: 'text-info-bold bg-info-soft border-l-4 border-info',
        warning: 'text-warning-bold bg-warning-soft border-l-4 border-warning',
        danger: 'text-danger-bold bg-danger-soft border-l-4 border-danger',
      },
    },
    defaultVariants: {
      color: 'success',
    },
  }
)
