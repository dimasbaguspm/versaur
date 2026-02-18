import { useState } from "react"
import type { ComponentType } from "react"

import { Radio } from "./radio"

export interface RadioSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

function VariantsPreview() {
  const [variant1, setVariant1] = useState("option1")
  const [variant2, setVariant2] = useState("option1")

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <h4 style={{ marginBottom: "0.5rem" }}>Outline</h4>
        <Radio
          name="outline-demo"
          value="option1"
          checked={variant1 === "option1"}
          onChange={(e) => setVariant1(e.target.value)}
          variant="outline"
        >
          Outline radio option
        </Radio>
      </div>
      <div>
        <h4 style={{ marginBottom: "0.5rem" }}>Filled</h4>
        <Radio
          name="filled-demo"
          value="option1"
          checked={variant2 === "option1"}
          onChange={(e) => setVariant2(e.target.value)}
          variant="filled"
        >
          Filled radio option
        </Radio>
      </div>
    </div>
  )
}

function SizesPreview() {
  const [size, setSize] = useState("medium")

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Radio
        name="size-demo"
        value="small"
        checked={size === "small"}
        onChange={(e) => setSize(e.target.value)}
        size="small"
      >
        Small radio
      </Radio>
      <Radio
        name="size-demo"
        value="medium"
        checked={size === "medium"}
        onChange={(e) => setSize(e.target.value)}
        size="medium"
      >
        Medium radio
      </Radio>
      <Radio
        name="size-demo"
        value="large"
        checked={size === "large"}
        onChange={(e) => setSize(e.target.value)}
        size="large"
      >
        Large radio
      </Radio>
    </div>
  )
}

function StatesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Radio name="states" value="unchecked">
        Unchecked
      </Radio>
      <Radio name="states" value="checked" checked>
        Checked
      </Radio>
      <Radio name="states" value="disabled" disabled>
        Disabled
      </Radio>
      <Radio name="states" value="disabled-checked" disabled checked>
        Disabled + Checked
      </Radio>
      <Radio name="states" value="invalid" invalid>
        Invalid
      </Radio>
    </div>
  )
}

export const radioSections: RadioSection[] = [
  {
    code: `<Radio variant="outline">Outline radio</Radio>
<Radio variant="filled">Filled radio</Radio>`,
    key: "variants",
    language: "tsx",
    preview: VariantsPreview,
    title: "Variants",
  },
  {
    code: `<Radio size="small">Small radio</Radio>
<Radio size="medium">Medium radio</Radio>
<Radio size="large">Large radio</Radio>`,
    key: "sizes",
    language: "tsx",
    preview: SizesPreview,
    title: "Sizes",
  },
  {
    code: `<Radio>Unchecked</Radio>
<Radio checked>Checked</Radio>
<Radio disabled>Disabled</Radio>
<Radio invalid>Invalid</Radio>`,
    key: "states",
    language: "tsx",
    preview: StatesPreview,
    title: "States",
  },
]
