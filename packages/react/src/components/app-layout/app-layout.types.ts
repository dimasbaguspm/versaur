import type { AppLayout, AppLayoutDataAttrs } from "@versaur/core";

export interface AppLayoutRootProps extends AppLayoutDataAttrs {
  className?: string;
  children?: React.ReactNode;
}

export interface AppLayoutRegionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AppLayoutMainProps extends AppLayoutRegionProps {
  /**
   * Controls content width constraint and alignment.
   * - 'full-width': Content uses the entire main area width
   * - 'centred': Content is constrained to max-width and centered
   * @default 'full-width'
   */
  placement?: AppLayout.Placement;
}
