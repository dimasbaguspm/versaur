"use client"

import { checkboxStyles, tableStyles } from "@versaur/core"
import { ChevronDownIcon, ChevronUpIcon, MenuIcon } from "@versaur/icons"
import { forwardRef } from "react"

import { useDataAttrs } from "../../hooks/use-data-attrs.js"
import { ButtonIcon } from "../button-icon"
import type {
  TableActionProps,
  TableBodyCellProps,
  TableBodyProps,
  TableCheckboxProps,
  TableDoubleLineProps,
  TableFooterProps,
  TableHeaderCellProps,
  TableHeaderProps,
  TableRowProps,
  TableWrapperProps,
} from "./table.types.js"

/**
 * TableHeader - thead wrapper
 */
const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>((props, ref) => (
  <thead ref={ref} className={tableStyles["table-header"]} {...props} />
))

TableHeader.displayName = "Table.Header"

/**
 * TableBody - tbody wrapper
 */
const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => (
  <tbody ref={ref} className={tableStyles["table-body"]} {...props} />
))

TableBody.displayName = "Table.Body"

/**
 * TableFooter - tfoot wrapper
 */
const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>((props, ref) => (
  <tfoot ref={ref} className={tableStyles["table-footer"]} {...props} />
))

TableFooter.displayName = "Table.Footer"

/**
 * TableRow - tr wrapper with click-to-select support
 */
const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ onClick, ...props }, ref) => (
  <tr ref={ref} data-clickable={onClick ? "true" : undefined} onClick={onClick} {...props} />
))

TableRow.displayName = "Table.Row"

/**
 * TableHeaderCell - th wrapper with sortable support (renamed from TableHead)
 */
const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ sortable, sortDirection, onSort, children, ...props }, ref) => {
    const handleClick = () => {
      if (!sortable || !onSort) {
        return
      }

      // Cycle through: null → asc → desc → null
      let newDirection: "asc" | "desc" | null = "asc"
      if (sortDirection === "asc") {
        newDirection = "desc"
      } else if (sortDirection === "desc") {
        newDirection = null
      }

      onSort(newDirection)
    }

    const dataAttrs = useDataAttrs({
      sortable: sortable ? "true" : undefined,
    })

    return (
      <th
        ref={ref}
        className={tableStyles["table-head"]}
        onClick={sortable ? handleClick : undefined}
        {...dataAttrs}
        {...props}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-start",
          }}
        >
          {children}
          {sortable && (
            <>
              {sortDirection === "asc" && <ChevronUpIcon style={{ flexShrink: 0, height: "1em", width: "1em" }} />}
              {sortDirection === "desc" && <ChevronDownIcon style={{ flexShrink: 0, height: "1em", width: "1em" }} />}
              {!sortDirection && (
                <ChevronDownIcon
                  style={{
                    flexShrink: 0,
                    height: "1em",
                    opacity: 0.5,
                    width: "1em",
                  }}
                />
              )}
            </>
          )}
        </div>
      </th>
    )
  },
)

TableHeaderCell.displayName = "Table.HeaderCell"

/**
 * TableBodyCell - td wrapper (renamed from TableCell)
 */
const TableBodyCell = forwardRef<HTMLTableCellElement, TableBodyCellProps>(({ variant, ...props }, ref) => (
  <td ref={ref} className={tableStyles["table-cell"]} data-table-cell-variant={variant} {...props} />
))

TableBodyCell.displayName = "Table.BodyCell"

/**
 * TableCheckbox - Built-in checkbox for row-level selection
 */
const TableCheckbox = forwardRef<HTMLInputElement, TableCheckboxProps>(
  ({ rowId, checked, indeterminate, onChange }, ref) => (
    <label className={checkboxStyles.checkbox}>
      <input
        ref={(el) => {
          if (el) {
            el.indeterminate = indeterminate || false
            if (typeof ref === "function") {
              ref(el)
            } else if (ref) {
              ref.current = el
            }
          }
        }}
        type="checkbox"
        className={checkboxStyles.input}
        checked={checked || false}
        onChange={(e) => onChange(e.target.checked)}
        aria-label={`Select row ${rowId}`}
      />
      <span className={checkboxStyles.indicator} />
    </label>
  ),
)

TableCheckbox.displayName = "Table.Checkbox"

/**
 * TableDoubleLine - Built-in cell with title and subtitle
 */
const TableDoubleLine = forwardRef<HTMLDivElement, TableDoubleLineProps>(({ title, subtitle, size = "md" }, ref) => {
  const fontSizeMap = {
    title: {
      sm: "0.875rem",
      md: "0.9375rem",
      lg: "1rem",
    },
    subtitle: {
      sm: "0.75rem",
      md: "0.8125rem",
      lg: "0.875rem",
    },
  }

  return (
    <div ref={ref} className={tableStyles["table-cell"]} data-table-cell-variant="double-line">
      <div
        style={{
          fontWeight: 600,
          fontSize: fontSizeMap.title[size],
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: fontSizeMap.subtitle[size],
          color: "#6b7280",
        }}
      >
        {subtitle}
      </div>
    </div>
  )
})

TableDoubleLine.displayName = "Table.DoubleLine"

/**
 * TableAction - Built-in button for action column using ButtonIcon
 */
const TableAction = forwardRef<HTMLButtonElement, TableActionProps>(({ onClick, disabled }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClick?.()
  }

  return (
    <ButtonIcon
      ref={ref}
      as={MenuIcon}
      onClick={handleClick}
      disabled={disabled}
      variant="ghost"
      size="medium"
      aria-label="Action button"
    />
  )
})

TableAction.displayName = "Table.Action"

/**
 * Table - Compound component with CSS Grid column management
 * Replaces TableRootProps and TableWrapperProps patterns
 */
const TableComponent = forwardRef<HTMLDivElement, TableWrapperProps>(({ columns, children, ...props }, ref) => (
  <div
    ref={ref}
    className={tableStyles.table}
    style={
      {
        "--table-grid-columns": columns,
      } as React.CSSProperties
    }
    {...props}
  >
    <table>{children}</table>
  </div>
))

TableComponent.displayName = "Table"

const Table = Object.assign(TableComponent, {
  Action: TableAction,
  Body: TableBody,
  BodyCell: TableBodyCell,
  Checkbox: TableCheckbox,
  DoubleLine: TableDoubleLine,
  Footer: TableFooter,
  Header: TableHeader,
  HeaderCell: TableHeaderCell,
  Row: TableRow,
}) as React.ForwardRefExoticComponent<TableWrapperProps & React.RefAttributes<HTMLDivElement>> & {
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

export {
  Table,
  TableAction,
  TableBody,
  TableBodyCell,
  TableCheckbox,
  TableDoubleLine,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
}
