import React from "react";
import styles from "./preview-canvas.module.css";

export interface PreviewCanvasProps {
  children: React.ReactNode;
  height?: string | number;
  minHeight?: string | number;
  background?: "default" | "muted" | "dark" | "none" | (string & {});
  padding?: "none" | "sm" | "md" | "lg";
  center?: boolean;
  overflow?: "hidden" | "visible" | "auto";
}

export function PreviewCanvas({
  children,
  height,
  minHeight,
  background = "default",
  padding = "md",
  center = false,
  overflow = "visible",
}: PreviewCanvasProps) {
  const wrapperStyle: React.CSSProperties = {
    ...(height !== undefined && {
      height: typeof height === "number" ? `${height}px` : height,
    }),
    ...(minHeight !== undefined && {
      minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
    }),
  };

  return (
    <div
      className={styles.wrapper}
      style={wrapperStyle}
      data-background={background}
      data-overflow={overflow}
    >
      <div
        className={styles.inner}
        data-padding={padding}
        {...(center && { "data-center": "" })}
      >
        {children}
      </div>
    </div>
  );
}
