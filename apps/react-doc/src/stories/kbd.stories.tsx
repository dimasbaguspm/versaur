import type { Meta, StoryObj } from "@storybook/react"
import { Kbd } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["filled", "outline", "ghost"],
    },
  },
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Utilities/Kbd",
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Ctrl",
  },
}

export const Filled: Story = {
  args: {
    children: "Enter",
    variant: "filled",
  },
}

export const Outline: Story = {
  args: {
    children: "Esc",
    variant: "outline",
  },
}

export const Ghost: Story = {
  args: {
    children: "Tab",
    variant: "ghost",
  },
}

export const ExtraSmall: Story = {
  args: {
    children: "A",
    size: "xs",
  },
}

export const Small: Story = {
  args: {
    children: "B",
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    children: "C",
    size: "md",
  },
}

export const Large: Story = {
  args: {
    children: "D",
    size: "lg",
  },
}

export const Shift: Story = {
  args: {
    children: "Shift",
    variant: "filled",
    size: "md",
  },
}

export const Control: Story = {
  args: {
    children: "Ctrl",
    variant: "outline",
    size: "md",
  },
}

export const Alt: Story = {
  args: {
    children: "Alt",
    variant: "ghost",
    size: "sm",
  },
}

export const Combination: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <Kbd variant="filled">Ctrl</Kbd>
      <span>+</span>
      <Kbd variant="filled">K</Kbd>
    </div>
  ),
}
