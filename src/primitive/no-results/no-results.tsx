import React from 'react'
import { cn } from '@/utils/cn'
import { Icon } from '@/primitive/icon'
import { Text } from '@/primitive/text'
import type { NoResultsProps } from './types'
import {
  noResultsVariants,
  noResultsHeaderVariants,
  noResultsTitleVariants,
  noResultsSubtitleVariants,
} from './helpers'

/**
 * NoResults component for Versaur UI
 * Displays an empty state with icon, title, subtitle, and optional action
 * Uses semantic HTML structure with proper headings and landmarks
 * @example
 * <NoResults
 *   icon={SearchIcon}
 *   title="No results found"
 *   subtitle="Try adjusting your search criteria"
 *   action={<Button onClick={clearSearch}>Clear filters</Button>}
 * />
 */
export const NoResults = React.forwardRef<HTMLElement, NoResultsProps>(
  function NoResults(
    { icon, title, subtitle, action, className, hasGrayBackground, ...props },
    ref
  ) {
    return (
      <section
        ref={ref}
        className={cn(noResultsVariants({ hasGrayBackground }), className)}
        role='status'
        aria-label='No results found'
        {...props}
      >
        <header className={noResultsHeaderVariants()}>
          <Icon as={icon} size='lg' color='ghost' aria-hidden='true' />
          <Text as='h2' className={noResultsTitleVariants()}>
            {title}
          </Text>
        </header>

        {subtitle && (
          <Text as='p' className={noResultsSubtitleVariants()}>
            {subtitle}
          </Text>
        )}

        {action && (
          <div role='group' aria-label='Available actions'>
            {action}
          </div>
        )}
      </section>
    )
  }
)
