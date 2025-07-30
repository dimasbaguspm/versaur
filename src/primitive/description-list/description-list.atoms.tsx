import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type {
  DescriptionListItemProps,
  DescriptionListTermProps,
  DescriptionListDetailsProps,
} from './types'
import { getColSpan } from './helpers'
import { Text } from '../text'

/**
 * DescriptionList.Item atom
 */
export const DescriptionListItem = forwardRef<
  HTMLDivElement,
  DescriptionListItemProps
>(function DescriptionListItem(
  { children, className, span = 4, ...props },
  ref
) {
  // Always use col-span-4 by default, allow override via span prop (1-12)
  const colSpan = getColSpan(span)
  return (
    <div ref={ref} className={cn(colSpan, className)} {...props}>
      {children}
    </div>
  )
})

/**
 * DescriptionList.Term atom
 */
export const DescriptionListTerm = forwardRef<
  HTMLElement,
  DescriptionListTermProps
>(function DescriptionListTerm({ children, ...props }, ref) {
  return (
    <dt ref={ref} {...props}>
      <Text as='span' fontSize='sm' fontWeight='medium' color='gray'>
        {children}
      </Text>
    </dt>
  )
})

/**
 * DescriptionList.Details atom
 */
export const DescriptionListDetails = forwardRef<
  HTMLElement,
  DescriptionListDetailsProps
>(function DescriptionListDetails(
  { children, color = 'black', ...props },
  ref
) {
  return (
    <dd ref={ref} {...props}>
      <Text as='span' fontSize='base' fontWeight='medium' color={color}>
        {children}
      </Text>
    </dd>
  )
})
