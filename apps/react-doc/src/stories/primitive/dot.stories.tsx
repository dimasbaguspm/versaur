import type { Meta, StoryObj } from "@storybook/react"
import { Dot } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "success", "warning", "info", "accent-1", "accent-2", "accent-3"],
    },
  },
  component: Dot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Dot",
} satisfies Meta<typeof Dot>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
}

export const Danger: Story = {
  args: {
    variant: "danger",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
  },
}

export const Info: Story = {
  args: {
    variant: "info",
  },
}

export const Small: Story = {
  args: {
    size: "small",
    variant: "primary",
  },
}

export const Medium: Story = {
  args: {
    size: "medium",
    variant: "primary",
  },
}

export const Accent1: Story = {
  args: {
    variant: "accent-1",
  },
}

export const Accent2: Story = {
  args: {
    variant: "accent-2",
  },
}

export const Accent3: Story = {
  args: {
    variant: "accent-3",
  },
}
