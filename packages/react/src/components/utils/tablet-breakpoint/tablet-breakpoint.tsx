import type { ReactNode } from "react"
import { useTabletBreakpoint } from "../../../hooks/use-breakpoints"

export interface TabletBreakpointProps {
  /** Content to render when viewport is at tablet breakpoint (< 1024px) */
  children: ReactNode
}

/**
 * Component that renders its children only when viewport is at tablet breakpoint
 *
 * @example
 * ```tsx
 * <TabletBreakpoint>
 *   <TabletLayout />
 * </TabletBreakpoint>
 * ```
 */
export function TabletBreakpoint({ children }: TabletBreakpointProps) {
  const isTablet = useTabletBreakpoint()
  return isTablet ? children : null
}
