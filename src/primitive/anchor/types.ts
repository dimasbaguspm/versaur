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
   */
  fontSize?: string
  /**
   * Font weight utility (default: 'medium')
   */
  fontWeight?: string
}
