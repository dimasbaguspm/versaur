import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { AttributeListItemProps } from './types'
import { getColSpan } from './helpers'
import { Attribute } from '../attribute/attribute'

/**
 * AttributeList.Item atom
 */
export const AttributeListItem = forwardRef<
  HTMLLIElement,
  AttributeListItemProps
>(function AttributeListItem(
  { children, className, span = 1, title, ...props },
  ref
) {
  const colSpan = getColSpan(span)

  return (
    <li ref={ref} className={cn(colSpan, className)} {...props}>
      <Attribute title={title}>{children}</Attribute>
    </li>
  )
})
