import { BREAKPOINT_TABLET_AND_DESKTOP } from '../../constants'
import { useMatchMedia } from '../../use-match-media'

/**
 * Hook to detect if the current viewport is tablet or desktop
 *
 * @returns boolean indicating if viewport is tablet or desktop (min-width: 768px)
 *
 * @example
 * ```tsx
 * const isTabletOrDesktop = useTabletAndDesktopBreakpoint()
 * ```
 */
export function useTabletAndDesktopBreakpoint(): boolean {
  return useMatchMedia(BREAKPOINT_TABLET_AND_DESKTOP)
}
