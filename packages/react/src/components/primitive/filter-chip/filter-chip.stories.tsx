import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { FilterChip } from "./index"

const meta: Meta<typeof FilterChip> = {
  title: "Primitive/FilterChip",
  component: FilterChip,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FilterChip>

export const Default: Story = {
  args: {
    children: "Category",
  },
  render: (args) => {
    const [clicked, setClicked] = useState(false)
    return (
      <div>
        <FilterChip {...args} onClick={() => setClicked(!clicked)} />
        {clicked && <p style={{ marginTop: "1rem" }}>Clicked!</p>}
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled Chip",
    disabled: true,
  },
}

export const LongTextTruncation: Story = {
  args: {
    children: "Very Long Category Name That Should Be Truncated",
  },
  render: (args) => (
    <div>
      <FilterChip {...args} onClick={() => {}} />
      <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
        Uses default max-width of 12rem
      </p>
    </div>
  ),
}

export const CustomMaxWidth: Story = {
  args: {
    children: "Very Long Category Name That Should Be Truncated",
    maxWidth: "6rem",
  },
  render: (args) => (
    <div>
      <FilterChip {...args} onClick={() => {}} />
      <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
        Uses custom max-width of 6rem for earlier truncation
      </p>
    </div>
  ),
}

