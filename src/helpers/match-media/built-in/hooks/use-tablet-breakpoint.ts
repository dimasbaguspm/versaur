import { BREAKPOINT_TABLET } from '../../constants'
import { useMatchMedia } from '../../use-match-media'

/**
 * Hook to detect if the current viewport is tablet
 *
 * @returns boolean indicating if viewport is tablet (768px - 1023px)
 *
 * @example
 * ```tsx
 * const isTablet = useTabletBreakpoint()
 * ```
 */
export function useTabletBreakpoint(): boolean {
  return useMatchMedia(BREAKPOINT_TABLET)
}
