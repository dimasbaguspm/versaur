import type { BreadcrumbsItemProps } from './types'
import { breadcrumbsItemClass, breadcrumbsSeparatorClass } from './helpers'
import { forwardRef } from 'react'
import { cn } from '@/utils'

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
        className={cn(breadcrumbsItemClass({ isCurrent }) + className)}
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
  return (
    <span className={breadcrumbsSeparatorClass} aria-hidden='true'>
      /
    </span>
  )
}
