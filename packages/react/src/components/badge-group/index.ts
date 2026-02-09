import { BadgeGroup } from "./badge-group";
import type { BadgeGroup as CoreBadgeGroup } from "@versaur/core";
import type { BadgeGroupProps } from "./badge-group.types";

// Declaration merging: namespace + const = BadgeGroup.Props, BadgeGroup.Gap, etc.
declare namespace BadgeGroup {
  export type Gap = CoreBadgeGroup.Gap;
  export type Direction = CoreBadgeGroup.Direction;
  export type Align = CoreBadgeGroup.Align;
  export type Wrap = CoreBadgeGroup.Wrap;
  export type DataAttrs = CoreBadgeGroup.DataAttrs;
  export type Props = BadgeGroupProps;
}
export { BadgeGroup };

// Backward-compat flat type exports
export type { BadgeGroupProps };
export type {
  BadgeGroupGap,
  BadgeGroupDirection,
  BadgeGroupAlign,
  BadgeGroupWrap,
} from "@versaur/core";

export {
  BadgeGroupPreview,
  badgeGroupSections,
  badgeGroupProps,
  badgeGroupInstallation,
} from "./preview";
