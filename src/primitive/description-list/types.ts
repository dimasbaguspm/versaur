import type { ReactNode, HTMLAttributes } from 'react'
import type { TextProps } from '../text'

/**
 * Props for the DescriptionList root component
 */
export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement> {
  /**
   * Children should be DescriptionList.Item elements
   */
  children: ReactNode
}

/**
 * Props for DescriptionList.Item
 */
export interface DescriptionListItemProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Children should be DescriptionList.Term and DescriptionList.Details
   */
  children: ReactNode
  /**
   * Number of grid columns to span (default: 4)
   */
  span?: number
}

/**
 * Props for DescriptionList.Term
 */
export interface DescriptionListTermProps
  extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /**
   * Term label (required, string only)
   */
  children: string
}

/**
 * Props for DescriptionList.Details
 */
export interface DescriptionListDetailsProps
  extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /**
   * Details value (required, string only)
   */
  children: string
  /**
   * Text Color (default: 'black')
   */
  color?: TextProps['color']
}
