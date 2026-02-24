import type { Meta, StoryObj } from "@storybook/react"

import { Avatar, Badge, Button, Heading, Text } from "../../primitive/index"
import { BadgeGroup, Card } from "../index"

const meta = {
  argTypes: {
    as: {
      control: "select",
      options: ["div", "button"],
    },
    border: {
      control: "select",
      options: ["all-rounded", "horizontal", "vertical"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/Card",
  args: {
    children: "Card",
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default card with medium size and standard border.
 */
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Body>
        <Text>Simple card content</Text>
      </Card.Body>
    </Card>
  ),
  args: {
    size: "md",
  },
}

/**
 * Showcase all available sizes: xs, sm, md, lg, and xl.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Card {...args} size="xs">
        <Card.Body>
          <Text size="xs">XS Card</Text>
        </Card.Body>
      </Card>
      <Card {...args} size="sm">
        <Card.Body>
          <Text size="sm">Small Card</Text>
        </Card.Body>
      </Card>
      <Card {...args} size="md">
        <Card.Body>
          <Text>Medium Card</Text>
        </Card.Body>
      </Card>
      <Card {...args} size="lg">
        <Card.Body>
          <Text>Large Card</Text>
        </Card.Body>
      </Card>
      <Card {...args} size="xl">
        <Card.Body>
          <Text>Extra Large Card</Text>
        </Card.Body>
      </Card>
    </div>
  ),
}

/**
 * Showcase all available border variants: all-rounded, horizontal, vertical, and individual sides.
 */
export const Borders: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Card {...args} border="all-rounded">
        <Card.Body>
          <Text>All Rounded</Text>
        </Card.Body>
      </Card>
      <Card {...args} border="horizontal">
        <Card.Body>
          <Text>Horizontal</Text>
        </Card.Body>
      </Card>
      <Card {...args} border="vertical">
        <Card.Body>
          <Text>Vertical</Text>
        </Card.Body>
      </Card>
      <Card {...args} border="top">
        <Card.Body>
          <Text>Top</Text>
        </Card.Body>
      </Card>
      <Card {...args} border="bottom">
        <Card.Body>
          <Text>Bottom</Text>
        </Card.Body>
      </Card>
      <Card {...args} border="left">
        <Card.Body>
          <Text>Left</Text>
        </Card.Body>
      </Card>
      <Card {...args} border="right">
        <Card.Body>
          <Text>Right</Text>
        </Card.Body>
      </Card>
    </div>
  ),
  args: {
    size: "md",
  },
}

/**
 * Showcase card regions: Header, Body, and Footer composition.
 */
export const Regions: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header justify="between" gap="md">
        <Heading as="h3" size="base">
          Card Title
        </Heading>
        <Badge variant="info" size="small">
          New
        </Badge>
      </Card.Header>
      <Card.Body gap="md">
        <Text>Card content in body region</Text>
      </Card.Body>
      <Card.Footer justify="end" gap="sm">
        <Button variant="secondary" size="small">
          Cancel
        </Button>
        <Button variant="primary" size="small">
          Submit
        </Button>
      </Card.Footer>
    </Card>
  ),
  args: {
    size: "md",
  },
}

/**
 * Card rendered as interactive button with click handler.
 */
export const Interactive: Story = {
  render: (args) => (
    <Card {...args} onClick={() => alert("Card clicked!")}>
      <Card.Body gap="md">
        <Heading as="h4" size="sm">
          Interactive Card
        </Heading>
        <Text size="sm">Click me! Supports hover effects and click handlers</Text>
      </Card.Body>
    </Card>
  ),
  args: {
    as: "button",
    size: "md",
  },
}

/**
 * Real-world example: User profile card with avatar, info, and actions.
 */
export const UserProfile: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header justify="between" gap="md">
        <div style={{ display: "flex", gap: "var(--spacing-3)", alignItems: "center" }}>
          <Avatar size="md" shape="circle">
            AC
          </Avatar>
          <div>
            <Heading as="h4" size="sm">
              Alice Chen
            </Heading>
            <Text size="xs" intent="gray">
              Product Designer
            </Text>
          </div>
        </div>
        <Badge variant="success" size="small">
          Online
        </Badge>
      </Card.Header>
      <Card.Body gap="sm">
        <Text size="sm">San Francisco, CA • 2 years experience</Text>
      </Card.Body>
      <Card.Footer justify="between" gap="sm">
        <Button variant="secondary" size="small">
          Message
        </Button>
        <Button variant="primary" size="small">
          View Profile
        </Button>
      </Card.Footer>
    </Card>
  ),
  args: {
    size: "md",
  },
}

/**
 * Real-world example: Transaction/expense card with amount, details, and status.
 */
export const Transaction: Story = {
  render: (args) => (
    <Card {...args} border={undefined}>
      <Card.Header justify="between" gap="md">
        <div>
          <Heading as="h3" size="lg">
            Rp 1.000.000
          </Heading>
          <Text size="xs" intent="gray">
            Lain-lain • Bank Mandiri • TF KP2KS
          </Text>
        </div>
      </Card.Header>
      <Card.Footer justify="between" gap="sm">
        <BadgeGroup>
          <Badge variant="warning" size="small">
            Expense
          </Badge>
        </BadgeGroup>
        <Text size="xs" intent="gray">
          11:02
        </Text>
      </Card.Footer>
    </Card>
  ),
  args: {
    size: "sm",
  },
}
