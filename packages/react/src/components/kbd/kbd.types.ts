import type { HTMLAttributes, ReactNode } from "react";
import type { Kbd } from "@versaur/core";

/**
 * Kbd component props
 */
export interface KbdProps extends HTMLAttributes<HTMLElement> {
  /**
   * Visual variant for the kbd element
   * @default "filled"
   */
  variant?: Kbd.Variant;

  /**
   * Size of the kbd element, aligned with Text component sizing
   * @default "md"
   */
  size?: Kbd.Size;

  children?: ReactNode;
}

/**
 * Re-export Kbd types from core for convenient access
 */
export type KbdVariant = Kbd.Variant;
export type KbdSize = Kbd.Size;
