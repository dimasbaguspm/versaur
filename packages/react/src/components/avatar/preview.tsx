import type { ComponentType } from "react";
import { Avatar } from "./avatar";
import { AvatarGroup } from "./avatar-group";

export interface AvatarSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function VariantsPreview() {
  return (
    <div className="button-group">
      <Avatar variant="primary" name="Primary">P</Avatar>
      <Avatar variant="secondary" name="Secondary">S</Avatar>
      <Avatar variant="outline" name="Outline">O</Avatar>
      <Avatar variant="ghost" name="Ghost">G</Avatar>
      <Avatar variant="danger" name="Danger">D</Avatar>
    </div>
  );
}

function SizesPreview() {
  return (
    <div className="button-group" style={{ alignItems: "center" }}>
      <Avatar size="xs" name="Extra Small" />
      <Avatar size="sm" name="Small" />
      <Avatar size="md" name="Medium" />
      <Avatar size="lg" name="Large" />
      <Avatar size="xl" name="Extra Large" />
    </div>
  );
}

function ShapesPreview() {
  return (
    <div className="button-group">
      <Avatar shape="circle" name="Circle" />
      <Avatar shape="square" name="Square" />
    </div>
  );
}

function FallbackPreview() {
  return (
    <div className="button-group">
      <Avatar name="John Doe" />
      <Avatar name="Alice" />
      <Avatar />
    </div>
  );
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

function CustomizationPreview() {
  return (
    <div className="button-group">
      <div
        style={
          {
            "--vers-comp-avatar-primary-bg": "#8b5cf6",
            "--vers-comp-avatar-primary-color": "#ffffff",
          } as React.CSSProperties
        }
      >
        <Avatar variant="primary" name="Custom Purple" />
      </div>
    </div>
  );
}

export const avatarSections: AvatarSection[] = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<Avatar variant="primary">P</Avatar>
<Avatar variant="secondary">S</Avatar>
<Avatar variant="outline">O</Avatar>
<Avatar variant="ghost">G</Avatar>
<Avatar variant="danger">D</Avatar>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<Avatar size="xs" name="Extra Small" />
<Avatar size="sm" name="Small" />
<Avatar size="md" name="Medium" />
<Avatar size="lg" name="Large" />
<Avatar size="xl" name="Extra Large" />`,
    language: "tsx",
  },
  {
    key: "shapes",
    title: "Shapes",
    preview: ShapesPreview,
    code: `<Avatar shape="circle" name="Circle" />
<Avatar shape="square" name="Square" />`,
    language: "tsx",
  },
  {
    key: "fallback",
    title: "Fallback",
    preview: FallbackPreview,
    code: `{/* Full name → two initials */}
<Avatar name="John Doe" />
{/* Single name → one initial */}
<Avatar name="Alice" />
{/* No name → user icon */}
<Avatar />`,
    language: "tsx",
  },
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
    key: "customization",
    title: "CSS Customization",
    preview: CustomizationPreview,
    code: `/* Override component tokens to customize */
.my-custom-avatar {
  --vers-comp-avatar-primary-bg: #8b5cf6;
  --vers-comp-avatar-primary-color: #ffffff;
}`,
    language: "css",
  },
];

export const avatarProps = [
  {
    name: "src",
    type: "string",
    default: "—",
    description: "Image source URL",
  },
  {
    name: "alt",
    type: "string",
    default: "—",
    description: "Alt text for the image",
  },
  {
    name: "name",
    type: "string",
    default: "—",
    description: "Name used to generate initials fallback",
  },
  {
    name: "variant",
    type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'",
    default: "'primary'",
    description: "Visual variant of the avatar",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: "Size of the avatar",
  },
  {
    name: "shape",
    type: "'circle' | 'square'",
    default: "'circle'",
    description: "Shape of the avatar",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Custom fallback content (overrides initials and icon)",
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
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Avatar children",
  },
];

export const avatarInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function AvatarPreview() {
  return (
    <>
      {avatarSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
