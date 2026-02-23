import { forwardRef } from "react"

import { cx } from "../../../utils/cx"
import type { AttributeListItemProps } from "./attribute-list.types"

/**
 * AttributeList.Item component for displaying a key-value pair
 *
 * @example
 * ```tsx
 * <AttributeList.Item area="span 2" title="Email">
 *   john.doe@example.com
 * </AttributeList.Item>
 * ```
 */
export const AttributeListItem = forwardRef<HTMLDivElement, AttributeListItemProps>(
  ({ title, area, children, className, style, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(className)}
        style={{
          "--_area": area,
          ...style,
        } as React.CSSProperties}
        {...rest}
      >
        <dt>{title}</dt>
        <dd>{children}</dd>
      </div>
    )
  },
)

AttributeListItem.displayName = "AttributeList.Item"
