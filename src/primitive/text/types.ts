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
    | 'inherit'
    | 'white'
    | 'black'
    | 'gray'
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
  /** Tailwind font size utility (e.g., 'xs', 'sm', 'base', 'lg', 'xl', etc.)
   *  If set, overrides the default font size from the `as` prop and design system
   *  See: https://tailwindcss.com/docs/font-size
   */
  fontSize?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
    | undefined
  /** Tailwind font weight utility (e.g., 'thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black')
   *  If set, overrides the default font weight from the `as` prop and design system
   *  See: https://tailwindcss.com/docs/font-weight
   */
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
