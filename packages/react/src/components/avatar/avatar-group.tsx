import { forwardRef } from "react";
import { avatarGroupStyles } from "@versaur/core";
import "@versaur/core/avatar-group.css";
import { useDataAttrs } from "../../hooks/use-data-attrs";
import type { AvatarGroupProps } from "./avatar-group.types";

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      direction = "horizontal",
      size = "md",
      children,
      ...rest
    },
    ref,
  ) => {
    const dataAttrs = useDataAttrs({ direction, size });

    return (
      <div
        ref={ref}
        className={avatarGroupStyles["avatar-group"]}
        role="group"
        {...dataAttrs}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

AvatarGroup.displayName = "AvatarGroup";
