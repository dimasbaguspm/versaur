import { drawerStyles } from "@versaur/core/blocks"
import { overlayPartsStyles } from "@versaur/core/utils"
import { XIcon } from "@versaur/icons"
import { createContext, forwardRef, useContext } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { ButtonIcon } from "../../primitive/button-icon"
import { OverlayBody, OverlayFooter, OverlayTitle } from "../../utils/overlay-parts/overlay-parts"
import { Dialog } from "../dialog"
import type { DrawerCloseButtonProps, DrawerHeaderProps, DrawerRootProps } from "./drawer.types"

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

const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ action, children, tabs, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(overlayPartsStyles.header, className)}
        {...rest}
        {...(action && { "data-action": "" })}
        {...(tabs && { "data-tabs": "" })}
      >
        {action ? (
          <>
            <div className={overlayPartsStyles.headerTop}>{action}</div>
            {children && <div className={overlayPartsStyles.headerContent}>{children}</div>}
          </>
        ) : (
          <div className={overlayPartsStyles.headerTop}>{children}</div>
        )}
        {tabs}
      </div>
    )
  },
)
DrawerHeader.displayName = "Drawer.Header"

export const Drawer = Object.assign(DrawerRoot, {
  Body: OverlayBody,
  CloseButton: DrawerCloseButton,
  Footer: OverlayFooter,
  Header: DrawerHeader,
  Title: OverlayTitle,
})
