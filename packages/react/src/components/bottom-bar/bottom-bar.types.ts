import type { ReactNode } from "react";

/**
 * BottomBar.Root Props
 */
export interface BottomBarRootProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/**
 * BottomBar.Item Props
 */
export interface BottomBarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button" | "a" | React.ComponentType<any>;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
}
