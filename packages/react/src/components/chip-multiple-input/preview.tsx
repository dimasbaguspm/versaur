import { useState } from "react";
import type { ComponentType } from "react";
import { ChipMultipleInput } from "./chip-multiple-input";

export interface ChipMultipleInputSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function BasicPreview() {
  const [interests, setInterests] = useState<string[]>(["design"]);

  return (
    <ChipMultipleInput
      name="interests"
      value={interests}
      onChange={setInterests}
      label="Select interests"
      helper="Choose all that apply"
    >
      <ChipMultipleInput.Option value="design">Design</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value="dev">
        Development
      </ChipMultipleInput.Option>
      <ChipMultipleInput.Option value="marketing">
        Marketing
      </ChipMultipleInput.Option>
      <ChipMultipleInput.Option value="sales">Sales</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value="support">
        Support
      </ChipMultipleInput.Option>
    </ChipMultipleInput>
  );
}

function OverflowPreview() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <ChipMultipleInput
      value={values}
      onChange={setValues}
      label="Horizontal scroll (wrap disabled)"
      wrap={false}
    >
      <ChipMultipleInput.Option value="opt1">
        Very long option text number one
      </ChipMultipleInput.Option>
      <ChipMultipleInput.Option value="opt2">
        Very long option text number two
      </ChipMultipleInput.Option>
      <ChipMultipleInput.Option value="opt3">
        Very long option text number three
      </ChipMultipleInput.Option>
      <ChipMultipleInput.Option value="opt4">
        Very long option text number four
      </ChipMultipleInput.Option>
    </ChipMultipleInput>
  );
}

function CustomGapPreview() {
  const [values1, setValues1] = useState<string[]>([]);
  const [values2, setValues2] = useState<string[]>([]);
  const [values3, setValues3] = useState<string[]>([]);
  const [values4, setValues4] = useState<string[]>([]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <ChipMultipleInput
        value={values1}
        onChange={setValues1}
        label="Gap 1"
        gap="1"
      >
        <ChipMultipleInput.Option value="a">Option A</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="b">Option B</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="c">Option C</ChipMultipleInput.Option>
      </ChipMultipleInput>

      <ChipMultipleInput
        value={values2}
        onChange={setValues2}
        label="Gap 2 (default)"
        gap="2"
      >
        <ChipMultipleInput.Option value="a">Option A</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="b">Option B</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="c">Option C</ChipMultipleInput.Option>
      </ChipMultipleInput>

      <ChipMultipleInput
        value={values3}
        onChange={setValues3}
        label="Gap 3"
        gap="3"
      >
        <ChipMultipleInput.Option value="a">Option A</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="b">Option B</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="c">Option C</ChipMultipleInput.Option>
      </ChipMultipleInput>

      <ChipMultipleInput
        value={values4}
        onChange={setValues4}
        label="Gap 4"
        gap="4"
      >
        <ChipMultipleInput.Option value="a">Option A</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="b">Option B</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="c">Option C</ChipMultipleInput.Option>
      </ChipMultipleInput>
    </div>
  );
}

function StatesPreview() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <ChipMultipleInput
        value={values}
        onChange={setValues}
        label="With error"
        error="Please select at least one option"
      >
        <ChipMultipleInput.Option value="1">Option 1</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="2">Option 2</ChipMultipleInput.Option>
      </ChipMultipleInput>

      <ChipMultipleInput
        value={values}
        onChange={setValues}
        label="Disabled"
        disabled
      >
        <ChipMultipleInput.Option value="1">Option 1</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="2">Option 2</ChipMultipleInput.Option>
      </ChipMultipleInput>
    </div>
  );
}

export const chipMultipleInputSections: ChipMultipleInputSection[] = [
  {
    key: "basic",
    title: "Basic Usage",
    preview: BasicPreview,
    code: `const [interests, setInterests] = useState<string[]>([]);

<ChipMultipleInput
  name="interests"
  value={interests}
  onChange={setInterests}
  label="Select interests"
>
  <ChipMultipleInput.Option value="design">Design</ChipMultipleInput.Option>
  <ChipMultipleInput.Option value="dev">Development</ChipMultipleInput.Option>
</ChipMultipleInput>`,
    language: "tsx",
  },
  {
    key: "overflow",
    title: "Horizontal Scroll",
    preview: OverflowPreview,
    code: `<ChipMultipleInput wrap={false}>
  <ChipMultipleInput.Option value="opt1">
    Very long option text number one
  </ChipMultipleInput.Option>
  <ChipMultipleInput.Option value="opt2">
    Very long option text number two
  </ChipMultipleInput.Option>
</ChipMultipleInput>`,
    language: "tsx",
  },
  {
    key: "gap",
    title: "Custom Gap",
    preview: CustomGapPreview,
    code: `<ChipMultipleInput gap="1">
  {/* options */}
</ChipMultipleInput>

<ChipMultipleInput gap="2">
  {/* options */}
</ChipMultipleInput>

<ChipMultipleInput gap="3">
  {/* options */}
</ChipMultipleInput>

<ChipMultipleInput gap="4">
  {/* options */}
</ChipMultipleInput>`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<ChipMultipleInput error="Error message">
  {/* options */}
</ChipMultipleInput>

<ChipMultipleInput disabled>
  {/* options */}
</ChipMultipleInput>`,
    language: "tsx",
  },
];
