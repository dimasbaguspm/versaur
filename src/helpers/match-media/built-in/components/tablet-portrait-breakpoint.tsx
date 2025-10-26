import { BREAKPOINT_TABLET_PORTRAIT } from '../../constants'
import { MatchMedia } from '../../match-media'

/**
 * Props for breakpoint components
 */
interface BreakpointComponentProps {
  children: React.ReactNode
}

/**
 * Component that only renders children on tablet portrait viewports
 *
 * @example
 * ```tsx
 * <TabletPortraitBreakpoint>
 *   <TabletPortraitContent />
 * </TabletPortraitBreakpoint>
 * ```
 */
export function TabletPortraitBreakpoint({
  children,
}: BreakpointComponentProps) {
  return <MatchMedia query={BREAKPOINT_TABLET_PORTRAIT}>{children}</MatchMedia>
}
