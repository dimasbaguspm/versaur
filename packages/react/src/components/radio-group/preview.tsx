import { useState } from "react";
import type { ComponentType } from "react";
import { RadioGroup } from "./radio-group";

export interface RadioGroupSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function BasicPreview() {
  const [plan, setPlan] = useState<string>("basic");

  return (
    <RadioGroup
      name="plan"
      value={plan}
      onChange={setPlan}
      label="Choose a plan"
      helper="Select the plan that works for you"
    >
      <RadioGroup.Option value="basic">Basic Plan - $10/month</RadioGroup.Option>
      <RadioGroup.Option value="pro">Pro Plan - $25/month</RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        Enterprise - Custom pricing
      </RadioGroup.Option>
    </RadioGroup>
  );
}

function DirectionPreview() {
  const [direction, setDirection] = useState<string>("horizontal");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <RadioGroup
        name="direction-col"
        value={direction}
        onChange={setDirection}
        label="Column direction"
        direction="column"
      >
        <RadioGroup.Option value="option1">Option 1</RadioGroup.Option>
        <RadioGroup.Option value="option2">Option 2</RadioGroup.Option>
      </RadioGroup>

      <RadioGroup
        name="direction-row"
        value={direction}
        onChange={setDirection}
        label="Row direction"
        direction="row"
      >
        <RadioGroup.Option value="option1">Option 1</RadioGroup.Option>
        <RadioGroup.Option value="option2">Option 2</RadioGroup.Option>
      </RadioGroup>
    </div>
  );
}

function StatesPreview() {
  const [value, setValue] = useState<string>("option1");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <RadioGroup
        name="error-demo"
        value={value}
        onChange={setValue}
        label="With error"
        error="Please select an option"
      >
        <RadioGroup.Option value="option1">Option 1</RadioGroup.Option>
        <RadioGroup.Option value="option2">Option 2</RadioGroup.Option>
      </RadioGroup>

      <RadioGroup
        name="disabled-demo"
        value={value}
        onChange={setValue}
        label="Disabled"
        disabled
      >
        <RadioGroup.Option value="option1">Option 1</RadioGroup.Option>
        <RadioGroup.Option value="option2">Option 2</RadioGroup.Option>
      </RadioGroup>
    </div>
  );
}

export const radioGroupSections: RadioGroupSection[] = [
  {
    key: "basic",
    title: "Basic Usage",
    preview: BasicPreview,
    code: `const [plan, setPlan] = useState("basic");

<RadioGroup
  name="plan"
  value={plan}
  onChange={setPlan}
  label="Choose a plan"
  helper="Select the plan that works for you"
>
  <RadioGroup.Option value="basic">Basic Plan</RadioGroup.Option>
  <RadioGroup.Option value="pro">Pro Plan</RadioGroup.Option>
</RadioGroup>`,
    language: "tsx",
  },
  {
    key: "direction",
    title: "Direction",
    preview: DirectionPreview,
    code: `<RadioGroup direction="row">
  <RadioGroup.Option value="1">Option 1</RadioGroup.Option>
  <RadioGroup.Option value="2">Option 2</RadioGroup.Option>
</RadioGroup>`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<RadioGroup error="Error message">
  {/* options */}
</RadioGroup>

<RadioGroup disabled>
  {/* options */}
</RadioGroup>`,
    language: "tsx",
  },
];
