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

function VariantsPreview() {
  const [values1, setValues1] = useState<string[]>(["option1"]);
  const [values2, setValues2] = useState<string[]>(["option1"]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <ChipMultipleInput
        value={values1}
        onChange={setValues1}
        label="Outline variant"
        variant="outline"
      >
        <ChipMultipleInput.Option value="option1">
          Option 1
        </ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="option2">
          Option 2
        </ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="option3">
          Option 3
        </ChipMultipleInput.Option>
      </ChipMultipleInput>

      <ChipMultipleInput
        value={values2}
        onChange={setValues2}
        label="Filled variant"
        variant="filled"
      >
        <ChipMultipleInput.Option value="option1">
          Option 1
        </ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="option2">
          Option 2
        </ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="option3">
          Option 3
        </ChipMultipleInput.Option>
      </ChipMultipleInput>
    </div>
  );
}

function SizesPreview() {
  const [values, setValues] = useState<string[]>(["medium"]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <ChipMultipleInput
        value={values}
        onChange={setValues}
        label="Small"
        size="small"
      >
        <ChipMultipleInput.Option value="small">Small</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="medium">
          Medium
        </ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="large">Large</ChipMultipleInput.Option>
      </ChipMultipleInput>

      <ChipMultipleInput
        value={values}
        onChange={setValues}
        label="Large"
        size="large"
      >
        <ChipMultipleInput.Option value="small">Small</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="medium">
          Medium
        </ChipMultipleInput.Option>
        <ChipMultipleInput.Option value="large">Large</ChipMultipleInput.Option>
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
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<ChipMultipleInput variant="outline">
  {/* options */}
</ChipMultipleInput>

<ChipMultipleInput variant="filled">
  {/* options */}
</ChipMultipleInput>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<ChipMultipleInput size="small">
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
