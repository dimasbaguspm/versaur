import type { BreadcrumbsItemProps } from './types'
import { breadcrumbsItemClass } from './helpers'
import { forwardRef } from 'react'
import { cn } from '@/utils'
import { Icon } from '@/primitive'
import { ChevronRight } from 'lucide-react'

/**
 * Single breadcrumb item, used within <Breadcrumbs>
 */
export const BreadcrumbsItem = forwardRef<
  HTMLAnchorElement,
  BreadcrumbsItemProps
>(function BreadcrumbsItem(
  { children, icon, isCurrent, className, ...props },
  ref
) {
  return (
    <li className='flex items-center'>
      <a
        ref={ref}
        aria-current={isCurrent ? 'page' : undefined}
        tabIndex={isCurrent ? -1 : 0}
        className={cn(breadcrumbsItemClass(), className)}
        {...props}
      >
        {icon && <span className='mr-1 inline-flex'>{icon}</span>}
        {children}
      </a>
    </li>
  )
})

/**
 * Separator between breadcrumb items
 */
export function BreadcrumbsSeparator() {
  return <Icon as={ChevronRight} size='xs' color='inherit' />
}
