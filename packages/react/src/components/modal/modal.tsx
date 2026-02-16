import {
  createContext,
  useContext,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { modalStyles, overlayPartsStyles } from "@versaur/core";
import "@versaur/core/modal.css";
import "@versaur/core/overlay-parts.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import { combineRefs } from "../../utils/combine-refs";
import {
  OverlayHeader,
  OverlayTitle,
  OverlayBody,
  OverlayFooter,
} from "../overlay-parts/overlay-parts";
import { ButtonIcon } from "../button-icon";
import { XIcon } from "@versaur/icons";
import type {
  ModalRootProps,
  ModalCloseReason,
  ModalCloseButtonProps,
} from "./modal.types";

interface ModalContextType {
  onClose: (reason: ModalCloseReason) => void;
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
  ({ open, onClose, children, ...props }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [closedBy, setClosedBy] = useState<ModalCloseReason | null>(null);
    const prevOpenRef = useRef(open);

    // Sync open prop with dialog.showModal()
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (open && !dialog.open) {
        dialog.showModal();
        // Lock body scroll
        document.body.style.overflow = "hidden";
      }

      // Programmatic close
      if (!open && prevOpenRef.current) {
        initiateClose("programmatic");
      }

      prevOpenRef.current = open;
    }, [open]);

    // Handle ESC key
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      const handleCancel = (e: Event) => {
        e.preventDefault();
        initiateClose("esc");
      };

      dialog.addEventListener("cancel", handleCancel);
      return () => dialog.removeEventListener("cancel", handleCancel);
    }, []);

    const initiateClose = (reason: ModalCloseReason) => {
      setClosedBy(reason);
      setIsClosing(true);
    };

    const handleAnimationEnd = () => {
      if (isClosing && dialogRef.current) {
        dialogRef.current.close();
        document.body.style.overflow = "";
        onClose(closedBy!);
        setIsClosing(false);
        setClosedBy(null);
      }
    };

    const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === dialogRef.current) {
        initiateClose("backdrop");
      }
    };

    const dataAttrs = useDataAttrs({
      open: open && !isClosing,
      closing: isClosing,
    });

    return (
      <ModalContext.Provider value={{ onClose: initiateClose }}>
        <dialog
          ref={combineRefs(dialogRef, ref)}
          className={modalStyles.modal}
          onClick={handleDialogClick}
          onAnimationEnd={handleAnimationEnd}
          {...dataAttrs}
          {...props}
        >
          <div className={overlayPartsStyles.content}>{children}</div>
        </dialog>
      </ModalContext.Provider>
    );
  },
);

ModalRoot.displayName = "Modal";

const ModalCloseButton = forwardRef<HTMLButtonElement, ModalCloseButtonProps>(
  ({ onClick, ...props }, ref) => {
    const { onClose } = useModalContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClose("closeButton");
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
