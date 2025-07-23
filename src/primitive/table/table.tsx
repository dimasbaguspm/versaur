import { useMemo, forwardRef } from 'react'
import type { TableContextValue, TableProps } from './types'
import { cn } from '@/utils/cn'
import { TableProvider } from './context'
import {
  TableBody,
  TableColumn,
  TableFooter,
  TableHeader,
  TableRow,
} from './table.atoms'

const TableRoot = forwardRef<HTMLDivElement, TableProps>(
  ({ children, className, maxColumns = 12, ...props }, ref) => {
    const value = useMemo(
      () => ({ maxColumns }),
      [maxColumns]
    ) satisfies TableContextValue

    return (
      <TableProvider value={value}>
        <div
          ref={ref}
          role='table'
          className={cn(
            'w-full overflow-x-auto rounded-lg border border-border',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TableProvider>
    )
  }
)

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Column: TableColumn,
})
