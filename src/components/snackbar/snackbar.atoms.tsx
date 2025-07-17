import React from 'react'
import type { SnackbarTextProps, SnackbarActionProps } from './types'

/**
 * SnackbarText atom for displaying the message
 */
export const SnackbarText: React.FC<SnackbarTextProps> = ({
  children,
  ...props
}) => (
  <span
    className='flex-1 truncate text-base font-medium'
    data-testid='snackbar-text'
    {...props}
  >
    {children}
  </span>
)

/**
 * SnackbarAction atom for custom action elements
 */
export const SnackbarAction: React.FC<SnackbarActionProps> = ({
  children,
  ...props
}) => (
  <span className='ml-2' data-testid='snackbar-action' {...props}>
    {children}
  </span>
)
