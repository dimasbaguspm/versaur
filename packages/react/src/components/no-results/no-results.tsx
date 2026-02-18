import { noResultsStyles } from "@versaur/core"
import { forwardRef } from "react"

import { Icon } from "../icon"
import type { NoResultsProps } from "./no-results.types"

/**
 * NoResults component - displays an empty state with icon, title, subtitle, and optional action
 *
 * Perfect for search results, filtered lists, or any empty data scenarios.
 * Uses semantic HTML with proper accessibility attributes.
 *
 * @example
 * ```tsx
 * import { NoResults } from '@versaur/react';
 * import { SearchIcon } from '@versaur/icons';
 *
 * <NoResults
 *   icon={SearchIcon}
 *   title="No results found"
 *   subtitle="We couldn't find any items matching your search criteria."
 *   action={<Button variant="primary">Clear Search</Button>}
 * />
 * ```
 */
export const NoResults = forwardRef<HTMLElement, NoResultsProps>(
  ({ icon: IconComponent, title, subtitle, action, ...props }, ref) => (
    <section ref={ref} className={noResultsStyles["no-results"]} role="status" aria-label={title} {...props}>
      <header className={noResultsStyles["no-results-header"]}>
        <div className={noResultsStyles["no-results-icon"]}>
          <Icon as={IconComponent} color="inherit" aria-hidden="true" />
        </div>
        <h5 className={noResultsStyles["no-results-title"]}>{title}</h5>
      </header>

      {subtitle && <p className={noResultsStyles["no-results-subtitle"]}>{subtitle}</p>}

      {action && (
        <div className={noResultsStyles["no-results-action"]} role="group" aria-label="Available actions">
          {action}
        </div>
      )}
    </section>
  ),
)

NoResults.displayName = "NoResults"
