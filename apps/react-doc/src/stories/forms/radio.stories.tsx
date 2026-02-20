import type { Meta, StoryObj } from "@storybook/react"
import { Radio } from "@versaur/react/forms"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["small", "large"],
    },
    variant: {
      control: "select",
      options: ["filled", "outline"],
    },
  },
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/Radio",
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default radio button in unchecked state.
 */
export const Default: Story = {
  args: {
    children: "Radio option",
    name: "option",
  },
}

/**
 * Showcase all radio variants: filled and outline.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Filled</div>
        <Radio {...args} variant="filled" name="filled">
          Filled
        </Radio>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Outline</div>
        <Radio {...args} variant="outline" name="outline">
          Outline
        </Radio>
      </div>
    </div>
  ),
}

/**
 * Showcase all radio sizes: small and large.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Small</div>
        <Radio {...args} size="small" name="small">
          Small
        </Radio>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Large</div>
        <Radio {...args} size="large" name="large">
          Large
        </Radio>
      </div>
    </div>
  ),
}

/**
 * Showcase radio states: disabled, disabled+checked, invalid, and invalid+checked.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Disabled</div>
          <Radio {...args} disabled name="disabled">
            Disabled
          </Radio>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Disabled+Checked</div>
          <Radio {...args} disabled defaultChecked name="disabled-checked">
            Disabled+Checked
          </Radio>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Invalid</div>
          <Radio {...args} invalid name="invalid">
            Invalid
          </Radio>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "flex-start" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "#666" }}>Invalid+Checked</div>
          <Radio {...args} invalid defaultChecked name="invalid-checked">
            Invalid+Checked
          </Radio>
        </div>
      </div>
    </div>
  ),
}

/**
 * Radio group showing standard and small sizes side-by-side.
 */
export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Standard</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Radio name="options" defaultChecked>
            Option 1
          </Radio>
          <Radio name="options">Option 2</Radio>
          <Radio name="options">Option 3</Radio>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Small</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Radio name="small-options" size="small" defaultChecked>
            Small 1
          </Radio>
          <Radio name="small-options" size="small">
            Small 2
          </Radio>
          <Radio name="small-options" size="small">
            Small 3
          </Radio>
        </div>
      </div>
    </div>
  ),
}
