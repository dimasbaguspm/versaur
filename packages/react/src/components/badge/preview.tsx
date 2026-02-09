import { Badge } from "./badge";

export const badgeProps = [
  {
    name: "variant",
    type: "BadgeVariant",
    default: "primary",
    description:
      "Visual style variant: primary, secondary, success, danger, warning, or info",
  },
  {
    name: "size",
    type: "BadgeSize",
    default: "medium",
    description: "Size of the badge: small, medium, or large",
  },
  {
    name: "shape",
    type: "BadgeShape",
    default: "rounded",
    description:
      "Shape of the badge: rounded (medium border-radius) or pill (full rounded)",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Badge content (text, icons, or mixed content)",
  },
];

function VariantsSection() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  );
}

function SizesSection() {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
  );
}

function ShapesSection() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="pill">Pill</Badge>
    </div>
  );
}

function CustomContent() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge>New</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="danger">Critical</Badge>
      <Badge variant="warning" shape="pill">
        Pending
      </Badge>
    </div>
  );
}

export const badgeSections = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsSection,
    code: `<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesSection,
    code: `<Badge size="small">Small</Badge>
<Badge size="medium">Medium</Badge>
<Badge size="large">Large</Badge>`,
    language: "tsx",
  },
  {
    key: "shapes",
    title: "Shapes",
    preview: ShapesSection,
    code: `<Badge shape="rounded">Rounded</Badge>
<Badge shape="pill">Pill</Badge>`,
    language: "tsx",
  },
  {
    key: "custom",
    title: "Custom Content",
    preview: CustomContent,
    code: `<Badge>New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="danger">Critical</Badge>
<Badge variant="warning" shape="pill">
  Pending
</Badge>`,
    language: "tsx",
  },
];

export const badgeInstallation = {
  code: `import { Badge } from "@versaur/react";

export function App() {
  return (
    <Badge variant="primary" size="medium" shape="rounded">
      Badge
    </Badge>
  );
}`,
  language: "tsx",
};

export function BadgePreview() {
  return (
    <div>
      <h2>Badge Component</h2>
      <p>
        Display labels, tags, or status indicators with customizable style,
        size, and shape.
      </p>
    </div>
  );
}
