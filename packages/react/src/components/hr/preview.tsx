import type { ComponentType } from "react";
import { Hr } from "./hr";

export interface HrSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function DefaultPreview() {
  return <Hr />;
}

function VariantsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Hr variant="solid" />
      <Hr variant="dashed" />
      <Hr variant="dotted" />
    </div>
  );
}

function SizesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Hr size="sm" />
      <Hr size="md" />
      <Hr size="lg" />
    </div>
  );
}

function SpacingPreview() {
  return (
    <div>
      <p>None</p>
      <Hr spacing="none" />
      <p>Small</p>
      <Hr spacing="sm" />
      <p>Medium (default)</p>
      <Hr spacing="md" />
      <p>Large</p>
      <Hr spacing="lg" />
      <p>Extra Large</p>
      <Hr spacing="xl" />
      <p>End</p>
    </div>
  );
}

function VerticalPreview() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "2rem",
        gap: 0,
      }}
    >
      <span>Left</span>
      <Hr orientation="vertical" spacing="md" />
      <span>Center</span>
      <Hr orientation="vertical" spacing="md" />
      <span>Right</span>
    </div>
  );
}

function CustomizationPreview() {
  return (
    <div
      style={
        {
          "--vers-comp-hr-color": "#c96a50",
          "--vers-comp-hr-width": "2px",
        } as React.CSSProperties
      }
    >
      <Hr />
    </div>
  );
}

export const hrSections: HrSection[] = [
  {
    key: "default",
    title: "Default",
    preview: DefaultPreview,
    code: `<Hr />`,
    language: "tsx",
  },
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<Hr variant="solid" />
<Hr variant="dashed" />
<Hr variant="dotted" />`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<Hr size="sm" />
<Hr size="md" />
<Hr size="lg" />`,
    language: "tsx",
  },
  {
    key: "spacing",
    title: "Spacing",
    preview: SpacingPreview,
    code: `<Hr spacing="none" />
<Hr spacing="sm" />
<Hr spacing="md" />
<Hr spacing="lg" />
<Hr spacing="xl" />`,
    language: "tsx",
  },
  {
    key: "vertical",
    title: "Vertical",
    preview: VerticalPreview,
    code: `<div style={{ display: "flex", alignItems: "center", height: "2rem" }}>
  <span>Left</span>
  <Hr orientation="vertical" spacing="md" />
  <span>Center</span>
  <Hr orientation="vertical" spacing="md" />
  <span>Right</span>
</div>`,
    language: "tsx",
  },
  {
    key: "customization",
    title: "CSS Customization",
    preview: CustomizationPreview,
    code: `/* Override component tokens to customize the divider */
.my-custom-divider {
  --vers-comp-hr-color: #c96a50;
  --vers-comp-hr-width: 2px;
}`,
    language: "css",
  },
];

export const hrProps = [
  {
    name: "orientation",
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: "Orientation of the divider",
  },
  {
    name: "variant",
    type: "'solid' | 'dashed' | 'dotted'",
    default: "'solid'",
    description: "Visual variant (border style) of the divider",
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg'",
    default: "'sm'",
    description: "Thickness of the divider line (1px / 2px / 3px)",
  },
  {
    name: "spacing",
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: "Spacing (margin) around the divider",
  },
];

export const hrInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function HrPreview() {
  return (
    <>
      {hrSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
