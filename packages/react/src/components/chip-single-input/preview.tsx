import { useState } from "react";
import type { ComponentType } from "react";
import { ChipSingleInput } from "./chip-single-input";

export interface ChipSingleInputSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function BasicPreview() {
  const [size, setSize] = useState<string>();

  return (
    <ChipSingleInput
      name="size"
      value={size}
      onChange={setSize}
      label="Select size"
      helper="Choose your preferred size"
    >
      <ChipSingleInput.Option value="xs">XS</ChipSingleInput.Option>
      <ChipSingleInput.Option value="s">S</ChipSingleInput.Option>
      <ChipSingleInput.Option value="m">M</ChipSingleInput.Option>
      <ChipSingleInput.Option value="l">L</ChipSingleInput.Option>
      <ChipSingleInput.Option value="xl">XL</ChipSingleInput.Option>
    </ChipSingleInput>
  );
}

function VariantsPreview() {
  const [value1, setValue1] = useState<string>("option1");
  const [value2, setValue2] = useState<string>("option1");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <ChipSingleInput
        value={value1}
        onChange={setValue1}
        label="Outline variant"
        variant="outline"
      >
        <ChipSingleInput.Option value="option1">
          Option 1
        </ChipSingleInput.Option>
        <ChipSingleInput.Option value="option2">
          Option 2
        </ChipSingleInput.Option>
        <ChipSingleInput.Option value="option3">
          Option 3
        </ChipSingleInput.Option>
      </ChipSingleInput>

      <ChipSingleInput
        value={value2}
        onChange={setValue2}
        label="Filled variant"
        variant="filled"
      >
        <ChipSingleInput.Option value="option1">
          Option 1
        </ChipSingleInput.Option>
        <ChipSingleInput.Option value="option2">
          Option 2
        </ChipSingleInput.Option>
        <ChipSingleInput.Option value="option3">
          Option 3
        </ChipSingleInput.Option>
      </ChipSingleInput>
    </div>
  );
}

function SizesPreview() {
  const [value, setValue] = useState<string>("medium");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <ChipSingleInput
        value={value}
        onChange={setValue}
        label="Small"
        size="small"
      >
        <ChipSingleInput.Option value="small">Small</ChipSingleInput.Option>
        <ChipSingleInput.Option value="medium">Medium</ChipSingleInput.Option>
        <ChipSingleInput.Option value="large">Large</ChipSingleInput.Option>
      </ChipSingleInput>

      <ChipSingleInput
        value={value}
        onChange={setValue}
        label="Large"
        size="large"
      >
        <ChipSingleInput.Option value="small">Small</ChipSingleInput.Option>
        <ChipSingleInput.Option value="medium">Medium</ChipSingleInput.Option>
        <ChipSingleInput.Option value="large">Large</ChipSingleInput.Option>
      </ChipSingleInput>
    </div>
  );
}

function StatesPreview() {
  const [value, setValue] = useState<string>();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <ChipSingleInput
        value={value}
        onChange={setValue}
        label="With error"
        error="Please select an option"
      >
        <ChipSingleInput.Option value="1">Option 1</ChipSingleInput.Option>
        <ChipSingleInput.Option value="2">Option 2</ChipSingleInput.Option>
      </ChipSingleInput>

      <ChipSingleInput
        value={value}
        onChange={setValue}
        label="Disabled"
        disabled
      >
        <ChipSingleInput.Option value="1">Option 1</ChipSingleInput.Option>
        <ChipSingleInput.Option value="2">Option 2</ChipSingleInput.Option>
      </ChipSingleInput>
    </div>
  );
}

export const chipSingleInputSections: ChipSingleInputSection[] = [
  {
    key: "basic",
    title: "Basic Usage",
    preview: BasicPreview,
    code: `const [size, setSize] = useState<string>();

<ChipSingleInput
  name="size"
  value={size}
  onChange={setSize}
  label="Select size"
>
  <ChipSingleInput.Option value="xs">XS</ChipSingleInput.Option>
  <ChipSingleInput.Option value="s">S</ChipSingleInput.Option>
  <ChipSingleInput.Option value="m">M</ChipSingleInput.Option>
</ChipSingleInput>`,
    language: "tsx",
  },
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<ChipSingleInput variant="outline">
  {/* options */}
</ChipSingleInput>

<ChipSingleInput variant="filled">
  {/* options */}
</ChipSingleInput>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<ChipSingleInput size="small">
  {/* options */}
</ChipSingleInput>`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<ChipSingleInput error="Error message">
  {/* options */}
</ChipSingleInput>

<ChipSingleInput disabled>
  {/* options */}
</ChipSingleInput>`,
    language: "tsx",
  },
];
