import { useMatchMedia } from "./use-match-media"
import { getBreakpointPx } from "@versaur/core/utils"

/**
 * Hook to detect if viewport is at mobile breakpoint (exclusive)
 * Returns true only if viewport width is less than 640px
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isMobile = useMobileBreakpoint();
 *   return <div>{isMobile ? "Mobile view" : "Larger view"}</div>;
 * }
 * ```
 */
export function useMobileBreakpoint(): boolean {
  const mobileBreakpoint = getBreakpointPx("mobile")
  return useMatchMedia(`(max-width: ${parseInt(mobileBreakpoint) - 1}px)`)
}

/**
 * Hook to detect if viewport is at tablet breakpoint (exclusive)
 * Returns true only if viewport width is 640px to 1023px (not mobile, not desktop)
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isTablet = useTabletBreakpoint();
 *   return <div>{isTablet ? "Tablet-only view" : "Other view"}</div>;
 * }
 * ```
 */
export function useTabletBreakpoint(): boolean {
  const mobileBreakpoint = getBreakpointPx("mobile")
  const tabletBreakpoint = getBreakpointPx("tablet")
  return useMatchMedia(
    `(min-width: ${parseInt(mobileBreakpoint)}px) and (max-width: ${parseInt(tabletBreakpoint) - 1}px)`
  )
}

/**
 * Hook to detect if viewport is at desktop breakpoint (exclusive)
 * Returns true only if viewport width is 1024px or greater
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isDesktop = useDesktopBreakpoint();
 *   return <div>{isDesktop ? "Desktop view" : "Smaller view"}</div>;
 * }
 * ```
 */
export function useDesktopBreakpoint(): boolean {
  const tabletBreakpoint = getBreakpointPx("tablet")
  return useMatchMedia(`(min-width: ${parseInt(tabletBreakpoint)}px)`)
}

/**
 * Hook to detect if viewport is mobile or tablet (combined)
 * Returns true if viewport width is less than 1024px
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isSmall = useMobileOrTabletBreakpoint();
 *   return <div>{isSmall ? "Small screen" : "Large screen"}</div>;
 * }
 * ```
 */
export function useMobileOrTabletBreakpoint(): boolean {
  const tabletBreakpoint = getBreakpointPx("tablet")
  return useMatchMedia(`(max-width: ${parseInt(tabletBreakpoint) - 1}px)`)
}

/**
 * Hook to detect if viewport is tablet or desktop (combined)
 * Returns true if viewport width is 640px or greater
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isLarge = useTabletOrDesktopBreakpoint();
 *   return <div>{isLarge ? "Large screen" : "Mobile"}</div>;
 * }
 * ```
 */
export function useTabletOrDesktopBreakpoint(): boolean {
  const mobileBreakpoint = getBreakpointPx("mobile")
  return useMatchMedia(`(min-width: ${parseInt(mobileBreakpoint)}px)`)
}
