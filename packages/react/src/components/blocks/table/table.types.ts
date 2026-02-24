import type { TableCellVariant } from "@versaur/core/blocks"
import type { HTMLAttributes, ReactNode } from "react"

import { IconProps } from "../../primitive"

/**
 * Selection state data passed to toolbar render function
 */
export interface TableSelectionData {
  selected: Set<string | number>
  allSelected: boolean
  someSelected: boolean
}

/**
 * Table root wrapper with CSS Grid column definition
 */
export type TableWrapperProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * CSS Grid template columns string (e.g., "repeat(3, 1fr)", "2fr 1fr 1fr")
   */
  columns?: string
  /**
   * Callback fired when row selection changes
   */
  onSelectionChange?: (data: TableSelectionData) => void
}

/**
 * Table.Toolbar - generic slot for action controls with optional render functions
 */
export interface TableToolbarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Render function for left-aligned content (receives selected row IDs Set)
   */
  leftContent?: ReactNode | ((selectedIds: Set<string | number>) => ReactNode)
  /**
   * Render function for right-aligned content (receives selected row IDs Set)
   */
  rightContent?: ReactNode | ((selectedIds: Set<string | number>) => ReactNode)
}

/**
 * Table.Header - container for header columns
 */
export type TableHeaderProps = HTMLAttributes<HTMLDivElement>

/**
 * Table.Body - container for data rows
 */
export type TableBodyProps = HTMLAttributes<HTMLDivElement>

/**
 * Table.Footer - container for footer row(s)
 */
export type TableFooterProps = HTMLAttributes<HTMLDivElement>

/**
 * Table.Row - wrapper for cells
 */
export type TableRowProps = HTMLAttributes<HTMLDivElement>

/**
 * Table.Col - polymorphic cell with grid area support
 */
export type TableColProps = HTMLAttributes<any> & {
  /**
   * HTML element type: 'th' for headers, 'td' for data cells, 'div' for generic
   * @default 'div'
   */
  as?: "th" | "td" | "div"
  /**
   * CSS grid area (e.g., "span 2", "1 / 3")
   */
  area?: string
  /**
   * Cell variant for styling
   */
  variant?: TableCellVariant
}

/**
 * Table.Checkbox - built-in checkbox for row selection
 */
export type TableCheckboxProps =
  | {
      /**
       * Whether this is the select-all checkbox in the header
       */
      isMain: true
      /**
       * Unique row identifier (not needed for main checkbox)
       */
      rowId?: never
      /**
       * Whether checkbox is checked (optional - managed by Table context)
       */
      checked?: boolean
      /**
       * Indeterminate state (e.g., for select-all checkbox)
       */
      indeterminate?: boolean
      /**
       * Callback when checkbox state changes (optional - managed by Table context)
       */
      onChange?: (checked: boolean) => void
    }
  | {
      /**
       * Whether this is the select-all checkbox in the header
       * @default false
       */
      isMain?: false
      /**
       * Unique row identifier
       */
      rowId: string | number
      /**
       * Whether checkbox is checked (optional - managed by Table context)
       */
      checked?: boolean
      /**
       * Indeterminate state (e.g., for select-all checkbox)
       */
      indeterminate?: boolean
      /**
       * Callback when checkbox state changes (optional - managed by Table context)
       */
      onChange?: (checked: boolean) => void
    }

/**
 * Table.DoubleLine - built-in cell with title and subtitle
 */
export interface TableDoubleLineProps extends Omit<HTMLAttributes<any>, "title"> {
  /**
   * HTML element type: 'th' for headers, 'td' for data cells, 'div' for generic
   * @default 'div'
   */
  as?: "th" | "td" | "div"
  /**
   * Main title (bold, primary color)
   */
  title: ReactNode
  /**
   * Subtitle (gray, smaller)
   */
  subtitle: ReactNode
  /**
   * Cell size preset
   * @default "md"
   */
  size?: "sm" | "md" | "lg"
}

/**
 * Table.Action - action trigger with Tooltip dropdown
 */
export interface TableActionProps {
  /**
   * Icon element to render in the trigger button
   */
  icon: IconProps["as"]
  /**
   * Tooltip content: Table.ActionItem elements
   */
  children: ReactNode
}

/**
 * Table.ActionItem - clickable menu item within Table.Action dropdown
 */
export interface TableActionItemProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Callback when item is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * Disable the item
   */
  disabled?: boolean
}
