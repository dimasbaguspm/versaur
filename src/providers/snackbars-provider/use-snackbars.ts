import { useContext } from 'react'
import { SnackbarsContext } from './context'

/**
 * useSnackbars: Access the snackbars context and showSnack function
 */
export function useSnackbars() {
  const ctx = useContext(SnackbarsContext)
  if (!ctx) {
    throw new Error('useSnackbars must be used within a SnackbarsProvider')
  }
  return ctx
}
