import type { ButtonGroup } from "@versaur/core/blocks"
import type { HTMLAttributes } from "react"

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Gap between items
   * @default 'md'
   */
  gap?: ButtonGroup.Gap

  /**
   * Direction of flex layout
   * @default 'horizontal'
   */
  direction?: ButtonGroup.Direction

  /**
   * Alignment of items
   * @default 'center'
   */
  align?: ButtonGroup.Align

  /**
   * Flex wrap behavior
   * @default 'nowrap'
   */
  wrap?: ButtonGroup.Wrap

  /**
   * Stretch group to full width and children proportionally
   * @default false
   */
  fluid?: boolean

  /**
   * Accessible label for the group
   * @default 'Button group'
   */
  "aria-label"?: string

  /**
   * Button children components
   */
  children?: React.ReactNode
}
