import type { ReactNode } from 'react'
import type { PinFieldProps } from '@/forms/pin-field'
import type { DrawerProps } from '@/overlays/drawer'
import type { ModalRootProps } from '@/overlays/modal'

/**
 * Pin verifier display mode
 */
export type PinVerifierAs = 'modal' | 'drawer'

/**
 * Base props for PinVerifierDrawer component
 */
export interface PinVerifierDrawerProps {
  /**
   * Whether the PIN verifier is open
   */
  isOpen: boolean
  /**
   * Callback fired when the verifier should close
   */
  onClose: () => void
  /**
   * Title to display in the header
   */
  title?: ReactNode
  /**
   * Current PIN value (controlled)
   */
  value?: string
  /**
   * Default PIN value (uncontrolled)
   */
  defaultValue?: string
  /**
   * Callback fired when PIN value changes
   */
  onChange?: (value: string) => void
  /**
   * Callback fired when PIN is completed (6 digits entered)
   */
  onComplete?: (value: string) => void
  /**
   * Callback fired when verify button is clicked
   */
  onVerify?: (value: string) => void
  /**
   * Whether to show PIN as dots for security
   */
  secure?: boolean
  /**
   * Whether the component is in a loading state
   */
  loading?: boolean
  /**
   * Error message for invalid PIN
   */
  error?: ReactNode
  /**
   * Whether to show the numeric keypad (only shown for drawer mode)
   */
  showKeypad?: boolean
  /**
   * Display mode - 'modal' for desktop, 'drawer' for mobile
   */
  as?: PinVerifierAs
  /**
   * Custom verify button text
   */
  verifyButtonText?: string
  /**
   * PIN field variant
   */
  variant?: PinFieldProps['variant']
  /**
   * Additional props passed to Modal (when as='modal')
   */
  modalProps?: Partial<Omit<ModalRootProps, 'isOpen' | 'onClose' | 'children'>>
  /**
   * Additional props passed to Drawer (when as='drawer')
   */
  drawerProps?: Partial<Omit<DrawerProps, 'isOpen' | 'onClose' | 'children'>>
}

/**
 * Props for the numeric keypad
 */
export interface NumericKeypadProps {
  /**
   * Callback fired when a number is pressed
   */
  onNumberPress: (digit: string) => void
  /**
   * Callback fired when delete/backspace is pressed
   */
  onDelete: () => void
  /**
   * Whether the keypad is disabled
   */
  disabled?: boolean
  /**
   * Size of the keypad buttons
   */
  size?: 'sm' | 'md' | 'lg'
}
