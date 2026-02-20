import type { Meta, StoryObj } from "@storybook/react"
import { StarIcon } from "@versaur/icons"
import { ButtonIcon } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
  },
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/ButtonIcon",
  args: {
    as: StarIcon,
    "aria-label": "Button icon",
  },
} satisfies Meta<typeof ButtonIcon>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default button icon with primary variant and medium size.
 */
export const Default: Story = {
  args: {
    as: StarIcon,
    "aria-label": "Add to favorites",
    variant: "primary",
  },
}

/**
 * Showcase all available color variants: primary, secondary, outline, ghost, and danger.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <ButtonIcon {...args} variant="primary" />
      <ButtonIcon {...args} variant="secondary" />
      <ButtonIcon {...args} variant="outline" />
      <ButtonIcon {...args} variant="ghost" />
      <ButtonIcon {...args} variant="danger" />
    </div>
  ),
}

/**
 * Showcase all available sizes: small and medium.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <ButtonIcon {...args} size="small" variant="primary" />
      <ButtonIcon {...args} size="medium" variant="primary" />
    </div>
  ),
}

/**
 * Showcase button icon states: loading and disabled.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <ButtonIcon {...args} variant="primary" />
      <ButtonIcon {...args} loading variant="primary" />
      <ButtonIcon {...args} disabled variant="primary" />
    </div>
  ),
}
