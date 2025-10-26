import { BREAKPOINT_MOBILE_LANDSCAPE } from '../../constants'
import { MatchMedia } from '../../match-media'

/**
 * Props for breakpoint components
 */
interface BreakpointComponentProps {
  children: React.ReactNode
}

/**
 * Component that only renders children on mobile landscape viewports
 *
 * @example
 * ```tsx
 * <MobileLandscapeBreakpoint>
 *   <MobileLandscapeContent />
 * </MobileLandscapeBreakpoint>
 * ```
 */
export function MobileLandscapeBreakpoint({
  children,
}: BreakpointComponentProps) {
  return <MatchMedia query={BREAKPOINT_MOBILE_LANDSCAPE}>{children}</MatchMedia>
}
