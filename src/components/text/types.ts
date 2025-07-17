import type { HTMLAttributes, ElementType, ReactNode } from 'react'

/**
 * TextProps defines the props for the Text component
 * @property as - HTML element to render (e.g., 'span', 'h1', 'p')
 * @property color - Versaur color system (primary, secondary, tertiary, ghost, neutral, success, info, warning, danger)
 * @property hasUnderline - Whether to underline the text
 * @property isCapitalize - Whether to capitalize the text
 * @property className - Additional CSS classes
 * @property children - Text content
 */
export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** HTML element to render (e.g., 'span', 'h1', 'p') */
  as?: ElementType
  /** Versaur color system */
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
  /** Underline text */
  hasUnderline?: boolean
  /** Capitalize text */
  isCapitalize?: boolean
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify'
  /** Italic text */
  italic?: boolean
  /** Clamp lines (1-5) or none */
  clamp?: 1 | 2 | 3 | 4 | 5 | 'none'
  /** Ellipsis (truncate) */
  ellipsis?: boolean
  // fontWeight, fontSize, and lineHeight are now controlled by the `as` prop and design system
  /** Text content */
  children: ReactNode
}
