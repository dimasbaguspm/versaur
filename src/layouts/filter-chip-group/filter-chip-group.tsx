import { cn } from '@/utils/cn'
import { filterChipGroupVariants } from './helpers'
import type { FilterChipGroupProps } from './types'
import { forwardRef } from 'react'

/**
 * FilterChipGroup provides layout management for filter chips with control over
 * positioning, alignment, and fluid behavior
 *
 * @example
 * <FilterChipGroup alignment="center" gap="sm">
 *   <FilterChip active>Category 1</FilterChip>
 *   <FilterChip>Category 2</FilterChip>
 * </FilterChipGroup>
 *
 * @example
 * // Vertical filter chip group
 * <FilterChipGroup orientation="vertical" fluid>
 *   <FilterChip active>Category 1</FilterChip>
 *   <FilterChip>Category 2</FilterChip>
 *   <FilterChip>Category 3</FilterChip>
 * </FilterChipGroup>
 *
 * @example
 * // Fluid filter chips with space between
 * <FilterChipGroup alignment="between" fluid>
 *   <FilterChip>Clear All</FilterChip>
 *   <FilterChip active>Apply</FilterChip>
 * </FilterChipGroup>
 */
export const FilterChipGroup = forwardRef<HTMLDivElement, FilterChipGroupProps>(
  function FilterChipGroup(
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
          filterChipGroupVariants({
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
