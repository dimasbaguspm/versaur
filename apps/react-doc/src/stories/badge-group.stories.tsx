import type { Meta, StoryObj } from "@storybook/react"
import { Badge, BadgeGroup } from "@versaur/react"

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
    gap: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap"],
    },
  },
  component: BadgeGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Badges/BadgeGroup",
} satisfies Meta<typeof BadgeGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: (args) => (
    <BadgeGroup {...args}>
      <Badge variant="primary">React</Badge>
      <Badge variant="secondary">TypeScript</Badge>
      <Badge variant="success">Active</Badge>
    </BadgeGroup>
  ),
  args: {
    direction: "horizontal",
    gap: "md",
  },
}

export const Vertical: Story = {
  render: (args) => (
    <BadgeGroup {...args}>
      <Badge variant="danger">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </BadgeGroup>
  ),
  args: {
    direction: "vertical",
    gap: "md",
  },
}

export const SmallGap: Story = {
  render: (args) => (
    <BadgeGroup {...args}>
      <Badge variant="primary">Tag 1</Badge>
      <Badge variant="secondary">Tag 2</Badge>
      <Badge variant="outline">Tag 3</Badge>
    </BadgeGroup>
  ),
  args: {
    gap: "xs",
    direction: "horizontal",
  },
}

export const LargeGap: Story = {
  render: (args) => (
    <BadgeGroup {...args}>
      <Badge variant="success">Completed</Badge>
      <Badge variant="info">In Progress</Badge>
    </BadgeGroup>
  ),
  args: {
    gap: "lg",
    direction: "horizontal",
  },
}

export const WithWrap: Story = {
  render: (args) => (
    <BadgeGroup {...args} style={{ width: "300px" }}>
      <Badge variant="primary">JavaScript</Badge>
      <Badge variant="secondary">Python</Badge>
      <Badge variant="success">Go</Badge>
      <Badge variant="warning">Rust</Badge>
      <Badge variant="danger">Java</Badge>
    </BadgeGroup>
  ),
  args: {
    direction: "horizontal",
    wrap: "wrap",
    gap: "md",
  },
}

export const AllVariants: Story = {
  render: (args) => (
    <BadgeGroup {...args}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="accent-1">Accent 1</Badge>
    </BadgeGroup>
  ),
  args: {
    gap: "sm",
    direction: "horizontal",
  },
}
