import type { ComponentType } from "react"

import { Select } from "./select"

export interface SelectSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

function StatesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Select label="Default" placeholder="Select an option">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
      <Select label="Invalid" placeholder="Select an option" error="This field is required" required>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
      <Select label="Disabled" disabled defaultValue="1">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
      <Select label="With Helper" placeholder="Select an option" helper="Choose your preferred option">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
    </div>
  )
}

function OptionGroupsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Select label="With Option Groups" placeholder="Select a country">
        <Select.OptionGroup label="North America">
          <Select.Option value="us">United States</Select.Option>
          <Select.Option value="ca">Canada</Select.Option>
          <Select.Option value="mx">Mexico</Select.Option>
        </Select.OptionGroup>
        <Select.OptionGroup label="Europe">
          <Select.Option value="uk">United Kingdom</Select.Option>
          <Select.Option value="de">Germany</Select.Option>
          <Select.Option value="fr">France</Select.Option>
        </Select.OptionGroup>
        <Select.OptionGroup label="Asia">
          <Select.Option value="jp">Japan</Select.Option>
          <Select.Option value="cn">China</Select.Option>
          <Select.Option value="in">India</Select.Option>
        </Select.OptionGroup>
      </Select>
    </div>
  )
}

export const selectSections: SelectSection[] = [
  {
    code: `<Select label="Default" placeholder="Select an option">
  <Select.Option value="1">Option 1</Select.Option>
  <Select.Option value="2">Option 2</Select.Option>
  <Select.Option value="3">Option 3</Select.Option>
</Select>
<Select
  label="Invalid"
  placeholder="Select an option"
  error="This field is required"
>
  <Select.Option value="1">Option 1</Select.Option>
  <Select.Option value="2">Option 2</Select.Option>
  <Select.Option value="3">Option 3</Select.Option>
</Select>
<Select label="Disabled" disabled defaultValue="1">
  <Select.Option value="1">Option 1</Select.Option>
  <Select.Option value="2">Option 2</Select.Option>
  <Select.Option value="3">Option 3</Select.Option>
</Select>`,
    key: "states",
    language: "tsx",
    preview: StatesPreview,
    title: "States",
  },
  {
    code: `<Select label="With Option Groups" placeholder="Select a country">
  <Select.OptionGroup label="North America">
    <Select.Option value="us">United States</Select.Option>
    <Select.Option value="ca">Canada</Select.Option>
    <Select.Option value="mx">Mexico</Select.Option>
  </Select.OptionGroup>
  <Select.OptionGroup label="Europe">
    <Select.Option value="uk">United Kingdom</Select.Option>
    <Select.Option value="de">Germany</Select.Option>
    <Select.Option value="fr">France</Select.Option>
  </Select.OptionGroup>
  <Select.OptionGroup label="Asia">
    <Select.Option value="jp">Japan</Select.Option>
    <Select.Option value="cn">China</Select.Option>
    <Select.Option value="in">India</Select.Option>
  </Select.OptionGroup>
</Select>`,
    key: "groups",
    language: "tsx",
    preview: OptionGroupsPreview,
    title: "Option Groups",
  },
]

export const selectProps = [
  {
    default: "undefined",
    description: "Label text displayed above select",
    name: "label",
    type: "string",
  },
  {
    default: "undefined",
    description: "Helper text displayed below select",
    name: "helper",
    type: "string",
  },
  {
    default: "undefined",
    description: "Error message displayed below select (replaces helper)",
    name: "error",
    type: "string",
  },
  {
    default: "undefined",
    description: "Placeholder text (creates a disabled first option)",
    name: "placeholder",
    type: "string",
  },
  {
    default: "false",
    description: "Shows required indicator and sets HTML required attribute",
    name: "required",
    type: "boolean",
  },
  {
    default: "false",
    description: "Whether the select is disabled",
    name: "disabled",
    type: "boolean",
  },
]
