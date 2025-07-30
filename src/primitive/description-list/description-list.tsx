import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { DescriptionListProps } from './types'
import {
  DescriptionListItem,
  DescriptionListTerm,
  DescriptionListDetails,
} from './description-list.atoms'

/**
 * Compound DescriptionList component for Versaur UI
 *
 * Usage:
 * <DescriptionList>
 *   <DescriptionList.Item>
 *     <DescriptionList.Term>Foo</DescriptionList.Term>
 *     <DescriptionList.Details>Bar</DescriptionList.Details>
 *   </DescriptionList.Item>
 * </DescriptionList>
 */
const DescriptionListRoot = forwardRef<HTMLDListElement, DescriptionListProps>(
  function DescriptionListRoot({ children, className, ...props }, ref) {
    // Always use grid-cols-12 for the root
    return (
      <dl
        ref={ref}
        className={cn('grid grid-cols-12 gap-y-4', className)}
        {...props}
      >
        {children}
      </dl>
    )
  }
)

export const DescriptionList = Object.assign(DescriptionListRoot, {
  Item: DescriptionListItem,
  Term: DescriptionListTerm,
  Details: DescriptionListDetails,
})
