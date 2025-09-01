import type { HTMLAttributes, ReactNode } from 'react'

/**
 * HeadingProps defines the props for the Heading component
 * @property level - Heading level (1-6, corresponding to h1-h6)
 * @property color - Versaur color system (primary, secondary, tertiary, ghost, neutral, success, info, warning, danger)
 * @property hasUnderline - Whether to underline the text
 * @property isCapitalize - Whether to capitalize the text
 * @property hasMargin - Whether to add margin bottom (mb-4)
 * @property align - Text alignment
 * @property italic - Whether to italicize the text
 * @property clamp - Clamp lines (1-5) or none
 * @property ellipsis - Whether to truncate text with ellipsis
 * @property className - Additional CSS classes
 * @property children - Text content
 */
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading level (1-6, corresponding to h1-h6) */
  level?: 1 | 2 | 3 | 4 | 5 | 6
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
    | 'inherit'
    | 'white'
    | 'black'
    | 'gray'
  /** Underline text */
  hasUnderline?: boolean
  /** Capitalize text */
  isCapitalize?: boolean
  /** Add margin bottom (mb-4) */
  hasMargin?: boolean
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify'
  /** Italic text */
  italic?: boolean
  /** Clamp lines (1-5) or none */
  clamp?: 1 | 2 | 3 | 4 | 5 | 'none'
  /** Ellipsis (truncate) */
  ellipsis?: boolean
  /** Text content */
  children: ReactNode
}
