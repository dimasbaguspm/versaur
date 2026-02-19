import React from "react"

import type { IconProps } from "./icon.types"

/**
 * Icon component for Versaur UI
 * Renders an SVG icon with support for color and size variants.
 *
 * By default, both color and size are set to 'inherit', allowing the consumer
 * to control icon styling through CSS selectors (e.g., button[data-size="small"] svg).
 *
 * @example
 * ```tsx
 * import { Icon } from '@versaur/core';
 * import { LoaderIcon } from '@versaur/icons';
 *
 * // Icon styling controlled by CSS (e.g., in button.module.css)
 * <Icon as={LoaderIcon} />
 * ```
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
  { color = "inherit", size = "inherit", as: As, ...rest },
  ref,
) {
  // Render the SVG component passed via the 'as' prop using JSX
  // Styling is controlled by CSS selectors in the consuming component
  return <As ref={ref} {...rest} data-color={color} data-size={size} />
})

Icon.displayName = "Icon"
