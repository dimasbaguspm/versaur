import type { Drawer as DrawerCore } from "@versaur/core/blocks"
import type { DialogHTMLAttributes, ReactNode } from "react"

import type { OverlayHeaderProps } from "../../utils/overlay-parts/overlay-parts.types"

export interface DrawerRootProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, "onClose"> {
  /**
   * Whether the drawer is open (controlled state)
   */
  open: boolean

  /**
   * Callback when drawer closes (ESC key, backdrop click, or close button)
   */
  onOpenChange?: (open: boolean) => void

  /**
   * Placement of the drawer
   * @default 'right'
   */
  placement?: DrawerCore.Placement

  children?: ReactNode
}

export interface DrawerHeaderProps extends Omit<OverlayHeaderProps, "children"> {
  /**
   * Header action row (title, close button, etc.)
   * If not provided, children will be rendered as the action row.
   * When provided, children become supplementary content in flex-column layout.
   */
  action?: ReactNode

  /**
   * Supplementary header content (badges, status info, etc.)
   * Displayed in flex-column layout below the action row.
   * If action prop is not provided, this becomes the action row instead.
   */
  children?: ReactNode

  /**
   * Optional Tabs component rendered below the header content.
   * When provided, the Tabs component's bottom border replaces the header's own border-bottom.
   */
  tabs?: ReactNode
}

export interface DrawerCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}
