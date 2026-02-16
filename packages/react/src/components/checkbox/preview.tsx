import { useState } from "react";
import type { ComponentType } from "react";
import { Checkbox } from "./checkbox";

export interface CheckboxSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function VariantsPreview() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Checkbox
        variant="outline"
        checked={checked1}
        onChange={(e) => setChecked1(e.target.checked)}
      >
        Outline checkbox
      </Checkbox>
      <Checkbox
        variant="filled"
        checked={checked2}
        onChange={(e) => setChecked2(e.target.checked)}
      >
        Filled checkbox
      </Checkbox>
    </div>
  );
}

function SizesPreview() {
  const [checked, setChecked] = useState([false, false, false]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Checkbox
        size="small"
        checked={checked[0]}
        onChange={(e) => setChecked([e.target.checked, checked[1], checked[2]])}
      >
        Small checkbox
      </Checkbox>
      <Checkbox
        size="large"
        checked={checked[2]}
        onChange={(e) => setChecked([checked[0], checked[1], e.target.checked])}
      >
        Large checkbox
      </Checkbox>
    </div>
  );
}

function StatesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Checkbox>Unchecked</Checkbox>
      <Checkbox checked>Checked</Checkbox>
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox disabled checked>
        Disabled + Checked
      </Checkbox>
      <Checkbox invalid>Invalid</Checkbox>
    </div>
  );
}

export const checkboxSections: CheckboxSection[] = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<Checkbox variant="outline">Outline checkbox</Checkbox>
<Checkbox variant="filled">Filled checkbox</Checkbox>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<Checkbox size="small">Small checkbox</Checkbox>
<Checkbox size="medium">Medium checkbox</Checkbox>
<Checkbox size="large">Large checkbox</Checkbox>`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<Checkbox>Unchecked</Checkbox>
<Checkbox checked>Checked</Checkbox>
<Checkbox disabled>Disabled</Checkbox>
<Checkbox invalid>Invalid</Checkbox>`,
    language: "tsx",
  },
];
