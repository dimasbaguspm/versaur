import type { Meta, StoryObj } from "@storybook/react"
import { Loader } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "lg"],
    },
    type: {
      control: "select",
      options: ["spinner", "bar"],
    },
  },
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Feedback/Loader",
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Spinner: Story = {
  args: {
    type: "spinner",
  },
}

export const SpinnerSmall: Story = {
  args: {
    type: "spinner",
    size: "sm",
  },
}

export const SpinnerLarge: Story = {
  args: {
    type: "spinner",
    size: "lg",
  },
}

export const Bar: Story = {
  args: {
    type: "bar",
  },
}

export const BarSmall: Story = {
  args: {
    type: "bar",
    size: "sm",
  },
}

export const BarLarge: Story = {
  args: {
    type: "bar",
    size: "lg",
  },
}

export const WithStatusText: Story = {
  args: {
    type: "spinner",
    size: "sm",
    children: "Loading...",
  },
}

export const WithProgressText: Story = {
  args: {
    type: "bar",
    children: "Processing request",
  },
}
