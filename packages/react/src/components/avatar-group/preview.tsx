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
    <div style={{ alignItems: "flex-start", display: "flex", gap: "2rem" }}>
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
    <div style={{ alignItems: "center", display: "flex", gap: "2rem" }}>
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
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Start</p>
        <AvatarGroup align="start">
          <Avatar size="sm" name="Alice Brown" />
          <Avatar size="sm" name="Bob Chen" variant="secondary" />
          <Avatar size="sm" name="Carol Davis" variant="outline" />
        </AvatarGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>Center</p>
        <AvatarGroup align="center">
          <Avatar size="sm" name="Alice Brown" />
          <Avatar size="sm" name="Bob Chen" variant="secondary" />
          <Avatar size="sm" name="Carol Davis" variant="outline" />
        </AvatarGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>End</p>
        <AvatarGroup align="end">
          <Avatar size="sm" name="Alice Brown" />
          <Avatar size="sm" name="Bob Chen" variant="secondary" />
          <Avatar size="sm" name="Carol Davis" variant="outline" />
        </AvatarGroup>
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
          <AvatarGroup align="space-between" style={{ width: "100%" }}>
            <Avatar size="sm" name="Alice Brown" />
            <Avatar size="sm" name="Bob Chen" variant="secondary" />
          </AvatarGroup>
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
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>No wrap</p>
        <AvatarGroup wrap="nowrap" style={{ width: "300px" }}>
          <Avatar size="sm" name="Alice Brown" />
          <Avatar size="sm" name="Bob Chen" variant="secondary" />
          <Avatar size="sm" name="Carol Davis" variant="outline" />
          <Avatar size="sm" name="Dan Evans" variant="ghost" />
        </AvatarGroup>
      </div>
      <div>
        <p style={{ fontWeight: "500", marginBottom: "0.5rem" }}>With wrap</p>
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
    key: "group",
    language: "tsx",
    preview: GroupPreview,
    title: "Group",
  },
  {
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
    key: "group-sizes",
    language: "tsx",
    preview: GroupSizesPreview,
    title: "Group Sizes",
  },
  {
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
    key: "alignment",
    language: "tsx",
    preview: GroupAlignmentPreview,
    title: "Alignment",
  },
  {
    code: `<AvatarGroup wrap="nowrap" style={{ width: "300px" }}>
  <Avatar size="sm" name="Alice Brown" />
  <Avatar size="sm" name="Bob Chen" variant="secondary" />
  <Avatar size="sm" name="Carol Davis" variant="outline" />
  <Avatar size="sm" name="Dan Evans" variant="ghost" />
</AvatarGroup>

<AvatarGroup wrap="wrap" style={{ width: "250px" }}>
  ...
</AvatarGroup>`,
    key: "wrap",
    language: "tsx",
    preview: GroupWrapPreview,
    title: "Flex Wrap",
  },
  {
    code: `<AvatarGroup
  style={{
    "--vers-comp-avatar-group-gap": "var(--spacing-4)",
  }}
>
  <Avatar size="sm" name="Alice Brown" />
  <Avatar size="sm" name="Bob Chen" variant="secondary" />
  <Avatar size="sm" name="Carol Davis" variant="outline" />
</AvatarGroup>`,
    key: "customization",
    language: "tsx",
    preview: CustomizationPreview,
    title: "CSS Customization",
  },
];

export const avatarGroupProps = [
  {
    default: "'horizontal'",
    description: "Direction of the avatar stack",
    name: "direction",
    type: "'horizontal' | 'vertical'",
  },
  {
    default: "'md'",
    description: "Size controls the overlap amount between avatars",
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
  },
  {
    default: "'center'",
    description: "Alignment of items with support for flex spacing",
    name: "align",
    type: "'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'",
  },
  {
    default: "'nowrap'",
    description: "Flex wrap behavior",
    name: "wrap",
    type: "'wrap' | 'nowrap'",
  },
  {
    default: "'Avatar group'",
    description: "Accessible label for the group (customizable)",
    name: "aria-label",
    type: "string",
  },
  {
    default: "—",
    description: "Avatar children",
    name: "children",
    type: "ReactNode",
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
        Container component for grouping multiple avatars with customizable spacing, direction,
        alignment, and wrap behavior.
      </p>
    </div>
  );
}
