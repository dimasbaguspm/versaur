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
 * Demonstrates client-side filtering - consumer controls which options render based on search.
 */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    const [search, setSearch] = useState("")

    const allOptions = [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
      { value: "date", label: "Date" },
      { value: "elderberry", label: "Elderberry" },
    ]

    // Consumer owns filtering logic
    const filteredOptions = allOptions.filter(
      (opt) =>
        !search ||
        opt.label.toLowerCase().includes(search.toLowerCase()) ||
        opt.value.toLowerCase().includes(search.toLowerCase())
    )

    return (
      <ComboboxInput
        multiple
        value={value}
        onChange={setValue}
        label="Select options"
        placeholder="Choose items..."
        helper="Click the button to open the list"
      >
        <ComboboxInput.Button iconLeft={<Icon as={SearchIcon} />} />
        <ComboboxInput.Container
          search={
            <ComboboxInput.Search
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        >
          {filteredOptions.map((opt) => (
            <ComboboxInput.Option key={opt.value} value={opt.value}>
              {opt.label}
            </ComboboxInput.Option>
          ))}
        </ComboboxInput.Container>
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
export const DrawerVariant: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    const [search, setSearch] = useState("")
    return (
      <ComboboxInput
        variant="drawer"
        multiple
        value={value}
        onChange={setValue}
        label="Select options (drawer)"
        helper="Opens as a right drawer on click"
      >
        <ComboboxInput.Button iconLeft={<Icon as={SearchIcon} />} />
        <ComboboxInput.Container
          variant="drawer"
          search={
            <ComboboxInput.Search
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        >
          <ComboboxInput.Option value="react">React</ComboboxInput.Option>
          <ComboboxInput.Option value="vue">Vue</ComboboxInput.Option>
          <ComboboxInput.Option value="angular">Angular</ComboboxInput.Option>
          <ComboboxInput.Option value="svelte">Svelte</ComboboxInput.Option>
          <ComboboxInput.Option value="nextjs">Next.js</ComboboxInput.Option>
        </ComboboxInput.Container>
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
    const [search] = useState("")
    return (
      <ComboboxInput
        multiple
        value={value}
        onChange={() => {}}
        label="Disabled selection"
        placeholder="Cannot interact"
        disabled
      >
        <ComboboxInput.Button />
        <ComboboxInput.Container
          search={
            <ComboboxInput.Search
              name="search"
              value={search}
              onChange={() => {}}
            />
          }
        >
          <ComboboxInput.Option value="apple">Apple</ComboboxInput.Option>
          <ComboboxInput.Option value="banana">Banana</ComboboxInput.Option>
          <ComboboxInput.Option value="cherry">Cherry</ComboboxInput.Option>
        </ComboboxInput.Container>
        <ComboboxInput.SelectionChips />
      </ComboboxInput>
    )
  },
}

/**
 * Controlled example with external state management.
 * Demonstrates syncing value between parent and component, including a "Clear all" button.
 * Shows client-side filtering - consumer controls which options render.
 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(["design"])
    const [search, setSearch] = useState("")

    const allOptions = [
      { value: "design", label: "Design" },
      { value: "development", label: "Development" },
      { value: "marketing", label: "Marketing" },
      { value: "sales", label: "Sales" },
      { value: "hr", label: "Human Resources" },
    ]

    // Consumer owns filtering logic
    const filteredOptions = allOptions.filter(
      (opt) =>
        !search ||
        opt.label.toLowerCase().includes(search.toLowerCase()) ||
        opt.value.toLowerCase().includes(search.toLowerCase())
    )

    return (
      <>
        <ComboboxInput
          multiple
          value={value}
          onChange={setValue}
          label="Select interests"
          placeholder="Pick your interests"
          helper="Multiple selections allowed"
        >
          <ComboboxInput.Button />
          <ComboboxInput.Container
            search={
              <ComboboxInput.Search
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          >
            {filteredOptions.map((opt) => (
              <ComboboxInput.Option key={opt.value} value={opt.value}>
                {opt.label}
              </ComboboxInput.Option>
            ))}
          </ComboboxInput.Container>
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
    const [search, setSearch] = useState("")
    const hasError = value.length === 0

    return (
      <ComboboxInput
        multiple
        value={value}
        onChange={setValue}
        label="Required selection"
        error={hasError ? "Please select at least one option" : undefined}
        required
      >
        <ComboboxInput.Button />
        <ComboboxInput.Container
          search={
            <ComboboxInput.Search
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        >
          <ComboboxInput.Option value="option1">Option 1</ComboboxInput.Option>
          <ComboboxInput.Option value="option2">Option 2</ComboboxInput.Option>
          <ComboboxInput.Option value="option3">Option 3</ComboboxInput.Option>
        </ComboboxInput.Container>
        <ComboboxInput.SelectionChips />
      </ComboboxInput>
    )
  },
}

/**
 * Single-select mode - only one option can be selected at a time.
 * Listbox auto-closes after selection, no chips displayed, button shows selected label.
 * Demonstrates client-side filtering.
 */
export const SingleSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null)
    const [search, setSearch] = useState("")

    const allOptions = [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "angular", label: "Angular" },
      { value: "svelte", label: "Svelte" },
    ]

    const filteredOptions = allOptions.filter(
      (opt) =>
        !search ||
        opt.label.toLowerCase().includes(search.toLowerCase()) ||
        opt.value.toLowerCase().includes(search.toLowerCase())
    )

    return (
      <ComboboxInput
        multiple={false}
        value={value}
        onChange={setValue}
        label="Select a framework"
        placeholder="Choose one..."
        helper="Single selection only"
      >
        <ComboboxInput.Button iconLeft={<Icon as={SearchIcon} />} />
        <ComboboxInput.Container
          search={
            <ComboboxInput.Search
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        >
          {filteredOptions.map((opt) => (
            <ComboboxInput.Option key={opt.value} value={opt.value}>
              {opt.label}
            </ComboboxInput.Option>
          ))}
        </ComboboxInput.Container>
      </ComboboxInput>
    )
  },
}

/**
 * Demonstrates Container component for arbitrary content.
 * Shows "Start typing" prompt and "No results" message via Container with integrated search.
 */
export const WithContainer: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    const [search, setSearch] = useState("")

    const allOptions = [
      { value: "apple", label: "Apple" },
      { value: "apricot", label: "Apricot" },
      { value: "banana", label: "Banana" },
      { value: "blueberry", label: "Blueberry" },
    ]

    const filteredOptions = allOptions.filter(
      (opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase()) ||
        opt.value.toLowerCase().includes(search.toLowerCase())
    )

    const searchInput = (
      <ComboboxInput.Search
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    )

    return (
      <ComboboxInput multiple value={value} onChange={setValue} label="Fruit selection" placeholder="Pick fruits...">
        <ComboboxInput.Button />
        <ComboboxInput.Container search={searchInput} variant="list">
          {search.length === 0 ? (
            <div style={{ padding: "1rem", textAlign: "center", color: "#666" }}>
              Start typing to search fruits…
            </div>
          ) : filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <ComboboxInput.Option key={opt.value} value={opt.value}>
                {opt.label}
              </ComboboxInput.Option>
            ))
          ) : (
            <div style={{ padding: "1rem", textAlign: "center", color: "#999" }}>
              No fruits match "{search}"
            </div>
          )}
        </ComboboxInput.Container>
        <ComboboxInput.SelectionChips />
      </ComboboxInput>
    )
  },
}
