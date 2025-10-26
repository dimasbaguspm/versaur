import { BREAKPOINT_TABLET_LANDSCAPE } from '../../constants'
import { useMatchMedia } from '../../use-match-media'

/**
 * Hook to detect if the current viewport is tablet in landscape orientation
 *
 * @returns boolean indicating if viewport is tablet landscape
 *
 * @example
 * ```tsx
 * const isTabletLandscape = useTabletLandscapeBreakpoint()
 * ```
 */
export function useTabletLandscapeBreakpoint(): boolean {
  return useMatchMedia(BREAKPOINT_TABLET_LANDSCAPE)
}
