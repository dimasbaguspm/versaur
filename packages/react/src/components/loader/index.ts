export type { LoaderProps } from "./loader.types"
export { loaderSections, loaderProps, LoaderPreview } from "./preview"

// Namespace merging for type safety
import type { Loader as LoaderCore } from "@versaur/core"

import { Loader } from "./loader"

// Extend Loader namespace
declare namespace Loader {
  export type Type = LoaderCore.Type
  export type Size = LoaderCore.Size
  export type Props = import("./loader.types").LoaderProps
}

export { Loader }
