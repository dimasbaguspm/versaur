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
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="danger" disabled>
        Danger
      </Button>
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

function SizesPreview() {
  return (
    <div className="button-group">
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="primary" size="medium">
        Medium
      </Button>
    </div>
  );
}

export const buttonSections: ButtonSection[] = [
  {
    code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`,
    key: "variants",
    language: "tsx",
    preview: VariantsPreview,
    title: "Variants",
  },
  {
    code: `<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button pressed>Pressed</Button>`,
    key: "states",
    language: "tsx",
    preview: StatesPreview,
    title: "States",
  },
  {
    code: `<Button variant="primary" size="medium">Medium</Button>
<Button variant="primary" size="small">Small</Button>`,
    key: "sizes",
    language: "tsx",
    preview: SizesPreview,
    title: "Sizes",
  },
  {
    code: `<Button variant="primary" disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="ghost" disabled>Ghost</Button>
<Button variant="danger" disabled>Danger</Button>`,
    key: "disabled",
    language: "tsx",
    preview: DisabledPreview,
    title: "Disabled State",
  },
];

export const buttonProps = [
  {
    default: "'primary'",
    description: "Visual variant of the button",
    name: "variant",
    type: "'primary' | 'secondary' | 'ghost' | 'danger'",
  },
  {
    default: "'medium'",
    description: "Size of the button",
    name: "size",
    type: "'small' | 'medium'",
  },
  {
    default: "false",
    description: "Shows a spinner and disables interaction",
    name: "loading",
    type: "boolean",
  },
  {
    default: "false",
    description: "Whether the button is disabled",
    name: "disabled",
    type: "boolean",
  },
  {
    default: "false",
    description: "Whether the button is in a pressed state (for toggle buttons)",
    name: "pressed",
    type: "boolean",
  },
];

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
