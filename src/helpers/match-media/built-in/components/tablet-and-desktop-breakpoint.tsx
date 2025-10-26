import { BREAKPOINT_TABLET_AND_DESKTOP } from '../../constants'
import { MatchMedia } from '../../match-media'

/**
 * Props for breakpoint components
 */
interface BreakpointComponentProps {
  children: React.ReactNode
}

/**
 * Component that only renders children on tablet and desktop viewports
 *
 * @example
 * ```tsx
 * <TabletAndDesktopBreakpoint>
 *   <TabletAndDesktopContent />
 * </TabletAndDesktopBreakpoint>
 * ```
 */
export function TabletAndDesktopBreakpoint({
  children,
}: BreakpointComponentProps) {
  return (
    <MatchMedia query={BREAKPOINT_TABLET_AND_DESKTOP}>{children}</MatchMedia>
  )
}
