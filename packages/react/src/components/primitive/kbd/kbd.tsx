"use client"

import { kbdStyles } from "@versaur/core/primitive"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import type { KbdProps } from "./kbd.types"

/**
 * Kbd - Semantic keyboard key component
 * Renders as <kbd> element with support for filled and outline variants
 *
 * @example
 * ```tsx
 * <Kbd variant="filled">Ctrl</Kbd>
 * <Kbd variant="outline" size="sm">Cmd</Kbd>
 * ```
 */
const Kbd = forwardRef<HTMLElement, KbdProps>(({ variant = "filled", size = "md", children, ...props }, ref) => {
  const dataAttrs = useDataAttrs({ size, variant })

  return (
    <kbd ref={ref} className={kbdStyles.kbd} {...dataAttrs} {...props}>
      {children}
    </kbd>
  )
})
Kbd.displayName = "Kbd"

export { Kbd }
