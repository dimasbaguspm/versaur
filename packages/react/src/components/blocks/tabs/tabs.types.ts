import type { ReactNode } from "react"

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * The currently active tab value
   */
  value: string

  /**
   * Callback fired when a tab is selected
   */
  onChange: (value: string) => void

  /**
   * The content of the tabs component
   */
  children: ReactNode
}

export interface TabsItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "value"> {
  /**
   * The unique identifier for this item
   */
  value: string

  /**
   * Whether the item is disabled
   */
  disabled?: boolean

  /**
   * Icon element to display on the left side
   */
  leftIcon?: ReactNode

  /**
   * Icon element to display on the right side
   */
  rightIcon?: ReactNode

  /**
   * The content of the item
   */
  children: ReactNode
}

/**
 * Attributes object for tabpanel elements
 * Used with Tabs.getPanelAttribute() helper
 */
export interface TabsPanelAttributes {
  id: string
  role: "tabpanel"
  "aria-labelledby": string
}
