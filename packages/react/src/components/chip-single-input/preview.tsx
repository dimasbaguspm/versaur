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

function OverflowPreview() {
  const [value, setValue] = useState<string>("option1");

  return (
    <ChipSingleInput
      value={value}
      onChange={setValue}
      label="Overflow with nowrap"
      helper="Options wrap by default, disable with wrap={false}"
      wrap={false}
    >
      <ChipSingleInput.Option value="option1">
        Very Long Option Text
      </ChipSingleInput.Option>
      <ChipSingleInput.Option value="option2">
        Another Very Long Option
      </ChipSingleInput.Option>
      <ChipSingleInput.Option value="option3">
        One More Long Option
      </ChipSingleInput.Option>
      <ChipSingleInput.Option value="option4">
        Yet Another Very Long Option
      </ChipSingleInput.Option>
    </ChipSingleInput>
  );
}

function CustomGapPreview() {
  const [value4, setValue4] = useState<string>();
  const [value3, setValue3] = useState<string>();
  const [value1, setValue1] = useState<string>();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <ChipSingleInput
        value={value4}
        onChange={setValue4}
        label="Large gap (gap='4')"
        gap="4"
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
        value={value3}
        onChange={setValue3}
        label="Normal gap (gap='2')"
        gap="2"
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
        value={value1}
        onChange={setValue1}
        label="Small gap (gap='1')"
        gap="1"
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
    key: "overflow",
    title: "Overflow Handling",
    preview: OverflowPreview,
    code: `<ChipSingleInput
  value={value}
  onChange={setValue}
  label="Overflow with nowrap"
  wrap={false}
>
  <ChipSingleInput.Option value="option1">
    Very Long Option Text
  </ChipSingleInput.Option>
  {/* more options */}
</ChipSingleInput>`,
    language: "tsx",
  },
  {
    key: "customGap",
    title: "Custom Gap",
    preview: CustomGapPreview,
    code: `<ChipSingleInput gap="4">
  {/* options */}
</ChipSingleInput>

<ChipSingleInput gap="2">
  {/* options */}
</ChipSingleInput>

<ChipSingleInput gap="1">
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
