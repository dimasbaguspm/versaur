import { bottomSheetStyles } from "@versaur/core/blocks"
import { overlayPartsStyles } from "@versaur/core/utils"
import { XIcon } from "@versaur/icons"
import { createContext, forwardRef, useContext } from "react"

import { cx } from "../../../utils/cx"
import { ButtonIcon } from "../../primitive/button-icon"
import { Dialog } from "../dialog"
import { OverlayBody, OverlayFooter, OverlayHeader, OverlayTitle } from "../../utils/overlay-parts/overlay-parts"
import type { BottomSheetCloseButtonProps, BottomSheetRootProps } from "./bottom-sheet.types"

interface BottomSheetContextType {
  onClose: () => void
}

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(undefined)

const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext)
  if (!context) {
    throw new Error("BottomSheet subcomponents must be used within BottomSheet")
  }
  return context
}

const BottomSheetRoot = forwardRef<HTMLDialogElement, BottomSheetRootProps>(
  ({ open, onOpenChange, children, className, ...props }, ref) => (
    <BottomSheetContext.Provider value={{ onClose: () => onOpenChange?.(false) }}>
      <Dialog ref={ref} isOpen={open} onOpenChange={onOpenChange} className={cx(bottomSheetStyles.bottomSheet, className)} {...props}>
        <div className={overlayPartsStyles.content}>{children}</div>
      </Dialog>
    </BottomSheetContext.Provider>
  ),
)

BottomSheetRoot.displayName = "BottomSheet"

const BottomSheetCloseButton = forwardRef<HTMLButtonElement, BottomSheetCloseButtonProps>(
  ({ onClick, ...props }, ref) => {
    const { onClose } = useBottomSheetContext()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClose()
      onClick?.(e)
    }

    return (
      <ButtonIcon
        as={XIcon}
        ref={ref}
        variant="ghost"
        aria-label="Close"
        onClick={handleClick}
        className={overlayPartsStyles.closeButton}
        {...props}
      />
    )
  },
)

BottomSheetCloseButton.displayName = "BottomSheet.CloseButton"

export const BottomSheet = Object.assign(BottomSheetRoot, {
  Body: OverlayBody,
  CloseButton: BottomSheetCloseButton,
  Footer: OverlayFooter,
  Header: OverlayHeader,
  Title: OverlayTitle,
})
