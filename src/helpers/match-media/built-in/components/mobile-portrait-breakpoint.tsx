import { BREAKPOINT_MOBILE_PORTRAIT } from '../../constants'
import { MatchMedia } from '../../match-media'

/**
 * Props for breakpoint components
 */
interface BreakpointComponentProps {
  children: React.ReactNode
}

/**
 * Component that only renders children on mobile portrait viewports
 *
 * @example
 * ```tsx
 * <MobilePortraitBreakpoint>
 *   <MobilePortraitContent />
 * </MobilePortraitBreakpoint>
 * ```
 */
export function MobilePortraitBreakpoint({
  children,
}: BreakpointComponentProps) {
  return <MatchMedia query={BREAKPOINT_MOBILE_PORTRAIT}>{children}</MatchMedia>
}
