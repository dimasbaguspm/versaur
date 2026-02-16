import type { ComponentType } from "react";
import { TextInput } from "./text-input";
import {
  MailIcon,
  SearchIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@versaur/icons";
import { Icon } from "../icon";

export interface TextInputSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function VariantsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextInput
        variant="outline"
        placeholder="Outline variant"
        label="Outline"
      />
      <TextInput
        variant="filled"
        placeholder="Filled variant"
        label="Filled"
      />
      <TextInput variant="ghost" placeholder="Ghost variant" label="Ghost" />
    </div>
  );
}

function SizesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextInput size="small" placeholder="Small input" label="Small" />
      <TextInput size="medium" placeholder="Medium input" label="Medium" />
      <TextInput size="large" placeholder="Large input" label="Large" />
    </div>
  );
}

function WithIconsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextInput
        placeholder="Search..."
        label="Search"
        leading={<Icon as={SearchIcon} />}
      />
      <TextInput
        placeholder="you@example.com"
        label="Email"
        trailing={<Icon as={MailIcon} />}
      />
      <TextInput
        placeholder="Username"
        label="With both icons"
        leading={<Icon as={SearchIcon} />}
        trailing={<Icon as={CheckCircleIcon} />}
      />
    </div>
  );
}

function StatesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextInput placeholder="Default state" label="Default" />
      <TextInput
        placeholder="Invalid state"
        label="Invalid"
        error="This field is required"
      />
      <TextInput
        placeholder="Disabled state"
        label="Disabled"
        disabled
        value="Disabled value"
      />
      <TextInput
        placeholder="With helper text"
        label="With Helper"
        helper="This is helpful information"
      />
    </div>
  );
}

function CompleteExamplesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <TextInput
        label="Email Address"
        placeholder="you@example.com"
        helper="We'll never share your email"
        required
        leading={<Icon as={MailIcon} />}
      />
      <TextInput
        label="Search"
        placeholder="Search for anything..."
        leading={<Icon as={SearchIcon} />}
        variant="filled"
      />
      <TextInput
        label="Username"
        placeholder="Enter username"
        error="Username already taken"
        trailing={<Icon as={XCircleIcon} />}
        required
      />
      <TextInput
        label="Verified Email"
        value="confirmed@example.com"
        disabled
        trailing={<Icon as={CheckCircleIcon} />}
      />
    </div>
  );
}

function CustomizationPreview() {
  return (
    <div
      style={
        {
          "--vers-comp-input-bg": "#f0f9ff",
          "--vers-comp-input-border": "#0ea5e9",
          "--vers-comp-input-focus-ring-color": "#0ea5e9",
        } as React.CSSProperties
      }
    >
      <TextInput
        variant="outline"
        placeholder="Custom blue theme"
        label="Custom Input"
      />
    </div>
  );
}

export const textInputSections: TextInputSection[] = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<TextInput variant="outline" placeholder="Outline variant" label="Outline" />
<TextInput variant="filled" placeholder="Filled variant" label="Filled" />
<TextInput variant="ghost" placeholder="Ghost variant" label="Ghost" />`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<TextInput size="small" placeholder="Small input" label="Small" />
<TextInput size="medium" placeholder="Medium input" label="Medium" />
<TextInput size="large" placeholder="Large input" label="Large" />`,
    language: "tsx",
  },
  {
    key: "icons",
    title: "With Icons",
    preview: WithIconsPreview,
    code: `<TextInput
  placeholder="Search..."
  label="Search"
  leading={<Icon as={SearchIcon} />}
/>
<TextInput
  placeholder="you@example.com"
  label="Email"
  trailing={<Icon as={MailIcon} />}
/>
<TextInput
  placeholder="Username"
  label="With both icons"
  leading={<Icon as={SearchIcon} />}
  trailing={<Icon as={CheckCircleIcon} />}
/>`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<TextInput placeholder="Default state" label="Default" />
<TextInput
  placeholder="Invalid state"
  label="Invalid"
  error="This field is required"
/>
<TextInput
  placeholder="Disabled state"
  label="Disabled"
  disabled
  value="Disabled value"
/>
<TextInput
  placeholder="With helper text"
  label="With Helper"
  helper="This is helpful information"
/>`,
    language: "tsx",
  },
  {
    key: "complete",
    title: "Complete Examples",
    preview: CompleteExamplesPreview,
    code: `<TextInput
  label="Email Address"
  placeholder="you@example.com"
  helper="We'll never share your email"
  required
  leading={<Icon as={MailIcon} />}
/>
<TextInput
  label="Search"
  placeholder="Search for anything..."
  leading={<Icon as={SearchIcon} />}
  variant="filled"
/>
<TextInput
  label="Username"
  placeholder="Enter username"
  error="Username already taken"
  trailing={<Icon as={XCircleIcon} />}
  required
/>`,
    language: "tsx",
  },
  {
    key: "customization",
    title: "CSS Customization",
    preview: CustomizationPreview,
    code: `/* Override component tokens to customize */
.custom-input {
  --vers-comp-input-bg: #f0f9ff;
  --vers-comp-input-border: #0ea5e9;
  --vers-comp-input-focus-ring-color: #0ea5e9;
}`,
    language: "css",
  },
];

export const textInputProps = [
  {
    name: "variant",
    type: "'outline' | 'filled' | 'ghost'",
    default: "'outline'",
    description: "Visual variant of the input",
  },
  {
    name: "size",
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: "Size of the input",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Label text displayed above input",
  },
  {
    name: "helper",
    type: "string",
    default: "undefined",
    description: "Helper text displayed below input",
  },
  {
    name: "error",
    type: "string",
    default: "undefined",
    description: "Error message displayed below input (replaces helper)",
  },
  {
    name: "leading",
    type: "ReactNode",
    default: "undefined",
    description: "Icon or element displayed on the left side",
  },
  {
    name: "trailing",
    type: "ReactNode",
    default: "undefined",
    description: "Icon or element displayed on the right side",
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
    description: "Whether the input is disabled",
  },
];

export const textInputInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function TextInputPreview() {
  return (
    <>
      {textInputSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
