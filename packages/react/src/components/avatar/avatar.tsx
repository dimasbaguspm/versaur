import { forwardRef, useState } from "react";
import { avatarStyles } from "@versaur/core";
import "@versaur/core/avatar.css";
import { UserIcon } from "@versaur/icons";
import { Icon } from "../icon";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { AvatarProps } from "./avatar.types";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      variant = "primary",
      size = "md",
      shape = "circle",
      children,
      ...rest
    },
    ref,
  ) => {
    const [imgError, setImgError] = useState(false);
    const dataAttrs = useDataAttrs({ variant, size, shape });

    const showImage = src && !imgError;

    let fallback = children;
    if (!fallback && name) {
      fallback = getInitials(name);
    }
    if (!fallback && !showImage) {
      fallback = <Icon as={UserIcon} />;
    }

    return (
      <span
        ref={ref}
        className={avatarStyles.avatar}
        role="img"
        aria-label={alt || name}
        {...dataAttrs}
        {...rest}
      >
        {showImage ? (
          <img
            className={avatarStyles["avatar-image"]}
            src={src}
            alt={alt || name || ""}
            onError={() => setImgError(true)}
          />
        ) : (
          fallback
        )}
      </span>
    );
  },
);

Avatar.displayName = "Avatar";
