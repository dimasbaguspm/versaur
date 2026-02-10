import { SVGProps, ComponentType } from "react";
import LoaderIcon from "../assets/loader.svg?react";
import UserIcon from "../assets/user.svg?react";
import ChevronDownIcon from "../assets/chevron-down.svg?react";
import ChevronUpIcon from "../assets/chevron-up.svg?react";
import ChevronLeftIcon from "../assets/chevron-left.svg?react";
import ChevronRightIcon from "../assets/chevron-right.svg?react";
import LayoutDashboardIcon from "../assets/layout-dashboard.svg?react";
import FileCodeIcon from "../assets/file-code.svg?react";
import HomeIcon from "../assets/home.svg?react";
import SearchIcon from "../assets/search.svg?react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface IconMetadata {
  name: string;
  component: IconComponent;
  tags: string[];
}

// Icon registry with metadata
export const icons: Record<string, IconMetadata> = {
  loader: {
    name: "Loader",
    component: LoaderIcon,
    tags: ["loading", "spinner", "animation"],
  },
  user: {
    name: "User",
    component: UserIcon,
    tags: ["person", "profile", "account"],
  },
  "chevron-down": {
    name: "ChevronDown",
    component: ChevronDownIcon,
    tags: ["chevron", "arrow", "down", "navigation"],
  },
  "chevron-up": {
    name: "ChevronUp",
    component: ChevronUpIcon,
    tags: ["chevron", "arrow", "up", "navigation"],
  },
  "chevron-left": {
    name: "ChevronLeft",
    component: ChevronLeftIcon,
    tags: ["chevron", "arrow", "left", "navigation"],
  },
  "chevron-right": {
    name: "ChevronRight",
    component: ChevronRightIcon,
    tags: ["chevron", "arrow", "right", "navigation"],
  },
  "layout-dashboard": {
    name: "LayoutDashboard",
    component: LayoutDashboardIcon,
    tags: ["layout", "dashboard", "grid", "home"],
  },
  "file-code": {
    name: "FileCode",
    component: FileCodeIcon,
    tags: ["file", "code", "document", "programming"],
  },
  home: {
    name: "Home",
    component: HomeIcon,
    tags: ["home", "house", "dashboard", "navigation"],
  },
  search: {
    name: "Search",
    component: SearchIcon,
    tags: ["search", "find", "magnifying", "glass"],
  },
};

// Named exports for direct imports
export {
  LoaderIcon,
  UserIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LayoutDashboardIcon,
  FileCodeIcon,
  HomeIcon,
  SearchIcon,
};

// Utility to get all icon names
export const getIconNames = (): string[] => Object.keys(icons);

// Utility to get icon by name
export const getIcon = (name: string): IconMetadata | undefined => icons[name];

// Default export with all icons
export default icons;
