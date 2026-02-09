import { Badge } from "../badge/badge";
import { BadgeGroup } from "./badge-group";

export const badgeGroupProps = [
  {
    name: "gap",
    type: "BadgeGroupGap",
    default: "md",
    description: "Gap between badges: xs, sm, md, or lg",
  },
  {
    name: "direction",
    type: "BadgeGroupDirection",
    default: "horizontal",
    description: "Direction of flex layout: horizontal or vertical",
  },
  {
    name: "align",
    type: "BadgeGroupAlign",
    default: "center",
    description:
      "Alignment of items: start, center, end, space-between, space-around, or space-evenly",
  },
  {
    name: "wrap",
    type: "BadgeGroupWrap",
    default: "nowrap",
    description: "Flex wrap behavior: wrap or nowrap",
  },
  {
    name: "aria-label",
    type: "string",
    default: "Badge group",
    description: "Accessible label for the group (customizable)",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Badge children components",
  },
];

function GapSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>xs gap</p>
        <BadgeGroup gap="xs">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
          <Badge variant="success">Active</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>sm gap</p>
        <BadgeGroup gap="sm">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
          <Badge variant="success">Active</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>md gap</p>
        <BadgeGroup gap="md">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
          <Badge variant="success">Active</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>lg gap</p>
        <BadgeGroup gap="lg">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
          <Badge variant="success">Active</Badge>
        </BadgeGroup>
      </div>
    </div>
  );
}

function DirectionSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Horizontal</p>
        <BadgeGroup direction="horizontal">
          <Badge variant="primary">Status</Badge>
          <Badge variant="warning">Pending</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Vertical</p>
        <BadgeGroup direction="vertical" align="start">
          <Badge variant="primary">Status</Badge>
          <Badge variant="warning">Pending</Badge>
        </BadgeGroup>
      </div>
    </div>
  );
}

function AlignmentSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Start</p>
        <BadgeGroup align="start" gap="lg">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Center</p>
        <BadgeGroup align="center" gap="lg">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>End</p>
        <BadgeGroup align="end" gap="lg">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>
          Space Between
        </p>
        <div
          style={{
            border: "1px solid #e5e7eb",
            padding: "0.5rem",
            borderRadius: "0.375rem",
          }}
        >
          <BadgeGroup align="space-between" gap="lg" style={{ width: "100%" }}>
            <Badge variant="success">Start</Badge>
            <Badge variant="success">End</Badge>
          </BadgeGroup>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>
          Space Around
        </p>
        <div
          style={{
            border: "1px solid #e5e7eb",
            padding: "0.5rem",
            borderRadius: "0.375rem",
          }}
        >
          <BadgeGroup align="space-around" gap="lg" style={{ width: "100%" }}>
            <Badge variant="info">Left</Badge>
            <Badge variant="info">Center</Badge>
            <Badge variant="info">Right</Badge>
          </BadgeGroup>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>
          Space Evenly
        </p>
        <div
          style={{
            border: "1px solid #e5e7eb",
            padding: "0.5rem",
            borderRadius: "0.375rem",
          }}
        >
          <BadgeGroup align="space-evenly" gap="lg" style={{ width: "100%" }}>
            <Badge variant="warning">One</Badge>
            <Badge variant="warning">Two</Badge>
            <Badge variant="warning">Three</Badge>
          </BadgeGroup>
        </div>
      </div>
    </div>
  );
}

function WrapSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>No wrap</p>
        <BadgeGroup wrap="nowrap" style={{ width: "300px" }}>
          <Badge>Label 1</Badge>
          <Badge>Label 2</Badge>
          <Badge>Label 3</Badge>
          <Badge>Label 4</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>With wrap</p>
        <BadgeGroup wrap="wrap" style={{ width: "300px" }}>
          <Badge>Label 1</Badge>
          <Badge>Label 2</Badge>
          <Badge>Label 3</Badge>
          <Badge>Label 4</Badge>
        </BadgeGroup>
      </div>
    </div>
  );
}

function CustomSpacingSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>
          Custom spacing override
        </p>
        <BadgeGroup
          gap="md"
          style={
            {
              "--vers-comp-badge-group-gap": "var(--spacing-4)",
            } as React.CSSProperties
          }
        >
          <Badge variant="primary">Custom</Badge>
          <Badge variant="secondary">Gap</Badge>
          <Badge variant="success">Override</Badge>
        </BadgeGroup>
      </div>
    </div>
  );
}

export const badgeGroupSections = [
  {
    key: "gap-variants",
    title: "Gap Variants",
    preview: GapSection,
    code: `<BadgeGroup gap="xs">
  <Badge variant="primary">New</Badge>
  <Badge variant="secondary">Review</Badge>
  <Badge variant="success">Active</Badge>
</BadgeGroup>

<BadgeGroup gap="sm">...</BadgeGroup>
<BadgeGroup gap="md">...</BadgeGroup>
<BadgeGroup gap="lg">...</BadgeGroup>`,
    language: "tsx",
  },
  {
    key: "direction",
    title: "Direction",
    preview: DirectionSection,
    code: `<BadgeGroup direction="horizontal">
  <Badge variant="primary">Status</Badge>
  <Badge variant="warning">Pending</Badge>
</BadgeGroup>

<BadgeGroup direction="vertical" align="start">
  <Badge variant="primary">Status</Badge>
  <Badge variant="warning">Pending</Badge>
</BadgeGroup>`,
    language: "tsx",
  },
  {
    key: "alignment",
    title: "Alignment",
    preview: AlignmentSection,
    code: `<BadgeGroup align="start" gap="lg">
  <Badge variant="primary">New</Badge>
  <Badge variant="secondary">Review</Badge>
</BadgeGroup>

<BadgeGroup align="space-between" style={{ width: "100%" }}>
  <Badge variant="success">Start</Badge>
  <Badge variant="success">End</Badge>
</BadgeGroup>

<BadgeGroup align="space-around" style={{ width: "100%" }}>
  <Badge variant="info">Left</Badge>
  <Badge variant="info">Center</Badge>
  <Badge variant="info">Right</Badge>
</BadgeGroup>

<BadgeGroup align="space-evenly" style={{ width: "100%" }}>
  <Badge variant="warning">One</Badge>
  <Badge variant="warning">Two</Badge>
  <Badge variant="warning">Three</Badge>
</BadgeGroup>`,
    language: "tsx",
  },
  {
    key: "wrap",
    title: "Flex Wrap",
    preview: WrapSection,
    code: `<BadgeGroup wrap="nowrap" style={{ width: "300px" }}>
  <Badge>Label 1</Badge>
  <Badge>Label 2</Badge>
  <Badge>Label 3</Badge>
  <Badge>Label 4</Badge>
</BadgeGroup>

<BadgeGroup wrap="wrap" style={{ width: "300px" }}>
  ...
</BadgeGroup>`,
    language: "tsx",
  },
  {
    key: "custom-spacing",
    title: "Custom Spacing Override",
    preview: CustomSpacingSection,
    code: `<BadgeGroup
  gap="md"
  style={{
    "--vers-comp-badge-group-gap": "var(--spacing-4)",
  }}
>
  <Badge variant="primary">Custom</Badge>
  <Badge variant="secondary">Gap</Badge>
  <Badge variant="success">Override</Badge>
</BadgeGroup>`,
    language: "tsx",
  },
];

export const badgeGroupInstallation = {
  code: `import { Badge, BadgeGroup } from "@versaur/react";

export function App() {
  return (
    <BadgeGroup gap="md" direction="horizontal" align="center" wrap="nowrap">
      <Badge variant="primary">New</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="danger">Critical</Badge>
    </BadgeGroup>
  );
}`,
  language: "tsx",
};

export function BadgeGroupPreview() {
  return (
    <div>
      <h2>BadgeGroup Component</h2>
      <p>
        Container component for grouping multiple badges with customizable
        spacing, direction, alignment, and wrap behavior.
      </p>
    </div>
  );
}
