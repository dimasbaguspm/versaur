import type { AttributeList as AttributeListCore } from "@versaur/core/blocks"
import React from "react"

import { AttributeList as AttributeListRoot } from "./attribute-list"
import { AttributeListItem } from "./attribute-list-item"
import type { AttributeListItemProps, AttributeListProps } from "./attribute-list.types"

// Extend AttributeList namespace
export namespace AttributeList {
  export type Layout = AttributeListCore.Layout
  export type Props = AttributeListProps
  export type ItemProps = AttributeListItemProps
}

// Compound component with Object.assign pattern
export interface AttributeListComponent extends React.ForwardRefExoticComponent<
  AttributeListProps & React.RefAttributes<HTMLDListElement>
> {
  Item: typeof AttributeListItem
}

export const AttributeList = Object.assign(AttributeListRoot, {
  Item: AttributeListItem,
}) as unknown as AttributeListComponent

export type { AttributeListItemProps, AttributeListProps }
