import type { ReactNode } from "react"
import { useDesktopBreakpoint } from "../../../hooks/use-breakpoints"

export interface DesktopBreakpointProps {
  /** Content to render when viewport is at desktop breakpoint (>= 1024px) */
  children: ReactNode
}

/**
 * Component that renders its children only when viewport is at desktop breakpoint
 *
 * @example
 * ```tsx
 * <DesktopBreakpoint>
 *   <DesktopSidebar />
 * </DesktopBreakpoint>
 * ```
 */
export function DesktopBreakpoint({ children }: DesktopBreakpointProps) {
  const isDesktop = useDesktopBreakpoint()
  return isDesktop ? children : null
}
