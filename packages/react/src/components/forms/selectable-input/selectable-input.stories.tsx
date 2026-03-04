import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { BadgeGroup } from "../../blocks/badge-group/badge-group"
import { Card } from "../../blocks/index"
import { Badge } from "../../primitive/badge/badge"
import { Heading, Text } from "../../primitive/index"
import { SelectableInput } from "../index"

const meta = {
  args: {
    value: undefined,
    onChange: () => {},
  },
  component: SelectableInput,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  title: "Forms/SelectableInput",
} satisfies Meta<typeof SelectableInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default selectable input in single-selection mode.
 * Click an option to select it, click again to deselect.
 * Each option displays plain text content.
 */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>()
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <SelectableInput value={value} onChange={setValue}>
          <SelectableInput.Option value="option1">Option 1</SelectableInput.Option>
          <SelectableInput.Option value="option2">Option 2</SelectableInput.Option>
          <SelectableInput.Option value="option3">Option 3</SelectableInput.Option>
        </SelectableInput>
      </div>
    )
  },
}

/**
 * Selectable input in multiple-selection mode.
 * Click options to toggle them on/off. Multiple options can be selected.
 */
export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <SelectableInput multiple value={value} onChange={setValue}>
          <SelectableInput.Option value="item1">Item 1</SelectableInput.Option>
          <SelectableInput.Option value="item2">Item 2</SelectableInput.Option>
          <SelectableInput.Option value="item3">Item 3</SelectableInput.Option>
          <SelectableInput.Option value="item4">Item 4</SelectableInput.Option>
        </SelectableInput>
      </div>
    )
  },
}

/**
 * SelectableInput with custom Card content.
 * Demonstrates how to render rich content (Card component) inside each selectable option.
 */
export const WithCard: Story = {
  render: () => {
    const [value, setValue] = useState<string>()

    const transactions = [
      { id: "tx1", amount: "Rp 1.000.000", description: "Coffee Shop", date: "Mar 4" },
      { id: "tx2", amount: "Rp 50.000", description: "Grocery Store", date: "Mar 3" },
      { id: "tx3", amount: "Rp 735.000", description: "Online Shopping", date: "Mar 2" },
    ]

    return (
      <SelectableInput value={value} onChange={setValue}>
        {transactions.map((tx) => (
          <SelectableInput.Option key={tx.id} value={tx.id}>
            <Card border={undefined} as="div">
              <Card.Header justify="between" gap="md">
                <div>
                  <Heading as="h3" size="lg">
                    {tx.amount}
                  </Heading>
                  <Text size="xs" intent="gray">
                    {tx.description}
                  </Text>
                </div>
              </Card.Header>
              <Card.Footer justify="between" gap="sm">
                <BadgeGroup>
                  <Badge variant="warning" size="small">
                    Expense
                  </Badge>
                </BadgeGroup>
                <Text size="xs" intent="gray">
                  {tx.date}
                </Text>
              </Card.Footer>
            </Card>
          </SelectableInput.Option>
        ))}
      </SelectableInput>
    )
  },
}

/**
 * Showcase selectable input states: disabled options and disabled root.
 */
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Single (With Disabled Option)</div>
        {(() => {
          const [value, setValue] = useState<string>("option1")
          return (
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <SelectableInput value={value} onChange={setValue}>
                <SelectableInput.Option value="option1">Option 1 (enabled)</SelectableInput.Option>
                <SelectableInput.Option value="option2" disabled>
                  Option 2 (disabled)
                </SelectableInput.Option>
                <SelectableInput.Option value="option3">Option 3 (enabled)</SelectableInput.Option>
              </SelectableInput>
            </div>
          )
        })()}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Multiple (All Disabled)</div>
        {(() => {
          const [value] = useState<string[]>(["item1"])
          return (
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <SelectableInput multiple value={value} onChange={() => {}} disabled>
                <SelectableInput.Option value="item1">Item 1</SelectableInput.Option>
                <SelectableInput.Option value="item2">Item 2</SelectableInput.Option>
                <SelectableInput.Option value="item3">Item 3</SelectableInput.Option>
              </SelectableInput>
            </div>
          )
        })()}
      </div>
    </div>
  ),
}

/**
 * SelectableInput with Card content in multiple-selection mode.
 * Each Card displays transaction details, and multiple cards can be selected.
 */
