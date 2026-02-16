import { useState } from "react";
import type { ComponentType } from "react";
import { CheckboxGroup } from "./checkbox-group";

export interface CheckboxGroupSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function BasicPreview() {
  const [features, setFeatures] = useState<string[]>(["analytics"]);

  return (
    <CheckboxGroup
      value={features}
      onChange={setFeatures}
      label="Select features"
      helper="Choose all that apply"
    >
      <CheckboxGroup.Option value="analytics">
        Advanced Analytics
      </CheckboxGroup.Option>
      <CheckboxGroup.Option value="api">API Access</CheckboxGroup.Option>
      <CheckboxGroup.Option value="support">
        Priority Support
      </CheckboxGroup.Option>
      <CheckboxGroup.Option value="customization">
        Custom Branding
      </CheckboxGroup.Option>
    </CheckboxGroup>
  );
}

function DirectionPreview() {
  const [values, setValues] = useState<string[]>(["option1"]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        label="Column direction"
        direction="column"
      >
        <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
      </CheckboxGroup>

      <CheckboxGroup
        value={values}
        onChange={setValues}
        label="Row direction"
        direction="row"
      >
        <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
      </CheckboxGroup>
    </div>
  );
}

function StatesPreview() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <CheckboxGroup
        value={values}
        onChange={setValues}
        label="With error"
        error="Please select at least one option"
      >
        <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
      </CheckboxGroup>

      <CheckboxGroup
        value={values}
        onChange={setValues}
        label="Disabled"
        disabled
      >
        <CheckboxGroup.Option value="option1">Option 1</CheckboxGroup.Option>
        <CheckboxGroup.Option value="option2">Option 2</CheckboxGroup.Option>
      </CheckboxGroup>
    </div>
  );
}

export const checkboxGroupSections: CheckboxGroupSection[] = [
  {
    key: "basic",
    title: "Basic Usage",
    preview: BasicPreview,
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
    language: "tsx",
  },
  {
    key: "direction",
    title: "Direction",
    preview: DirectionPreview,
    code: `<CheckboxGroup direction="row">
  <CheckboxGroup.Option value="1">Option 1</CheckboxGroup.Option>
  <CheckboxGroup.Option value="2">Option 2</CheckboxGroup.Option>
</CheckboxGroup>`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<CheckboxGroup error="Error message">
  {/* options */}
</CheckboxGroup>

<CheckboxGroup disabled>
  {/* options */}
</CheckboxGroup>`,
    language: "tsx",
  },
];
