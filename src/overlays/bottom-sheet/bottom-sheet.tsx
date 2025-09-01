import { forwardRef, useMemo } from 'react'
import type { BottomSheetProps } from './types'
import { bottomSheetRootVariants, bottomSheetBackdropVariants } from './helpers'
import {
  BottomSheetHeader,
  BottomSheetBody,
  BottomSheetFooter,
  BottomSheetTitle,
  BottomSheetCloseIcon,
} from './bottom-sheet.atoms'
import { cn, useKeyboardVirtual } from '@/utils'
import { useEscapeClose } from '@/utils/use-escape-close'
import { combineRefs } from '@/utils/combine-ref'
import { OverlayPortal } from '@/utils/overlay-portal'
import { BottomSheetProvider } from './context'

/**
 * BottomSheet component for mobile overlays
 * Controlled by `isOpen` prop only. Slides up from the bottom, covers content, and can be dismissed by tapping backdrop
 * Only intended for small viewports/mobile
 */

const BottomSheetRoot = forwardRef<HTMLDivElement, BottomSheetProps>(
  (
    {
      isOpen,
      children,
      className,
      onClose,
      container,
      disableOverlayClickToClose = false,
      ...props
    },
    ref
  ) => {
    const sheetRef = useEscapeClose(isOpen, onClose)
    const {
      isOpen: keyboardOpen,
      height: keyboardHeight,
      isSupported,
    } = useKeyboardVirtual()

    const dynamicStyles = useMemo(() => {
      if (!isOpen || !isSupported || !keyboardOpen) return {}

      return {
        // Adjust bottom position to sit above the virtual keyboard
        bottom: `${keyboardHeight}px`,
        // Reduce max height to account for keyboard
        maxHeight: `calc(90dvh - ${keyboardHeight}px)`,
        // Ensure smooth transition
        transition: 'bottom 0.2s ease-in-out, max-height 0.2s ease-in-out',
      }
    }, [isOpen, isSupported, keyboardOpen, keyboardHeight])

    const handleBackdropClick = () => {
      if (disableOverlayClickToClose) return
      onClose?.()
    }

    return (
      <OverlayPortal container={container}>
        <BottomSheetProvider value={{ onClose }}>
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
              'flex flex-col', // Add flex layout for proper header/body/footer arrangement
              className
            )}
            style={dynamicStyles}
            role='dialog'
            aria-modal='true'
            tabIndex={-1}
            {...props}
          >
            {children}
          </div>
        </BottomSheetProvider>
      </OverlayPortal>
    )
  }
)

export const BottomSheet = Object.assign(BottomSheetRoot, {
  Header: BottomSheetHeader,
  Title: BottomSheetTitle,
  CloseIcon: BottomSheetCloseIcon,
  Body: BottomSheetBody,
  Footer: BottomSheetFooter,
})
