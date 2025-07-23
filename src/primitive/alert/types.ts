import type { HTMLAttributes, ReactNode } from 'react'

/**
 * AlertProps defines the props for the Alert component
 * @property variant - Visual style variant (default or outline)
 * @property color - Color theme for the alert
 * @property icon - Icon element to display (optional)
 * @property className - Additional CSS classes
 * @property children - Alert content including Alert.Title or plain text
 */
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style variant
   * - default: Soft background color with colored text
   * - outline: Bordered style with transparent background
   */
  variant?: 'default' | 'outline'

  /**
   * Color theme based on Versaur color system
   * - primary: Coral color for main actions and brand identity
   * - secondary: Sage color for secondary information
   * - tertiary: Mist color for subtle professional elements
   * - ghost: Slate color for minimal styling
   * - neutral: Light gray for neutral information
   * - success: Green for positive feedback
   * - info: Blue for information
   * - warning: Orange for caution
   * - danger: Red for errors and destructive actions
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
   * Icon element to display at the start of the alert
   * Can be any React element (typically an SVG icon)
   */
  icon?: ReactNode

  /**
   * Alert content - can be plain text, Alert.Title, or mixed content
   */
  children?: ReactNode
}

/**
 * AlertIconProps defines the props for the Alert.Icon component
 * @property className - Additional CSS classes
 * @property children - Icon content (typically an SVG icon)
 */
export interface AlertIconProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Icon content - user-controlled icon element
   */
  children?: ReactNode
}
