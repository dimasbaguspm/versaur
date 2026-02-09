import type { HTMLAttributes, ReactNode } from "react";
import type { PageLoader } from "@versaur/core";

export interface PageLoaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The type of loading indicator to display
   * @default 'spinner'
   */
  type?: PageLoader.Type;

  /**
   * Size of the loading indicator
   * @default 'sm'
   */
  size?: PageLoader.Size;

  /**
   * Loading status text to display below the indicator
   */
  children?: ReactNode;
}
