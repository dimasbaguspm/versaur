import type { ComponentType } from "react";
import { Text } from "./text";

export interface TextSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function AsElementsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text as="p">Paragraph text</Text>
      <Text as="span">Span text</Text>
      <Text as="small">Small text</Text>
      <Text as="strong">Strong text</Text>
      <Text as="em">Emphasized text</Text>
      <Text as="label">Label text</Text>
    </div>
  );
}

function SizesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text size="xs">Extra Small</Text>
      <Text size="sm">Small</Text>
      <Text size="base">Base</Text>
      <Text size="lg">Large</Text>
      <Text size="xl">Extra Large</Text>
      <Text size="2xl">2X Large</Text>
    </div>
  );
}

function WeightsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text weight="normal">Normal Weight</Text>
      <Text weight="medium">Medium Weight</Text>
      <Text weight="semibold">Semibold Weight</Text>
      <Text weight="bold">Bold Weight</Text>
    </div>
  );
}

function IntentsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text intent="default">Default Intent</Text>
      <Text intent="muted">Muted Intent</Text>
      <Text intent="danger">Danger Intent</Text>
      <Text intent="success">Success Intent</Text>
      <Text intent="warning">Warning Intent</Text>
    </div>
  );
}

function CombinedPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text as="small" intent="muted">Muted small text</Text>
      <Text as="strong" size="lg" intent="danger">
        Large danger strong text
      </Text>
      <Text as="label" weight="bold" htmlFor="example">
        Bold label
      </Text>
    </div>
  );
}

export const textSections: TextSection[] = [
  {
    key: "as-elements",
    title: "As Elements",
    preview: AsElementsPreview,
    code: `<Text as="p">Paragraph text</Text>
<Text as="span">Span text</Text>
<Text as="small">Small text</Text>
<Text as="strong">Strong text</Text>
<Text as="em">Emphasized text</Text>
<Text as="label">Label text</Text>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<Text size="xs">Extra Small</Text>
<Text size="sm">Small</Text>
<Text size="base">Base</Text>
<Text size="lg">Large</Text>
<Text size="xl">Extra Large</Text>
<Text size="2xl">2X Large</Text>`,
    language: "tsx",
  },
  {
    key: "weights",
    title: "Weights",
    preview: WeightsPreview,
    code: `<Text weight="normal">Normal Weight</Text>
<Text weight="medium">Medium Weight</Text>
<Text weight="semibold">Semibold Weight</Text>
<Text weight="bold">Bold Weight</Text>`,
    language: "tsx",
  },
  {
    key: "intents",
    title: "Intents",
    preview: IntentsPreview,
    code: `<Text intent="default">Default Intent</Text>
<Text intent="muted">Muted Intent</Text>
<Text intent="danger">Danger Intent</Text>
<Text intent="success">Success Intent</Text>
<Text intent="warning">Warning Intent</Text>`,
    language: "tsx",
  },
  {
    key: "combined",
    title: "Combined Examples",
    preview: CombinedPreview,
    code: `<Text as="small" intent="muted">Muted small text</Text>
<Text as="strong" size="lg" intent="danger">Large danger strong text</Text>
<Text as="label" weight="bold" htmlFor="example">Bold label</Text>`,
    language: "tsx",
  },
];

export const textProps = [
  {
    name: "as",
    type: "'p' | 'span' | 'small' | 'strong' | 'em' | 'label'",
    default: "'p'",
    description: "The HTML element to render",
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
  {
    name: "htmlFor",
    type: "string",
    default: "—",
    description: "Associated form element ID (only applies when as=\"label\")",
  },
];

export const textInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function TextPreview() {
  return (
    <>
      {textSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
