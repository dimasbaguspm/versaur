export type AppLayoutVariant = "classic" | "mobile" | "split" | "full";

export interface AppLayoutProps {
  /** Layout template variant controlling region arrangement */
  variant?: AppLayoutVariant;
  /** Show/hide header region */
  showHeader?: boolean;
  /** Show/hide left sidebar region */
  showSideLeft?: boolean;
  /** Show/hide right sidebar region */
  showSideRight?: boolean;
  /** Show/hide bottom navigation region */
  showBottom?: boolean;
}

export interface AppLayoutRegionProps {
  className?: string;
}
