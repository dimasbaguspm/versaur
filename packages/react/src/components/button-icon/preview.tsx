import { MenuIcon } from "@versaur/icons"
import { type ComponentType } from "react"

import { ButtonIcon } from "./button-icon"

export interface ButtonIconSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

/**
 * Variants Preview
 */
function VariantsPreview() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: "8px" }}>
      <ButtonIcon as={MenuIcon} aria-label="Primary" variant="primary" />
      <ButtonIcon as={MenuIcon} aria-label="Secondary" variant="secondary" />
      <ButtonIcon as={MenuIcon} aria-label="Ghost" variant="ghost" />
      <ButtonIcon as={MenuIcon} aria-label="Danger" variant="danger" />
    </div>
  )
}

/**
 * Sizes Preview
 */
function SizesPreview() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: "8px" }}>
      <ButtonIcon as={MenuIcon} aria-label="Small" size="small" />
      <ButtonIcon as={MenuIcon} aria-label="Medium" size="medium" />
    </div>
  )
}

/**
 * States Preview
 */
function StatesPreview() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: "8px" }}>
      <ButtonIcon as={MenuIcon} aria-label="Loading" loading />
      <ButtonIcon as={MenuIcon} aria-label="Disabled" disabled />
      <ButtonIcon as={MenuIcon} aria-label="Pressed" pressed />
    </div>
  )
}

export const buttonIconSections: ButtonIconSection[] = [
  {
    code: `<ButtonIcon as={MenuIcon} aria-label="Primary" variant="primary" />
<ButtonIcon as={MenuIcon} aria-label="Secondary" variant="secondary" />
<ButtonIcon as={MenuIcon} aria-label="Ghost" variant="ghost" />
<ButtonIcon as={MenuIcon} aria-label="Danger" variant="danger" />`,
    key: "variants",
    language: "tsx",
    preview: VariantsPreview,
    title: "Variants",
  },
  {
    code: `<ButtonIcon as={MenuIcon} aria-label="Small" size="small" />
<ButtonIcon as={MenuIcon} aria-label="Medium" size="medium" />`,
    key: "sizes",
    language: "tsx",
    preview: SizesPreview,
    title: "Sizes",
  },
  {
    code: `<ButtonIcon as={MenuIcon} aria-label="Loading" loading />
<ButtonIcon as={MenuIcon} aria-label="Disabled" disabled />
<ButtonIcon as={MenuIcon} aria-label="Pressed" pressed />`,
    key: "states",
    language: "tsx",
    preview: StatesPreview,
    title: "States",
  },
]

export const buttonIconProps = [
  {
    default: "—",
    description: "The SVG icon component to render. Required.",
    name: "as",
    type: "ComponentType<SVGProps<SVGSVGElement>>",
  },
  {
    default: "—",
    description: "Accessible label for the icon button. Required for screen readers since there's no text content.",
    name: "aria-label",
    type: "string",
  },
  {
    default: "'primary'",
    description: "Visual variant of the button.",
    name: "variant",
    type: "'primary' | 'secondary' | 'ghost' | 'danger'",
  },
  {
    default: "'medium'",
    description: "Size of the button.",
    name: "size",
    type: "'small' | 'medium'",
  },
  {
    default: "false",
    description: "Whether the button is in a loading state.",
    name: "loading",
    type: "boolean",
  },
  {
    default: "false",
    description: "Whether the button is disabled.",
    name: "disabled",
    type: "boolean",
  },
  {
    default: "false",
    description: "Whether the button is in a pressed state (for toggle buttons).",
    name: "pressed",
    type: "boolean",
  },
  {
    default: "{}",
    description: "Additional props to pass to the icon.",
    name: "iconProps",
    type: "SVGProps<SVGSVGElement>",
  },
]

export function ButtonIconPreview() {
  return (
    <>
      {buttonIconSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
        </div>
      ))}
    </>
  )
}
