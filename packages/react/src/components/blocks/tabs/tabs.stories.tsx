import type { Meta, StoryObj } from "@storybook/react"
import { CheckIcon, ChevronRightIcon } from "@versaur/icons"
import { useState } from "react"

import { Icon } from "../../primitive"
import { Tabs } from "../index"

const meta = {
  component: Tabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  title: "Blocks/Tabs",
  args: {
    value: "tab1",
    onChange: () => {},
    children: undefined,
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default tabs with three basic items.
 */
export const Default: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState("tab1")
    return (
      <div>
        <Tabs value={value} onChange={setValue}>
          <Tabs.Item value="tab1">Tab 1</Tabs.Item>
          <Tabs.Item value="tab2">Tab 2</Tabs.Item>
          <Tabs.Item value="tab3">Tab 3</Tabs.Item>
        </Tabs>
        <div style={{ padding: "1.5rem" }}>
          {value === "tab1" && <p>Content for Tab 1</p>}
          {value === "tab2" && <p>Content for Tab 2</p>}
          {value === "tab3" && <p>Content for Tab 3</p>}
        </div>
      </div>
    )
  },
}

/**
 * Tabs with disabled state showing interaction behavior.
 */
export const States: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState("enabled1")
    return (
      <div>
        <Tabs value={value} onChange={setValue}>
          <Tabs.Item value="enabled1">Enabled 1</Tabs.Item>
          <Tabs.Item value="disabled" disabled>
            Disabled
          </Tabs.Item>
          <Tabs.Item value="enabled2">Enabled 2</Tabs.Item>
        </Tabs>
        <div style={{ padding: "1.5rem" }}>
          {value === "enabled1" && <p>First enabled tab</p>}
          {value === "enabled2" && <p>Second enabled tab</p>}
        </div>
      </div>
    )
  },
}

/**
 * Tabs with various icon configurations: left, right, and both.
 */
export const WithIcons: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState("done")
    return (
      <div>
        <Tabs value={value} onChange={setValue}>
          <Tabs.Item value="done" leftIcon={<Icon as={CheckIcon} />}>
            Done
          </Tabs.Item>
          <Tabs.Item value="next" rightIcon={<Icon as={ChevronRightIcon} />}>
            Next
          </Tabs.Item>
          <Tabs.Item value="both" leftIcon={<Icon as={CheckIcon} />} rightIcon={<Icon as={ChevronRightIcon} />}>
            Complete
          </Tabs.Item>
        </Tabs>
        <div style={{ padding: "1.5rem" }}>
          {value === "done" && <p>Done content</p>}
          {value === "next" && <p>Next content</p>}
          {value === "both" && <p>Complete content</p>}
        </div>
      </div>
    )
  },
}
