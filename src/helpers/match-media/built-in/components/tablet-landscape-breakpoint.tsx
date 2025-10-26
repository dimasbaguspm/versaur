import { BREAKPOINT_TABLET_LANDSCAPE } from '../../constants'
import { MatchMedia } from '../../match-media'

/**
 * Props for breakpoint components
 */
interface BreakpointComponentProps {
  children: React.ReactNode
}

/**
 * Component that only renders children on tablet landscape viewports
 *
 * @example
 * ```tsx
 * <TabletLandscapeBreakpoint>
 *   <TabletLandscapeContent />
 * </TabletLandscapeBreakpoint>
 * ```
 */
export function TabletLandscapeBreakpoint({
  children,
}: BreakpointComponentProps) {
  return <MatchMedia query={BREAKPOINT_TABLET_LANDSCAPE}>{children}</MatchMedia>
}
