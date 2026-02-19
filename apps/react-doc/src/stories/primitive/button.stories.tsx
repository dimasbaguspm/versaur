import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@versaur/react/primitive"

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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
}

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
}

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
    variant: "primary",
  },
}
