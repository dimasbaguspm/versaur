import { BREAKPOINT_DESKTOP } from '../../constants'
import { MatchMedia } from '../../match-media'

/**
 * Props for breakpoint components
 */
interface BreakpointComponentProps {
  children: React.ReactNode
}

/**
 * Component that only renders children on desktop viewports
 *
 * @example
 * ```tsx
 * <DesktopBreakpoint>
 *   <DesktopOnlyContent />
 * </DesktopBreakpoint>
 * ```
 */
export function DesktopBreakpoint({ children }: BreakpointComponentProps) {
  return <MatchMedia query={BREAKPOINT_DESKTOP}>{children}</MatchMedia>
}
