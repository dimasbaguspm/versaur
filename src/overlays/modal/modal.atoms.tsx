import { forwardRef } from 'react'
import type {
  ModalHeaderProps,
  ModalFooterProps,
  ModalOverlayProps,
  ModalBodyProps,
} from './types'
import { cn } from '@/utils'
import { modalOverlayVariants } from './helpers'
import { useModalContext } from './context'

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 pt-6 pb-2 text-lg font-semibold', className)}
      {...rest}
    />
  )
)

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4  flex justify-end gap-2', className)}
      {...rest}
    />
  )
)

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn('px-6 py-2', className)} {...rest} />
  )
)

/**
 * ModalOverlay atom: handles overlay rendering, click-to-close, and transitions
 */
export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  (props, ref) => {
    const { isOpen, placement, onClose, disableOverlayClickToClose } =
      useModalContext()

    const handleClick = () => {
      if (disableOverlayClickToClose) return
      onClose()
    }

    return (
      <div
        ref={ref}
        role='presentation'
        tabIndex={-1}
        aria-modal='true'
        onClick={handleClick}
        className={cn(
          modalOverlayVariants({ placement }),
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        {...props}
      />
    )
  }
)
