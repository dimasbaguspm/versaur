import { modalStyles } from "@versaur/core/blocks"
import { overlayPartsStyles } from "@versaur/core/utils"
import { XIcon } from "@versaur/icons"
import { createContext, forwardRef, useContext } from "react"

import { cx } from "../../../utils/cx"
import { ButtonIcon } from "../../primitive/button-icon"
import { Dialog } from "../dialog"
import { OverlayBody, OverlayFooter, OverlayHeader, OverlayTitle } from "../../utils/overlay-parts/overlay-parts"
import type { ModalCloseButtonProps, ModalRootProps } from "./modal.types"

interface ModalContextType {
  onClose: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("Modal subcomponents must be used within Modal")
  }
  return context
}

const ModalRoot = forwardRef<HTMLDialogElement, ModalRootProps>(({ open, onOpenChange, children, className, ...props }, ref) => (
  <ModalContext.Provider value={{ onClose: () => onOpenChange?.(false) }}>
    <Dialog ref={ref} isOpen={open} onOpenChange={onOpenChange} className={cx(open && modalStyles.modal, className)} {...props}>
      <div className={overlayPartsStyles.content}>{children}</div>
    </Dialog>
  </ModalContext.Provider>
))

ModalRoot.displayName = "Modal"

const ModalCloseButton = forwardRef<HTMLButtonElement, ModalCloseButtonProps>(({ onClick, ...props }, ref) => {
  const { onClose } = useModalContext()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClose()
    onClick?.(e)
  }

  return (
    <ButtonIcon
      ref={ref}
      variant="ghost"
      as={XIcon}
      aria-label="Close"
      onClick={handleClick}
      className={overlayPartsStyles.closeButton}
      {...props}
    />
  )
})

ModalCloseButton.displayName = "Modal.CloseButton"

export const Modal = Object.assign(ModalRoot, {
  Body: OverlayBody,
  CloseButton: ModalCloseButton,
  Footer: OverlayFooter,
  Header: OverlayHeader,
  Title: OverlayTitle,
})
