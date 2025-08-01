import type { HTMLAttributes, ReactNode, TableHTMLAttributes } from 'react'

/**
 * TableProps for the root Table component
 */
export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** Table children (Header, Body, Footer, etc) */
  children: ReactNode
  maxColumns?: number // Maximum number of columns for grid layout
}

/**
 * Context value for Table
 */
export interface TableContextValue {
  maxColumns: number
}

/**
 * TableHeaderProps for <Table.Header>
 */
export interface TableHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

/**
 * TableBodyProps for <Table.Body>
 */
export interface TableBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * TableFooterProps for <Table.Footer>
 */
export interface TableFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * TableRowProps for <Table.Row>
 */
export interface TableRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * TableColumnProps for <Table.Column>
 * @property as - 'th' for header, 'td' for body/footer (default: 'td')
 * @property span - number of grid columns to span (1-12)
 */
export interface TableColumnProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  as: 'th' | 'td'
  span: number // 1-12
  /** Horizontal alignment of cell content (left, center, right). Default: left */
  align?: 'left' | 'center' | 'right'
}
