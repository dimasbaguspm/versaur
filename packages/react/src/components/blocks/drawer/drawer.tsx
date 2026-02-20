import { drawerStyles } from "@versaur/core/blocks"
import { overlayPartsStyles } from "@versaur/core/utils"
import { XIcon } from "@versaur/icons"
import { createContext, forwardRef, useContext } from "react"

import { cx } from "../../../utils/cx"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { ButtonIcon } from "../../primitive/button-icon"
import { Dialog } from "../dialog"
import { OverlayBody, OverlayFooter, OverlayHeader, OverlayTitle } from "../../utils/overlay-parts/overlay-parts"
import type { DrawerCloseButtonProps, DrawerRootProps } from "./drawer.types"

interface DrawerContextType {
  onClose: () => void
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

const useDrawerContext = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error("Drawer subcomponents must be used within Drawer")
  }
  return context
}

/**
 * Drawer - A controlled side panel component
 *
 * Built on Dialog with placement and container styling
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Drawer open={isOpen} onOpenChange={setIsOpen}>
 *   Content here
 * </Drawer>
 * ```
 */
const DrawerRoot = forwardRef<HTMLDialogElement, DrawerRootProps>(
  ({ open, onOpenChange, placement = "right", children, className, ...props }, ref) => {
    const dataAttrs = useDataAttrs({
      placement,
    })

    return (
      <DrawerContext.Provider value={{ onClose: () => onOpenChange?.(false) }}>
        <Dialog
          ref={ref}
          isOpen={open}
          onOpenChange={onOpenChange}
          className={cx(open && drawerStyles.drawer, className)}
          {...dataAttrs}
          {...props}
        >
          <div className={overlayPartsStyles.content}>{children}</div>
        </Dialog>
      </DrawerContext.Provider>
    )
  },
)

DrawerRoot.displayName = "Drawer"

const DrawerCloseButton = forwardRef<HTMLButtonElement, DrawerCloseButtonProps>(({ onClick, ...props }, ref) => {
  const { onClose } = useDrawerContext()

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

DrawerCloseButton.displayName = "Drawer.CloseButton"

export const Drawer = Object.assign(DrawerRoot, {
  Body: OverlayBody,
  CloseButton: DrawerCloseButton,
  Footer: OverlayFooter,
  Header: OverlayHeader,
  Title: OverlayTitle,
})
