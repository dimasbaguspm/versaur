import type { ReactNode } from "react"
import { useMobileBreakpoint } from "../../../hooks/use-breakpoints"

export interface MobileBreakpointProps {
  /** Content to render when viewport is at mobile breakpoint (< 640px) */
  children: ReactNode
}

/**
 * Component that renders its children only when viewport is at mobile breakpoint
 *
 * @example
 * ```tsx
 * <MobileBreakpoint>
 *   <MobileMenu />
 * </MobileBreakpoint>
 * ```
 */
export function MobileBreakpoint({ children }: MobileBreakpointProps) {
  const isMobile = useMobileBreakpoint()
  return isMobile ? children : null
}
