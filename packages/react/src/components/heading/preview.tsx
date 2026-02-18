import type { ComponentType } from "react"

import { Heading } from "./heading"

export interface HeadingSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
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
  )
}

function SizesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading as="h3" size="xs">
        Extra Small
      </Heading>
      <Heading as="h3" size="sm">
        Small
      </Heading>
      <Heading as="h3" size="base">
        Base
      </Heading>
      <Heading as="h3" size="lg">
        Large
      </Heading>
      <Heading as="h3" size="xl">
        Extra Large
      </Heading>
      <Heading as="h3" size="2xl">
        2X Large
      </Heading>
    </div>
  )
}

function WeightsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading as="h3" weight="normal">
        Normal Weight
      </Heading>
      <Heading as="h3" weight="medium">
        Medium Weight
      </Heading>
      <Heading as="h3" weight="semibold">
        Semibold Weight
      </Heading>
      <Heading as="h3" weight="bold">
        Bold Weight
      </Heading>
    </div>
  )
}

function IntentsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading as="h3" intent="default">
        Default Intent
      </Heading>
      <Heading as="h3" intent="gray">
        Gray Intent
      </Heading>
      <Heading as="h3" intent="primary">
        Primary Intent
      </Heading>
      <Heading as="h3" intent="secondary">
        Secondary Intent
      </Heading>
      <Heading as="h3" intent="danger">
        Danger Intent
      </Heading>
      <Heading as="h3" intent="success">
        Success Intent
      </Heading>
      <Heading as="h3" intent="warning">
        Warning Intent
      </Heading>
      <Heading as="h3" intent="white" style={{ backgroundColor: "#333", padding: "0.5rem" }}>
        White Intent
      </Heading>
      <Heading as="h3" intent="black">
        Black Intent
      </Heading>
    </div>
  )
}

function CasePreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading as="h3" case="upper">
        uppercase text transform
      </Heading>
      <Heading as="h3" case="lower">
        LOWERCASE TEXT TRANSFORM
      </Heading>
      <Heading as="h3" case="capitalize">
        capitalize text transform
      </Heading>
    </div>
  )
}

function TransformPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading as="h3" transform="underline">
        Underlined Text
      </Heading>
      <Heading as="h3" transform="line-through">
        Line Through Text
      </Heading>
      <Heading as="h3" transform="overline">
        Overlined Text
      </Heading>
    </div>
  )
}

export const headingSections: HeadingSection[] = [
  {
    code: `<Heading as="h1">Heading 1</Heading>
<Heading as="h2">Heading 2</Heading>
<Heading as="h3">Heading 3</Heading>
<Heading as="h4">Heading 4</Heading>
<Heading as="h5">Heading 5</Heading>
<Heading as="h6">Heading 6</Heading>`,
    key: "as-levels",
    language: "tsx",
    preview: AsLevelsPreview,
    title: "As Levels",
  },
  {
    code: `<Heading as="h3" size="xs">Extra Small</Heading>
<Heading as="h3" size="sm">Small</Heading>
<Heading as="h3" size="base">Base</Heading>
<Heading as="h3" size="lg">Large</Heading>
<Heading as="h3" size="xl">Extra Large</Heading>
<Heading as="h3" size="2xl">2X Large</Heading>`,
    key: "sizes",
    language: "tsx",
    preview: SizesPreview,
    title: "Sizes",
  },
  {
    code: `<Heading as="h3" weight="normal">Normal Weight</Heading>
<Heading as="h3" weight="medium">Medium Weight</Heading>
<Heading as="h3" weight="semibold">Semibold Weight</Heading>
<Heading as="h3" weight="bold">Bold Weight</Heading>`,
    key: "weights",
    language: "tsx",
    preview: WeightsPreview,
    title: "Weights",
  },
  {
    code: `<Heading as="h3" intent="default">Default Intent</Heading>
<Heading as="h3" intent="gray">Gray Intent</Heading>
<Heading as="h3" intent="primary">Primary Intent</Heading>
<Heading as="h3" intent="secondary">Secondary Intent</Heading>
<Heading as="h3" intent="danger">Danger Intent</Heading>
<Heading as="h3" intent="success">Success Intent</Heading>
<Heading as="h3" intent="warning">Warning Intent</Heading>
<Heading as="h3" intent="white">White Intent</Heading>
<Heading as="h3" intent="black">Black Intent</Heading>`,
    key: "intents",
    language: "tsx",
    preview: IntentsPreview,
    title: "Intents",
  },
  {
    code: `<Heading as="h3" case="upper">uppercase text transform</Heading>
<Heading as="h3" case="lower">LOWERCASE TEXT TRANSFORM</Heading>
<Heading as="h3" case="capitalize">capitalize text transform</Heading>`,
    key: "case",
    language: "tsx",
    preview: CasePreview,
    title: "Case",
  },
  {
    code: `<Heading as="h3" transform="underline">Underlined Text</Heading>
<Heading as="h3" transform="line-through">Line Through Text</Heading>
<Heading as="h3" transform="overline">Overlined Text</Heading>`,
    key: "transform",
    language: "tsx",
    preview: TransformPreview,
    title: "Transform",
  },
]

export const headingProps = [
  {
    default: "'h2'",
    description: "The heading level to render",
    name: "as",
    type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
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
  )
}
