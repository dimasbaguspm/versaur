import type { HTMLAttributes } from "react";
import type { ErrorText } from "@versaur/core";

export interface ErrorTextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Optional ID for linking with aria-describedby
   */
  id?: string;
}

declare module "@versaur/core" {
  export namespace ErrorText {
    export { ErrorTextProps as Props };
  }
}
