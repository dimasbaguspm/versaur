import { forwardRef } from 'react'
import type { TableProps } from './types'
import { cn } from '@/utils/cn'
import { TableProvider } from './context'
import {
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableRowItem,
} from './table.atoms'

const TableRoot = forwardRef<HTMLDivElement, TableProps>(
  ({ children, className, columns = 12, ...props }, ref) => (
    <TableProvider value={{ columns }}>
      <div
        ref={ref}
        role='table'
        className={cn(
          // Versaur design system: border, background, shadow, rounded, spacing
          'w-full overflow-x-auto border border-border bg-background rounded-lg ',
          'text-foreground',
          'sm:rounded-xl',
          'transition-colors',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </TableProvider>
  )
)

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  HeaderItem: TableHeaderItem,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  RowItem: TableRowItem,
})
