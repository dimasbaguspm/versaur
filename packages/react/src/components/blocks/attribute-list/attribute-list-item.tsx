import { forwardRef } from "react"

import { cx } from "../../../utils/cx"
import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { useAttributeListContext } from "./attribute-list"
import type { AttributeListItemProps } from "./attribute-list.types"

/**
 * AttributeList.Item component for displaying a key-value pair
 *
 * @example
 * ```tsx
 * <AttributeList.Item columnSpan="2" title="Email">
 *   john.doe@example.com
 * </AttributeList.Item>
 * ```
 */
export const AttributeListItem = forwardRef<HTMLDivElement, AttributeListItemProps>(
  ({ title, columnSpan = "1", contentLineClamp = "2", children, className }, ref) => {
    useAttributeListContext()

    const dataAttrs = useDataAttrs({
      "column-span": columnSpan,
      "content-line-clamp": contentLineClamp,
    })

    return (
      <div ref={ref} className={cx(className)} {...dataAttrs}>
        <dt>{title}</dt>
        <dd>{children}</dd>
      </div>
    )
  },
)

AttributeListItem.displayName = "AttributeList.Item"
