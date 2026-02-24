import type { Meta, StoryObj } from "@storybook/react"
import { CheckIcon, ChevronRightIcon } from "@versaur/icons"

import { Button, Icon } from "../index"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
    },
  },
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Button",
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default button with primary variant and medium size.
 */
export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
}

/**
 * Showcase all available color variants: primary, secondary, outline, ghost, and danger.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="danger">
        Danger
      </Button>
    </div>
  ),
}

/**
 * Showcase all available sizes: small, medium, and large.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
    </div>
  ),
}

/**
 * Showcase button states: disabled.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button {...args} variant="primary">
        Normal
      </Button>
      <Button {...args} variant="primary" disabled>
        Disabled
      </Button>
      <Button {...args} variant="primary" loading>
        Loading
      </Button>
    </div>
  ),
}

/**
 * Button with various icon configurations: left, right, both, and icon-only.
 */
export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <Button {...args} variant="primary" leftIcon={<Icon as={CheckIcon} />}>
        Done
      </Button>
      <Button {...args} variant="primary" rightIcon={<Icon as={ChevronRightIcon} />}>
        Next
      </Button>
      <Button {...args} variant="primary" leftIcon={<Icon as={CheckIcon} />} rightIcon={<Icon as={ChevronRightIcon} />}>
        Complete
      </Button>
      <Button {...args} variant="primary" leftIcon={<Icon as={CheckIcon} />} />
    </div>
  ),
}
