/**
 * AnchorProps defines the props for the Anchor component
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 */
import type { AnchorHTMLAttributes, ReactNode } from 'react'

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The content to be rendered inside the anchor
   */
  children: ReactNode
  /**
   * Color role for the anchor (default: 'primary')
   */
  color?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'neutral'
  /**
   * Font size utility (default: 'base')
   * See: https://tailwindcss.com/docs/font-size
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
    | 'inherit'
    | undefined
  /**
   * Font weight utility (default: 'medium')
   * See: https://tailwindcss.com/docs/font-weight
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
    | 'inherit'
    | undefined
  /**
   * If true, removes underline style from anchor
   */
  quiet?: boolean
}
