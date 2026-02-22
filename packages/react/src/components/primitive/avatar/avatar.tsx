import { avatarStyles } from "@versaur/core/primitive"
import { UserIcon } from "@versaur/icons"
import { forwardRef, useState } from "react"

import { useDataAttrs } from "../../../hooks/use-data-attrs"
import { cx } from "../../../utils/cx"
import { Icon } from "../icon"
import type { AvatarImageProps, AvatarProps } from "./avatar.types"

const AvatarRoot = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ variant = "primary", size = "md", shape = "circle", children, className, ...rest }, ref) => {
    const dataAttrs = useDataAttrs({ shape, size, variant })

    const fallback = children || <Icon as={UserIcon} />

    return (
      <span ref={ref} className={cx(avatarStyles.avatar, className)} role="img" {...dataAttrs} {...rest}>
        {fallback}
      </span>
    )
  },
)

AvatarRoot.displayName = "Avatar"

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(({ src, alt, onError, className, ...rest }, ref) => {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return null
  }

  return (
    <img
      ref={ref}
      className={cx(avatarStyles["avatar-image"], className)}
      src={src}
      alt={alt}
      onError={(e) => {
        setImgError(true)
        onError?.(e)
      }}
      {...rest}
    />
  )
})

AvatarImage.displayName = "Avatar.Image"

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
})
