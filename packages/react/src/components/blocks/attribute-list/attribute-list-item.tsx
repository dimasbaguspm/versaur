import { forwardRef } from "react"

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
  ({ title, columnSpan = "1", contentLineClamp = "2", children }, ref) => {
    useAttributeListContext()

    const dataAttrs = useDataAttrs({
      "column-span": columnSpan,
      "content-line-clamp": contentLineClamp,
    })

    return (
      <div ref={ref} {...dataAttrs}>
        <dt>{title}</dt>
        <dd>{children}</dd>
      </div>
    )
  },
)

AttributeListItem.displayName = "AttributeList.Item"
