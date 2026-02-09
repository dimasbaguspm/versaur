import type { ComponentType } from "react";
import { Avatar } from "../avatar/avatar";
import { AvatarGroup } from "./avatar-group";

export interface AvatarGroupSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function GroupPreview() {
  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      <AvatarGroup>
        <Avatar name="Alice Brown" />
        <Avatar name="Bob Chen" variant="secondary" />
        <Avatar name="Carol Davis" variant="outline" />
        <Avatar name="Dan Evans" variant="ghost" />
      </AvatarGroup>
      <AvatarGroup direction="vertical">
        <Avatar name="Alice Brown" />
        <Avatar name="Bob Chen" variant="secondary" />
        <Avatar name="Carol Davis" variant="outline" />
      </AvatarGroup>
    </div>
  );
}

function GroupSizesPreview() {
  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <AvatarGroup size="sm">
        <Avatar size="sm" name="Alice Brown" />
        <Avatar size="sm" name="Bob Chen" variant="secondary" />
        <Avatar size="sm" name="Carol Davis" variant="outline" />
      </AvatarGroup>
      <AvatarGroup size="lg">
        <Avatar size="lg" name="Alice Brown" />
        <Avatar size="lg" name="Bob Chen" variant="secondary" />
        <Avatar size="lg" name="Carol Davis" variant="outline" />
      </AvatarGroup>
    </div>
  );
}

function GroupAlignmentPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Start</p>
        <AvatarGroup align="start">
          <Avatar size="sm" name="Alice Brown" />
          <Avatar size="sm" name="Bob Chen" variant="secondary" />
          <Avatar size="sm" name="Carol Davis" variant="outline" />
        </AvatarGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Center</p>
        <AvatarGroup align="center">
          <Avatar size="sm" name="Alice Brown" />
          <Avatar size="sm" name="Bob Chen" variant="secondary" />
          <Avatar size="sm" name="Carol Davis" variant="outline" />
        </AvatarGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>End</p>
        <AvatarGroup align="end">
          <Avatar size="sm" name="Alice Brown" />
          <Avatar size="sm" name="Bob Chen" variant="secondary" />
          <Avatar size="sm" name="Carol Davis" variant="outline" />
        </AvatarGroup>
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
          <AvatarGroup align="space-between" style={{ width: "100%" }}>
            <Avatar size="sm" name="Alice Brown" />
            <Avatar size="sm" name="Bob Chen" variant="secondary" />
          </AvatarGroup>
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
          <AvatarGroup align="space-around" style={{ width: "100%" }}>
            <Avatar size="sm" name="Alice Brown" />
            <Avatar size="sm" name="Bob Chen" variant="secondary" />
            <Avatar size="sm" name="Carol Davis" variant="outline" />
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
}

function GroupWrapPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>No wrap</p>
        <AvatarGroup wrap="nowrap" style={{ width: "300px" }}>
          <Avatar size="sm" name="Alice Brown" />
          <Avatar size="sm" name="Bob Chen" variant="secondary" />
          <Avatar size="sm" name="Carol Davis" variant="outline" />
          <Avatar size="sm" name="Dan Evans" variant="ghost" />
        </AvatarGroup>
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>With wrap</p>
        <AvatarGroup wrap="wrap" style={{ width: "250px" }}>
          <Avatar size="sm" name="Alice Brown" />
          <Avatar size="sm" name="Bob Chen" variant="secondary" />
          <Avatar size="sm" name="Carol Davis" variant="outline" />
          <Avatar size="sm" name="Dan Evans" variant="ghost" />
        </AvatarGroup>
      </div>
    </div>
  );
}

function CustomizationPreview() {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <AvatarGroup
        style={
          {
            "--vers-comp-avatar-group-gap": "var(--spacing-4)",
          } as React.CSSProperties
        }
      >
        <Avatar size="sm" name="Alice Brown" />
        <Avatar size="sm" name="Bob Chen" variant="secondary" />
        <Avatar size="sm" name="Carol Davis" variant="outline" />
      </AvatarGroup>
    </div>
  );
}

