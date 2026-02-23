import type { HTMLAttributes, ReactNode } from "react"

export type FeaturesDirection = "row" | "column"

export interface FeaturesProps extends HTMLAttributes<HTMLUListElement> {
  /** Flex direction of the feature list. Default: "column" */
  direction?: FeaturesDirection
  children?: ReactNode
}

export interface FeaturesItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Icon node rendered on the left side of the item content */
  icon?: ReactNode
  children?: ReactNode
  /**
   * Native accessible label for the item.
   * When provided, also renders a Tooltip on hover showing this text.
   */
  "aria-label"?: string
}
