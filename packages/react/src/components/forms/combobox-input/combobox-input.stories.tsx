import type { Meta, StoryObj } from "@storybook/react"
import { SearchIcon } from "@versaur/icons"
import { useState } from "react"

import { ButtonGroup } from "../../blocks/button-group/button-group"
import { Button } from "../../primitive/button/button"
import { Icon } from "../../primitive/icon/icon"
import { ComboboxInput } from "../index"

const meta = {
  args: {
    value: [],
    onChange: () => {},
  },
  component: ComboboxInput,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  title: "Forms/ComboboxInput",
} satisfies Meta<typeof ComboboxInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default popup variant using Popover API + CSS Anchor Positioning.
 * Click the button to open the listbox, select options, and see them as removable chips below.
 */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    return (
      <ComboboxInput
        value={value}
        onChange={setValue}
        label="Select options"
        placeholder="Choose items..."
        helper="Click the button to open the list"
      >
        <ComboboxInput.Button iconLeft={<Icon as={SearchIcon} />} />
        <ComboboxInput.Listbox>
          <ComboboxInput.Option value="apple">Apple</ComboboxInput.Option>
          <ComboboxInput.Option value="banana">Banana</ComboboxInput.Option>
          <ComboboxInput.Option value="cherry">Cherry</ComboboxInput.Option>
          <ComboboxInput.Option value="date">Date</ComboboxInput.Option>
          <ComboboxInput.Option value="elderberry">Elderberry</ComboboxInput.Option>
        </ComboboxInput.Listbox>
        <ComboboxInput.SelectionChips />
      </ComboboxInput>
    )
  },
}

/**
 * Drawer variant that opens a right drawer instead of a floating popover.
 * Includes dedicated search input and highlighted selection.
 * Best for mobile-first designs or space-constrained layouts.
 */
export const Drawer: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    return (
      <ComboboxInput
        variant="drawer"
        value={value}
        onChange={setValue}
        label="Select options (drawer)"
        helper="Opens as a right drawer on click"
      >
        <ComboboxInput.Button iconLeft={<Icon as={SearchIcon} />} />
        <ComboboxInput.Drawer>
          <ComboboxInput.Option value="react">React</ComboboxInput.Option>
          <ComboboxInput.Option value="vue">Vue</ComboboxInput.Option>
          <ComboboxInput.Option value="angular">Angular</ComboboxInput.Option>
          <ComboboxInput.Option value="svelte">Svelte</ComboboxInput.Option>
          <ComboboxInput.Option value="nextjs">Next.js</ComboboxInput.Option>
        </ComboboxInput.Drawer>
        <ComboboxInput.SelectionChips />
      </ComboboxInput>
    )
  },
}

/**
 * Disabled state - input cannot be interacted with and chips cannot be removed.
 */
export const Disabled: Story = {
  render: () => {
    const [value] = useState<string[]>(["apple", "cherry"])
    return (
      <ComboboxInput
        value={value}
        onChange={() => {}}
        label="Disabled selection"
        placeholder="Cannot interact"
        disabled
      >
        <ComboboxInput.Button />
        <ComboboxInput.Listbox>
          <ComboboxInput.Option value="apple">Apple</ComboboxInput.Option>
          <ComboboxInput.Option value="banana">Banana</ComboboxInput.Option>
          <ComboboxInput.Option value="cherry">Cherry</ComboboxInput.Option>
        </ComboboxInput.Listbox>
        <ComboboxInput.SelectionChips />
      </ComboboxInput>
    )
  },
}

/**
 * Controlled example with external state management.
 * Demonstrates syncing value between parent and component, including a "Clear all" button.
 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(["design"])

    return (
      <>
        <ComboboxInput
          value={value}
          onChange={setValue}
          label="Select interests"
          placeholder="Pick your interests"
          helper="Multiple selections allowed"
        >
          <ComboboxInput.Button />
          <ComboboxInput.Listbox>
            <ComboboxInput.Option value="design">Design</ComboboxInput.Option>
            <ComboboxInput.Option value="development">Development</ComboboxInput.Option>
            <ComboboxInput.Option value="marketing">Marketing</ComboboxInput.Option>
            <ComboboxInput.Option value="sales">Sales</ComboboxInput.Option>
            <ComboboxInput.Option value="hr">Human Resources</ComboboxInput.Option>
          </ComboboxInput.Listbox>
          <ComboboxInput.SelectionChips />
        </ComboboxInput>

        <ButtonGroup>
          <Button onClick={() => setValue([])} size="small">
            Clear all
          </Button>
        </ButtonGroup>
      </>
    )
  },
}

/**
 * Error state with validation feedback.
 */
export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    const hasError = value.length === 0

    return (
      <ComboboxInput
        value={value}
        onChange={setValue}
        label="Required selection"
        error={hasError ? "Please select at least one option" : undefined}
        required
      >
        <ComboboxInput.Button />
        <ComboboxInput.Listbox>
          <ComboboxInput.Option value="option1">Option 1</ComboboxInput.Option>
          <ComboboxInput.Option value="option2">Option 2</ComboboxInput.Option>
          <ComboboxInput.Option value="option3">Option 3</ComboboxInput.Option>
        </ComboboxInput.Listbox>
        <ComboboxInput.SelectionChips />
      </ComboboxInput>
    )
  },
}
