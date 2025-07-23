import { forwardRef } from 'react'
import type {
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableColumnProps,
} from './types'
import { cn } from '@/utils/cn'
import { useTableContext } from './context'
import { getRowSpanClass, getTableColumnClass } from './helpers'

/**
 * Table.Header renders the table header row (grid-based, ARIA role)
 */
const TableHeader = forwardRef<HTMLDivElement, TableHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const { maxColumns } = useTableContext()
    return (
      <div
        role='rowgroup'
        className={cn('bg-neutral-soft', className)}
        {...props}
        ref={ref}
      >
        <div
          role='row'
          className={cn('grid gap-4', getTableColumnClass(maxColumns))}
        >
          {children}
        </div>
      </div>
    )
  }
)

/**
 * Table.Body renders the table body (grid-based, ARIA role)
 */
const TableBody = forwardRef<HTMLDivElement, TableBodyProps>(
  ({ children, className, ...props }, ref) => (
    <div role='rowgroup' ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  )
)

/**
 * Table.Footer renders the table footer row (grid-based, ARIA role)
 */
const TableFooter = forwardRef<HTMLDivElement, TableFooterProps>(
  ({ children, className, ...props }, ref) => {
    const { maxColumns } = useTableContext()
    return (
      <div
        role='rowgroup'
        className={cn('bg-neutral-soft', className)}
        {...props}
        ref={ref}
      >
        <div
          role='row'
          className={cn('grid gap-4', getTableColumnClass(maxColumns))}
        >
          {children}
        </div>
      </div>
    )
  }
)

/**
 * Table.Row renders a table row (grid-based, ARIA role)
 */
const TableRow = forwardRef<HTMLDivElement, TableRowProps>(
  ({ children, className, ...props }, ref) => {
    const { maxColumns } = useTableContext()

    return (
      <div
        role='row'
        className={cn(
          'grid gap-4',
          getTableColumnClass(maxColumns),
          'border-b border-border last:border-0',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

/**
 * Table.Column renders a table cell (grid-based, ARIA role)
 */
const TableColumn = forwardRef<HTMLDivElement, TableColumnProps>(
  ({ as = 'td', span, align = 'left', children, className, ...props }, ref) => {
    const role = as === 'th' ? 'columnheader' : 'cell'
    let alignClass = 'text-left'
    if (align === 'center') alignClass = 'text-center'
    else if (align === 'right') alignClass = 'text-right'

    return (
      <div
        ref={ref}
        role={role}
        className={cn(
          'px-4 py-2',
          '[&:not(:last-child)]:border-r [&:not(:last-child)]:border-border',
          getRowSpanClass(span),
          alignClass,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

export { TableHeader, TableBody, TableFooter, TableRow, TableColumn }
