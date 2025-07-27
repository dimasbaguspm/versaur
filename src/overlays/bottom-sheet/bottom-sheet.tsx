import { forwardRef, useEffect } from 'react'
import type { BottomSheetProps } from './types'
import { bottomSheetRootVariants, bottomSheetBackdropVariants } from './helpers'
import {
  BottomSheetHeader,
  BottomSheetBody,
  BottomSheetFooter,
  BottomSheetTitle,
} from './bottom-sheet.atoms'
import { cn } from '@/utils'

/**
 * BottomSheet component for mobile overlays
 * Controlled by `isOpen` prop only. Slides up from the bottom, covers content, and can be dismissed by tapping backdrop
 * Only intended for small viewports/mobile
 */

const BottomSheetRoot = forwardRef<HTMLDivElement, BottomSheetProps>(
  ({ isOpen, children, className, onClose, ...props }, ref) => {
    // Handle escape key to close drawer
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
          onClose()
        }
      }

      if (isOpen) {
        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'
      }

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }, [isOpen, onClose])

    const handleBackdropClick = () => {
      onClose?.()
    }

    return (
      <>
        <div
          className={bottomSheetBackdropVariants({ open: isOpen })}
          aria-hidden='true'
          onClick={handleBackdropClick}
        />
        <div
          ref={ref}
          className={cn(
            bottomSheetRootVariants({
              open: isOpen,
            }),
            className
          )}
          role='dialog'
          aria-modal='true'
          tabIndex={-1}
          {...props}
        >
          {children}
        </div>
      </>
    )
  }
)

export const BottomSheet = Object.assign(BottomSheetRoot, {
  Header: BottomSheetHeader,
  Title: BottomSheetTitle,
  Body: BottomSheetBody,
  Footer: BottomSheetFooter,
})
