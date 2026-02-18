import { useState } from "react"
import type { ComponentType } from "react"

import { Checkbox } from "./checkbox"

export interface CheckboxSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

function StatesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Checkbox>Unchecked</Checkbox>
      <Checkbox checked>Checked</Checkbox>
      <Checkbox required>Required</Checkbox>
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox disabled checked>
        Disabled + Checked
      </Checkbox>
      <Checkbox invalid>Invalid</Checkbox>
    </div>
  )
}

function IntermediatePreview() {
  const [checked, setChecked] = useState(false)

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        ref={(el) => {
          if (el) {
            el.indeterminate = !checked
          }
        }}
      >
        Indeterminate (select all)
      </Checkbox>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginLeft: "2rem",
        }}
      >
        <Checkbox>Option 1</Checkbox>
        <Checkbox>Option 2</Checkbox>
        <Checkbox>Option 3</Checkbox>
      </div>
    </div>
  )
}

export const checkboxSections: CheckboxSection[] = [
  {
    code: `<Checkbox>Unchecked</Checkbox>
<Checkbox checked>Checked</Checkbox>
<Checkbox required>Required</Checkbox>
<Checkbox disabled>Disabled</Checkbox>
<Checkbox invalid>Invalid</Checkbox>`,
    key: "states",
    language: "tsx",
    preview: StatesPreview,
    title: "States",
  },
  {
    code: `<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  ref={(el) => {
    if (el) el.indeterminate = !checked;
  }}
>
  Indeterminate (select all)
</Checkbox>`,
    key: "intermediate",
    language: "tsx",
    preview: IntermediatePreview,
    title: "Indeterminate",
  },
]
