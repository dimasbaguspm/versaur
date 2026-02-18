import type { ComponentType } from "react"

import { Text } from "./text"

export interface TextSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

function AsElementsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text as="p">Paragraph text</Text>
      <Text as="span">Span text</Text>
      <Text as="small">Small text</Text>
      <Text as="strong">Strong text</Text>
      <Text as="em">Emphasized text</Text>
    </div>
  )
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
  )
}

function WeightsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text weight="normal">Normal Weight</Text>
      <Text weight="medium">Medium Weight</Text>
      <Text weight="semibold">Semibold Weight</Text>
      <Text weight="bold">Bold Weight</Text>
    </div>
  )
}
function CasePreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text case="upper">uppercase text transform</Text>
      <Text case="lower">LOWERCASE TEXT TRANSFORM</Text>
      <Text case="capitalize">capitalize text transform</Text>
    </div>
  )
}

function TransformPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text transform="underline">Underlined Text</Text>
      <Text transform="line-through">Line Through Text</Text>
      <Text transform="overline">Overlined Text</Text>
    </div>
  )
}
function IntentsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text intent="default">Default Intent</Text>
      <Text intent="gray">Gray Intent</Text>
      <Text intent="primary">Primary Intent</Text>
      <Text intent="secondary">Secondary Intent</Text>
      <Text intent="danger">Danger Intent</Text>
      <Text intent="success">Success Intent</Text>
      <Text intent="warning">Warning Intent</Text>
      <Text intent="white" style={{ backgroundColor: "#333", padding: "0.5rem" }}>
        White Intent
      </Text>
      <Text intent="black">Black Intent</Text>
    </div>
  )
}

export const textSections: TextSection[] = [
  {
    code: `<Text as="p">Paragraph text</Text>
<Text as="span">Span text</Text>
<Text as="small">Small text</Text>
<Text as="strong">Strong text</Text>
<Text as="em">Emphasized text</Text>`,
    key: "as-elements",
    language: "tsx",
    preview: AsElementsPreview,
    title: "As Elements",
  },
  {
    code: `<Text size="xs">Extra Small</Text>
<Text size="sm">Small</Text>
<Text size="base">Base</Text>
<Text size="lg">Large</Text>
<Text size="xl">Extra Large</Text>
<Text size="2xl">2X Large</Text>`,
    key: "sizes",
    language: "tsx",
    preview: SizesPreview,
    title: "Sizes",
  },
  {
    code: `<Text weight="normal">Normal Weight</Text>
<Text weight="medium">Medium Weight</Text>
<Text weight="semibold">Semibold Weight</Text>
<Text weight="bold">Bold Weight</Text>`,
    key: "weights",
    language: "tsx",
    preview: WeightsPreview,
    title: "Weights",
  },
  {
    code: `<Text intent="default">Default Intent</Text>
<Text intent="gray">Gray Intent</Text>
<Text intent="primary">Primary Intent</Text>
<Text intent="secondary">Secondary Intent</Text>
<Text intent="danger">Danger Intent</Text>
<Text intent="success">Success Intent</Text>
<Text intent="warning">Warning Intent</Text>
<Text intent="white">White Intent</Text>
<Text intent="black">Black Intent</Text>`,
    key: "intents",
    language: "tsx",
    preview: IntentsPreview,
    title: "Intents",
  },
  {
    code: `<Text case="upper">uppercase text transform</Text>
<Text case="lower">LOWERCASE TEXT TRANSFORM</Text>
<Text case="capitalize">capitalize text transform</Text>`,
    key: "case",
    language: "tsx",
    preview: CasePreview,
    title: "Case",
  },
  {
    code: `<Text transform="underline">Underlined Text</Text>
<Text transform="line-through">Line Through Text</Text>
<Text transform="overline">Overlined Text</Text>`,
    key: "transform",
    language: "tsx",
    preview: TransformPreview,
    title: "Transform",
  },
]

export const textProps = [
  {
    default: "'p'",
    description: "The HTML element to render",
    name: "as",
    type: "'p' | 'span' | 'small' | 'strong' | 'em'",
  },
  {
    default: "—",
    description: "Override the preset font-size",
    name: "size",
    type: "'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'",
  },
  {
    default: "—",
    description: "Override the preset font-weight",
    name: "weight",
    type: "'normal' | 'medium' | 'semibold' | 'bold'",
  },
  {
    default: "—",
    description: "Text color intent",
    name: "intent",
    type: "'default' | 'gray' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'white' | 'black'",
  },
  {
    default: "—",
    description: "Text transform case",
    name: "case",
    type: "'upper' | 'lower' | 'capitalize'",
  },
  {
    default: "—",
    description: "Text decoration transform",
    name: "transform",
    type: "'underline' | 'line-through' | 'overline'",
  },
]

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
  )
}
