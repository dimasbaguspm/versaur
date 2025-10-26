/**
 * Standard Tailwind breakpoint definitions
 * These align with common Tailwind CSS breakpoints
 */
export const BREAKPOINT_MOBILE = '(max-width: 767px)' // 0-767px
export const BREAKPOINT_TABLET = '(min-width: 768px) and (max-width: 1023px)' // 768-1023px
export const BREAKPOINT_DESKTOP = '(min-width: 1024px)' // 1024px+

/**
 * Combined breakpoint definitions
 */
export const BREAKPOINT_MOBILE_AND_TABLET = '(max-width: 1023px)' // 0-1023px
export const BREAKPOINT_TABLET_AND_DESKTOP = '(min-width: 768px)' // 768px+

/**
 * Orientation-specific breakpoint definitions
 */
export const BREAKPOINT_MOBILE_PORTRAIT =
  '(max-width: 767px) and (orientation: portrait)' // mobile portrait
export const BREAKPOINT_MOBILE_LANDSCAPE =
  '(max-width: 767px) and (orientation: landscape)' // mobile landscape
export const BREAKPOINT_TABLET_PORTRAIT =
  '(min-width: 768px) and (max-width: 1023px) and (orientation: portrait)' // tablet portrait
export const BREAKPOINT_TABLET_LANDSCAPE =
  '(min-width: 768px) and (max-width: 1023px) and (orientation: landscape)' // tablet landscape
