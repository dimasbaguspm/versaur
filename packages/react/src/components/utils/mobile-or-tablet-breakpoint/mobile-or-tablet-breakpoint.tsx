import type { ReactNode } from "react"
import { useMobileOrTabletBreakpoint } from "../../../hooks/use-breakpoints"

export interface MobileOrTabletBreakpointProps {
  /** Content to render when viewport is mobile or tablet (< 1024px) */
  children: ReactNode
}

/**
 * Component that renders its children only when viewport is mobile or tablet
 * (exclusive: hides on desktop)
 *
 * @example
 * ```tsx
 * <MobileOrTabletBreakpoint>
 *   <CompactLayout />
 * </MobileOrTabletBreakpoint>
 * ```
 */
export function MobileOrTabletBreakpoint({ children }: MobileOrTabletBreakpointProps) {
  const isSmallScreen = useMobileOrTabletBreakpoint()
  return isSmallScreen ? children : null
}
