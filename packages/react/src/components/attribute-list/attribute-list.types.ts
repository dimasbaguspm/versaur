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

export interface AttributeListItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The title/label for this attribute
   */
  title: string;

  /**
   * Number of columns to span in the grid (1-6, auto-clamped to columns count)
   * @default '1'
   */
  columnSpan?: AttributeList.ColumnSpan;

  /**
   * Number of lines to display before truncating with ellipsis (1-5)
   * @default '2'
   */
  contentLineClamp?: AttributeList.ContentLineClamp;

  /**
   * The value content (can be text, links, badges, etc.)
   */
  children?: ReactNode;
}
