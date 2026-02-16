import {
  createContext,
  useContext,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { drawerStyles, overlayPartsStyles } from "@versaur/core";
import "@versaur/core/drawer.css";
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
  DrawerRootProps,
  DrawerCloseReason,
  DrawerCloseButtonProps,
} from "./drawer.types";

interface DrawerContextType {
  onClose: (reason: DrawerCloseReason) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer subcomponents must be used within Drawer");
  }
  return context;
};

const DrawerRoot = forwardRef<HTMLDialogElement, DrawerRootProps>(
  ({ open, onClose, placement = "right", children, ...props }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [closedBy, setClosedBy] = useState<DrawerCloseReason | null>(null);
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

    const initiateClose = (reason: DrawerCloseReason) => {
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
      placement,
      open: open && !isClosing,
      closing: isClosing,
    });

    return (
      <DrawerContext.Provider value={{ onClose: initiateClose }}>
        <dialog
          ref={combineRefs(dialogRef, ref)}
          className={drawerStyles.drawer}
          onClick={handleDialogClick}
          onAnimationEnd={handleAnimationEnd}
          {...dataAttrs}
          {...props}
        >
          <div className={overlayPartsStyles.content}>{children}</div>
        </dialog>
      </DrawerContext.Provider>
    );
  },
);

DrawerRoot.displayName = "Drawer";

const DrawerCloseButton = forwardRef<HTMLButtonElement, DrawerCloseButtonProps>(
  ({ onClick, ...props }, ref) => {
    const { onClose } = useDrawerContext();

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

DrawerCloseButton.displayName = "Drawer.CloseButton";

export const Drawer = Object.assign(DrawerRoot, {
  Header: OverlayHeader,
  Title: OverlayTitle,
  CloseButton: DrawerCloseButton,
  Body: OverlayBody,
  Footer: OverlayFooter,
});
