import type { ComponentType } from "react";
import { Heading } from "./heading";

export interface HeadingSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function AsLevelsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>
    </div>
  );
}

function SizesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading as="h3" size="xs">Extra Small</Heading>
      <Heading as="h3" size="sm">Small</Heading>
      <Heading as="h3" size="base">Base</Heading>
      <Heading as="h3" size="lg">Large</Heading>
      <Heading as="h3" size="xl">Extra Large</Heading>
      <Heading as="h3" size="2xl">2X Large</Heading>
    </div>
  );
}

function WeightsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading as="h3" weight="normal">Normal Weight</Heading>
      <Heading as="h3" weight="medium">Medium Weight</Heading>
      <Heading as="h3" weight="semibold">Semibold Weight</Heading>
      <Heading as="h3" weight="bold">Bold Weight</Heading>
    </div>
  );
}

function IntentsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading as="h3" intent="default">Default Intent</Heading>
      <Heading as="h3" intent="muted">Muted Intent</Heading>
      <Heading as="h3" intent="danger">Danger Intent</Heading>
      <Heading as="h3" intent="success">Success Intent</Heading>
      <Heading as="h3" intent="warning">Warning Intent</Heading>
    </div>
  );
}

function CombinedPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading as="h1" intent="danger">Large Danger Heading</Heading>
      <Heading as="h4" size="2xl" weight="bold">
        H4 with 2XL Size
      </Heading>
      <Heading as="h2" weight="normal" intent="muted">
        Muted Lightweight H2
      </Heading>
    </div>
  );
}

export const headingSections: HeadingSection[] = [
  {
    key: "as-levels",
    title: "As Levels",
    preview: AsLevelsPreview,
    code: `<Heading as="h1">Heading 1</Heading>
<Heading as="h2">Heading 2</Heading>
<Heading as="h3">Heading 3</Heading>
<Heading as="h4">Heading 4</Heading>
<Heading as="h5">Heading 5</Heading>
<Heading as="h6">Heading 6</Heading>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<Heading as="h3" size="xs">Extra Small</Heading>
<Heading as="h3" size="sm">Small</Heading>
<Heading as="h3" size="base">Base</Heading>
<Heading as="h3" size="lg">Large</Heading>
<Heading as="h3" size="xl">Extra Large</Heading>
<Heading as="h3" size="2xl">2X Large</Heading>`,
    language: "tsx",
  },
  {
    key: "weights",
    title: "Weights",
    preview: WeightsPreview,
    code: `<Heading as="h3" weight="normal">Normal Weight</Heading>
<Heading as="h3" weight="medium">Medium Weight</Heading>
<Heading as="h3" weight="semibold">Semibold Weight</Heading>
<Heading as="h3" weight="bold">Bold Weight</Heading>`,
    language: "tsx",
  },
  {
    key: "intents",
    title: "Intents",
    preview: IntentsPreview,
    code: `<Heading as="h3" intent="default">Default Intent</Heading>
<Heading as="h3" intent="muted">Muted Intent</Heading>
<Heading as="h3" intent="danger">Danger Intent</Heading>
<Heading as="h3" intent="success">Success Intent</Heading>
<Heading as="h3" intent="warning">Warning Intent</Heading>`,
    language: "tsx",
  },
  {
    key: "combined",
    title: "Combined Examples",
    preview: CombinedPreview,
    code: `<Heading as="h1" intent="danger">Large Danger Heading</Heading>
<Heading as="h4" size="2xl" weight="bold">H4 with 2XL Size</Heading>
<Heading as="h2" weight="normal" intent="muted">Muted Lightweight H2</Heading>`,
    language: "tsx",
  },
];

export const headingProps = [
  {
    name: "as",
    type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
    default: "'h2'",
    description: "The heading level to render",
  },
  {
    name: "size",
    type: "'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'",
    default: "—",
    description: "Override the preset font-size",
  },
  {
    name: "weight",
    type: "'normal' | 'medium' | 'semibold' | 'bold'",
    default: "—",
    description: "Override the preset font-weight",
  },
  {
    name: "intent",
    type: "'default' | 'muted' | 'danger' | 'success' | 'warning'",
    default: "—",
    description: "Text color intent",
  },
];

export const headingInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function HeadingPreview() {
  return (
    <>
      {headingSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
