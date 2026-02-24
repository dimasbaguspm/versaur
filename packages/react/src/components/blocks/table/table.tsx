import { tableStyles } from "@versaur/core/blocks"
import { checkboxStyles } from "@versaur/core/forms"
import { createContext, forwardRef, useContext, useId, useRef, useState } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs.js"
import { cx } from "../../../utils/cx"
import { ButtonIcon } from "../../primitive/button-icon/button-icon.js"
import { Menu } from "../menu"
import type {
  TableActionProps,
  TableBodyProps,
  TableCheckboxProps,
  TableColProps,
  TableDoubleLineProps,
  TableFooterProps,
  TableHeaderProps,
  TableRowProps,
  TableToolbarProps,
  TableWrapperProps,
} from "./table.types.js"

/**
 * Table Context for internal state management
 */
interface TableContextValue {
  selectedRows: Set<string | number>
  allRowIds: Set<string | number>
  onSelectionChange: (rowId: string | number, checked: boolean) => void
  onSelectAll: (allRowIds: (string | number)[], checked: boolean) => void
  registerRowId: (rowId: string | number) => void
}

const TableContext = createContext<TableContextValue | undefined>(undefined)

/**
 * Internal hook to access table context within Table component
 */
function useTableProvider() {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error("useTableProvider must be used within a Table component")
  }
  return context
}

/**
 * TableToolbar - renders toolbar content with optional render functions for left and right slots
 */
const TableToolbar = forwardRef<HTMLDivElement, TableToolbarProps>(
  ({ leftContent, rightContent, className, ...props }, ref) => {
    const context = useTableProvider()

    const renderLeftContent = typeof leftContent === "function" ? leftContent(context.selectedRows) : leftContent
    const renderRightContent = typeof rightContent === "function" ? rightContent(context.selectedRows) : rightContent

    return (
      <div ref={ref} className={cx(tableStyles.toolbar, className)} {...props}>
        <div>{renderLeftContent}</div>
        <div>{renderRightContent}</div>
      </div>
    )
  },
)

TableToolbar.displayName = "Table.Toolbar"

/**
 * TableHeader - container for header columns
 */
const TableHeader = forwardRef<HTMLDivElement, TableHeaderProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx(tableStyles.header, className)} {...props} />
))

TableHeader.displayName = "Table.Header"

/**
 * TableBody - container for data rows
 */
const TableBody = forwardRef<HTMLDivElement, TableBodyProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx(tableStyles.body, className)} {...props} />
))

TableBody.displayName = "Table.Body"

/**
 * TableFooter - container for footer row(s)
 */
const TableFooter = forwardRef<HTMLDivElement, TableFooterProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx(tableStyles.footer, className)} {...props} />
))

TableFooter.displayName = "Table.Footer"

/**
 * TableRow - wrapper for cells
 */
const TableRow = forwardRef<HTMLDivElement, TableRowProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cx(tableStyles.row, className)} {...props} />
))

TableRow.displayName = "Table.Row"

/**
 * TableCol - polymorphic cell with grid area support
 */
const TableCol = forwardRef<any, TableColProps>(
  ({ as: Element = "div", area, variant, className, style, ...props }, ref) => {
    const dataAttrs = useDataAttrs({
      variant,
    })

    return (
      <Element
        ref={ref}
        className={cx(tableStyles.col, className)}
        style={
          {
            "--_area": area,
            ...style,
          } as React.CSSProperties
        }
        {...dataAttrs}
        {...props}
      />
    )
  },
)

TableCol.displayName = "Table.Col"

/**
 * TableCheckbox - Built-in checkbox for row selection
 */
const TableCheckbox = forwardRef<HTMLInputElement, TableCheckboxProps>(
  ({ rowId, isMain = false, checked, indeterminate, onChange }, ref) => {
    const context = useTableProvider()
    const isSelected = isMain
      ? context.selectedRows.size === context.allRowIds.size && context.allRowIds.size > 0
      : rowId !== undefined && context.selectedRows.has(rowId)

    // Register row ID if not main checkbox
    if (!isMain && rowId !== undefined) {
      context.registerRowId(rowId)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isMain) {
        // Select all: use context.onSelectAll with all available row IDs
        context.onSelectAll(Array.from(context.allRowIds), e.target.checked)
      } else if (rowId !== undefined) {
        // Individual row: use context.onSelectionChange
        context.onSelectionChange(rowId, e.target.checked)
      }
      // Also call onChange if provided for backward compatibility
      onChange?.(e.target.checked)
    }

    // For main checkbox, calculate indeterminate state
    const computedIndeterminate =
      isMain && context.selectedRows.size > 0 && context.selectedRows.size < context.allRowIds.size

    return (
      <label className={checkboxStyles.checkbox}>
        <input
          ref={(el) => {
            if (el) {
              el.indeterminate = computedIndeterminate || indeterminate || false
              if (typeof ref === "function") {
                ref(el)
              } else if (ref) {
                ref.current = el
              }
            }
          }}
          type="checkbox"
          className={checkboxStyles.input}
          checked={checked !== undefined ? checked : isSelected}
          onChange={handleChange}
          aria-label={isMain ? "Select all rows" : `Select row ${rowId}`}
        />
        <span className={checkboxStyles.indicator} />
      </label>
    )
  },
)

