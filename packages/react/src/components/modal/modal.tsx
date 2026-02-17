import { createContext, useContext, forwardRef } from "react";
import { modalStyles, overlayPartsStyles } from "@versaur/core";
import "@versaur/core/modal.css";
import "@versaur/core/overlay-parts.css";
import { Dialog } from "../dialog";
import {
  OverlayHeader,
  OverlayTitle,
  OverlayBody,
  OverlayFooter,
} from "../overlay-parts/overlay-parts";
import { ButtonIcon } from "../button-icon";
import { XIcon } from "@versaur/icons";
import type { ModalRootProps, ModalCloseButtonProps } from "./modal.types";

interface ModalContextType {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal subcomponents must be used within Modal");
  }
  return context;
};

const ModalRoot = forwardRef<HTMLDialogElement, ModalRootProps>(
  ({ open, onOpenChange, children, ...props }, ref) => {
    return (
      <ModalContext.Provider value={{ onClose: () => onOpenChange?.(false) }}>
        <Dialog
          ref={ref}
          isOpen={open}
          onOpenChange={onOpenChange}
          className={open ? modalStyles.modal : ""}
          {...props}
        >
          <div className={overlayPartsStyles.content}>{children}</div>
        </Dialog>
      </ModalContext.Provider>
    );
  },
);

ModalRoot.displayName = "Modal";

const ModalCloseButton = forwardRef<HTMLButtonElement, ModalCloseButtonProps>(
  ({ onClick, ...props }, ref) => {
    const { onClose } = useModalContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClose();
      onClick?.(e);
    };

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
    );
  },
);

ModalCloseButton.displayName = "Modal.CloseButton";

export const Modal = Object.assign(ModalRoot, {
  Header: OverlayHeader,
  Title: OverlayTitle,
  CloseButton: ModalCloseButton,
  Body: OverlayBody,
  Footer: OverlayFooter,
});
