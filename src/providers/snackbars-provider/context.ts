import { createContext } from 'react'
import type { SnackbarsContextValue } from './types'

/**
 * SnackbarsContext provides snackbar queue management and showSnack function
 */
export const SnackbarsContext = createContext<SnackbarsContextValue | null>(
  null
)
