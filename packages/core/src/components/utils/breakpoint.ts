/**
 * Responsive Design Breakpoints
 * Single source of truth for breakpoint values used in both CSS and JavaScript
 */

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Convert breakpoint value to px string for CSS media queries
 */
export function getBreakpointPx(key: BreakpointKey): string {
  return `${BREAKPOINTS[key]}px`;
}

/**
 * Get CSS variable name for a breakpoint
 */
export function getBreakpointCssVar(key: BreakpointKey): string {
  return `var(--breakpoint-${key})`;
}
