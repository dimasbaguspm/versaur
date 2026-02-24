import type { Meta, StoryObj } from "@storybook/react"

import { Heading } from "../index"

const meta = {
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
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
  args: {
    children: "Heading component",
  },
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Heading",
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default heading component with h2 element
 */
export const Default: Story = {
  args: {
    children: "Default Heading",
    as: "h2",
  },
}

/**
 * All available heading levels demonstrated
 */
export const HeadingLevels: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading {...args} as="h1">
        Heading Level 1
      </Heading>
      <Heading {...args} as="h2">
        Heading Level 2
      </Heading>
      <Heading {...args} as="h3">
        Heading Level 3
      </Heading>
      <Heading {...args} as="h4">
        Heading Level 4
      </Heading>
      <Heading {...args} as="h5">
        Heading Level 5
      </Heading>
      <Heading {...args} as="h6">
        Heading Level 6
      </Heading>
    </div>
  ),
}

/**
 * All available sizes demonstrated
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading {...args} size="xs">
        Extra Small (xs)
      </Heading>
      <Heading {...args} size="sm">
        Small (sm)
      </Heading>
      <Heading {...args} size="base">
        Base
      </Heading>
      <Heading {...args} size="lg">
        Large (lg)
      </Heading>
      <Heading {...args} size="xl">
        Extra Large (xl)
      </Heading>
      <Heading {...args} size="2xl">
        2X Large (2xl)
      </Heading>
    </div>
  ),
}

/**
 * All available font weights demonstrated
 */
export const Weights: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading {...args} weight="normal">
        Normal Weight
      </Heading>
      <Heading {...args} weight="medium">
        Medium Weight
      </Heading>
      <Heading {...args} weight="semibold">
        Semibold Weight
      </Heading>
      <Heading {...args} weight="bold">
        Bold Weight
      </Heading>
    </div>
  ),
}

/**
 * All available color intents demonstrated
 */
export const Intents: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading {...args} intent="default">
        Default Intent
      </Heading>
      <Heading {...args} intent="primary">
        Primary Intent
      </Heading>
      <Heading {...args} intent="secondary">
        Secondary Intent
      </Heading>
      <Heading {...args} intent="success">
        Success Intent
      </Heading>
      <Heading {...args} intent="warning">
        Warning Intent
      </Heading>
      <Heading {...args} intent="danger">
        Danger Intent
      </Heading>
      <Heading {...args} intent="gray">
        Gray Intent
      </Heading>
      <Heading {...args} intent="black">
        Black Intent
      </Heading>
      <Heading {...args} intent="white" style={{ backgroundColor: "#333", padding: "0.5rem" }}>
        White Intent
      </Heading>
    </div>
  ),
}

/**
 * All available text case transformations demonstrated
 */
export const Cases: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading {...args} case="lower">
        lowercase text (lower)
      </Heading>
      <Heading {...args} case="upper">
        UPPERCASE TEXT (upper)
      </Heading>
      <Heading {...args} case="capitalize">
        capitalize first letter (capitalize)
      </Heading>
    </div>
  ),
}

/**
 * All available text decorations demonstrated
 */
export const Transforms: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading {...args} transform="underline">
        Underlined Heading
      </Heading>
      <Heading {...args} transform="overline">
        Overlined Heading
      </Heading>
      <Heading {...args} transform="line-through">
        Strikethrough Heading
      </Heading>
    </div>
  ),
}

/**
 * Combined styling example with multiple props
 */
export const Combined: Story = {
  args: {
    children: "Combined Styled Heading",
    size: "xl",
    weight: "bold",
    intent: "primary",
  },
}
