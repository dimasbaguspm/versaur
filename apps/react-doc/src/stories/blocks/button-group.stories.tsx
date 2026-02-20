import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@versaur/react/primitive"
import { ButtonGroup } from "@versaur/react/blocks"

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
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/ButtonGroup",
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default button group with medium gap and horizontal direction.
 */
export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="ghost">Reset</Button>
    </ButtonGroup>
  ),
  args: {
    direction: "horizontal",
    gap: "md",
    align: "center",
  },
}

/**
 * Showcase horizontal and vertical layout directions.
 */
export const Direction: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      <ButtonGroup {...args} direction="horizontal">
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="ghost">Reset</Button>
      </ButtonGroup>
      <ButtonGroup {...args} direction="vertical">
        <Button variant="primary" style={{ width: "100%" }}>
          Create
        </Button>
        <Button variant="secondary" style={{ width: "100%" }}>
          Edit
        </Button>
        <Button variant="danger" style={{ width: "100%" }}>
          Delete
        </Button>
      </ButtonGroup>
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
      <ButtonGroup {...args} gap="xs">
        <Button variant="primary">One</Button>
        <Button variant="primary">Two</Button>
        <Button variant="primary">Three</Button>
      </ButtonGroup>
      <ButtonGroup {...args} gap="sm">
        <Button variant="primary">One</Button>
        <Button variant="primary">Two</Button>
        <Button variant="primary">Three</Button>
      </ButtonGroup>
      <ButtonGroup {...args} gap="md">
        <Button variant="primary">One</Button>
        <Button variant="primary">Two</Button>
        <Button variant="primary">Three</Button>
      </ButtonGroup>
      <ButtonGroup {...args} gap="lg">
        <Button variant="secondary">Previous</Button>
        <Button variant="secondary">Next</Button>
      </ButtonGroup>
    </div>
  ),
  args: {
    direction: "horizontal",
    align: "center",
  },
}

/**
 * Showcase different alignment options with full-width layout.
 */
export const Alignment: Story = {
  render: (args) => (
    <ButtonGroup {...args} style={{ width: "100%" }}>
      <Button variant="ghost">Left</Button>
      <Button variant="ghost">Center</Button>
      <Button variant="ghost">Right</Button>
    </ButtonGroup>
  ),
  args: {
    direction: "horizontal",
    align: "space-evenly",
    gap: "md",
  },
}

/**
 * Demonstrate wrapping behavior with constrained width.
 */
export const Wrap: Story = {
  render: (args) => (
    <ButtonGroup {...args} style={{ width: "300px" }}>
      <Button variant="primary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button variant="ghost">Button 3</Button>
      <Button variant="primary">Button 4</Button>
      <Button variant="secondary">Button 5</Button>
    </ButtonGroup>
  ),
  args: {
    direction: "horizontal",
    wrap: "wrap",
    gap: "md",
    align: "start",
  },
}
