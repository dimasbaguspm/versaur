import type { AvatarGroup as CoreAvatarGroup } from "@versaur/core"

import { AvatarGroup } from "./avatar-group"
import type { AvatarGroupProps } from "./avatar-group.types"

// Declaration merging: namespace + const = AvatarGroup.Props, etc.
declare namespace AvatarGroup {
  export type Direction = CoreAvatarGroup.Direction
  export type Size = CoreAvatarGroup.Size
  export type Align = CoreAvatarGroup.Align
  export type Wrap = CoreAvatarGroup.Wrap
  export type DataAttrs = CoreAvatarGroup.DataAttrs
  export type Props = AvatarGroupProps
}

export { AvatarGroup }

// Backward-compat flat type exports
export type { AvatarGroupProps }
export type { AvatarGroupDirection, AvatarGroupSize, AvatarGroupAlign, AvatarGroupWrap } from "@versaur/core"

// Preview exports
export { AvatarGroupPreview, avatarGroupSections, avatarGroupInstallation, avatarGroupProps } from "./preview"
export type { AvatarGroupSection } from "./preview"
