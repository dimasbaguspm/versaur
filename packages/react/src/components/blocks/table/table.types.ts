import type { TableCellVariant } from "@versaur/core/blocks"
import type { HTMLAttributes, ReactNode, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react"

/**
 * Table wrapper props with CSS Grid column definition
 */
export type TableWrapperProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * CSS Grid template columns string (e.g., "2fr 1fr 1fr min-content")
   */
  columns: string
  /**
   * Set of selected row IDs for row-level selection state (controlled)
   */
  selectedRows?: Set<string | number>
}

export type TableRootProps = TableHTMLAttributes<HTMLTableElement>

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>

export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>

/**
 * Table header cell (renamed from TableHeadProps)
 * Supports sortable headers with controlled sort direction
 */
export type TableHeaderCellProps = ThHTMLAttributes<HTMLTableCellElement> & {
  /**
   * Enable sortable header with visual indicator
   */
  sortable?: boolean
  /**
   * Current sort direction ('asc' | 'desc' | null for no sort, chevron always visible when sortable)
   */
  sortDirection?: "asc" | "desc" | null
  /**
   * Callback when user clicks sortable header
   */
  onSort?: (direction: "asc" | "desc" | null) => void
}

/**
 * Table body cell (renamed from TableCellProps)
 * Default vertical centering for content
 */
export type TableBodyCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
  variant?: TableCellVariant
}

/**
 * Built-in checkbox for row selection
 */
export interface TableCheckboxProps {
  /**
   * Unique row identifier
   */
  rowId: string | number
  /**
   * Whether checkbox is checked
   */
  checked?: boolean
  /**
   * Indeterminate state (e.g., for parent checkbox)
   */
  indeterminate?: boolean
  /**
   * Callback when checkbox state changes
   */
  onChange: (checked: boolean) => void
}

/**
 * Built-in double-line cell (title + subtitle)
 */
export interface TableDoubleLineProps {
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
 * Built-in action button for action column
 */
export interface TableActionProps {
  /**
   * Callback when button is clicked
   */
  onClick?: () => void
  /**
   * Disable the button
   */
  disabled?: boolean
}

export interface TableComponent {
  Header: typeof TableHeader
  Body: typeof TableBody
  Footer: typeof TableFooter
  Row: typeof TableRow
  HeaderCell: typeof TableHeaderCell
  BodyCell: typeof TableBodyCell
  Checkbox: typeof TableCheckbox
  DoubleLine: typeof TableDoubleLine
  Action: typeof TableAction
}

// Component type exports for namespace declaration merging
declare const TableHeader: React.ForwardRefExoticComponent<
  TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>
>
declare const TableBody: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>
declare const TableFooter: React.ForwardRefExoticComponent<
  TableFooterProps & React.RefAttributes<HTMLTableSectionElement>
>
declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>
declare const TableHeaderCell: React.ForwardRefExoticComponent<
  TableHeaderCellProps & React.RefAttributes<HTMLTableCellElement>
>
declare const TableBodyCell: React.ForwardRefExoticComponent<
  TableBodyCellProps & React.RefAttributes<HTMLTableCellElement>
>
declare const TableCheckbox: React.FC<TableCheckboxProps>
declare const TableDoubleLine: React.FC<TableDoubleLineProps>
declare const TableAction: React.FC<TableActionProps>
