import type { PageHeaderRootProps, PageHeaderSubtitleProps, PageHeaderTitleProps } from "./page-header.types"

declare namespace PageHeader {
  export type RootProps = PageHeaderRootProps
  export type TitleProps = PageHeaderTitleProps
  export type SubtitleProps = PageHeaderSubtitleProps
}

export { PageHeader } from "./page-header"
export type { PageHeaderComponent } from "./page-header.types"
export type { PageHeaderRootProps, PageHeaderSubtitleProps, PageHeaderTitleProps }
