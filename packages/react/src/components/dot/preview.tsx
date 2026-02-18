import { Dot } from "./dot";

export const dotProps = [
  {
    default: "primary",
    description:
      "Visual style variant: primary, secondary, success, danger, warning, info, accent-1, accent-2, or accent-3",
    name: "variant",
    type: "DotVariant",
  },
  {
    default: "medium",
    description: "Size of the dot: small or medium",
    name: "size",
    type: "DotSize",
  },
];

function VariantsSection() {
  return (
    <div style={{ alignItems: "center", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      <Dot variant="primary" />
      <Dot variant="secondary" />
      <Dot variant="success" />
      <Dot variant="danger" />
      <Dot variant="warning" />
      <Dot variant="info" />
      <Dot variant="accent-1" />
      <Dot variant="accent-2" />
      <Dot variant="accent-3" />
    </div>
  );
}

function SizesSection() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: "1rem" }}>
      <Dot size="small" variant="primary" />
      <Dot size="medium" variant="primary" />
    </div>
  );
}

function UsageSections() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ alignItems: "center", display: "flex", gap: "0.5rem" }}>
        <Dot variant="success" />
        <span>Active</span>
      </div>
      <div style={{ alignItems: "center", display: "flex", gap: "0.5rem" }}>
        <Dot variant="warning" />
        <span>Pending</span>
      </div>
      <div style={{ alignItems: "center", display: "flex", gap: "0.5rem" }}>
        <Dot variant="danger" />
        <span>Error</span>
      </div>
    </div>
  );
}

export const dotSections = [
  {
    code: `<Dot variant="primary" />
<Dot variant="secondary" />
<Dot variant="success" />
<Dot variant="danger" />
<Dot variant="warning" />
<Dot variant="info" />
<Dot variant="accent-1" />
<Dot variant="accent-2" />
<Dot variant="accent-3" />`,
    key: "variants",
    language: "tsx",
    preview: VariantsSection,
    title: "Variants",
  },
  {
    code: `<Dot size="small" variant="primary" />
<Dot size="medium" variant="primary" />`,
    key: "sizes",
    language: "tsx",
    preview: SizesSection,
    title: "Sizes",
  },
  {
    code: `<div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
  <Dot variant="success" />
  <span>Active</span>
</div>

<div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
  <Dot variant="warning" />
  <span>Pending</span>
</div>

<div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
  <Dot variant="danger" />
  <span>Error</span>
</div>`,
    key: "usage",
    language: "tsx",
    preview: UsageSections,
    title: "Usage with Text",
  },
];

export function DotPreview() {
  return (
    <div>
      <h2>Dot Component</h2>
      <p>A simple, circular visual indicator for status, decorative markers, or visual accents.</p>
    </div>
  );
}
