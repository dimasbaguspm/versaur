import type {
  ForwardRefExoticComponent,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  RefAttributes,
} from "react";

export type MenuPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

/**
 * Menu Context for managing selected value across items
 */
export interface MenuContextValue {
  /** Currently selected item value */
  value?: string | number;
  /** Callback when an item is selected */
  onChange?: (value: string | number) => void;
  /** Close the menu programmatically */
  close?: (options: { id: string }) => void;
}

/**
 * Trigger props options for external trigger elements
 */
export interface MenuGetTriggerPropsOptions {
  /**
   * Unique identifier matching the Menu's id
   */
  id: string;
}

/**
 * Menu Root Props
 */
export interface MenuProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Unique identifier for the menu (used with Menu.close())
   */
  id: string;

  /**
   * Menu content (Menu.Item components)
   */
  children: ReactNode;

  /**
   * Placement relative to trigger button
   * @default "bottom"
   */
  placement?: MenuPlacement;

  /**
   * Maximum height of the menu list in pixels
   * @default 400
   */
  maxHeight?: number;

  /**
   * Minimum width of the menu list in pixels
   * @default 160
   */
  minWidth?: number;

  /**
   * Maximum width of the menu list in pixels
   * @default 320
   */
  maxWidth?: number;

  /**
   * Gap between trigger and menu in pixels
   * @default 8
   */
  gap?: number;

  /**
   * Controlled value - which menu item is currently selected
   */
  value?: string | number;

  /**
   * Callback when a menu item is selected
   */
  onChange?: (value: string | number) => void;
}

/**
 * Menu Item Props
 */
export interface MenuItemProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onChange"> {
  /**
   * Unique identifier for this menu item
   * Used to determine active state when Menu has value/onChange
   */
  value?: string | number;

  /**
   * Item label/content
   */
  children: ReactNode;

  /**
   * Optional left icon/content
   */
  leftIcon?: ReactNode;

  /**
   * Optional right icon/content
   */
  rightIcon?: ReactNode;

  /**
   * Whether this item is disabled
   */
  disabled?: boolean;

  /**
   * Click handler for the item
   * Fired in addition to Menu's onChange if using controlled mode
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Menu static methods and properties
 */
export interface MenuStatic {
  /**
   * Menu.Item component
   */
  Item: ForwardRefExoticComponent<MenuItemProps & RefAttributes<HTMLButtonElement>>;

  /**
   * Close a menu programmatically
   * @example Menu.close({ id: "my-menu" })
   */
  close: (options: { id: string }) => void;

  /**
   * Get the required attributes for a trigger element
   */
  getTriggerProps(options: MenuGetTriggerPropsOptions): Record<string, string>;
}
