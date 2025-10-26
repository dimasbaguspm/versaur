import { BREAKPOINT_MOBILE_LANDSCAPE } from '../../constants'
import { useMatchMedia } from '../../use-match-media'

/**
 * Hook to detect if the current viewport is mobile in landscape orientation
 *
 * @returns boolean indicating if viewport is mobile landscape
 *
 * @example
 * ```tsx
 * const isMobileLandscape = useMobileLandscapeBreakpoint()
 * ```
 */
export function useMobileLandscapeBreakpoint(): boolean {
  return useMatchMedia(BREAKPOINT_MOBILE_LANDSCAPE)
}
