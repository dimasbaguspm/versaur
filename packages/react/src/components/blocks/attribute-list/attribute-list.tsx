import { attributeListStyles } from "@versaur/core/blocks"
import { forwardRef } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import type { AttributeListProps } from "./attribute-list.types"

/**
 * AttributeList root component for displaying key-value pairs in a grid layout
 *
 * @example
 * ```tsx
 * <AttributeList columns="repeat(4, 1fr)">
 *   <AttributeList.Item area="span 4" title="Bio">
 *     Full-stack developer with 8+ years of experience
 *   </AttributeList.Item>
 *   <AttributeList.Item area="span 2" title="Name">
 *     John Doe
 *   </AttributeList.Item>
 *   <AttributeList.Item area="span 2" title="Email">
 *     john.doe@example.com
 *   </AttributeList.Item>
 * </AttributeList>
 * ```
 */
export const AttributeList = forwardRef<HTMLDListElement, AttributeListProps>(
  ({ layout, columns = "repeat(3, 1fr)", gap, children, className, style, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({
      layout,
    })

    return (
      <dl
        ref={ref}
        className={cx(attributeListStyles["attribute-list"], className)}
        {...dataAttrs}
        style={
          {
            "--_columns": columns,
            ...(gap !== undefined && { "--_gap": typeof gap === "number" ? `${gap}px` : gap }),
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      >
        {children}
      </dl>
    )
  },
)

AttributeList.displayName = "AttributeList"
