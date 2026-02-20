import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "@versaur/react/primitive"
import { BadgeGroup } from "@versaur/react/blocks"

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
  title: "Blocks/BadgeGroup",
} satisfies Meta<typeof BadgeGroup>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default badge group with medium gap and horizontal direction.
 */
export const Default: Story = {
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

/**
 * Showcase horizontal and vertical layout directions.
 */
export const Direction: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      <BadgeGroup {...args} direction="horizontal">
        <Badge variant="primary">React</Badge>
        <Badge variant="secondary">TypeScript</Badge>
        <Badge variant="success">Active</Badge>
      </BadgeGroup>
      <BadgeGroup {...args} direction="vertical">
        <Badge variant="danger">Error</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
      </BadgeGroup>
    </div>
  ),
  args: {
    gap: "md",
  },
}

/**
 * Showcase all available gaps: extra small to large.
 */
export const Gap: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <BadgeGroup {...args} gap="xs">
        <Badge variant="primary">Tag 1</Badge>
        <Badge variant="secondary">Tag 2</Badge>
        <Badge variant="outline">Tag 3</Badge>
      </BadgeGroup>
      <BadgeGroup {...args} gap="sm">
        <Badge variant="primary">Tag 1</Badge>
        <Badge variant="secondary">Tag 2</Badge>
        <Badge variant="outline">Tag 3</Badge>
      </BadgeGroup>
      <BadgeGroup {...args} gap="md">
        <Badge variant="primary">Tag 1</Badge>
        <Badge variant="secondary">Tag 2</Badge>
        <Badge variant="outline">Tag 3</Badge>
      </BadgeGroup>
      <BadgeGroup {...args} gap="lg">
        <Badge variant="success">Completed</Badge>
        <Badge variant="info">In Progress</Badge>
      </BadgeGroup>
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
    <BadgeGroup {...args} style={{ width: "100%" }}>
      <Badge variant="primary">React</Badge>
      <Badge variant="secondary">TypeScript</Badge>
      <Badge variant="success">Active</Badge>
    </BadgeGroup>
  ),
  args: {
    align: "space-evenly",
    direction: "horizontal",
    gap: "md",
  },
}

/**
 * Demonstrate wrapping behavior with constrained width.
 */
export const Wrap: Story = {
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

/**
 * Showcase all available badge variants in a single group.
 */
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
