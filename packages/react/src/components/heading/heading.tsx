import { forwardRef } from "react";
import { headingStyles } from "@versaur/core";
import "@versaur/core/heading.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { HeadingProps } from "./heading.types";

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h2", size, weight, intent, children, ...rest }, ref) => {
    const Tag = as;
    const dataAttrs = useDataAttrs({ as, size, weight, intent });

    return (
      <Tag
        ref={ref}
        className={headingStyles.heading}
        {...dataAttrs}
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);

Heading.displayName = "Heading";
