import { forwardRef } from 'react'
import type { SnackbarProps } from './types'
import { cn } from '@/utils/cn'
import { snackbarVariants } from './helpers'
import { SnackbarText, SnackbarAction } from './snackbar.atoms'
/**
 * Snackbar component for brief messages and actions
 * Follows Versaur design system and Material guidelines
 */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ children, action, color, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role='status'
        aria-live='polite'
        className={cn(snackbarVariants({ color }), className)}
        {...props}
      >
        <SnackbarText>{children}</SnackbarText>
        {action && <SnackbarAction>{action}</SnackbarAction>}
      </div>
    )
  }
)
