import type { Meta, StoryObj } from "@storybook/react"
import { Button, Modal, Text } from "@versaur/react"
import { useState } from "react"

const meta = {
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Overlays/Modal",
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal {...args} open={isOpen} onOpenChange={setIsOpen}>
          <div style={{ padding: "2rem", minWidth: "450px" }}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}
            >
              <Text weight="bold" size="lg">
                Modal Title
              </Text>
              <Modal.CloseButton onClick={() => setIsOpen(false)}>×</Modal.CloseButton>
            </div>
            <Text style={{ marginBottom: "1.5rem" }}>
              This is a modal dialog with a close button. Click the close button or outside to close.
            </Text>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                OK
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
}

export const WithHeader: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
        <Modal {...args} open={isOpen} onOpenChange={setIsOpen}>
          <div style={{ minWidth: "500px" }}>
            <div style={{ padding: "1.5rem", borderBottom: "1px solid #ddd" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Text weight="bold" size="lg">
                  User Information
                </Text>
                <Modal.CloseButton onClick={() => setIsOpen(false)} style={{ fontSize: "1.5rem" }}>
                  ×
                </Modal.CloseButton>
              </div>
            </div>
            <div style={{ padding: "2rem" }}>
              <Text style={{ marginBottom: "1rem" }}>Fill in the user details below.</Text>
              {/* Form content would go here */}
            </div>
            <div
              style={{
                padding: "1.5rem",
                borderTop: "1px solid #ddd",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
}

export const Small: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
        <Modal {...args} open={isOpen} onOpenChange={setIsOpen}>
          <div style={{ padding: "1.5rem", minWidth: "300px" }}>
            <Text weight="bold" style={{ marginBottom: "1rem" }}>
              Confirm Action
            </Text>
            <Text style={{ marginBottom: "1.5rem" }}>Are you sure?</Text>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
              <Button variant="secondary" size="small" onClick={() => setIsOpen(false)}>
                No
              </Button>
              <Button variant="primary" size="small" onClick={() => setIsOpen(false)}>
                Yes
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
}

export const Large: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
        <Modal {...args} open={isOpen} onOpenChange={setIsOpen}>
          <div style={{ minWidth: "700px", padding: "2rem" }}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}
            >
              <Text weight="bold" size="lg">
                Settings
              </Text>
              <Modal.CloseButton onClick={() => setIsOpen(false)} style={{ fontSize: "1.5rem" }}>
                ×
              </Modal.CloseButton>
            </div>
            <Text style={{ marginBottom: "2rem" }}>
              Configure your application settings here. This is a large modal with more space for content.
            </Text>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Apply
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  },
}
