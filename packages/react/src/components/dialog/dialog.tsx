import React, { useEffect, useRef } from "react";
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
  ({ isOpen, onOpenChange, children, dialogProps = {} }, forwardedRef) => {
    const internalRef = useRef<HTMLDialogElement>(null);
    const ref = (forwardedRef as React.Ref<HTMLDialogElement>) || internalRef;
    const dialogElement =
      (typeof ref === "object" && ref?.current) ||
      (typeof ref === "function"
        ? null
        : (ref as unknown as HTMLDialogElement));

    useEffect(() => {
      const dialog =
        typeof ref === "object"
          ? ref.current
          : (dialogElement as HTMLDialogElement);
      if (!dialog) return;

      // Sync React state with native dialog
      if (isOpen) {
        try {
          dialog.showModal();
        } catch {
          // Already open
        }
      } else {
        dialog.close();
      }
    }, [isOpen, ref, dialogElement]);

    useEffect(() => {
      const dialog =
        typeof ref === "object"
          ? ref.current
          : (dialogElement as HTMLDialogElement);
      if (!dialog) return;

      const handleClose = () => {
        onOpenChange?.(false);
      };

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
    }, [ref, dialogElement, onOpenChange]);

    return (
      <dialog
        {...dialogProps}
        ref={ref as React.Ref<HTMLDialogElement>}
        onClick={(e) => {
          // Handle backdrop click
          if (e.target === e.currentTarget) {
            onOpenChange?.(false);
          }
          dialogProps.onClick?.(e);
        }}
      >
        {children}
      </dialog>
    );
  },
);

DialogRoot.displayName = "Dialog";

/**
 * Export Dialog as the main component
 */
export const Dialog = DialogRoot;
