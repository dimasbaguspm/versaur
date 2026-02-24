import type { ReactNode } from "react"
import { useTabletOrDesktopBreakpoint } from "../../../hooks/use-breakpoints"

export interface TabletOrDesktopBreakpointProps {
  /** Content to render when viewport is tablet or desktop (>= 640px) */
  children: ReactNode
}

/**
 * Component that renders its children only when viewport is tablet or desktop
 * (exclusive: hides on mobile)
 *
 * @example
 * ```tsx
 * <TabletOrDesktopBreakpoint>
 *   <FullLayout />
 * </TabletOrDesktopBreakpoint>
 * ```
 */
export function TabletOrDesktopBreakpoint({ children }: TabletOrDesktopBreakpointProps) {
  const isLargeScreen = useTabletOrDesktopBreakpoint()
  return isLargeScreen ? children : null
}
