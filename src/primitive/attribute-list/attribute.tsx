import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { AttributeListProps } from './types'
import { AttributeListItem } from './attribute.atoms'
import { getGridCols } from './helpers'

/**
 * Compound AttributeList component for Versaur UI
 *
 * Usage:
 * <AttributeList columns={4}>
 *   <AttributeList.Item span={4} title='Full Width'>Full width content</AttributeList.Item>
 *   <AttributeList.Item span={2} title='Half Width'>Half width content</AttributeList.Item>
 *   <AttributeList.Item span={2} title='Half Width'>Half width content</AttributeList.Item>
 * </AttributeList>
 */
const AttributeListRoot = forwardRef<HTMLUListElement, AttributeListProps>(
  function AttributeListRoot(
    { children, className, columns = 4, ...props },
    ref
  ) {
    const gridCols = getGridCols(columns)

    return (
      <ul
        ref={ref}
        className={cn('grid gap-4', gridCols, className)}
        {...props}
      >
        {children}
      </ul>
    )
  }
)

export const AttributeList = Object.assign(AttributeListRoot, {
  Item: AttributeListItem,
})
