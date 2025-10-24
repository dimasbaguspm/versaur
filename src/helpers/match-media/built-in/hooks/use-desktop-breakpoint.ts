import { BREAKPOINT_DESKTOP } from '../../constants'
import { useMatchMedia } from '../../use-match-media'

/**
 * Hook to detect if the current viewport is desktop
 *
 * @returns boolean indicating if viewport is desktop (min-width: 1024px)
 *
 * @example
 * ```tsx
 * const isDesktop = useDesktopBreakpoint()
 * ```
 */
export function useDesktopBreakpoint(): boolean {
  return useMatchMedia(BREAKPOINT_DESKTOP)
}
