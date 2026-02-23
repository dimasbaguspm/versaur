import type { Meta, StoryObj } from "@storybook/react"
import { AvatarGroup } from "../index"
import { Avatar } from "../../primitive/index"

const meta = {
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end", "space-between", "space-around", "space-evenly"],
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap"],
    },
  },
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/AvatarGroup",
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default avatar group with medium size and horizontal direction.
 */
export const Default: Story = {
  args: {
    size: "md",
    direction: "horizontal",
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar variant="primary">JD</Avatar>
      <Avatar variant="secondary">AB</Avatar>
      <Avatar variant="ghost">XY</Avatar>
    </AvatarGroup>
  ),
}

/**
 * Showcase horizontal and vertical layout directions.
 */
export const Direction: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      <AvatarGroup {...args} direction="horizontal">
        <Avatar variant="primary">JD</Avatar>
        <Avatar variant="secondary">AB</Avatar>
        <Avatar variant="ghost">XY</Avatar>
      </AvatarGroup>
      <AvatarGroup {...args} direction="vertical">
        <Avatar variant="primary">JD</Avatar>
        <Avatar variant="secondary">AB</Avatar>
        <Avatar variant="danger">XY</Avatar>
      </AvatarGroup>
    </div>
  ),
  args: {
    size: "md",
  },
}

/**
 * Showcase all available sizes: extra small to extra large.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <AvatarGroup {...args} size="xs">
        <Avatar>A</Avatar>
        <Avatar>B</Avatar>
        <Avatar>C</Avatar>
      </AvatarGroup>
      <AvatarGroup {...args} size="sm">
        <Avatar variant="primary">S1</Avatar>
        <Avatar variant="secondary">S2</Avatar>
      </AvatarGroup>
      <AvatarGroup {...args} size="md">
        <Avatar variant="primary">MD</Avatar>
        <Avatar variant="secondary">MD</Avatar>
        <Avatar variant="ghost">MD</Avatar>
      </AvatarGroup>
      <AvatarGroup {...args} size="lg">
        <Avatar variant="primary">LG</Avatar>
        <Avatar variant="secondary">LG</Avatar>
      </AvatarGroup>
      <AvatarGroup {...args} size="xl">
        <Avatar variant="primary">XL</Avatar>
        <Avatar variant="secondary">XL</Avatar>
        <Avatar variant="danger">XL</Avatar>
      </AvatarGroup>
    </div>
  ),
  args: {
    direction: "horizontal",
  },
}

/**
 * Showcase different alignment options with full-width layout.
 */
export const Alignment: Story = {
  render: (args) => (
    <AvatarGroup {...args} style={{ width: "100%" }}>
      <Avatar variant="primary">A</Avatar>
      <Avatar variant="secondary">B</Avatar>
      <Avatar variant="ghost">C</Avatar>
    </AvatarGroup>
  ),
  args: {
    align: "space-evenly",
    direction: "horizontal",
    size: "md",
  },
}

/**
 * Demonstrate wrapping behavior with constrained width.
 */
export const Wrap: Story = {
  render: (args) => (
    <AvatarGroup {...args} style={{ width: "200px" }}>
      <Avatar variant="primary">A</Avatar>
      <Avatar variant="secondary">B</Avatar>
      <Avatar variant="ghost">C</Avatar>
      <Avatar variant="primary">D</Avatar>
      <Avatar variant="secondary">E</Avatar>
    </AvatarGroup>
  ),
  args: {
    direction: "horizontal",
    wrap: "wrap",
    size: "md",
  },
}

/**
 * Avatar group with actual image URLs instead of initials.
 */
export const WithImages: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar variant="primary">
        <Avatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="John" />
      </Avatar>
      <Avatar variant="secondary">
        <Avatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" alt="Jane" />
      </Avatar>
      <Avatar variant="ghost">
        <Avatar.Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" alt="Bob" />
      </Avatar>
    </AvatarGroup>
  ),
  args: {
    size: "md",
    direction: "horizontal",
  },
}
