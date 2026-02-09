import { forwardRef } from "react";
import { pageLoaderStyles } from "@versaur/core";
import "@versaur/core/page-loader.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { PageLoaderProps } from "./page-loader.types";

/**
 * PageLoader component for displaying loading states with spinner or bar variants
 *
 * @example
 * ```tsx
 * <PageLoader type="spinner" size="sm">
 *   Loading...
 * </PageLoader>
 *
 * <PageLoader type="bar" size="lg">
 *   Please wait
 * </PageLoader>
 * ```
 */
export const PageLoader = forwardRef<HTMLDivElement, PageLoaderProps>(
  ({ type = "spinner", size = "sm", children, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      type,
      size,
    });

    return (
      <div
        ref={ref}
        className={pageLoaderStyles.pageLoader}
        {...dataAttrs}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

PageLoader.displayName = "PageLoader";
