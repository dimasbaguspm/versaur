/**
 * Props for SwitchInput component
 */
export interface SwitchInputProps {
  /**
   * Controlled checked state
   */
  checked?: boolean
  /**
   * Uncontrolled default checked state
   */
  defaultChecked?: boolean
  /**
   * Callback when checked state changes
   */
  onCheckedChange?: (checked: boolean) => void
  /**
   * Color variant (primary, secondary, etc.)
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'neutral'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
  /**
   * Size variant
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Label text
   */
  label?: string
  /**
   * Label placement: top (default) or inline
   */
  labelPlacement?: 'top' | 'inline'
  /**
   * Disabled state
   */
  disabled?: boolean
  /**
   * Additional className for root
   */
  className?: string
  /**
   * id for input (for accessibility)
   */
  id?: string
  /**
   * aria-label for accessibility
   */
  ariaLabel?: string
}
