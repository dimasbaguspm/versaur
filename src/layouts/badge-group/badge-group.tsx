import { cn } from '@/utils/cn'
import { badgeGroupVariants } from './helpers'
import type { BadgeGroupProps } from './types'
import { forwardRef } from 'react'

/**
 * BadgeGroup provides layout management for badges with control over
 * positioning, alignment, and fluid behavior
 *
 * @example
 * <BadgeGroup alignment="center" gap="sm">
 *   <Badge variant="primary">Save</Badge>
 *   <Badge variant="ghost">Cancel</Badge>
 * </BadgeGroup>
 *
 * @example
 * // Vertical badge group
 * <BadgeGroup orientation="vertical" fluid>
 *   <Badge variant="primary">Save</Badge>
 *   <Badge variant="secondary">Save as Draft</Badge>
 *   <Badge variant="ghost">Cancel</Badge>
 * </BadgeGroup>
 *
 * @example
 * // Fluid badges with space between
 * <BadgeGroup alignment="between" fluid>
 *   <Badge variant="ghost">Back</Badge>
 *   <Badge variant="primary">Next</Badge>
 * </BadgeGroup>
 */
export const BadgeGroup = forwardRef<HTMLDivElement, BadgeGroupProps>(
  function BadgeGroup(
    {
      className,
      children,
      orientation = 'horizontal',
      alignment = 'start',
      gap = 'md',
      fluid = false,
      ...props
    },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          badgeGroupVariants({
            orientation,
            alignment,
            gap,
            fluid,
          }),
          className
        )}
        role='group'
        {...props}
      >
        {children}
      </div>
    )
  }
)
