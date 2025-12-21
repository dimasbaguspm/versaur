import type { HTMLAttributes, ReactNode } from 'react'

/**
 * HeadingProps defines the props for the Heading component
 * @property as - HTML heading element to render (h1-h6)
 * @property color - Versaur color system (primary, secondary, tertiary, ghost, neutral, success, info, warning, danger)
 * @property transform - Text transform helper
 * @property decoration - Text decoration helper
 * @property hasMargin - Whether to add margin bottom (mb-4)
 * @property align - Text alignment
 * @property clamp - Clamp lines (1-5) or none
 * @property ellipsis - Whether to truncate text with ellipsis
 * @property className - Additional CSS classes
 * @property children - Text content
 */
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** HTML heading element to render (h1-h6) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
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
  /** Text transform helper */
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  /** Text decoration helper */
  decoration?: 'none' | 'underline' | 'line-through' | 'overline'
  /** Add margin bottom (mb-4) */
  hasMargin?: boolean
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify'
  /** Clamp lines (1-5) or none */
  clamp?: 1 | 2 | 3 | 4 | 5 | 'none'
  /** Ellipsis (truncate) */
  ellipsis?: boolean
  /** Text content */
  children: ReactNode
}
