import type { ComponentType } from "react"

import { Avatar } from "./avatar"

export interface AvatarSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

function VariantsPreview() {
  return (
    <div className="button-group">
      <Avatar variant="primary">P</Avatar>
      <Avatar variant="secondary">S</Avatar>
      <Avatar variant="ghost">G</Avatar>
      <Avatar variant="danger">D</Avatar>
    </div>
  )
}

function SizesPreview() {
  return (
    <div className="button-group" style={{ alignItems: "center" }}>
      <Avatar size="xs">XS</Avatar>
      <Avatar size="sm">SM</Avatar>
      <Avatar size="md">MD</Avatar>
      <Avatar size="lg">LG</Avatar>
      <Avatar size="xl">XL</Avatar>
    </div>
  )
}

function ShapesPreview() {
  return (
    <div className="button-group">
      <Avatar shape="circle">C</Avatar>
      <Avatar shape="square">S</Avatar>
    </div>
  )
}

function ImagePreview() {
  return (
    <div className="button-group" style={{ alignItems: "center" }}>
      <Avatar variant="primary" size="md">
        <Avatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="John Doe" />
      </Avatar>
      <Avatar variant="secondary" size="lg">
        <Avatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" alt="Jane Smith" />
      </Avatar>
      <Avatar variant="ghost" size="sm">
        <Avatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" alt="Bob Wilson" />
      </Avatar>
    </div>
  )
}

export const avatarSections: AvatarSection[] = [
  {
    code: `<Avatar variant="primary">P</Avatar>
<Avatar variant="secondary">S</Avatar>
<Avatar variant="ghost">G</Avatar>
<Avatar variant="danger">D</Avatar>`,
    key: "variants",
    language: "tsx",
    preview: VariantsPreview,
    title: "Variants",
  },
  {
    code: `<Avatar size="xs">XS</Avatar>
<Avatar size="sm">SM</Avatar>
<Avatar size="md">MD</Avatar>
<Avatar size="lg">LG</Avatar>
<Avatar size="xl">XL</Avatar>`,
    key: "sizes",
    language: "tsx",
    preview: SizesPreview,
    title: "Sizes",
  },
  {
    code: `<Avatar shape="circle">C</Avatar>
<Avatar shape="square">S</Avatar>`,
    key: "shapes",
    language: "tsx",
    preview: ShapesPreview,
    title: "Shapes",
  },
  {
    code: `<Avatar variant="primary" size="md">
  <Avatar.Image
    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
    alt="John Doe"
  />
</Avatar>
<Avatar variant="secondary" size="lg">
  <Avatar.Image
    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
    alt="Jane Smith"
  />
</Avatar>`,
    key: "image",
    language: "tsx",
    preview: ImagePreview,
    title: "Image",
  },
]

export const avatarProps = [
  {
    default: "'primary'",
    description: "Visual variant of the avatar",
    name: "variant",
    type: "'primary' | 'secondary' | 'ghost' | 'danger'",
  },
  {
    default: "'md'",
    description: "Size of the avatar",
    name: "size",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
  },
  {
    default: "'circle'",
    description: "Shape of the avatar",
    name: "shape",
    type: "'circle' | 'square'",
  },
  {
    default: "undefined",
    description: "Avatar content (text initials or Avatar.Image component)",
    name: "children",
    type: "string",
  },
]

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
  )
}
