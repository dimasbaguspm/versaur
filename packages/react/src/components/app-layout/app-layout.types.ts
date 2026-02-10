import type { AppLayoutProps } from "@versaur/core";

export interface AppLayoutRootProps extends AppLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AppLayoutRegionProps {
  className?: string;
  children?: React.ReactNode;
}
