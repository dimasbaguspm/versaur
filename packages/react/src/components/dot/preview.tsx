import { Dot } from "./dot";

export const dotProps = [
  {
    name: "variant",
    type: "DotVariant",
    default: "primary",
    description:
      "Visual style variant: primary, secondary, success, danger, warning, info, accent-1, accent-2, or accent-3",
  },
  {
    name: "size",
    type: "DotSize",
    default: "medium",
    description: "Size of the dot: small or medium",
  },
];

function VariantsSection() {
  return (
    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
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
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Dot size="small" variant="primary" />
      <Dot size="medium" variant="primary" />
    </div>
  );
}

function UsageSections() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
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
      </div>
    </div>
  );
}

export const dotSections = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsSection,
    code: `<Dot variant="primary" />
<Dot variant="secondary" />
<Dot variant="success" />
<Dot variant="danger" />
<Dot variant="warning" />
<Dot variant="info" />
<Dot variant="accent-1" />
<Dot variant="accent-2" />
<Dot variant="accent-3" />`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesSection,
    code: `<Dot size="small" variant="primary" />
<Dot size="medium" variant="primary" />`,
    language: "tsx",
  },
  {
    key: "usage",
    title: "Usage with Text",
    preview: UsageSections,
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
    language: "tsx",
  },
];

export function DotPreview() {
  return (
    <div>
      <h2>Dot Component</h2>
      <p>
        A simple, circular visual indicator for status, decorative markers, or
        visual accents.
      </p>
    </div>
  );
}
