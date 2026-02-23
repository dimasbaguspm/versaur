import type { Meta, StoryObj } from "@storybook/react"
import { AlertCircleIcon, CheckIcon } from "@versaur/icons"
import { Badge, Icon } from "../index"

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
      options: ["primary", "secondary", "danger", "success", "warning", "info"],
    },
  },
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Badge",
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default badge with primary variant and medium size.
 */
export const Default: Story = {
  args: {
    children: "Badge",
    variant: "primary",
    size: "medium",
  },
}

/**
 * Showcase all available color variants: primary, secondary, success, danger, warning, and info.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
}

/**
 * Showcase all available sizes: small and medium.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Badge size="small" variant="primary">
        Small
      </Badge>
      <Badge size="medium" variant="primary">
        Medium
      </Badge>
    </div>
  ),
}

/**
 * Showcase available shapes: rounded and pill.
 */
export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Badge shape="rounded" variant="primary">
        Rounded
      </Badge>
      <Badge shape="pill" variant="primary">
        Pill
      </Badge>
    </div>
  ),
}

/**
 * Badge with various icon configurations: left, right, both, and icon-only.
 */
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Badge variant="success" iconLeft={<Icon as={CheckIcon} />}>
        Completed
      </Badge>
      <Badge variant="warning" iconRight={<Icon as={AlertCircleIcon} />}>
        Alert
      </Badge>
      <Badge variant="info" iconLeft={<Icon as={CheckIcon} />} iconRight={<Icon as={AlertCircleIcon} />}>
        Status
      </Badge>
      <Badge variant="success" iconLeft={<Icon as={CheckIcon} />} />
    </div>
  ),
}
