import type { Avatar as CoreAvatar } from "@versaur/core/primitive"

import { Avatar } from "./avatar"
import type { AvatarImageProps, AvatarProps } from "./avatar.types"

// Declaration merging: namespace + const = Avatar.Props, Avatar.Variant, Avatar.Image, etc.
declare namespace Avatar {
  export type Variant = CoreAvatar.Variant
  export type Size = CoreAvatar.Size
  export type Shape = CoreAvatar.Shape
  export type DataAttrs = CoreAvatar.DataAttrs
  export type Props = AvatarProps
  export type ImageProps = AvatarImageProps
}

export { Avatar }

// Backward-compat flat type exports
export type { AvatarProps, AvatarImageProps }
export type { AvatarVariant, AvatarSize, AvatarShape } from "@versaur/core/primitive"

