import type { ReactNode } from 'react'

/**
 * SnackbarQueueItem: Represents a snackbar in the queue
 */
export interface SnackbarQueueItem {
  /** Unique id for the snackbar */
  id: string
  /** Message content */
  message: ReactNode
  /** Color variant */
  color?: 'success' | 'info' | 'warning' | 'danger'
  /** Optional action element */
  action?: ReactNode
  /** Optional duration in milliseconds */
  duration?: number | null
}

export type ShowSnackFunction = (
  color: SnackbarQueueItem['color'],
  message: ReactNode,
  options?: Partial<Omit<SnackbarQueueItem, 'id' | 'color' | 'message'>>
) => void

/**
 * SnackbarsContextValue: Context value for snackbars
 */
export interface SnackbarsContextValue {
  /** Show a snackbar */
  showSnack: ShowSnackFunction
}

export interface SnackbarsProviderProps {
  /** Children to render inside the provider */
  children: ReactNode
}
