import type { ReactNode, HTMLAttributes } from 'react'
import type { AttributeProps } from '../attribute/types'

/**
 * Props for the AttributeList root component
 */
export interface AttributeListProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Number of grid columns (default: 4)
   */
  columns?: number
  /**
   * Children should be AttributeList.Item elements
   */
  children: ReactNode
}

/**
 * Props for AttributeList.Item
 */
export interface AttributeListItemProps
  extends Omit<HTMLAttributes<HTMLLIElement>, 'title' | 'children'>,
    Pick<AttributeProps, 'title' | 'children'> {
  /**
   * Number of grid columns to span (default: 1)
   */
  span?: number
}
