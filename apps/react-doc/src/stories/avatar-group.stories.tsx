import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarGroup } from "@versaur/react"

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
  title: "Components/Avatars/AvatarGroup",
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar variant="primary">JD</Avatar>
      <Avatar variant="secondary">AB</Avatar>
      <Avatar variant="ghost">XY</Avatar>
    </AvatarGroup>
  ),
  args: {
    direction: "horizontal",
    size: "md",
  },
}

export const Vertical: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar variant="primary">JD</Avatar>
      <Avatar variant="secondary">AB</Avatar>
      <Avatar variant="danger">XY</Avatar>
    </AvatarGroup>
  ),
  args: {
    direction: "vertical",
    size: "md",
  },
}

export const ExtraSmall: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar>A</Avatar>
      <Avatar>B</Avatar>
      <Avatar>C</Avatar>
    </AvatarGroup>
  ),
  args: {
    size: "xs",
    direction: "horizontal",
  },
}

export const Small: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar variant="primary">S1</Avatar>
      <Avatar variant="secondary">S2</Avatar>
    </AvatarGroup>
  ),
  args: {
    size: "sm",
    direction: "horizontal",
  },
}

export const Medium: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar variant="primary">MD</Avatar>
      <Avatar variant="secondary">MD</Avatar>
      <Avatar variant="ghost">MD</Avatar>
    </AvatarGroup>
  ),
  args: {
    size: "md",
    direction: "horizontal",
  },
}

export const Large: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar variant="primary">LG</Avatar>
      <Avatar variant="secondary">LG</Avatar>
    </AvatarGroup>
  ),
  args: {
    size: "lg",
    direction: "horizontal",
  },
}

export const ExtraLarge: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar variant="primary">XL</Avatar>
      <Avatar variant="secondary">XL</Avatar>
      <Avatar variant="danger">XL</Avatar>
    </AvatarGroup>
  ),
  args: {
    size: "xl",
    direction: "horizontal",
  },
}

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

export const SpaceEvenly: Story = {
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
