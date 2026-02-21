import type { ForwardRefExoticComponent, HTMLAttributes, MouseEvent, ReactNode, RefAttributes } from "react"

export type MenuPlacement = "top" | "bottom" | "left" | "right"

/**
 * Menu Context for managing selected value across items
 */
export interface MenuContextValue {
  /** Menu unique identifier (used for Tooltip.close) */
  id?: string
  /** Currently selected item value */
  value?: string | number
  /** Whether to close menu when item is clicked */
  closeOnClick?: boolean
  /** Callback when an item is selected */
  onChange?: (value: string | number) => void
}

/**
 * Trigger props options for external trigger elements
 */
export interface MenuGetTriggerPropsOptions {
  /**
   * Unique identifier matching the Menu's id
   */
  id: string
}

/**
 * Menu Root Props
 */
export interface MenuProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Unique identifier for the menu (used with Menu.close())
   */
  id: string

  /**
   * Menu content (Menu.Item components)
   */
  children: ReactNode

  /**
   * Placement relative to trigger button
   * @default "bottom"
   */
  placement?: MenuPlacement

  /**
   * Maximum height of the menu list in pixels
   * @default 400
   */
  maxHeight?: number

  /**
   * Minimum width of the menu list in pixels
   * @default 160
   */
  minWidth?: number

  /**
   * Maximum width of the menu list in pixels
   * @default 320
   */
  maxWidth?: number

  /**
   * Gap between trigger and menu in pixels
   * @default 8
   */
  gap?: number

  /**
   * Controlled value - which menu item is currently selected
   */
  value?: string | number

  /**
   * Callback when a menu item is selected
   */
  onChange?: (value: string | number) => void

  /**
   * Whether to close the menu when an item is clicked
   * @default false
   */
  closeOnClick?: boolean
}

/**
 * Menu Item Props
 *
 * @description
 * Represents an individual menu item that can be clicked to select a value.
 * Items support active state (when their value matches Menu's controlled value),
 * disabled state, and optional icons on both sides.
 *
 * When clicked:
 * - If Menu has `onChange`, the item's value is passed to it
 * - The item's `onClick` handler is also called
 * - If Menu has `closeOnClick: true`, the menu popover will close
 *
 * @example
 * ```tsx
 * <Menu id="menu-1" value={selected} onChange={setSelected} closeOnClick>
 *   <Menu.Item value="edit" leftIcon={<EditIcon />}>Edit</Menu.Item>
 *   <Menu.Item value="delete" leftIcon={<TrashIcon />}>Delete</Menu.Item>
 * </Menu>
 * ```
 */
export interface MenuItemProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onChange"> {
  /**
   * Unique identifier for this menu item
   * Used to determine active state when Menu has value/onChange
   */
  value?: string | number

  /**
   * Item label/content
   */
  children: ReactNode

  /**
   * Optional left icon/content
   */
  leftIcon?: ReactNode

  /**
   * Optional right icon/content
   */
  rightIcon?: ReactNode

  /**
   * Whether this item is disabled
   */
  disabled?: boolean

  /**
   * Click handler for the item
   * Fired in addition to Menu's onChange if using controlled mode.
   * If Menu has closeOnClick: true, this fires before the menu closes.
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

/**
 * Menu static methods and properties
 */
export interface MenuStatic {
  /**
   * Menu.Item component
   */
  Item: ForwardRefExoticComponent<MenuItemProps & RefAttributes<HTMLButtonElement>>

  /**
   * Get the required attributes for a trigger element
   */
  getTriggerProps(options: MenuGetTriggerPropsOptions): Record<string, unknown>

  /**
   * Close a menu popover by id
   * Convenience method that delegates to Tooltip.close()
   *
   * @example
   * ```tsx
   * Menu.close({ id: "my-menu" })
   * ```
   */
  close(options: { id: string }): void
}
