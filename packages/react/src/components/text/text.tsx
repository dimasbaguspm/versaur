import { forwardRef } from "react";
import { textStyles } from "@versaur/core";
import "@versaur/core/text.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { TextProps } from "./text.types";

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as = "p", size, weight, intent, htmlFor, children, ...rest }, ref) => {
    const Tag = as;
    const dataAttrs = useDataAttrs({ as, size, weight, intent });

    return (
      <Tag
        ref={ref as any}
        className={textStyles.text}
        {...(as === "label" && htmlFor ? { htmlFor } : {})}
        {...dataAttrs}
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);

Text.displayName = "Text";
