import { CheckCircleIcon, MailIcon, SearchIcon } from "@versaur/icons"
import type { ComponentType } from "react"

import { Icon } from "../icon"
import { TextInput } from "./text-input"

export interface TextInputSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

function WithIconsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextInput placeholder="Search..." label="Search" leftIcon={<Icon as={SearchIcon} />} />
      <TextInput placeholder="you@example.com" label="Email" rightIcon={<Icon as={MailIcon} />} />
      <TextInput
        placeholder="Username"
        label="With both icons"
        leftIcon={<Icon as={SearchIcon} />}
        rightIcon={<Icon as={CheckCircleIcon} />}
      />
    </div>
  )
}

function StatesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextInput placeholder="Default state" label="Default" />
      <TextInput placeholder="Invalid state" label="Invalid" error="This field is required" required />
      <TextInput placeholder="Disabled state" label="Disabled" disabled value="Disabled value" />
      <TextInput placeholder="With helper text" label="With Helper" helper="This is helpful information" />
    </div>
  )
}

function ReadOnlyPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextInput placeholder="Read-only input" label="Read Only" readOnly value="Read-only value" />
      <TextInput
        placeholder="Read-only with icon"
        label="Read Only with Icon"
        readOnly
        value="confirmed@example.com"
        rightIcon={<Icon as={CheckCircleIcon} />}
      />
    </div>
  )
}

export const textInputSections: TextInputSection[] = [
  {
    code: `<TextInput
  placeholder="Search..."
  label="Search"
  leftIcon={<Icon as={SearchIcon} />}
/>
<TextInput
  placeholder="you@example.com"
  label="Email"
  rightIcon={<Icon as={MailIcon} />}
/>
<TextInput
  placeholder="Username"
  label="With both icons"
  leftIcon={<Icon as={SearchIcon} />}
  rightIcon={<Icon as={CheckCircleIcon} />}
/>`,
    key: "icons",
    language: "tsx",
    preview: WithIconsPreview,
    title: "With Icons",
  },
  {
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
    key: "states",
    language: "tsx",
    preview: StatesPreview,
    title: "States",
  },
  {
    code: `<TextInput
  placeholder="Read-only input"
  label="Read Only"
  readOnly
  value="Read-only value"
/>
<TextInput
  placeholder="Read-only with icon"
  label="Read Only with Icon"
  readOnly
  value="confirmed@example.com"
  rightIcon={<Icon as={CheckCircleIcon} />}
/>`,
    key: "readonly",
    language: "tsx",
    preview: ReadOnlyPreview,
    title: "Read Only",
  },
]

export const textInputProps = [
  {
    default: "undefined",
    description: "Label text displayed above input",
    name: "label",
    type: "string",
  },
  {
    default: "undefined",
    description: "Helper text displayed below input",
    name: "helper",
    type: "string",
  },
  {
    default: "undefined",
    description: "Error message displayed below input (replaces helper)",
    name: "error",
    type: "string",
  },
  {
    default: "undefined",
    description: "Icon or element displayed on the left side",
    name: "leftIcon",
    type: "ReactNode",
  },
  {
    default: "undefined",
    description: "Icon or element displayed on the right side",
    name: "rightIcon",
    type: "ReactNode",
  },
  {
    default: "false",
    description: "Whether the input is read-only",
    name: "readOnly",
    type: "boolean",
  },
  {
    default: "false",
    description: "Shows required indicator and sets HTML required attribute",
    name: "required",
    type: "boolean",
  },
  {
    default: "false",
    description: "Whether the input is disabled",
    name: "disabled",
    type: "boolean",
  },
]

export const textInputInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
}

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
  )
}
