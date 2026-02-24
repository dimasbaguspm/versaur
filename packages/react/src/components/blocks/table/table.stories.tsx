import type { Meta, StoryObj } from "@storybook/react"
import { MenuIcon } from "@versaur/icons"

import { Text } from "../../primitive/text/text"
import { Table } from "../index"

const meta = {
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/Table",
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default story - simple table with columns, header, body, and footer
 */
export const Default: Story = {
  render: () => (
    <Table columns="2fr 1fr 1fr">
      <Table.Header>
        <Table.Col as="th">Name</Table.Col>
        <Table.Col as="th">Status</Table.Col>
        <Table.Col as="th">Amount</Table.Col>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Col as="td">John Doe</Table.Col>
          <Table.Col as="td">Active</Table.Col>
          <Table.Col as="td" variant="numeric">
            $100
          </Table.Col>
        </Table.Row>
        <Table.Row>
          <Table.Col as="td">Jane Smith</Table.Col>
          <Table.Col as="td">Pending</Table.Col>
          <Table.Col as="td" variant="numeric">
            $150
          </Table.Col>
        </Table.Row>
        <Table.Row>
          <Table.Col as="td">Bob Johnson</Table.Col>
          <Table.Col as="td">Active</Table.Col>
          <Table.Col as="td" variant="numeric">
            $50
          </Table.Col>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Col area="span 2">Total</Table.Col>
        <Table.Col variant="numeric">$300</Table.Col>
      </Table.Footer>
    </Table>
  ),
}

/**
 * Complete story - all features: Toolbar, Checkbox selection, DoubleLine, Action with ActionItems, area spans
 */
export const Complete: Story = {
  render: () => {
    const allRows = ["1", "2", "3"]

    return (
      <Table columns="40px 2fr 1fr 1fr 1fr 100px">
        <Table.Toolbar
          leftContent={(selectedIds) => (
            <Text size="xs">{selectedIds.size > 0 ? `${selectedIds.size} selected` : "No selection"}</Text>
          )}
          rightContent={(selectedIds) => (
            <Text size="xs">{selectedIds.size > 0 ? `${selectedIds.size} selected` : "No selection"}</Text>
          )}
        />
        <Table.Header>
          <Table.Col as="th" variant="checkbox">
            <Table.Checkbox isMain />
          </Table.Col>
          <Table.Col as="th">Product</Table.Col>
          <Table.Col as="th">Category</Table.Col>
          <Table.Col as="th">Price</Table.Col>
          <Table.Col as="th">Stock</Table.Col>
          <Table.Col as="th">Actions</Table.Col>
        </Table.Header>
        <Table.Body>
          {allRows.map((rowId) => (
            <Table.Row key={rowId}>
              <Table.Col as="td" variant="checkbox">
                <Table.Checkbox rowId={rowId} />
              </Table.Col>
              <Table.DoubleLine
                as="td"
                title={`Premium Widget ${rowId}`}
                subtitle={`SKU: PWG-2024-00${rowId}`}
                size="md"
              />
              <Table.Col as="td">Electronics</Table.Col>
              <Table.Col as="td" variant="numeric">
                $199.99
              </Table.Col>
              <Table.Col as="td" variant="numeric">
                {12 + Number(rowId)}
              </Table.Col>
              <Table.Col as="td" variant="action">
                <Table.Action icon={MenuIcon}>
                  <Table.ActionItem
                    onClick={() => {
                      // eslint-disable-next-line no-console
                      console.log(`Edit ${rowId}`)
                    }}
                  >
                    Edit
                  </Table.ActionItem>
                  <Table.ActionItem
                    onClick={() => {
                      // eslint-disable-next-line no-console
                      console.log(`Delete ${rowId}`)
                    }}
                  >
                    Delete
                  </Table.ActionItem>
                </Table.Action>
              </Table.Col>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Col as="td" area="span 2">
            Total
          </Table.Col>
          <Table.Col as="td">3 items</Table.Col>
          <Table.Col as="td" variant="numeric">
            $599.97
          </Table.Col>
          <Table.Col as="td" variant="numeric">
            39 units
          </Table.Col>
          <Table.Col as="td" />
        </Table.Footer>
      </Table>
    )
  },
}
