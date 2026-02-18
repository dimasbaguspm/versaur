import type { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonGroup } from "@versaur/react"

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
  title: "Components/Buttons/ButtonGroup",
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
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

export const Vertical: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
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
  ),
  args: {
    direction: "vertical",
    gap: "md",
    align: "stretch",
  },
}

export const SmallGap: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">One</Button>
      <Button variant="primary">Two</Button>
      <Button variant="primary">Three</Button>
    </ButtonGroup>
  ),
  args: {
    gap: "xs",
    direction: "horizontal",
    align: "center",
  },
}

export const LargeGap: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary">Previous</Button>
      <Button variant="secondary">Next</Button>
    </ButtonGroup>
  ),
  args: {
    gap: "lg",
    direction: "horizontal",
    align: "center",
  },
}

export const SpaceEvenly: Story = {
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

export const WithWrap: Story = {
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
