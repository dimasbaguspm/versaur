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
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
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
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
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
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <span>Save file:</span>
      <Kbd variant="filled">Ctrl+S</Kbd>
    </div>
  );
}

export const kbdSections: KbdSection[] = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<Kbd variant="filled">Ctrl</Kbd>
<Kbd variant="outline">Ctrl</Kbd>
<Kbd variant="ghost">Ctrl</Kbd>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<Kbd variant="filled" size="xs">XS</Kbd>
<Kbd variant="filled" size="sm">Sm</Kbd>
<Kbd variant="filled" size="md">Md</Kbd>
<Kbd variant="filled" size="lg">Lg</Kbd>`,
    language: "tsx",
  },
  {
    key: "shortcut",
    title: "Keyboard Shortcut",
    preview: ShortcutPreview,
    code: `<span>Save file:</span>
<Kbd variant="filled">Ctrl+S</Kbd>`,
    language: "tsx",
  },
];

export const kbdProps = [
  {
    name: "variant",
    type: '"filled" | "outline" | "ghost"',
    default: '"filled"',
    description: "Visual variant of the kbd element",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg"',
    default: '"md"',
    description: "Size of the kbd element",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "-",
    description: "Keyboard key label (e.g., 'Ctrl', 'Cmd', 'Enter')",
  },
];
