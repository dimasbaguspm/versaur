import { type ComponentType } from "react";
import { ButtonIcon } from "./button-icon";
import { LoaderIcon } from "@versaur/icons";

export interface ButtonIconSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

/**
 * Variants Preview
 */
function VariantsPreview() {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ButtonIcon as={LoaderIcon} aria-label="Primary" variant="primary" />
      <ButtonIcon as={LoaderIcon} aria-label="Secondary" variant="secondary" />
      <ButtonIcon as={LoaderIcon} aria-label="Outline" variant="outline" />
      <ButtonIcon as={LoaderIcon} aria-label="Ghost" variant="ghost" />
      <ButtonIcon as={LoaderIcon} aria-label="Danger" variant="danger" />
    </div>
  );
}

/**
 * Sizes Preview
 */
function SizesPreview() {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ButtonIcon as={LoaderIcon} aria-label="Small" size="small" />
      <ButtonIcon as={LoaderIcon} aria-label="Medium" size="medium" />
      <ButtonIcon as={LoaderIcon} aria-label="Large" size="large" />
    </div>
  );
}

/**
 * States Preview
 */
function StatesPreview() {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ButtonIcon as={LoaderIcon} aria-label="Loading" loading />
      <ButtonIcon as={LoaderIcon} aria-label="Disabled" disabled />
      <ButtonIcon as={LoaderIcon} aria-label="Pressed" pressed />
    </div>
  );
}

export const buttonIconSections: ButtonIconSection[] = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<ButtonIcon as={LoaderIcon} aria-label="Primary" variant="primary" />
<ButtonIcon as={LoaderIcon} aria-label="Secondary" variant="secondary" />
<ButtonIcon as={LoaderIcon} aria-label="Outline" variant="outline" />
<ButtonIcon as={LoaderIcon} aria-label="Ghost" variant="ghost" />
<ButtonIcon as={LoaderIcon} aria-label="Danger" variant="danger" />`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<ButtonIcon as={LoaderIcon} aria-label="Small" size="small" />
<ButtonIcon as={LoaderIcon} aria-label="Medium" size="medium" />
<ButtonIcon as={LoaderIcon} aria-label="Large" size="large" />`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<ButtonIcon as={LoaderIcon} aria-label="Loading" loading />
<ButtonIcon as={LoaderIcon} aria-label="Disabled" disabled />
<ButtonIcon as={LoaderIcon} aria-label="Pressed" pressed />`,
    language: "tsx",
  },
];

export const buttonIconProps = [
  {
    name: "as",
    type: "ComponentType<SVGProps<SVGSVGElement>>",
    default: "—",
    description: "The SVG icon component to render. Required.",
  },
  {
    name: "aria-label",
    type: "string",
    default: "—",
    description:
      "Accessible label for the icon button. Required for screen readers since there's no text content.",
  },
  {
    name: "variant",
    type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'",
    default: "'primary'",
    description: "Visual variant of the button.",
  },
  {
    name: "size",
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: "Size of the button.",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Whether the button is in a loading state.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the button is disabled.",
  },
  {
    name: "pressed",
    type: "boolean",
    default: "false",
    description:
      "Whether the button is in a pressed state (for toggle buttons).",
  },
  {
    name: "iconProps",
    type: "SVGProps<SVGSVGElement>",
    default: "{}",
    description: "Additional props to pass to the icon.",
  },
];

export const buttonIconInstallation = {
  code: `npm install @versaur/react @versaur/core @versaur/icons`,
  language: "bash" as const,
};

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
  );
}
