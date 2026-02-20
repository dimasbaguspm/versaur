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
  title: "Primitive/Avatar",
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default avatar with primary variant and medium size.
 */
export const Default: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "AB",
  },
}

/**
 * Showcase all available color variants: primary, secondary, ghost, and danger.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Avatar size="md" variant="primary">
        P
      </Avatar>
      <Avatar size="md" variant="secondary">
        S
      </Avatar>
      <Avatar size="md" variant="ghost">
        G
      </Avatar>
      <Avatar size="md" variant="danger">
        D
      </Avatar>
    </div>
  ),
}

/**
 * Showcase all available sizes: extra small, small, medium, large, and extra large.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Avatar size="xs" variant="primary">
        XS
      </Avatar>
      <Avatar size="sm" variant="primary">
        SM
      </Avatar>
      <Avatar size="md" variant="primary">
        MD
      </Avatar>
      <Avatar size="lg" variant="primary">
        LG
      </Avatar>
      <Avatar size="xl" variant="primary">
        XL
      </Avatar>
    </div>
  ),
}

/**
 * Showcase available shapes: circular and square.
 */
export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Avatar size="md" variant="primary" shape="circle">
        C
      </Avatar>
      <Avatar size="md" variant="primary" shape="square">
        R
      </Avatar>
    </div>
  ),
}

/**
 * Avatar displaying an image from an external source.
 */
export const Image: Story = {
  render: () => (
    <Avatar size="md" variant="primary">
      <Avatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
    </Avatar>
  ),
}

/**
 * Avatar with image fallback to initials when the image fails to load.
 */
export const ImageFallback: Story = {
  render: () => (
    <Avatar size="md" variant="secondary">
      <Avatar.Image src="https://invalid-url.example.com/image.jpg" alt="Profile" />
      JD
    </Avatar>
  ),
}

/**
 * Avatar displaying user initials.
 */
export const Initials: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: "JD",
  },
}
