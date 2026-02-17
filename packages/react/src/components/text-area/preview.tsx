import type { ComponentType } from "react";
import { TextArea } from "./text-area";

export interface TextAreaSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function ResizablePreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea
        resizable={false}
        placeholder="Not resizable"
        label="Resizable: False"
      />
      <TextArea
        resizable={true}
        placeholder="Resizable"
        label="Resizable: True"
      />
    </div>
  );
}

function StatesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea placeholder="Default state" label="Default" />
      <TextArea
        placeholder="Invalid state"
        label="Invalid"
        error="This field is required"
      />
      <TextArea
        placeholder="Disabled state"
        label="Disabled"
        disabled
        value="Disabled value"
      />
      <TextArea
        placeholder="Read-only state"
        label="Read-only"
        readOnly
        value="Read-only value"
      />
      <TextArea
        placeholder="With helper text"
        label="With Helper"
        helper="Maximum 500 characters"
      />
    </div>
  );
}

function ReadOnlyPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea
        label="Read-only feedback"
        placeholder="This is read-only"
        readOnly
        value="You can select this text but cannot edit it"
      />
      <TextArea
        label="Required & Read-only"
        placeholder="Combined states"
        readOnly
        required
        value="Read-only with required indicator"
      />
    </div>
  );
}

export const textAreaSections: TextAreaSection[] = [
  {
    key: "resizable",
    title: "Resizable Control",
    preview: ResizablePreview,
    code: `<TextArea resizable={false} placeholder="Not resizable" label="Resizable: False" />
<TextArea resizable={true} placeholder="Resizable" label="Resizable: True" />`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<TextArea placeholder="Default state" label="Default" />
<TextArea
  placeholder="Invalid state"
  label="Invalid"
  error="This field is required"
/>
<TextArea
  placeholder="Disabled state"
  label="Disabled"
  disabled
  value="Disabled value"
/>
<TextArea
  placeholder="Read-only state"
  label="Read-only"
  readOnly
  value="Read-only value"
/>
<TextArea
  placeholder="With helper text"
  label="With Helper"
  helper="Maximum 500 characters"
/>`,
    language: "tsx",
  },
  {
    key: "readonly",
    title: "Read-only",
    preview: ReadOnlyPreview,
    code: `<TextArea
  label="Read-only feedback"
  placeholder="This is read-only"
  readOnly
  value="You can select this text but cannot edit it"
/>
<TextArea
  label="Required & Read-only"
  placeholder="Combined states"
  readOnly
  required
  value="Read-only with required indicator"
/>`,
    language: "tsx",
  },
];

export const textAreaProps = [
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Label text displayed above textarea",
  },
  {
    name: "helper",
    type: "string",
    default: "undefined",
    description: "Helper text displayed below textarea",
  },
  {
    name: "error",
    type: "string",
    default: "undefined",
    description: "Error message displayed below textarea (replaces helper)",
  },
  {
    name: "readOnly",
    type: "boolean",
    default: "false",
    description: "Whether the textarea is read-only (cannot be edited)",
  },
  {
    name: "resizable",
    type: "boolean",
    default: "true",
    description: "Whether the textarea can be resized by the user",
  },
  {
    name: "minRows",
    type: "number",
    default: "3",
    description: "Minimum number of visible rows",
  },
  {
    name: "maxRows",
    type: "number",
    default: "5",
    description: "Maximum number of rows before scrolling",
  },
  {
    name: "required",
    type: "boolean",
    default: "false",
    description: "Shows required indicator and sets HTML required attribute",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the textarea is disabled",
  },
];

export const textAreaInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function TextAreaPreview() {
  return (
    <>
      {textAreaSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
