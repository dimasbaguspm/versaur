import { SVGProps, ComponentType } from "react";
import LoaderIcon from "../assets/loader.svg?react";
import UserIcon from "../assets/user.svg?react";

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
};

// Named exports for direct imports
export { LoaderIcon, UserIcon };

// Utility to get all icon names
export const getIconNames = (): string[] => Object.keys(icons);

// Utility to get icon by name
export const getIcon = (name: string): IconMetadata | undefined => icons[name];

// Default export with all icons
export default icons;
