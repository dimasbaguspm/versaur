import type { HTMLAttributes, ElementType, ReactNode } from 'react'

/**
 * TextProps defines the props for the Text component
 * @property as - HTML element to render (inline-friendly elements)
 * @property color - Versaur color system (primary, secondary, tertiary, ghost, neutral, success, info, warning, danger)
 * @property transform - Text transform helper (capitalize, uppercase, lowercase, or none)
 * @property decoration - Text decoration helper (underline, line-through, overline, none)
 * @property className - Additional CSS classes
 * @property children - Text content
 */
export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** HTML element to render (inline-friendly elements) */
  as?: Extract<
    ElementType,
    'span' | 'p' | 'q' | 's' | 'strong' | 'em' | 'small' | 'label'
  >
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
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify'
  /** Italic text */
  italic?: boolean
  /** Clamp lines (1-5) or none */
  clamp?: 1 | 2 | 3 | 4 | 5 | 'none'
  /** Ellipsis (truncate) */
  ellipsis?: boolean
  /** Font weight utility (matches Tailwind font-weight) */
  fontWeight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
    | undefined
  /** Text content */
  children: ReactNode
}
