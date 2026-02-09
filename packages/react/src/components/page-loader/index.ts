export { PageLoader } from "./page-loader";
export type { PageLoaderProps } from "./page-loader.types";
export {
  pageLoaderSections,
  pageLoaderProps,
  pageLoaderInstallation,
  PageLoaderPreview,
} from "./preview";

// Namespace merging for type safety
import type { PageLoader as PageLoaderCore } from "@versaur/core";
import { PageLoader } from "./page-loader";

// Extend PageLoader namespace
export namespace PageLoader {
  export type Type = PageLoaderCore.Type;
  export type Size = PageLoaderCore.Size;
  export type Props = import("./page-loader.types").PageLoaderProps;
}
