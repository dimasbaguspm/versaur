import { Avatar } from "./avatar";
import type { Avatar as CoreAvatar } from "@versaur/core";
import type { AvatarProps } from "./avatar.types";

// Declaration merging: namespace + const = Avatar.Props, Avatar.Variant, etc.
declare namespace Avatar {
  export type Variant = CoreAvatar.Variant;
  export type Size = CoreAvatar.Size;
  export type Shape = CoreAvatar.Shape;
  export type DataAttrs = CoreAvatar.DataAttrs;
  export type Props = AvatarProps;
}

export { Avatar };

// Backward-compat flat type exports
export type { AvatarProps };
export type { AvatarVariant, AvatarSize, AvatarShape } from "@versaur/core";

export {
  AvatarPreview,
  avatarSections,
  avatarInstallation,
  avatarProps,
} from "./preview";
export type { AvatarSection } from "./preview";
