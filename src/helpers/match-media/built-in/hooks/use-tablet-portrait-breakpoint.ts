import { BREAKPOINT_TABLET_PORTRAIT } from '../../constants'
import { useMatchMedia } from '../../use-match-media'

/**
 * Hook to detect if the current viewport is tablet in portrait orientation
 *
 * @returns boolean indicating if viewport is tablet portrait
 *
 * @example
 * ```tsx
 * const isTabletPortrait = useTabletPortraitBreakpoint()
 * ```
 */
export function useTabletPortraitBreakpoint(): boolean {
  return useMatchMedia(BREAKPOINT_TABLET_PORTRAIT)
}
