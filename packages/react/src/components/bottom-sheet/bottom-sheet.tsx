import {
  createContext,
  useContext,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { bottomSheetStyles, overlayPartsStyles } from "@versaur/core";
import "@versaur/core/bottom-sheet.css";
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
  BottomSheetRootProps,
  BottomSheetCloseReason,
  BottomSheetCloseButtonProps,
} from "./bottom-sheet.types";

interface BottomSheetContextType {
  onClose: (reason: BottomSheetCloseReason) => void;
}

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
  undefined,
);

const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error(
      "BottomSheet subcomponents must be used within BottomSheet",
    );
  }
  return context;
};

const BottomSheetRoot = forwardRef<HTMLDialogElement, BottomSheetRootProps>(
  ({ open, onClose, children, ...props }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [closedBy, setClosedBy] = useState<BottomSheetCloseReason | null>(
      null,
    );
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

    const initiateClose = (reason: BottomSheetCloseReason) => {
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
      <BottomSheetContext.Provider value={{ onClose: initiateClose }}>
        <dialog
          ref={combineRefs(dialogRef, ref)}
          className={bottomSheetStyles.bottomSheet}
          onClick={handleDialogClick}
          onAnimationEnd={handleAnimationEnd}
          {...dataAttrs}
          {...props}
        >
          <div className={overlayPartsStyles.content}>{children}</div>
        </dialog>
      </BottomSheetContext.Provider>
    );
  },
);

BottomSheetRoot.displayName = "BottomSheet";

const BottomSheetCloseButton = forwardRef<
  HTMLButtonElement,
  BottomSheetCloseButtonProps
>(({ onClick, ...props }, ref) => {
  const { onClose } = useBottomSheetContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClose("closeButton");
    onClick?.(e);
  };

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
  );
});

BottomSheetCloseButton.displayName = "BottomSheet.CloseButton";

export const BottomSheet = Object.assign(BottomSheetRoot, {
  Header: OverlayHeader,
  Title: OverlayTitle,
  CloseButton: BottomSheetCloseButton,
  Body: OverlayBody,
  Footer: OverlayFooter,
});
