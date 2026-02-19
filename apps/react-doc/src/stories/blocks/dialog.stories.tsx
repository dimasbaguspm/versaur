import type { Meta, StoryObj } from "@storybook/react"
import { Button, Text } from "@versaur/react/primitive"
import { Dialog } from "@versaur/react/blocks"
import { useState } from "react"

const meta = {
  args: {
    isOpen: false,
    children: undefined,
  },
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/Dialog",
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
          <div style={{ padding: "2rem", minWidth: "400px" }}>
            <Text weight="bold" size="lg" style={{ marginBottom: "1rem" }}>
              Dialog Title
            </Text>
            <Text style={{ marginBottom: "1.5rem" }}>This is a dialog box with some content.</Text>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    )
  },
}

export const Confirmation: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button variant="danger" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        <Dialog {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
          <div style={{ padding: "2rem", minWidth: "350px" }}>
            <Text weight="bold" size="lg" style={{ marginBottom: "1rem" }}>
              Confirm Deletion
            </Text>
            <Text style={{ marginBottom: "2rem" }}>
              Are you sure you want to delete this item? This action cannot be undone.
            </Text>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setIsOpen(false)}>
                Delete
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    )
  },
}

export const Alert: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Show Alert</Button>
        <Dialog {...args} isOpen={isOpen} onOpenChange={setIsOpen}>
          <div style={{ padding: "2rem", minWidth: "350px" }}>
            <Text weight="bold" size="lg" intent="warning" style={{ marginBottom: "1rem" }}>
              Warning
            </Text>
            <Text style={{ marginBottom: "2rem" }}>Please review the information before proceeding.</Text>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                OK
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    )
  },
}
