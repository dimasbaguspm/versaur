import type { Meta, StoryObj } from "@storybook/react"
import { SettingsIcon, StarIcon, TrashIcon } from "@versaur/icons"
import { ButtonIcon } from "@versaur/react"

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
      options: ["primary", "secondary", "ghost", "danger"],
    },
  },
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Buttons/ButtonIcon",
} satisfies Meta<typeof ButtonIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    as: StarIcon,
    "aria-label": "Add to favorites",
    variant: "primary",
  },
}

export const Secondary: Story = {
  args: {
    as: StarIcon,
    "aria-label": "Add to favorites",
    variant: "secondary",
  },
}

export const Ghost: Story = {
  args: {
    as: StarIcon,
    "aria-label": "Add to favorites",
    variant: "ghost",
  },
}

export const Danger: Story = {
  args: {
    as: TrashIcon,
    "aria-label": "Delete item",
    variant: "danger",
  },
}

export const Small: Story = {
  args: {
    as: SettingsIcon,
    "aria-label": "Settings",
    size: "small",
    variant: "primary",
  },
}

export const Medium: Story = {
  args: {
    as: SettingsIcon,
    "aria-label": "Settings",
    size: "medium",
    variant: "primary",
  },
}

export const Loading: Story = {
  args: {
    as: StarIcon,
    "aria-label": "Saving",
    loading: true,
    variant: "primary",
  },
}

export const Disabled: Story = {
  args: {
    as: StarIcon,
    "aria-label": "Add to favorites",
    disabled: true,
    variant: "primary",
  },
}
