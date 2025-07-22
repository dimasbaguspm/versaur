import type { HTMLAttributes, ReactNode } from 'react'

/**
 * Props for the FormLayout root component
 */
export interface FormLayoutProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Children (should be FormLayout.Column components)
   */
  children: ReactNode
}

/**
 * Props for the FormLayout.Column sub-component
 */
export interface FormLayoutColumnProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns to span (1-12, default 4)
   * @default 4
   */
  span?: number
}
