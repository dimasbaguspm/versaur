import { BREAKPOINT_MOBILE } from '../../constants'
import { MatchMedia } from '../../match-media'

/**
 * Props for breakpoint components
 */
interface BreakpointComponentProps {
  children: React.ReactNode
}

/**
 * Component that only renders children on mobile viewports
 *
 * @example
 * ```tsx
 * <MobileBreakpoint>
 *   <MobileOnlyContent />
 * </MobileBreakpoint>
 * ```
 */
export function MobileBreakpoint({ children }: BreakpointComponentProps) {
  return <MatchMedia query={BREAKPOINT_MOBILE}>{children}</MatchMedia>
}
