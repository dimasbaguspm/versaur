import { Avatar } from "./avatar";
import { AvatarGroup } from "./avatar-group";
import type { Avatar as CoreAvatar, AvatarGroup as CoreAvatarGroup } from "@versaur/core";
import type { AvatarProps } from "./avatar.types";
import type { AvatarGroupProps } from "./avatar-group.types";

// Declaration merging: namespace + const = Avatar.Props, Avatar.Variant, etc.
declare namespace Avatar {
  export type Variant = CoreAvatar.Variant;
  export type Size = CoreAvatar.Size;
  export type Shape = CoreAvatar.Shape;
  export type DataAttrs = CoreAvatar.DataAttrs;
  export type Props = AvatarProps;
}

declare namespace AvatarGroup {
  export type Direction = CoreAvatarGroup.Direction;
  export type Size = CoreAvatarGroup.Size;
  export type DataAttrs = CoreAvatarGroup.DataAttrs;
  export type Props = AvatarGroupProps;
}

export { Avatar, AvatarGroup };

// Backward-compat flat type exports
export type { AvatarProps };
export type { AvatarGroupProps };
export type { AvatarVariant, AvatarSize, AvatarShape } from "@versaur/core";
export type { AvatarGroupDirection, AvatarGroupSize } from "@versaur/core";

export {
  AvatarPreview,
  avatarSections,
  avatarInstallation,
  avatarProps,
  avatarGroupProps,
} from "./preview";
export type { AvatarSection } from "./preview";
