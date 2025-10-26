import { BREAKPOINT_MOBILE_PORTRAIT } from '../../constants'
import { useMatchMedia } from '../../use-match-media'

/**
 * Hook to detect if the current viewport is mobile in portrait orientation
 *
 * @returns boolean indicating if viewport is mobile portrait
 *
 * @example
 * ```tsx
 * const isMobilePortrait = useMobilePortraitBreakpoint()
 * ```
 */
export function useMobilePortraitBreakpoint(): boolean {
  return useMatchMedia(BREAKPOINT_MOBILE_PORTRAIT)
}
