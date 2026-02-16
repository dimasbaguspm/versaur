import type { ComponentType } from "react";
import { Select } from "./select";

export interface SelectSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function VariantsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Select variant="outline" label="Outline" placeholder="Select an option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
      <Select variant="filled" label="Filled" placeholder="Select an option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
      <Select variant="ghost" label="Ghost" placeholder="Select an option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </div>
  );
}

function SizesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Select size="small" label="Small" placeholder="Select an option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
      <Select size="medium" label="Medium" placeholder="Select an option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
      <Select size="large" label="Large" placeholder="Select an option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </div>
  );
}

function StatesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Select label="Default" placeholder="Select an option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
      <Select
        label="Invalid"
        placeholder="Select an option"
        error="This field is required"
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
      <Select label="Disabled" disabled defaultValue="1">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
      <Select
        label="With Helper"
        placeholder="Select an option"
        helper="Choose your preferred option"
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </div>
  );
}

function CompleteExamplesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <Select
        label="Country"
        placeholder="Select a country"
        helper="Choose your country of residence"
        required
      >
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="au">Australia</option>
        <option value="de">Germany</option>
      </Select>
      <Select
        label="Language"
        placeholder="Select a language"
        variant="filled"
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ja">Japanese</option>
      </Select>
      <Select
        label="Priority"
        placeholder="Select priority"
        error="Priority is required"
        required
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="urgent">Urgent</option>
      </Select>
    </div>
  );
}

function CustomizationPreview() {
  return (
    <div
      style={
        {
          "--vers-comp-select-bg": "#f0fdf4",
          "--vers-comp-select-border": "#10b981",
          "--vers-comp-select-focus-ring-color": "#10b981",
        } as React.CSSProperties
      }
    >
      <Select label="Custom Select" placeholder="Select an option">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </div>
  );
}

export const selectSections: SelectSection[] = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<Select variant="outline" label="Outline" placeholder="Select an option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>
<Select variant="filled" label="Filled" placeholder="Select an option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>
<Select variant="ghost" label="Ghost" placeholder="Select an option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<Select size="small" label="Small" placeholder="Select an option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>
<Select size="medium" label="Medium" placeholder="Select an option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>
<Select size="large" label="Large" placeholder="Select an option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<Select label="Default" placeholder="Select an option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>
<Select
  label="Invalid"
  placeholder="Select an option"
  error="This field is required"
>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>
<Select label="Disabled" disabled defaultValue="1">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>`,
    language: "tsx",
  },
  {
    key: "complete",
    title: "Complete Examples",
    preview: CompleteExamplesPreview,
    code: `<Select
  label="Country"
  placeholder="Select a country"
  helper="Choose your country of residence"
  required
>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
  <option value="au">Australia</option>
  <option value="de">Germany</option>
</Select>
<Select
  label="Language"
  placeholder="Select a language"
  variant="filled"
>
  <option value="en">English</option>
  <option value="es">Spanish</option>
  <option value="fr">French</option>
  <option value="de">German</option>
  <option value="ja">Japanese</option>
</Select>`,
    language: "tsx",
  },
  {
    key: "customization",
    title: "CSS Customization",
    preview: CustomizationPreview,
    code: `/* Override component tokens to customize */
.custom-select {
  --vers-comp-select-bg: #f0fdf4;
  --vers-comp-select-border: #10b981;
  --vers-comp-select-focus-ring-color: #10b981;
}`,
    language: "css",
  },
];

export const selectProps = [
  {
    name: "variant",
    type: "'outline' | 'filled' | 'ghost'",
    default: "'outline'",
    description: "Visual variant of the select",
  },
  {
    name: "size",
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: "Size of the select",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Label text displayed above select",
  },
  {
    name: "helper",
    type: "string",
    default: "undefined",
    description: "Helper text displayed below select",
  },
  {
    name: "error",
    type: "string",
    default: "undefined",
    description: "Error message displayed below select (replaces helper)",
  },
  {
    name: "placeholder",
    type: "string",
    default: "undefined",
    description: "Placeholder text (creates a disabled first option)",
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
    description: "Whether the select is disabled",
  },
];

export const selectInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function SelectPreview() {
  return (
    <>
      {selectSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
