import { cn } from '@/utils/cn'
import { buttonGroupVariants } from './helpers'
import type { ButtonGroupProps } from './types'
import { forwardRef } from 'react'

/**
 * ButtonGroup provides layout management for buttons with control over
 * positioning, alignment, and fluid behavior
 *
 * @example
 * <ButtonGroup alignment="center" gap="sm">
 *   <Button variant="primary">Save</Button>
 *   <Button variant="ghost">Cancel</Button>
 * </ButtonGroup>
 *
 * @example
 * // Vertical button group
 * <ButtonGroup orientation="vertical" fluid>
 *   <Button variant="primary">Save</Button>
 *   <Button variant="secondary">Save as Draft</Button>
 *   <Button variant="ghost">Cancel</Button>
 * </ButtonGroup>
 *
 * @example
 * // Fluid buttons with space between
 * <ButtonGroup alignment="between" fluid>
 *   <Button variant="ghost">Back</Button>
 *   <Button variant="primary">Next</Button>
 * </ButtonGroup>
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    {
      className,
      children,
      orientation = 'horizontal',
      alignment = 'start',
      gap = 'md',
      fluid = false,
      hasMargin,
      overlay = false,
      ...props
    },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          buttonGroupVariants({
            orientation,
            alignment,
            gap,
            fluid,
            overlay,
          }),
          hasMargin && 'mb-4',
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
