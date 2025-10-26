import { BREAKPOINT_MOBILE_AND_TABLET } from '../../constants'
import { MatchMedia } from '../../match-media'

/**
 * Props for breakpoint components
 */
interface BreakpointComponentProps {
  children: React.ReactNode
}

/**
 * Component that only renders children on mobile and tablet viewports
 *
 * @example
 * ```tsx
 * <MobileAndTabletBreakpoint>
 *   <MobileAndTabletContent />
 * </MobileAndTabletBreakpoint>
 * ```
 */
export function MobileAndTabletBreakpoint({
  children,
}: BreakpointComponentProps) {
  return (
    <MatchMedia query={BREAKPOINT_MOBILE_AND_TABLET}>{children}</MatchMedia>
  )
}
