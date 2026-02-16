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
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`,
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
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<Button variant="primary" size="medium">Medium</Button>
<Button variant="primary" size="small">Small</Button>`,
    language: "tsx",
  },
  {
    key: "disabled",
    title: "Disabled State",
    preview: DisabledPreview,
    code: `<Button variant="primary" disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="ghost" disabled>Ghost</Button>
<Button variant="danger" disabled>Danger</Button>`,
    language: "tsx",
  },
];

export const buttonProps = [
  {
    name: "variant",
    type: "'primary' | 'secondary' | 'ghost' | 'danger'",
    default: "'primary'",
    description: "Visual variant of the button",
  },
  {
    name: "size",
    type: "'small' | 'medium'",
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
