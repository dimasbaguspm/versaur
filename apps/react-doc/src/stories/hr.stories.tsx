import type { Meta, StoryObj } from "@storybook/react"
import { Hr } from "@versaur/react"

const meta = {
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    spacing: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: ["solid", "dashed", "dotted"],
    },
  },
  component: Hr,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Layout/Hr",
} satisfies Meta<typeof Hr>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: "horizontal",
    variant: "solid",
    size: "sm",
    spacing: "md",
  },
}

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    variant: "solid",
  },
}

export const Vertical: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>Content on left</div>
      <Hr {...args} style={{ height: "100px" }} />
      <div>Content on right</div>
    </div>
  ),
  args: {
    orientation: "vertical",
    variant: "solid",
  },
}

export const SolidVariant: Story = {
  args: {
    variant: "solid",
    orientation: "horizontal",
  },
}

export const DashedVariant: Story = {
  args: {
    variant: "dashed",
    orientation: "horizontal",
  },
}

export const DottedVariant: Story = {
  args: {
    variant: "dotted",
    orientation: "horizontal",
  },
}

export const SmallSize: Story = {
  args: {
    size: "sm",
    variant: "solid",
    orientation: "horizontal",
  },
}

export const MediumSize: Story = {
  args: {
    size: "md",
    variant: "solid",
    orientation: "horizontal",
  },
}

export const LargeSize: Story = {
  args: {
    size: "lg",
    variant: "solid",
    orientation: "horizontal",
  },
}

export const NoSpacing: Story = {
  args: {
    spacing: "none",
    orientation: "horizontal",
    variant: "solid",
  },
}

export const WithSpacing: Story = {
  args: {
    spacing: "xl",
    orientation: "horizontal",
    variant: "solid",
  },
}
