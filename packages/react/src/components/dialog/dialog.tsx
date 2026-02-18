import React, { useCallback, useEffect, useRef } from "react";
import type { DialogRootProps } from "./dialog.types";

/**
 * Dialog - A controlled headless dialog component
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Dialog id="myDialog" isOpen={isOpen} onOpenChange={setIsOpen}>
 *   Content here
 * </Dialog>
 * ```
 */
const DialogRoot = React.forwardRef<HTMLDialogElement, DialogRootProps>(
  ({ isOpen, onOpenChange, children, onClick, ...rest }, forwardedRef) => {
    const internalRef = useRef<HTMLDialogElement>(null);
    const dialogRef =
      (forwardedRef as React.MutableRefObject<HTMLDialogElement | null>) || internalRef;

    // Sync React state with native dialog
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) {
        return;
      }

      if (isOpen) {
        try {
          dialog.showModal();
        } catch {
          // Already open
        }
      } else {
        dialog.close();
      }
    }, [isOpen, dialogRef]);

    // Handle backdrop click and native events
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) {
        return;
      }

      const handleClose = () => onOpenChange?.(false);
      const handleCancel = (e: Event) => {
        e.preventDefault();
        onOpenChange?.(false);
      };

      dialog.addEventListener("close", handleClose);
      dialog.addEventListener("cancel", handleCancel);

      return () => {
        dialog.removeEventListener("close", handleClose);
        dialog.removeEventListener("cancel", handleCancel);
      };
    }, [onOpenChange, dialogRef]);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === e.currentTarget) {
          onOpenChange?.(false);
        }
        onClick?.(e);
      },
      [onOpenChange, onClick],
    );

    return (
      <dialog {...rest} ref={dialogRef} onClick={handleClick}>
        {children}
      </dialog>
    );
  },
);

DialogRoot.displayName = "Dialog";

export const Dialog = DialogRoot;
