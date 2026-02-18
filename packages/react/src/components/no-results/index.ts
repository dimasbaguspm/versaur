import { NoResults } from "./no-results"
import type { NoResultsProps } from "./no-results.types"

/**
 * Declaration merging for NoResults component
 */
declare namespace NoResults {
  export type Props = NoResultsProps
}

export { NoResults }
export type { NoResultsProps }

// Preview exports
export { NoResultsPreview, noResultsSections, noResultsProps } from "./preview"
export type { NoResultsSection } from "./preview"
