import type { ReactNode, HTMLAttributes } from 'react'

/**
 * Props for the Attribute component
 */
export interface AttributeProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The attribute title (displayed as h4)
   */
  title: string
  /**
   * The attribute content (displayed as p)
   */
  children: ReactNode

  /**
   * Whether the attribute has bottom margin
   * @default false
   */
  hasMargin?: boolean
}
