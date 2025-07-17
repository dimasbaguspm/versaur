import { forwardRef } from 'react'
import type { SnackbarProps } from './types'
import { cn } from '@/utils/cn'
import { snackbarVariants } from './helpers'
import { SnackbarText, SnackbarAction } from './snackbar.atoms'
import { ButtonIcon } from '@/components/button-icon/button-icon'
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
          variant='ghost'
          size='sm'
          shape='rounded'
          aria-label='Close'
          onClick={onClose}
          className='ml-2'
        >
          <X size={16} />
        </ButtonIcon>
      </div>
    )
  }
)
