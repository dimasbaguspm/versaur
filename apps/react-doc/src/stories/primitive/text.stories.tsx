import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "small", "em", "strong"],
    },
    case: {
      control: "select",
      options: ["lower", "upper", "capitalize"],
    },
    intent: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger", "gray", "black", "white"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl"],
    },
    transform: {
      control: "select",
      options: ["underline", "overline", "line-through"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
  },
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Text",
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default text component rendered as a span
 */
export const Default: Story = {
  args: {
    children: "This is a default text component",
  },
}

/**
 * All available HTML element types demonstrated
 */
export const HtmlElements: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} as="p">Rendered as paragraph (p)</Text>
      <Text {...args} as="span">Rendered as span</Text>
      <Text {...args} as="small">Rendered as small</Text>
      <Text {...args} as="em">Rendered as emphasis (em)</Text>
      <Text {...args} as="strong">Rendered as strong</Text>
    </div>
  ),
}

/**
 * All available sizes demonstrated
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} size="xs">Extra Small (xs)</Text>
      <Text {...args} size="sm">Small (sm)</Text>
      <Text {...args} size="base">Base</Text>
      <Text {...args} size="lg">Large (lg)</Text>
      <Text {...args} size="xl">Extra Large (xl)</Text>
      <Text {...args} size="2xl">2X Large (2xl)</Text>
    </div>
  ),
}

/**
 * All available font weights demonstrated
 */
export const Weights: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} weight="normal">Normal Weight</Text>
      <Text {...args} weight="medium">Medium Weight</Text>
      <Text {...args} weight="semibold">Semibold Weight</Text>
      <Text {...args} weight="bold">Bold Weight</Text>
    </div>
  ),
}

/**
 * All available color intents demonstrated
 */
export const Intents: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} intent="default">Default Intent</Text>
      <Text {...args} intent="primary">Primary Intent</Text>
      <Text {...args} intent="secondary">Secondary Intent</Text>
      <Text {...args} intent="success">Success Intent</Text>
      <Text {...args} intent="warning">Warning Intent</Text>
      <Text {...args} intent="danger">Danger Intent</Text>
      <Text {...args} intent="gray">Gray Intent</Text>
      <Text {...args} intent="black">Black Intent</Text>
      <Text {...args} intent="white" style={{ backgroundColor: "#333", padding: "0.5rem" }}>White Intent</Text>
    </div>
  ),
}

/**
 * All available text case transformations demonstrated
 */
export const Cases: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} case="lower">lowercase text (lower)</Text>
      <Text {...args} case="upper">uppercase text (upper)</Text>
      <Text {...args} case="capitalize">capitalize first letter (capitalize)</Text>
    </div>
  ),
}

/**
 * All available text decorations demonstrated
 */
export const Transforms: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text {...args} transform="underline">Underlined text</Text>
      <Text {...args} transform="overline">Overlined text</Text>
      <Text {...args} transform="line-through">Strikethrough text</Text>
    </div>
  ),
}

/**
 * Combined styling example with multiple props
 */
export const Combined: Story = {
  args: {
    children: "Styled text",
    size: "lg",
    weight: "bold",
    intent: "primary",
    case: "upper",
    transform: "underline",
  },
}
