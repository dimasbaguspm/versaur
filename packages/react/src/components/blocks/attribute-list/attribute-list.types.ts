import type { AttributeList } from "@versaur/core/blocks"
import type { HTMLAttributes, ReactNode } from "react"

export interface AttributeListProps extends HTMLAttributes<HTMLDListElement> {
  /**
   * Layout mode: stacked (default) or tabular
   * @default 'stacked'
   */
  layout?: AttributeList.Layout

  /**
   * CSS grid-template-columns: e.g. "1fr 1fr 1fr", "200px 1fr"
   * @default 'repeat(3, 1fr)'
   */
  columns?: string

  /**
   * Gap between items: number (in px) or CSS string value
   * @default spacing-3 (12px)
   */
  gap?: number | string

  /**
   * AttributeList.Item components
   */
  children?: ReactNode
}

export interface AttributeListItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The title/label for this attribute
   */
  title: string

  /**
   * CSS grid-column: e.g. "span 3", "1 / 4"
   */
  area?: string

  /**
   * The value content (can be text, links, badges, etc.)
   */
  children?: ReactNode
}
