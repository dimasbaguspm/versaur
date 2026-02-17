import type { DialogHTMLAttributes, ReactNode } from "react";
import type { Drawer as DrawerCore } from "@versaur/core";

export interface DrawerRootProps extends Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  "onClose"
> {
  /**
   * Whether the drawer is open (controlled state)
   */
  open: boolean;

  /**
   * Callback when drawer closes (ESC key, backdrop click, or close button)
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Placement of the drawer
   * @default 'right'
   */
  placement?: DrawerCore.Placement;

  children?: ReactNode;
}

export interface DrawerCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
