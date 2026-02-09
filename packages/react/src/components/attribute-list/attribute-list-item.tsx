import { forwardRef } from "react";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import { useAttributeListContext } from "./attribute-list";
import type { AttributeListItemProps } from "./attribute-list.types";

/**
 * AttributeList.Item component for displaying a key-value pair
 *
 * @example
 * ```tsx
 * <AttributeList.Item span="2" title="Email">
 *   john.doe@example.com
 * </AttributeList.Item>
 * ```
 */
export const AttributeListItem = forwardRef<
  HTMLElement,
  AttributeListItemProps
>(({ title, span = "1", children }) => {
  useAttributeListContext();

  const dataAttrs = useDataAttrs({
    span,
  });

  return (
    <div style={{ display: "contents" }} {...dataAttrs}>
      <dt>{title}</dt>
      <dd>{children}</dd>
    </div>
  );
});

AttributeListItem.displayName = "AttributeList.Item";
