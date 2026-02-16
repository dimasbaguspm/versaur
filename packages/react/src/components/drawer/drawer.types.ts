import type { DialogHTMLAttributes, ReactNode } from "react";
import type { Drawer as DrawerCore } from "@versaur/core";

export type DrawerCloseReason =
  | "esc"
  | "backdrop"
  | "closeButton"
  | "programmatic";

export interface DrawerRootProps extends Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  "onClose"
> {
  /**
   * Whether the drawer is open
   */
  open: boolean;

  /**
   * Callback when the drawer closes
   * Includes the reason for closing
   */
  onClose: (reason: DrawerCloseReason) => void;

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
