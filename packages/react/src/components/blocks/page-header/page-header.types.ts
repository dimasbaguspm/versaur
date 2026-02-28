import type { ForwardRefExoticComponent, HTMLAttributes, ReactNode, RefAttributes } from "react"

export interface PageHeaderRootProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: ReactNode
  subtitle?: ReactNode
  supplementary?: ReactNode
}

/** Exposes Heading visual props — all forwarded to the internal <Heading> */
export interface PageHeaderTitleProps extends Pick<HTMLAttributes<HTMLDivElement>, "className" | "style"> {
  /** Icon/button rendered to the right of the heading text. Activates sub-grid layout. */
  action?: ReactNode
  /** Content rendered below the heading row (badges, status chips, etc.) */
  additionalInfo?: ReactNode
  children?: ReactNode
}

/** Alias for Text — all TextProps forwarded to the internal <Text> */
export interface PageHeaderSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Content rendered to the right of the subtitle text */
  additionalInfo?: ReactNode
  children?: ReactNode
}

export interface PageHeaderComponent extends ForwardRefExoticComponent<
  PageHeaderRootProps & RefAttributes<HTMLElement>
> {
  Title: ForwardRefExoticComponent<PageHeaderTitleProps & RefAttributes<HTMLDivElement>>
  Subtitle: ForwardRefExoticComponent<PageHeaderSubtitleProps & RefAttributes<HTMLElement>>
}
