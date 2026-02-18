/// <reference types="vite/client" />

declare module "*.svg?react" {
  import type { SVGProps, ComponentType } from "react";
  const SVGComponent: ComponentType<SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
