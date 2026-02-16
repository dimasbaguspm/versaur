import type { HTMLAttributes, ReactNode } from "react";
import type { Loader } from "@versaur/core";

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The type of loading indicator to display
   * @default 'spinner'
   */
  type?: Loader.Type;

  /**
   * Size of the loading indicator
   * @default 'sm'
   */
  size?: Loader.Size;

  /**
   * Loading status text to display below the indicator
   */
  children?: ReactNode;
}
