import { loaderStyles } from "@versaur/core"
import { LoaderIcon } from "@versaur/icons"
import { forwardRef } from "react"

import { useDataAttrs } from "../../hooks/use-data-attrs"
import { Icon } from "../icon"
import type { LoaderProps } from "./loader.types"

/**
 * Loader component for displaying loading states with spinner or bar variants
 *
 * @example
 * ```tsx
 * <Loader type="spinner" size="sm">
 *   Loading...
 * </Loader>
 *
 * <Loader type="bar" size="lg">
 *   Please wait
 * </Loader>
 * ```
 */
export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ type = "spinner", size = "sm", children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      size,
      type,
    })

    return (
      <div ref={ref} className={loaderStyles.loader} {...dataAttrs} {...rest}>
        {type === "spinner" && <Icon as={LoaderIcon} aria-hidden="true" />}
        {children}
      </div>
    )
  },
)

Loader.displayName = "Loader"
