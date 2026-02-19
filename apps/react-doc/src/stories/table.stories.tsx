import type { Meta, StoryObj } from "@storybook/react"
import { Badge, Button } from "@versaur/react/primitive"
import { Table } from "@versaur/react/blocks"
import { useState } from "react"

const meta = {
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Data Display/Table",
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "800px" }}>
      <Table {...args} columns="2fr 1fr 1fr 1fr">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.BodyCell>Widget Pro</Table.BodyCell>
            <Table.BodyCell variant="numeric">5</Table.BodyCell>
            <Table.BodyCell variant="numeric">$29.99</Table.BodyCell>
            <Table.BodyCell variant="numeric">$149.95</Table.BodyCell>
          </Table.Row>
          <Table.Row>
            <Table.BodyCell>Component Suite</Table.BodyCell>
            <Table.BodyCell variant="numeric">10</Table.BodyCell>
            <Table.BodyCell variant="numeric">$14.99</Table.BodyCell>
            <Table.BodyCell variant="numeric">$149.90</Table.BodyCell>
          </Table.Row>
          <Table.Row>
            <Table.BodyCell>Basic Theme</Table.BodyCell>
            <Table.BodyCell variant="numeric">3</Table.BodyCell>
            <Table.BodyCell variant="numeric">$9.99</Table.BodyCell>
            <Table.BodyCell variant="numeric">$29.97</Table.BodyCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
}

export const Sortable: Story = {
  render: (args) => {
    const [sortCol, setSortCol] = useState<string | null>(null)
    const [sortDir, setSortDir] = useState<"asc" | "desc" | null>(null)

    const handleSort = (column: string) => (direction: "asc" | "desc" | null) => {
      setSortCol(column)
      setSortDir(direction)
    }

    return (
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <Table {...args} columns="2fr 1fr 1fr 1fr">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sortable
                sortDirection={sortCol === "task" ? sortDir : null}
                onSort={handleSort("task")}
              >
                Task
              </Table.HeaderCell>
              <Table.HeaderCell
                sortable
                sortDirection={sortCol === "status" ? sortDir : null}
                onSort={handleSort("status")}
              >
                Status
              </Table.HeaderCell>
              <Table.HeaderCell
                sortable
                sortDirection={sortCol === "priority" ? sortDir : null}
                onSort={handleSort("priority")}
              >
                Priority
              </Table.HeaderCell>
              <Table.HeaderCell>Assignee</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.BodyCell>Implement API</Table.BodyCell>
              <Table.BodyCell>In Progress</Table.BodyCell>
              <Table.BodyCell>
                <Badge variant="danger" size="small">
                  High
                </Badge>
              </Table.BodyCell>
              <Table.BodyCell>Sarah</Table.BodyCell>
            </Table.Row>
            <Table.Row>
              <Table.BodyCell>Design System</Table.BodyCell>
              <Table.BodyCell>Completed</Table.BodyCell>
              <Table.BodyCell>
                <Badge variant="success" size="small">
                  Medium
                </Badge>
              </Table.BodyCell>
              <Table.BodyCell>John</Table.BodyCell>
            </Table.Row>
            <Table.Row>
              <Table.BodyCell>Write Tests</Table.BodyCell>
              <Table.BodyCell>Pending</Table.BodyCell>
              <Table.BodyCell>
                <Badge variant="info" size="small">
                  Low
                </Badge>
              </Table.BodyCell>
              <Table.BodyCell>Mike</Table.BodyCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  },
}

export const WithSelection: Story = {
  render: (args) => {
    const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set())

    const toggleRow = (rowId: string | number) => {
      const newSelected = new Set(selectedRows)
      if (newSelected.has(rowId)) {
        newSelected.delete(rowId)
      } else {
        newSelected.add(rowId)
      }
      setSelectedRows(newSelected)
    }

    return (
      <div style={{ width: "100%", maxWidth: "900px" }}>
        <Table {...args} selectedRows={selectedRows} columns="50px 2fr 1fr 1fr 1fr">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{ textAlign: "center" }}>
                <Table.Checkbox
                  rowId="select-all"
                  checked={selectedRows.size > 0}
                  indeterminate={selectedRows.size > 0 && selectedRows.size < 3}
                  onChange={() => {
                    if (selectedRows.size === 3) {
                      setSelectedRows(new Set())
                    } else {
                      setSelectedRows(new Set(["1", "2", "3"]))
                    }
                  }}
                />
              </Table.HeaderCell>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Stock</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {["1", "2", "3"].map((rowId) => (
              <Table.Row key={rowId}>
                <Table.BodyCell style={{ textAlign: "center" }}>
                  <Table.Checkbox rowId={rowId} checked={selectedRows.has(rowId)} onChange={() => toggleRow(rowId)} />
                </Table.BodyCell>
                <Table.BodyCell>Product {rowId}</Table.BodyCell>
                <Table.BodyCell>Electronics</Table.BodyCell>
                <Table.BodyCell variant="numeric">50</Table.BodyCell>
                <Table.BodyCell>
                  <Badge variant="success" size="small">
                    In Stock
                  </Badge>
                </Table.BodyCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  },
}

export const WithActions: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "900px" }}>
      <Table {...args} columns="2fr 1fr 1fr 120px">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell style={{ textAlign: "center" }}>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {["Alice", "Bob", "Charlie"].map((name) => (
            <Table.Row key={name}>
              <Table.BodyCell>{name}</Table.BodyCell>
              <Table.BodyCell>{name.toLowerCase()}@example.com</Table.BodyCell>
              <Table.BodyCell>Admin</Table.BodyCell>
              <Table.BodyCell variant="action" style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                <Button size="small" variant="secondary">
                  Edit
                </Button>
                <Button size="small" variant="danger">
                  Delete
                </Button>
              </Table.BodyCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),
}

export const Compact: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "700px" }}>
      <Table {...args} columns="1.5fr 1fr 1fr">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Feature</Table.HeaderCell>
            <Table.HeaderCell>Free</Table.HeaderCell>
            <Table.HeaderCell>Pro</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.BodyCell>Basic Components</Table.BodyCell>
            <Table.BodyCell>✓</Table.BodyCell>
            <Table.BodyCell>✓</Table.BodyCell>
          </Table.Row>
          <Table.Row>
            <Table.BodyCell>Advanced Themes</Table.BodyCell>
            <Table.BodyCell>—</Table.BodyCell>
            <Table.BodyCell>✓</Table.BodyCell>
          </Table.Row>
          <Table.Row>
            <Table.BodyCell>Priority Support</Table.BodyCell>
            <Table.BodyCell>—</Table.BodyCell>
            <Table.BodyCell>✓</Table.BodyCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
}

export const WithDoubleLine: Story = {
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "900px" }}>
      <Table {...args} columns="2fr 1.5fr 1fr 1fr">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Stock</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.BodyCell>
              <Table.DoubleLine title="Premium Widget" subtitle="SKU: PWG-2024-001" />
            </Table.BodyCell>
            <Table.BodyCell>Electronics</Table.BodyCell>
            <Table.BodyCell variant="numeric">$199.99</Table.BodyCell>
            <Table.BodyCell variant="numeric">12</Table.BodyCell>
          </Table.Row>
          <Table.Row>
            <Table.BodyCell>
              <Table.DoubleLine title="Standard Component" subtitle="SKU: SCM-2024-002" />
            </Table.BodyCell>
            <Table.BodyCell>Accessories</Table.BodyCell>
            <Table.BodyCell variant="numeric">$49.99</Table.BodyCell>
            <Table.BodyCell variant="numeric">45</Table.BodyCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  ),
}
