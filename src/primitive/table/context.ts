import { createContext, useContext } from 'react'

import type { TableContextValue } from './types'

const TableContext = createContext<TableContextValue | null>(null)

export const TableProvider = TableContext.Provider

export function useTableContext() {
  const ctx = useContext(TableContext)
  if (!ctx) {
    throw new Error('Table compound components must be used within <Table>')
  }
  return ctx
}
