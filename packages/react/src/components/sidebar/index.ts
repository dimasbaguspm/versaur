import { Sidebar } from "./sidebar";
import type {
  SidebarBodyProps,
  SidebarDividerProps,
  SidebarFooterProps,
  SidebarGroupProps,
  SidebarHeaderProps,
  SidebarItemProps,
  SidebarRootProps,
} from "./sidebar.types";

declare namespace Sidebar {
  export type Props = SidebarRootProps;
  export type HeaderProps = SidebarHeaderProps;
  export type BodyProps = SidebarBodyProps;
  export type FooterProps = SidebarFooterProps;
  export type GroupProps = SidebarGroupProps;
  export type ItemProps = SidebarItemProps;
  export type DividerProps = SidebarDividerProps;
}

export { Sidebar };
export type {
  SidebarRootProps,
  SidebarHeaderProps,
  SidebarBodyProps,
  SidebarFooterProps,
  SidebarGroupProps,
  SidebarItemProps,
  SidebarDividerProps,
};
export { sidebarSections, sidebarInstallation, sidebarProps, SidebarPreview } from "./preview";
