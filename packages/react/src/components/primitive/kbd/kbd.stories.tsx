import type { Meta, StoryObj } from "@storybook/react"
import { Kbd } from "../index"

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["filled", "outline", "ghost"],
    },
  },
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Kbd",
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default kbd component with filled variant
 */
export const Default: Story = {
  args: {
    children: "Ctrl",
  },
}

/**
 * All available kbd variants demonstrated
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Kbd {...args} variant="filled">
          Filled
        </Kbd>
        <span style={{ fontSize: "0.875rem", color: "#666" }}>Filled</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Kbd {...args} variant="outline">
          Outline
        </Kbd>
        <span style={{ fontSize: "0.875rem", color: "#666" }}>Outline</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <Kbd {...args} variant="ghost">
          Ghost
        </Kbd>
        <span style={{ fontSize: "0.875rem", color: "#666" }}>Ghost</span>
      </div>
    </div>
  ),
}

/**
 * All available sizes demonstrated
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.875rem", color: "#666" }}>Filled</div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Kbd {...args} variant="filled" size="xs">
            xs
          </Kbd>
          <Kbd {...args} variant="filled" size="sm">
            sm
          </Kbd>
          <Kbd {...args} variant="filled" size="md">
            md
          </Kbd>
          <Kbd {...args} variant="filled" size="lg">
            lg
          </Kbd>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.875rem", color: "#666" }}>Outline</div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Kbd {...args} variant="outline" size="xs">
            xs
          </Kbd>
          <Kbd {...args} variant="outline" size="sm">
            sm
          </Kbd>
          <Kbd {...args} variant="outline" size="md">
            md
          </Kbd>
          <Kbd {...args} variant="outline" size="lg">
            lg
          </Kbd>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.875rem", color: "#666" }}>Ghost</div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Kbd {...args} variant="ghost" size="xs">
            xs
          </Kbd>
          <Kbd {...args} variant="ghost" size="sm">
            sm
          </Kbd>
          <Kbd {...args} variant="ghost" size="md">
            md
          </Kbd>
          <Kbd {...args} variant="ghost" size="lg">
            lg
          </Kbd>
        </div>
      </div>
    </div>
  ),
}

/**
 * Keyboard shortcut combinations
 */
export const Combination: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Kbd variant="filled">Ctrl</Kbd>
        <span>+</span>
        <Kbd variant="filled">K</Kbd>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Kbd variant="outline">Cmd</Kbd>
        <span>+</span>
        <Kbd variant="outline">Enter</Kbd>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Kbd variant="filled" size="sm">
          Shift
        </Kbd>
        <span>+</span>
        <Kbd variant="filled" size="sm">
          Alt
        </Kbd>
        <span>+</span>
        <Kbd variant="filled" size="sm">
          T
        </Kbd>
      </div>
    </div>
  ),
}