export const avatarGroupSections: AvatarGroupSection[] = [
  {
    key: "group",
    title: "Group",
    preview: GroupPreview,
    code: `{/* Horizontal (default) */}
<AvatarGroup>
  <Avatar name="Alice Brown" />
  <Avatar name="Bob Chen" variant="secondary" />
  <Avatar name="Carol Davis" variant="outline" />
  <Avatar name="Dan Evans" variant="ghost" />
</AvatarGroup>

{/* Vertical */}
<AvatarGroup direction="vertical">
  <Avatar name="Alice Brown" />
  <Avatar name="Bob Chen" variant="secondary" />
  <Avatar name="Carol Davis" variant="outline" />
</AvatarGroup>`,
    language: "tsx",
  },
  {
    key: "group-sizes",
    title: "Group Sizes",
    preview: GroupSizesPreview,
    code: `<AvatarGroup size="sm">
  <Avatar size="sm" name="Alice Brown" />
  <Avatar size="sm" name="Bob Chen" variant="secondary" />
  <Avatar size="sm" name="Carol Davis" variant="outline" />
</AvatarGroup>

<AvatarGroup size="lg">
  <Avatar size="lg" name="Alice Brown" />
  <Avatar size="lg" name="Bob Chen" variant="secondary" />
  <Avatar size="lg" name="Carol Davis" variant="outline" />
</AvatarGroup>`,
    language: "tsx",
  },
  {
    key: "alignment",
    title: "Alignment",
    preview: GroupAlignmentPreview,
    code: `<AvatarGroup align="start">
  <Avatar size="sm" name="Alice Brown" />
  <Avatar size="sm" name="Bob Chen" variant="secondary" />
  <Avatar size="sm" name="Carol Davis" variant="outline" />
</AvatarGroup>

<AvatarGroup align="space-between" style={{ width: "100%" }}>
  <Avatar size="sm" name="Alice Brown" />
  <Avatar size="sm" name="Bob Chen" variant="secondary" />
</AvatarGroup>

<AvatarGroup align="space-around" style={{ width: "100%" }}>
  <Avatar size="sm" name="Alice Brown" />
  <Avatar size="sm" name="Bob Chen" variant="secondary" />
  <Avatar size="sm" name="Carol Davis" variant="outline" />
</AvatarGroup>`,
    language: "tsx",
  },
  {
    key: "wrap",
    title: "Flex Wrap",
    preview: GroupWrapPreview,
    code: `<AvatarGroup wrap="nowrap" style={{ width: "300px" }}>
  <Avatar size="sm" name="Alice Brown" />
  <Avatar size="sm" name="Bob Chen" variant="secondary" />
  <Avatar size="sm" name="Carol Davis" variant="outline" />
  <Avatar size="sm" name="Dan Evans" variant="ghost" />
</AvatarGroup>

<AvatarGroup wrap="wrap" style={{ width: "250px" }}>
  ...
</AvatarGroup>`,
    language: "tsx",
  },
  {
    key: "customization",
    title: "CSS Customization",
    preview: CustomizationPreview,
    code: `<AvatarGroup
  style={{
    "--vers-comp-avatar-group-gap": "var(--spacing-4)",
  }}
>
  <Avatar size="sm" name="Alice Brown" />
  <Avatar size="sm" name="Bob Chen" variant="secondary" />
  <Avatar size="sm" name="Carol Davis" variant="outline" />
</AvatarGroup>`,
    language: "tsx",
  },
];

export const avatarGroupProps = [
  {
    name: "direction",
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: "Direction of the avatar stack",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: "Size controls the overlap amount between avatars",
  },
  {
    name: "align",
    type: "'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'",
    default: "'center'",
    description: "Alignment of items with support for flex spacing",
  },
  {
    name: "wrap",
    type: "'wrap' | 'nowrap'",
    default: "'nowrap'",
    description: "Flex wrap behavior",
  },
  {
    name: "aria-label",
    type: "string",
    default: "'Avatar group'",
    description: "Accessible label for the group (customizable)",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Avatar children",
  },
];

export const avatarGroupInstallation = {
  code: `import { Avatar, AvatarGroup } from "@versaur/react";

export function App() {
  return (
    <AvatarGroup direction="horizontal" size="md" align="center">
      <Avatar name="Alice Brown" />
      <Avatar name="Bob Chen" variant="secondary" />
      <Avatar name="Carol Davis" variant="outline" />
    </AvatarGroup>
  );
}`,
  language: "tsx",
};

export function AvatarGroupPreview() {
  return (
    <div>
      <h2>AvatarGroup Component</h2>
      <p>
        Container component for grouping multiple avatars with customizable
        spacing, direction, alignment, and wrap behavior.
      </p>
    </div>
  );
}
