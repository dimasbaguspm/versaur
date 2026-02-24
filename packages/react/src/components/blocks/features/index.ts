import React from "react"

import { Features as FeaturesRoot, FeaturesItem } from "./features"
import type { FeaturesDirection, FeaturesItemProps, FeaturesProps } from "./features.types"

export namespace Features {
  export type Props = FeaturesProps
  export type ItemProps = FeaturesItemProps
  export type Direction = FeaturesDirection
}

export interface FeaturesComponent extends React.ForwardRefExoticComponent<
  FeaturesProps & React.RefAttributes<HTMLUListElement>
> {
  Item: typeof FeaturesItem
}

export const Features = FeaturesRoot as unknown as FeaturesComponent

export type { FeaturesDirection, FeaturesItemProps, FeaturesProps }
