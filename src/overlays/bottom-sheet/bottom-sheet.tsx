import { forwardRef } from 'react'
import type { BottomSheetProps } from './types'
import { bottomSheetRootVariants, bottomSheetBackdropVariants } from './helpers'
import {
  BottomSheetHeader,
  BottomSheetBody,
  BottomSheetFooter,
  BottomSheetTitle,
} from './bottom-sheet.atoms'
import { cn } from '@/utils'
import { useEscapeClose } from '@/utils/use-escape-close'
import { combineRefs } from '@/utils/combine-ref'
import { OverlayPortal } from '@/utils/overlay-portal'

/**
 * BottomSheet component for mobile overlays
 * Controlled by `isOpen` prop only. Slides up from the bottom, covers content, and can be dismissed by tapping backdrop
 * Only intended for small viewports/mobile
 */

const BottomSheetRoot = forwardRef<HTMLDivElement, BottomSheetProps>(
  ({ isOpen, children, className, onClose, container, ...props }, ref) => {
    const sheetRef = useEscapeClose(isOpen, onClose)

    const handleBackdropClick = () => {
      onClose?.()
    }

    return (
      <OverlayPortal container={container}>
        <div
          className={bottomSheetBackdropVariants({ open: isOpen })}
          aria-hidden='true'
          onClick={handleBackdropClick}
        />
        <div
          ref={combineRefs(ref, sheetRef)}
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
      </OverlayPortal>
    )
  }
)

export const BottomSheet = Object.assign(BottomSheetRoot, {
  Header: BottomSheetHeader,
  Title: BottomSheetTitle,
  Body: BottomSheetBody,
  Footer: BottomSheetFooter,
})
