import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"

/**
 * ComboboxInput variant: 'popup' uses Popover API + CSS Anchor Positioning, 'drawer' uses Drawer component
 */
export type ComboboxInputVariant = "popup" | "drawer"

/**
 * Root props for ComboboxInput
 */
export interface ComboboxInputRootProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * Selected values (array)
   */
  value: string[]

  /**
   * Change handler for selected values
   */
  onChange: (value: string[]) => void

  /**
   * Display variant
   * @default "popup"
   */
  variant?: ComboboxInputVariant

  /**
   * Placeholder text when no values selected
   * @default "Select…"
   */
  placeholder?: string

  /**
   * Disabled state
   */
  disabled?: boolean

  /**
   * Invalid/error state
   */
  invalid?: boolean

  /**
   * Label for the input
   */
  label?: ReactNode

  /**
   * Helper text shown below
   */
  helper?: ReactNode

  /**
   * Error message shown below
   */
  error?: ReactNode

  /**
   * Required indicator
   */
  required?: boolean

  /**
   * Left icon element
   */
  iconLeft?: ReactNode

  /**
   * Right icon element (typically filled by the component's chevron)
   */
  iconRight?: ReactNode
}

/**
 * Props for ComboboxInput.Button subcomponent
 */
export interface ComboboxInputButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /**
   * Label text or content (default: "Select ..." or "${count} selected")
   */
  children?: ReactNode

  /**
   * Left icon element
   */
  iconLeft?: ReactNode

  /**
   * Right icon element (default: ChevronDown)
   */
  iconRight?: ReactNode
}

/**
 * Props for ComboboxInput.Listbox subcomponent
 */
export interface ComboboxInputListboxProps extends Omit<HTMLAttributes<HTMLUListElement>, "role"> {
  /**
   * List items (Option elements)
   */
  children?: ReactNode
}

/**
 * Props for ComboboxInput.Option subcomponent
 */
export interface ComboboxInputOptionProps
  extends Omit<HTMLAttributes<HTMLLIElement>, "children" | "role"> {
  /**
   * Option value
   */
  value: string

  /**
   * Display label (children)
   */
  children?: ReactNode

  /**
   * Disabled state for this option
   */
  disabled?: boolean
}

/**
 * Props for ComboboxInput.SelectionChips subcomponent
 */
export interface ComboboxInputSelectionChipsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Container for chip elements (renders null if empty)
   */
  children?: ReactNode
}
