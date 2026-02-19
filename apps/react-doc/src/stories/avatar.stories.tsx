import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    shape: {
      control: "select",
      options: ["circle", "square"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
    },
  },
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Avatars/Avatar",
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "AB",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "CD",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
    children: "EF",
  },
}

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "md",
    children: "GH",
  },
}

export const ExtraSmall: Story = {
  args: {
    size: "xs",
    variant: "primary",
    children: "XS",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    variant: "primary",
    children: "SM",
  },
}

export const Medium: Story = {
  args: {
    size: "md",
    variant: "primary",
    children: "MD",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    variant: "primary",
    children: "LG",
  },
}

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    variant: "primary",
    children: "XL",
  },
}

export const Circle: Story = {
  args: {
    shape: "circle",
    size: "md",
    variant: "primary",
    children: "O",
  },
}

export const Square: Story = {
  args: {
    shape: "square",
    size: "md",
    variant: "primary",
    children: "□",
  },
}

export const WithImage: Story = {
  render: () => (
    <Avatar size="md" variant="primary">
      <Avatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
    </Avatar>
  ),
}

export const WithImageFallback: Story = {
  render: () => (
    <Avatar size="md" variant="secondary">
      <Avatar.Image src="https://invalid-url.example.com/image.jpg" alt="Profile" />
      JD
    </Avatar>
  ),
}

export const InitialsPrimary: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "JD",
  },
}

export const InitialsSecondary: Story = {
  args: {
    variant: "secondary",
    size: "lg",
    children: "AB",
  },
}