TableCheckbox.displayName = "Table.Checkbox"

/**
 * TableDoubleLine - Built-in cell with title and subtitle using typography tokens
 */
const TableDoubleLine = forwardRef<any, TableDoubleLineProps>(
  ({ as: Element = "div", title, subtitle, size = "md", className, ...props }, ref) => (
    <Element ref={ref} className={cx(tableStyles.col, className)} data-variant="double-line" {...props}>
      <div className={tableStyles["double-line-title"]} data-size={size}>
        {title}
      </div>
      <div className={tableStyles["double-line-subtitle"]} data-size={size}>
        {subtitle}
      </div>
    </Element>
  ),
)

TableDoubleLine.displayName = "Table.DoubleLine"

/**
 * TableActionItem - Menu-based action item (uses Menu.Item internally)
 */
const TableActionItem = Menu.Item

TableActionItem.displayName = "Table.ActionItem"

/**
 * TableAction - Action trigger using Menu dropdown with action items
 */
const TableAction = forwardRef<HTMLDivElement, TableActionProps>(({ icon, children }, ref) => {
  const id = useId()
  const triggerProps = Menu.getTriggerProps({ id })

  return (
    <div ref={ref} className={cx(tableStyles.action)}>
      <ButtonIcon
        {...triggerProps}
        as={icon}
        variant="ghost"
        className={cx(tableStyles["action-trigger"])}
        aria-label="Actions"
        onClick={(e) => {
          e.stopPropagation()
        }}
        size="small"
      />
      <Menu id={id} placement="bottom" closeOnClick>
        {children}
      </Menu>
    </div>
  )
})

TableAction.displayName = "Table.Action"

/**
 * Selection data passed to render functions
 */
export interface TableSelectionData {
  selected: Set<string | number>
  allSelected: boolean
  someSelected: boolean
}

/**
 * Table - Grid-based table component with internal row selection state
 */
const TableComponent = forwardRef<
  HTMLDivElement,
  TableWrapperProps & {
    /**
     * Callback fired when row selection changes
     */
    onSelectionChange?: (data: TableSelectionData) => void
  }
>(({ columns, children, className, style, onSelectionChange, ...props }, ref) => {
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set())
  const allRowIdsRef = useRef(new Set<string | number>())

  const handleSelectRow = (rowId: string | number, checked: boolean) => {
    const newSelected = new Set(selectedRows)
    if (checked) {
      newSelected.add(rowId)
    } else {
      newSelected.delete(rowId)
    }
    setSelectedRows(newSelected)

    onSelectionChange?.({
      selected: newSelected,
      allSelected: newSelected.size === allRowIdsRef.current.size && allRowIdsRef.current.size > 0,
      someSelected: newSelected.size > 0,
    })
  }

  const handleSelectAll = (rowIds: (string | number)[], checked: boolean) => {
    const newSelected = checked ? new Set<string | number>(rowIds) : new Set<string | number>()
    setSelectedRows(newSelected)

    onSelectionChange?.({
      selected: newSelected,
      allSelected: checked,
      someSelected: checked,
    })
  }

  const registerRowId = (rowId: string | number) => {
    allRowIdsRef.current.add(rowId)
  }

  const contextValue: TableContextValue = {
    selectedRows,
    allRowIds: allRowIdsRef.current,
    onSelectionChange: handleSelectRow,
    onSelectAll: handleSelectAll,
    registerRowId,
  }

  return (
    <TableContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={cx(tableStyles.table, className)}
        style={
          {
            "--_columns": columns,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    </TableContext.Provider>
  )
})

TableComponent.displayName = "Table"

const Table = Object.assign(TableComponent, {
  Toolbar: TableToolbar,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Col: TableCol,
  Checkbox: TableCheckbox,
  DoubleLine: TableDoubleLine,
  Action: TableAction,
  ActionItem: TableActionItem,
}) as React.ForwardRefExoticComponent<TableWrapperProps & React.RefAttributes<HTMLDivElement>> & {
  Toolbar: typeof TableToolbar
  Header: typeof TableHeader
  Body: typeof TableBody
  Footer: typeof TableFooter
  Row: typeof TableRow
  Col: typeof TableCol
  Checkbox: typeof TableCheckbox
  DoubleLine: typeof TableDoubleLine
  Action: typeof TableAction
  ActionItem: typeof TableActionItem
}

export {
  Table,
  TableAction,
  TableActionItem,
  TableBody,
  TableCheckbox,
  TableCol,
  TableDoubleLine,
  TableFooter,
  TableHeader,
  TableRow,
  TableToolbar,
}
