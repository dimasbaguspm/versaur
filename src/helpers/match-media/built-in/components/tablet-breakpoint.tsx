import { BREAKPOINT_TABLET } from '../../constants'
import { MatchMedia } from '../../match-media'

/**
 * Props for breakpoint components
 */
interface BreakpointComponentProps {
  children: React.ReactNode
}

/**
 * Component that only renders children on tablet viewports
 *
 * @example
 * ```tsx
 * <TabletBreakpoint>
 *   <TabletOnlyContent />
 * </TabletBreakpoint>
 * ```
 */
export function TabletBreakpoint({ children }: BreakpointComponentProps) {
  return <MatchMedia query={BREAKPOINT_TABLET}>{children}</MatchMedia>
}