export const MultipleWithCard: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])

    const transactions = [
      { id: "tx1", amount: "$100.00", description: "Coffee Shop", date: "Mar 4", status: "completed" },
      { id: "tx2", amount: "$45.50", description: "Grocery Store", date: "Mar 3", status: "pending" },
      { id: "tx3", amount: "$210.00", description: "Online Shopping", date: "Mar 2", status: "completed" },
      { id: "tx4", amount: "$75.25", description: "Gas Station", date: "Mar 1", status: "completed" },
    ]

    return (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <div style={{ marginBottom: "1rem", fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
          Selected: {selected.length > 0 ? selected.join(", ") : "None"}
        </div>
        <SelectableInput multiple value={selected} onChange={setSelected}>
          {transactions.map((tx) => (
            <SelectableInput.Option key={tx.id} value={tx.id}>
              <Card style={{ width: "100%", border: "none", background: "transparent" }}>
                <Card.Header style={{ gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ flex: 1 }}>
                    <Heading as="h4" style={{ margin: 0, marginBottom: "0.25rem" }}>
                      {tx.description}
                    </Heading>
                    <Text style={{ margin: 0, fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                      {tx.date} • {tx.status}
                    </Text>
                  </div>
                  <div style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{tx.amount}</div>
                </Card.Header>
              </Card>
            </SelectableInput.Option>
          ))}
        </SelectableInput>
      </div>
    )
  },
}

/**
 * Showcase checkbox placement variants: top (default), center, and bottom.
 * Demonstrates how the checkbox aligns within each option.
 */
export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Top (default)</div>
        {(() => {
          const [value, setValue] = useState<string>()
          return (
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <SelectableInput value={value} onChange={setValue} placement="top">
                <SelectableInput.Option value="item1">
                  <div>
                    <Heading as="h4" style={{ margin: 0, marginBottom: "0.25rem" }}>
                      Top aligned
                    </Heading>
                    <Text style={{ margin: 0, fontSize: "0.875rem" }}>Checkbox aligns to top</Text>
                  </div>
                </SelectableInput.Option>
                <SelectableInput.Option value="item2">
                  <div>
                    <Heading as="h4" style={{ margin: 0, marginBottom: "0.25rem" }}>
                      Another option
                    </Heading>
                    <Text style={{ margin: 0, fontSize: "0.875rem" }}>With multi-line content</Text>
                  </div>
                </SelectableInput.Option>
              </SelectableInput>
            </div>
          )
        })()}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Center</div>
        {(() => {
          const [value, setValue] = useState<string>()
          return (
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <SelectableInput value={value} onChange={setValue} placement="center">
                <SelectableInput.Option value="item1">
                  <div>
                    <Heading as="h4" style={{ margin: 0, marginBottom: "0.25rem" }}>
                      Center aligned
                    </Heading>
                    <Text style={{ margin: 0, fontSize: "0.875rem" }}>Checkbox aligns to center</Text>
                  </div>
                </SelectableInput.Option>
                <SelectableInput.Option value="item2">
                  <div>
                    <Heading as="h4" style={{ margin: 0, marginBottom: "0.25rem" }}>
                      Another option
                    </Heading>
                    <Text style={{ margin: 0, fontSize: "0.875rem" }}>With multi-line content</Text>
                  </div>
                </SelectableInput.Option>
              </SelectableInput>
            </div>
          )
        })()}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 500 }}>Bottom</div>
        {(() => {
          const [value, setValue] = useState<string>()
          return (
            <div style={{ width: "100%", maxWidth: "300px" }}>
              <SelectableInput value={value} onChange={setValue} placement="bottom">
                <SelectableInput.Option value="item1">
                  <div>
                    <Heading as="h4" style={{ margin: 0, marginBottom: "0.25rem" }}>
                      Bottom aligned
                    </Heading>
                    <Text style={{ margin: 0, fontSize: "0.875rem" }}>Checkbox aligns to bottom</Text>
                  </div>
                </SelectableInput.Option>
                <SelectableInput.Option value="item2">
                  <div>
                    <Heading as="h4" style={{ margin: 0, marginBottom: "0.25rem" }}>
                      Another option
                    </Heading>
                    <Text style={{ margin: 0, fontSize: "0.875rem" }}>With multi-line content</Text>
                  </div>
                </SelectableInput.Option>
              </SelectableInput>
            </div>
          )
        })()}
      </div>
    </div>
  ),
}
