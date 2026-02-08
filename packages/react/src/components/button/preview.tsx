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

function FocusRingPreview() {
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

function DisabledPreview() {
  return (
    <div className="button-group">
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="danger" disabled>
        Danger
      </Button>
    </div>
  );
}

function CustomizationPreview() {
  return (
    <div className="button-group">
      <div
        style={
          {
            "--vers-comp-button-primary-bg": "#8b5cf6",
            "--vers-comp-button-primary-hover-bg": "#7c3aed",
            "--vers-comp-button-primary-focus-ring-color": "#8b5cf6",
          } as React.CSSProperties
        }
      >
        <Button variant="primary">Custom Purple</Button>
      </div>
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
    key: "focus-ring",
    title: "Focus Ring",
    preview: FocusRingPreview,
    code: `/* Each variant sets its own focus ring color */
.button[data-variant="primary"] {
  --_focus-ring-color: var(--vers-comp-button-primary-focus-ring-color, var(--color-primary));
}
.button[data-variant="secondary"] {
  --_focus-ring-color: var(--vers-comp-button-secondary-focus-ring-color, var(--color-secondary));
}
.button[data-variant="outline"] {
  --_focus-ring-color: var(--vers-comp-button-outline-focus-ring-color, var(--color-outline));
}
.button[data-variant="ghost"] {
  --_focus-ring-color: var(--vers-comp-button-ghost-focus-ring-color, var(--color-ghost));
}
.button[data-variant="danger"] {
  --_focus-ring-color: var(--vers-comp-button-danger-focus-ring-color, var(--color-danger));
}`,
    language: "css",
  },
  {
    key: "disabled",
    title: "Disabled State",
    preview: DisabledPreview,
    code: `<Button variant="primary" disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="ghost" disabled>Ghost</Button>
<Button variant="danger" disabled>Danger</Button>`,
    language: "tsx",
  },
  {
    key: "customization",
    title: "CSS Customization",
    preview: CustomizationPreview,
    code: `/* Override component tokens to customize a specific button */
.my-custom-button {
  --vers-comp-button-primary-bg: #8b5cf6;
  --vers-comp-button-primary-hover-bg: #7c3aed;
  --vers-comp-button-primary-focus-ring-color: #8b5cf6;
}`,
    language: "css",
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
