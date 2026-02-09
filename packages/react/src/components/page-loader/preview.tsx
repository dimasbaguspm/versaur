import type { ComponentType } from "react";
import { PageLoader } from "./page-loader";

export interface PageLoaderSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function TypesPreview() {
  return (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4>Spinner</h4>
        <PageLoader type="spinner" size="sm">
          Loading...
        </PageLoader>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4>Bar</h4>
        <PageLoader type="bar" size="sm">
          Loading...
        </PageLoader>
      </div>
    </div>
  );
}

function SizesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h4>Small</h4>
        <PageLoader type="spinner" size="sm">
          Loading...
        </PageLoader>
      </div>
      <div>
        <h4>Large</h4>
        <PageLoader type="spinner" size="lg">
          Loading...
        </PageLoader>
      </div>
    </div>
  );
}

function AnimationPreview() {
  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4>Default Speed</h4>
        <PageLoader type="spinner" size="sm">
          Standard animation
        </PageLoader>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4>Custom Speed (CSS)</h4>
        <div style={{ "--vers-comp-page-loader-duration": "2s" } as any}>
          <PageLoader type="spinner" size="sm">
            Slow animation
          </PageLoader>
        </div>
      </div>
    </div>
  );
}

function CustomizationPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ "--vers-comp-page-loader-color": "#ff6b6b" } as any}>
        <PageLoader type="spinner" size="sm">
          Custom color via CSS variable
        </PageLoader>
      </div>
      <div style={{ "--vers-comp-page-loader-sm-size": "2rem" } as any}>
        <PageLoader type="spinner" size="sm">
          Custom size via CSS variable
        </PageLoader>
      </div>
    </div>
  );
}

export const pageLoaderSections: PageLoaderSection[] = [
  {
    key: "types",
    title: "Types",
    preview: TypesPreview,
    code: `<PageLoader type="spinner">Loading...</PageLoader>
<PageLoader type="bar">Loading...</PageLoader>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<PageLoader type="spinner" size="sm">Small</PageLoader>
<PageLoader type="spinner" size="lg">Large</PageLoader>`,
    language: "tsx",
  },
  {
    key: "animation",
    title: "Animation",
    preview: AnimationPreview,
    code: `/* Default animation */
<PageLoader type="spinner">Loading...</PageLoader>

/* Custom animation speed */
<div style={{ "--vers-comp-page-loader-duration": "2s" }}>
  <PageLoader type="spinner">Slow loading...</PageLoader>
</div>`,
    language: "tsx",
  },
  {
    key: "customization",
    title: "Customization",
    preview: CustomizationPreview,
    code: `/* Custom color */
<div style={{ "--vers-comp-page-loader-color": "#ff6b6b" }}>
  <PageLoader type="spinner">Loading...</PageLoader>
</div>

/* Custom size */
<div style={{ "--vers-comp-page-loader-sm-size": "2rem" }}>
  <PageLoader type="spinner" size="sm">Loading...</PageLoader>
</div>`,
    language: "tsx",
  },
];

export const pageLoaderProps = [
  {
    name: "type",
    type: "'spinner' | 'bar'",
    default: "'spinner'",
    description: "The type of loading indicator to display",
  },
  {
    name: "size",
    type: "'sm' | 'lg'",
    default: "'sm'",
    description: "Size of the loading indicator",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description: "Loading status text to display below the indicator",
  },
];

export const pageLoaderInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function PageLoaderPreview() {
  return (
    <>
      {pageLoaderSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
