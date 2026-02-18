import type { Meta, StoryObj } from "@storybook/react"
import { AlertCircleIcon, CheckIcon } from "@versaur/icons"
import { Badge } from "@versaur/react"

const meta = {
  argTypes: {
    shape: {
      control: "select",
      options: ["rounded", "pill"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "danger",
        "success",
        "warning",
        "info",
        "outline",
        "accent-1",
        "accent-2",
        "accent-3",
      ],
    },
  },
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Badges/Badge",
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
}

export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "danger",
  },
}

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
}

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
}

export const Info: Story = {
  args: {
    children: "Info",
    variant: "info",
  },
}

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
}

export const Small: Story = {
  args: {
    children: "Small",
    size: "small",
    variant: "primary",
  },
}

export const Medium: Story = {
  args: {
    children: "Medium",
    size: "medium",
    variant: "primary",
  },
}

export const Pill: Story = {
  args: {
    children: "Pill Shape",
    shape: "pill",
    variant: "primary",
  },
}

export const WithLeftIcon: Story = {
  args: {
    children: "Completed",
    iconLeft: <CheckIcon width={16} height={16} />,
    variant: "success",
  },
}

export const WithRightIcon: Story = {
  args: {
    children: "Alert",
    iconRight: <AlertCircleIcon width={16} height={16} />,
    variant: "warning",
  },
}

export const WithBothIcons: Story = {
  args: {
    children: "Status",
    iconLeft: <CheckIcon width={16} height={16} />,
    iconRight: <AlertCircleIcon width={16} height={16} />,
    variant: "info",
  },
}

export const Accent1: Story = {
  args: {
    children: "Accent 1",
    variant: "accent-1",
  },
}

export const Accent2: Story = {
  args: {
    children: "Accent 2",
    variant: "accent-2",
  },
}

export const Accent3: Story = {
  args: {
    children: "Accent 3",
    variant: "accent-3",
  },
}
