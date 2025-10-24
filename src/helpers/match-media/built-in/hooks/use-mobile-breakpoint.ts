import { BREAKPOINT_MOBILE } from '../../constants'
import { useMatchMedia } from '../../use-match-media'

/**
 * Hook to detect if the current viewport is mobile
 *
 * @returns boolean indicating if viewport is mobile (max-width: 767px)
 *
 * @example
 * ```tsx
 * const isMobile = useMobileBreakpoint()
 * ```
 */
export function useMobileBreakpoint(): boolean {
  return useMatchMedia(BREAKPOINT_MOBILE)
}
