import { Badge } from "../badge/badge"
import { BadgeGroup } from "./badge-group"

export const badgeGroupProps = [
  {
    default: "md",
    description: "Gap between badges: xs, sm, md, or lg",
    name: "gap",
    type: "BadgeGroupGap",
  },
  {
    default: "horizontal",
    description: "Direction of flex layout: horizontal or vertical",
    name: "direction",
    type: "BadgeGroupDirection",
  },
  {
    default: "center",
    description: "Alignment of items: start, center, end, space-between, space-around, or space-evenly",
    name: "align",
    type: "BadgeGroupAlign",
  },
  {
    default: "nowrap",
    description: "Flex wrap behavior: wrap or nowrap",
    name: "wrap",
    type: "BadgeGroupWrap",
  },
  {
    default: "Badge group",
    description: "Accessible label for the group (customizable)",
    name: "aria-label",
    type: "string",
  },
  {
    description: "Badge children components",
    name: "children",
    type: "ReactNode",
  },
]

function GapSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>xs gap</p>
        <BadgeGroup gap="xs">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
          <Badge variant="success">Active</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>sm gap</p>
        <BadgeGroup gap="sm">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
          <Badge variant="success">Active</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>md gap</p>
        <BadgeGroup gap="md">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
          <Badge variant="success">Active</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>lg gap</p>
        <BadgeGroup gap="lg">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
          <Badge variant="success">Active</Badge>
        </BadgeGroup>
      </div>
    </div>
  )
}

function DirectionSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Horizontal</p>
        <BadgeGroup direction="horizontal">
          <Badge variant="primary">Status</Badge>
          <Badge variant="warning">Pending</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Vertical</p>
        <BadgeGroup direction="vertical" align="start">
          <Badge variant="primary">Status</Badge>
          <Badge variant="warning">Pending</Badge>
        </BadgeGroup>
      </div>
    </div>
  )
}

function AlignmentSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Start</p>
        <BadgeGroup align="start" gap="lg">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Center</p>
        <BadgeGroup align="center" gap="lg">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>End</p>
        <BadgeGroup align="end" gap="lg">
          <Badge variant="primary">New</Badge>
          <Badge variant="secondary">Review</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Space Between</p>
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "0.375rem",
            padding: "0.5rem",
          }}
        >
          <BadgeGroup align="space-between" gap="lg" style={{ width: "100%" }}>
            <Badge variant="success">Start</Badge>
            <Badge variant="success">End</Badge>
          </BadgeGroup>
        </div>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Space Around</p>
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "0.375rem",
            padding: "0.5rem",
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
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Space Evenly</p>
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "0.375rem",
            padding: "0.5rem",
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
  )
}

function WrapSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>No wrap</p>
        <BadgeGroup wrap="nowrap" style={{ width: "300px" }}>
          <Badge>Label 1</Badge>
          <Badge>Label 2</Badge>
          <Badge>Label 3</Badge>
          <Badge>Label 4</Badge>
        </BadgeGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>With wrap</p>
        <BadgeGroup wrap="wrap" style={{ width: "300px" }}>
          <Badge>Label 1</Badge>
          <Badge>Label 2</Badge>
          <Badge>Label 3</Badge>
          <Badge>Label 4</Badge>
        </BadgeGroup>
      </div>
    </div>
  )
}

function CustomSpacingSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Custom spacing override</p>
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
  )
}

export const badgeGroupSections = [
  {
    code: `<BadgeGroup gap="xs">
  <Badge variant="primary">New</Badge>
  <Badge variant="secondary">Review</Badge>
  <Badge variant="success">Active</Badge>
</BadgeGroup>

<BadgeGroup gap="sm">...</BadgeGroup>
<BadgeGroup gap="md">...</BadgeGroup>
<BadgeGroup gap="lg">...</BadgeGroup>`,
    key: "gap-variants",
    language: "tsx",
    preview: GapSection,
    title: "Gap Variants",
  },
  {
    code: `<BadgeGroup direction="horizontal">
  <Badge variant="primary">Status</Badge>
  <Badge variant="warning">Pending</Badge>
</BadgeGroup>

<BadgeGroup direction="vertical" align="start">
  <Badge variant="primary">Status</Badge>
  <Badge variant="warning">Pending</Badge>
</BadgeGroup>`,
    key: "direction",
    language: "tsx",
    preview: DirectionSection,
    title: "Direction",
  },
  {
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
    key: "alignment",
    language: "tsx",
    preview: AlignmentSection,
    title: "Alignment",
  },
  {
    code: `<BadgeGroup wrap="nowrap" style={{ width: "300px" }}>
  <Badge>Label 1</Badge>
  <Badge>Label 2</Badge>
  <Badge>Label 3</Badge>
  <Badge>Label 4</Badge>
</BadgeGroup>

<BadgeGroup wrap="wrap" style={{ width: "300px" }}>
  ...
</BadgeGroup>`,
    key: "wrap",
    language: "tsx",
    preview: WrapSection,
    title: "Flex Wrap",
  },
  {
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
    key: "custom-spacing",
    language: "tsx",
    preview: CustomSpacingSection,
    title: "Custom Spacing Override",
  },
]

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
}

export function BadgeGroupPreview() {
  return (
    <div>
      <h2>BadgeGroup Component</h2>
      <p>
        Container component for grouping multiple badges with customizable spacing, direction, alignment, and wrap
        behavior.
      </p>
    </div>
  )
}
