import type { Meta, StoryObj } from "@storybook/react"

import { SearchInput } from "./search-input"

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
  },
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/SearchInput",
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default search input with search icon.
 */
export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
}

/**
 * Search input with a label.
 */
export const WithLabel: Story = {
  args: {
    label: "Search Products",
    placeholder: "Enter product name...",
  },
}

/**
 * Search input with helper text.
 */
export const WithHelper: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    helper: "Press Enter to search",
  },
}

/**
 * Search input with error state.
 */
export const WithError: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    error: "No results found",
  },
}

/**
 * Disabled search input.
 */
export const Disabled: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    disabled: true,
  },
}

/**
 * Read-only search input.
 */
export const ReadOnly: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    value: "example",
    readOnly: true,
  },
}
