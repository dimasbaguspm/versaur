import type { BreadcrumbsProps } from './types'
import { breadcrumbsRootClass } from './helpers'
import { BreadcrumbsItem, BreadcrumbsSeparator } from './breadcrumbs.atoms'
import { forwardRef } from 'react'

/**
 * Breadcrumbs navigation component
 *
 * @example
 * <Breadcrumbs>
 *   <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
 *   <Breadcrumbs.Item href="/applicant">Applicant</Breadcrumbs.Item>
 * </Breadcrumbs>
 */

export const BreadcrumbsRoot = forwardRef<HTMLOListElement, BreadcrumbsProps>(
  function BreadcrumbsRoot(
    { children, 'aria-label': ariaLabel = 'Breadcrumb', ...props },
    ref
  ) {
    return (
      <nav aria-label={ariaLabel} {...props}>
        <ol ref={ref} className={breadcrumbsRootClass()}>
          {children}
        </ol>
      </nav>
    )
  }
)

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  Item: BreadcrumbsItem,
  Separator: BreadcrumbsSeparator,
})
