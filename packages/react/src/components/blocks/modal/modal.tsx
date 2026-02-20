import { modalStyles } from "@versaur/core/blocks"
import { overlayPartsStyles } from "@versaur/core/utils"
import { XIcon } from "@versaur/icons"
import { createContext, forwardRef, useContext } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { ButtonIcon } from "../../primitive/button-icon"
import { OverlayBody, OverlayTitle } from "../../utils/overlay-parts/overlay-parts"
import { Dialog } from "../dialog"
import type { ModalCloseButtonProps, ModalFooterProps, ModalHeaderProps, ModalRootProps } from "./modal.types"

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

const ModalRoot = forwardRef<HTMLDialogElement, ModalRootProps>(
  ({ open, onOpenChange, size, position, children, className, ...props }, ref) => {
    const dataAttrs = useDataAttrs({ size, position })

    return (
      <ModalContext.Provider value={{ onClose: () => onOpenChange?.(false) }}>
        <Dialog
          ref={ref}
          isOpen={open}
          onOpenChange={onOpenChange}
          className={cx(open && modalStyles.modal, className)}
          data-modal=""
          {...dataAttrs}
          {...props}
        >
          <div className={overlayPartsStyles.content}>{children}</div>
        </Dialog>
      </ModalContext.Provider>
    )
  },
)

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

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(({ action, children, className, ...props }, ref) => (
  <div ref={ref} className={cx(overlayPartsStyles.header, "modal-header", className)} data-modal-header="" {...props}>
    <div>{children}</div>
    {action && <div className="modal-header-action">{action}</div>}
  </div>
))

ModalHeader.displayName = "Modal.Header"

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ align = "end", children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(overlayPartsStyles.footer, "modal-footer", className)}
      data-modal-footer=""
      data-align={align}
      {...props}
    >
      {children}
    </div>
  ),
)

ModalFooter.displayName = "Modal.Footer"

export const Modal = Object.assign(ModalRoot, {
  Body: OverlayBody,
  CloseButton: ModalCloseButton,
  Footer: ModalFooter,
  Header: ModalHeader,
  Title: OverlayTitle,
})
