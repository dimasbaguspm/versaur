import { forwardRef } from 'react'
import type { SnackbarProps } from './types'
import { cn } from '@/utils/cn'
import { getSnackbarButtonIconVariant, snackbarVariants } from './helpers'
import { SnackbarText, SnackbarAction } from './snackbar.atoms'
import { ButtonIcon } from '@/components/button-icon'
import { X } from 'lucide-react'

/**
 * Snackbar component for brief messages and actions
 * Follows Versaur design system and Material guidelines
 */
export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ children, action, onClose, color, className, ...props }, ref) => {
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
        <ButtonIcon
          as={X}
          variant={getSnackbarButtonIconVariant(color)}
          size='sm'
          shape='rounded'
          aria-label='Close'
          onClick={onClose}
          className='ml-2'
        />
      </div>
    )
  }
)
