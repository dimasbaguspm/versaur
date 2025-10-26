import { BREAKPOINT_MOBILE_AND_TABLET } from '../../constants'
import { useMatchMedia } from '../../use-match-media'

/**
 * Hook to detect if the current viewport is mobile or tablet
 *
 * @returns boolean indicating if viewport is mobile or tablet (max-width: 1023px)
 *
 * @example
 * ```tsx
 * const isMobileOrTablet = useMobileAndTabletBreakpoint()
 * ```
 */
export function useMobileAndTabletBreakpoint(): boolean {
  return useMatchMedia(BREAKPOINT_MOBILE_AND_TABLET)
}
