import type { HTMLAttributes, ReactNode } from "react";
import type { AttributeList } from "@versaur/core";

export interface AttributeListProps extends HTMLAttributes<HTMLDListElement> {
  /**
   * Number of columns for the grid layout
   * @default '3'
   */
  columns?: AttributeList.Columns;

  /**
   * AttributeList.Item components
   */
  children?: ReactNode;
}

export interface AttributeListItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * The title/label for this attribute
   */
  title: string;

  /**
   * Number of columns to span (1-6, auto-clamped to columns count)
   * @default '1'
   */
  span?: AttributeList.Span;

  /**
   * The value content (can be text, links, badges, etc.)
   */
  children?: ReactNode;
}
