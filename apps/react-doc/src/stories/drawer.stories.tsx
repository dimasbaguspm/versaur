import type { Meta, StoryObj } from "@storybook/react"
import { Button, Text } from "@versaur/react/primitive"
import { Drawer } from "@versaur/react/blocks"
import { useState } from "react"

const meta = {
  argTypes: {
    placement: {
      control: "select",
      options: ["left", "right"],
    },
  },
  args: {
    open: false,
    placement: "right",
  },
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Components/Overlays/Drawer",
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const RightPlacement: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)} style={{ margin: "2rem" }}>
          Open Drawer (Right)
        </Button>
        <Drawer {...args} open={isOpen} onOpenChange={setIsOpen} placement="right">
          <div style={{ padding: "2rem", minWidth: "350px", height: "100vh" }}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}
            >
              <Text weight="bold" size="lg">
                Navigation
              </Text>
              <Drawer.CloseButton onClick={() => setIsOpen(false)}>×</Drawer.CloseButton>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Text>Home</Text>
              <Text>About</Text>
              <Text>Services</Text>
              <Text>Contact</Text>
            </div>
          </div>
        </Drawer>
      </>
    )
  },
}

export const LeftPlacement: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)} style={{ margin: "2rem" }}>
          Open Drawer (Left)
        </Button>
        <Drawer {...args} open={isOpen} onOpenChange={setIsOpen} placement="left">
          <div style={{ padding: "2rem", minWidth: "350px", height: "100vh" }}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}
            >
              <Text weight="bold" size="lg">
                Menu
              </Text>
              <Drawer.CloseButton onClick={() => setIsOpen(false)}>×</Drawer.CloseButton>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Text>Item 1</Text>
              <Text>Item 2</Text>
              <Text>Item 3</Text>
            </div>
          </div>
        </Drawer>
      </>
    )
  },
}

export const Settings: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)} style={{ margin: "2rem" }}>
          Settings
        </Button>
        <Drawer {...args} open={isOpen} onOpenChange={setIsOpen} placement="right">
          <div
            style={{ padding: "2rem", minWidth: "400px", height: "100vh", display: "flex", flexDirection: "column" }}
          >
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}
            >
              <Text weight="bold" size="lg">
                Settings
              </Text>
              <Drawer.CloseButton onClick={() => setIsOpen(false)} style={{ fontSize: "1.5rem" }}>
                ×
              </Drawer.CloseButton>
            </div>
            <div style={{ flex: 1 }}>
              <Text weight="semibold" style={{ marginBottom: "1rem" }}>
                Preferences
              </Text>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Text size="sm">Theme</Text>
                <Text size="sm">Language</Text>
                <Text size="sm">Notifications</Text>
              </div>
            </div>
            <Button variant="primary" style={{ width: "100%" }} onClick={() => setIsOpen(false)}>
              Save
            </Button>
          </div>
        </Drawer>
      </>
    )
  },
}

export const Sidebar: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)} style={{ margin: "2rem" }}>
          Toggle Sidebar
        </Button>
        <Drawer {...args} open={isOpen} onOpenChange={setIsOpen} placement="left">
          <div style={{ padding: "1.5rem", minWidth: "280px", height: "100vh" }}>
            <Text weight="bold" size="lg" style={{ marginBottom: "2rem" }}>
              Sidebar
            </Text>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Text>Dashboard</Text>
              <Text>Analytics</Text>
              <Text>Reports</Text>
              <Text>Settings</Text>
            </div>
          </div>
        </Drawer>
      </>
    )
  },
}
