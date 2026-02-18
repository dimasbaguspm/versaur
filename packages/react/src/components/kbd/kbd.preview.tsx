import type { ComponentType } from "react";
import { Kbd } from "./kbd";

export interface KbdSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function VariantsPreview() {
  return (
    <div style={{ alignItems: "center", display: "flex", gap: "1.5rem" }}>
      <Kbd variant="filled">Ctrl</Kbd>
      <Kbd variant="outline">Ctrl</Kbd>
      <Kbd variant="ghost">Ctrl</Kbd>
    </div>
  );
}

function SizesPreview() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <Kbd variant="filled" size="xs">
        XS
      </Kbd>
      <Kbd variant="filled" size="sm">
        Sm
      </Kbd>
      <Kbd variant="filled" size="md">
        Md
      </Kbd>
      <Kbd variant="filled" size="lg">
        Lg
      </Kbd>
    </div>
  );
}

function ShortcutPreview() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <span>Save file:</span>
      <Kbd variant="filled">Ctrl+S</Kbd>
    </div>
  );
}

export const kbdSections: KbdSection[] = [
  {
    code: `<Kbd variant="filled">Ctrl</Kbd>
<Kbd variant="outline">Ctrl</Kbd>
<Kbd variant="ghost">Ctrl</Kbd>`,
    key: "variants",
    language: "tsx",
    preview: VariantsPreview,
    title: "Variants",
  },
  {
    code: `<Kbd variant="filled" size="xs">XS</Kbd>
<Kbd variant="filled" size="sm">Sm</Kbd>
<Kbd variant="filled" size="md">Md</Kbd>
<Kbd variant="filled" size="lg">Lg</Kbd>`,
    key: "sizes",
    language: "tsx",
    preview: SizesPreview,
    title: "Sizes",
  },
  {
    code: `<span>Save file:</span>
<Kbd variant="filled">Ctrl+S</Kbd>`,
    key: "shortcut",
    language: "tsx",
    preview: ShortcutPreview,
    title: "Keyboard Shortcut",
  },
];

export const kbdProps = [
  {
    default: '"filled"',
    description: "Visual variant of the kbd element",
    name: "variant",
    type: '"filled" | "outline" | "ghost"',
  },
  {
    default: '"md"',
    description: "Size of the kbd element",
    name: "size",
    type: '"xs" | "sm" | "md" | "lg"',
  },
  {
    default: "-",
    description: "Keyboard key label (e.g., 'Ctrl', 'Cmd', 'Enter')",
    name: "children",
    type: "ReactNode",
  },
];
