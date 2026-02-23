import type { Meta, StoryObj } from "@storybook/react"
import { Hr } from "../index"

const meta = {
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    spacing: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: ["solid", "dashed", "dotted"],
    },
  },
  component: Hr,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Hr",
} satisfies Meta<typeof Hr>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default Hr component with standard horizontal divider.
 */
export const Default: Story = {
  args: {
    orientation: "horizontal",
    variant: "solid",
    size: "sm",
    spacing: "md",
  },
}

/**
 * Showcase all orientation variants: horizontal and vertical.
 * Vertical orientation is displayed between content to demonstrate spacing.
 */
export const Orientations: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Horizontal</div>
        <Hr {...args} orientation="horizontal" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <div>Content on left</div>
        <Hr {...args} orientation="vertical" style={{ height: "100px" }} />
        <div>Content on right</div>
      </div>
    </div>
  ),
  args: {
    variant: "solid",
  },
}

/**
 * Showcase all style variants: solid, dashed, and dotted.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>Solid</div>
        <Hr {...args} variant="solid" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>Dashed</div>
        <Hr {...args} variant="dashed" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>Dotted</div>
        <Hr {...args} variant="dotted" />
      </div>
    </div>
  ),
  args: {
    orientation: "horizontal",
  },
}

/**
 * Showcase all size variants: sm, md, and lg.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>Small</div>
        <Hr {...args} size="sm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>Medium</div>
        <Hr {...args} size="md" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>Large</div>
        <Hr {...args} size="lg" />
      </div>
    </div>
  ),
  args: {
    orientation: "horizontal",
    variant: "solid",
  },
}

/**
 * Showcase all spacing variants: none, sm, md, lg, and xl.
 */
export const Spacing: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>None</div>
        <Hr {...args} spacing="none" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>Small</div>
        <Hr {...args} spacing="sm" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>Medium</div>
        <Hr {...args} spacing="md" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>Large</div>
        <Hr {...args} spacing="lg" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem" }}>Extra Large</div>
        <Hr {...args} spacing="xl" />
      </div>
    </div>
  ),
  args: {
    orientation: "horizontal",
    variant: "solid",
  },
}
