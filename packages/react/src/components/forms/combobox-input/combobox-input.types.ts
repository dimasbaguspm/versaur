import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react"

/**
 * ComboboxInput variant: 'popup' uses Popover API + CSS Anchor Positioning, 'drawer' uses Drawer component
 */
export type ComboboxInputVariant = "popup" | "drawer"

/**
 * Root props base (shared between single and multi-select)
 */
type ComboboxInputRootPropsBase = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
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
 * Root props for ComboboxInput - discriminated union for single and multi-select
 */
export type ComboboxInputRootProps =
  | (ComboboxInputRootPropsBase & {
      /**
       * Multi-select mode
       */
      multiple: true
      /**
       * Selected values (array) for multi-select
       */
      value: string[]
      /**
       * Change handler for multi-select
       */
      onChange: (value: string[]) => void
    })
  | (ComboboxInputRootPropsBase & {
      /**
       * Single-select mode (default)
       */
      multiple?: false
      /**
       * Selected value (string or null) for single-select
       */
      value: string | null
      /**
       * Change handler for single-select
       */
      onChange: (value: string | null) => void
    })

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
 * Props for ComboboxInput.ListboxSearch subcomponent
 */
export interface ComboboxInputListboxSearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /**
   * Search input name attribute
   */
  name: string
  /**
   * Current search value
   */
  value: string
  /**
   * Change handler for search value
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

/**
 * Props for ComboboxInput.Listbox subcomponent
 */
export interface ComboboxInputListboxProps extends Omit<HTMLAttributes<HTMLUListElement>, "role"> {
  /**
   * Search input element (required, typically ComboboxInput.ListboxSearch)
   */
  search: ReactNode
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
