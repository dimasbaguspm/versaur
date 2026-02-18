import { useState } from "react"
import type { ComponentType } from "react"

import { CheckboxGroup } from "./checkbox-group"

export interface CheckboxGroupSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

function BasicPreview() {
  const [features, setFeatures] = useState<string[]>(["analytics"])

  return (
    <CheckboxGroup value={features} onChange={setFeatures} label="Select features" helper="Choose all that apply">
      <CheckboxGroup.Option value="analytics">Advanced Analytics</CheckboxGroup.Option>
      <CheckboxGroup.Option value="api">API Access</CheckboxGroup.Option>
      <CheckboxGroup.Option value="support">Priority Support</CheckboxGroup.Option>
      <CheckboxGroup.Option value="customization">Custom Branding</CheckboxGroup.Option>
    </CheckboxGroup>
  )
}

function DirectionPreview() {
  const [values, setValues] = useState<string[]>(["option1"])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <CheckboxGroup value={values} onChange={setValues} label="Column direction" direction="column">
        <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
      </CheckboxGroup>

      <CheckboxGroup value={values} onChange={setValues} label="Row direction" direction="row">
        <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
      </CheckboxGroup>
    </div>
  )
}

function StatesPreview() {
  const [values, setValues] = useState<string[]>([])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <CheckboxGroup value={values} onChange={setValues} label="With error" error="Please select at least one option">
        <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
      </CheckboxGroup>

      <CheckboxGroup value={values} onChange={setValues} label="Disabled" disabled>
        <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
      </CheckboxGroup>
    </div>
  )
}

function RequiredPreview() {
  const [values, setValues] = useState<string[]>([])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        label="Select required features"
        helper="Mark individual required options"
      >
        <CheckboxGroup.Option value="notifications" required>
          Enable Notifications
        </CheckboxGroup.Option>
        <CheckboxGroup.Option value="analytics">Enable Analytics</CheckboxGroup.Option>
        <CheckboxGroup.Option value="support" required>
          Request Support
        </CheckboxGroup.Option>
      </CheckboxGroup>
    </div>
  )
}

export const checkboxGroupSections: CheckboxGroupSection[] = [
  {
    code: `const [features, setFeatures] = useState<string[]>([]);

<CheckboxGroup
  value={features}
  onChange={setFeatures}
  label="Select features"
  helper="Choose all that apply"
>
  <CheckboxGroup.Option value="analytics">Analytics</CheckboxGroup.Option>
  <CheckboxGroup.Option value="api">API Access</CheckboxGroup.Option>
</CheckboxGroup>`,
    key: "basic",
    language: "tsx",
    preview: BasicPreview,
    title: "Basic Usage",
  },
  {
    code: `<CheckboxGroup direction="row">
  <CheckboxGroup.Option value="1">Option 1</CheckboxGroup.Option>
  <CheckboxGroup.Option value="2">Option 2</CheckboxGroup.Option>
</CheckboxGroup>`,
    key: "direction",
    language: "tsx",
    preview: DirectionPreview,
    title: "Direction",
  },
  {
    code: `<CheckboxGroup error="Error message">
  {/* options */}
</CheckboxGroup>

<CheckboxGroup disabled>
  {/* options */}
</CheckboxGroup>`,
    key: "states",
    language: "tsx",
    preview: StatesPreview,
    title: "States",
  },
  {
    code: `<CheckboxGroup label="Select required options">
  <CheckboxGroup.Option value="notifications" required>
    Enable Notifications *
  </CheckboxGroup.Option>
  <CheckboxGroup.Option value="analytics">
    Enable Analytics
  </CheckboxGroup.Option>
</CheckboxGroup>`,
    key: "required",
    language: "tsx",
    preview: RequiredPreview,
    title: "Required Options",
  },
]
