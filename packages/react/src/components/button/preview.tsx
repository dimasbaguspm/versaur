import type { ComponentType } from "react";
import { Button } from "./button";

export interface ButtonSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function VariantsPreview() {
  return (
    <div className="button-group">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

function SizesPreview() {
  return (
    <div className="button-group" style={{ alignItems: "center" }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
}

function StatesPreview() {
  return (
    <div className="button-group">
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
      <Button pressed>Pressed</Button>
    </div>
  );
}

function CombinedPreview() {
  return (
    <div className="button-group">
      <Button variant="primary" size="large">
        Large Primary
      </Button>
      <Button variant="danger" size="small">
        Small Danger
      </Button>
      <Button variant="secondary" loading>
        Loading Secondary
      </Button>
    </div>
  );
}

export const buttonSections: ButtonSection[] = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button pressed>Pressed</Button>`,
    language: "tsx",
  },
  {
    key: "combined",
    title: "Combined Examples",
    preview: CombinedPreview,
    code: `<Button variant="primary" size="large">Large Primary</Button>
<Button variant="danger" size="small">Small Danger</Button>
<Button variant="secondary" loading>Loading Secondary</Button>`,
    language: "tsx",
  },
];

export const buttonProps = [
  {
    name: "variant",
    type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'",
    default: "'primary'",
    description: "Visual variant of the button",
  },
  {
    name: "size",
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: "Size of the button",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Shows a spinner and disables interaction",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the button is disabled",
  },
  {
    name: "pressed",
    type: "boolean",
    default: "false",
    description:
      "Whether the button is in a pressed state (for toggle buttons)",
  },
];

export const buttonInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function ButtonPreview() {
  return (
    <>
      {buttonSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
