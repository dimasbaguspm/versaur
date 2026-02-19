import type { Meta, StoryObj } from "@storybook/react"
import { Button, Text } from "@versaur/react/primitive"
import { Card } from "@versaur/react/blocks"

const meta = {
  argTypes: {
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
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

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

export const WithHeader: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Text weight="bold">Card Title</Text>
      </Card.Header>
      <Card.Body>
        <Text>Card content goes here</Text>
      </Card.Body>
    </Card>
  ),
  args: {
    size: "md",
  },
}

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Body>
        <Text>Content with action footer</Text>
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

export const Complete: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header justify="between" gap="md">
        <Text weight="bold" size="lg">
          Product Card
        </Text>
        <span>★★★★★</span>
      </Card.Header>
      <Card.Body gap="md">
        <Text>High-quality product with excellent features</Text>
        <Text size="sm" intent="gray">
          Price: $99.99
        </Text>
      </Card.Body>
      <Card.Footer justify="end">
        <Button variant="primary" size="small">
          Add to Cart
        </Button>
      </Card.Footer>
    </Card>
  ),
  args: {
    size: "lg",
  },
}

export const ExtraSmall: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Body>
        <Text size="sm">XS Card</Text>
      </Card.Body>
    </Card>
  ),
  args: {
    size: "xs",
  },
}

export const Small: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Text>Small Card</Text>
      </Card.Header>
      <Card.Body>
        <Text size="sm">Small sized card content</Text>
      </Card.Body>
    </Card>
  ),
  args: {
    size: "sm",
  },
}

export const Medium: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Text weight="bold">Medium Card</Text>
      </Card.Header>
      <Card.Body>
        <Text>Medium sized card with standard content</Text>
      </Card.Body>
    </Card>
  ),
  args: {
    size: "md",
  },
}

export const Large: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header justify="start" gap="md">
        <Text weight="bold" size="lg">
          Large Card
        </Text>
      </Card.Header>
      <Card.Body gap="md">
        <Text>Large card with more space</Text>
        <Text size="sm" intent="gray">
          Additional content and details
        </Text>
      </Card.Body>
    </Card>
  ),
  args: {
    size: "lg",
  },
}

export const ExtraLarge: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header justify="between">
        <Text weight="bold" size="xl">
          Extra Large Card
        </Text>
        <Button variant="ghost" size="small">
          More
        </Button>
      </Card.Header>
      <Card.Body gap="lg">
        <Text>Extra large card with plenty of space</Text>
        <Text size="sm">Perfect for featured content</Text>
      </Card.Body>
      <Card.Footer justify="center">
        <Button variant="primary">View Details</Button>
      </Card.Footer>
    </Card>
  ),
  args: {
    size: "xl",
  },
}

export const AllRounded: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Body>
        <Text>All rounded border style</Text>
      </Card.Body>
    </Card>
  ),
  args: {
    border: "all-rounded",
    size: "md",
  },
}

export const Horizontal: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Body>
        <Text>Horizontal border variant</Text>
      </Card.Body>
    </Card>
  ),
  args: {
    border: "horizontal",
    size: "md",
  },
}

export const Vertical: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Body>
        <Text>Vertical border variant</Text>
      </Card.Body>
    </Card>
  ),
  args: {
    border: "vertical",
    size: "md",
  },
}

export const AsButton: Story = {
  render: (args) => (
    <Card {...args} as="button" onClick={() => alert("Card clicked!")}>
      <Card.Body>
        <Text>Clickable card button</Text>
      </Card.Body>
    </Card>
  ),
  args: {
    size: "md",
  },
}
