import type { Meta, StoryObj } from "@storybook/react"
import { DrawerPlacement } from "@versaur/core/blocks"
import { BadgeGroup, ButtonGroup, Drawer, Tabs } from "@versaur/react/blocks"
import { Badge, Button, Heading, Text } from "@versaur/react/primitive"
import { useState } from "react"

const meta = {
  argTypes: {
    placement: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
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
  title: "Blocks/Drawer",
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Demonstrates all drawer placements: Left, Right, Top, and Bottom.
 * Click each button to see the drawer slide in from the respective direction.
 */
export const Placement: Story = {
  render: (args) => {
    const [openPlacement, setOpenPlacement] = useState<DrawerPlacement | null>(null)

    const DrawerContent = ({ placement }: { placement: DrawerPlacement }) => (
      <Drawer
        {...args}
        open={openPlacement === placement}
        onOpenChange={(open) => setOpenPlacement(open ? placement : null)}
        placement={placement}
      >
        <Drawer.Header action={<Drawer.CloseButton onClick={() => setOpenPlacement(null)} />}>
          <Heading as="h4">{placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer</Heading>
        </Drawer.Header>
        <Drawer.Body>
          <Text>This drawer is positioned on the {placement} side of the viewport.</Text>
        </Drawer.Body>
        <Drawer.Footer>
          <ButtonGroup fluid>
            <Button variant="primary" onClick={() => setOpenPlacement(null)}>
              Close
            </Button>
          </ButtonGroup>
        </Drawer.Footer>
      </Drawer>
    )

    return (
      <div style={{ padding: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button onClick={() => setOpenPlacement("left")}>Open Left</Button>
        <Button onClick={() => setOpenPlacement("right")}>Open Right</Button>
        <Button onClick={() => setOpenPlacement("top")}>Open Top</Button>
        <Button onClick={() => setOpenPlacement("bottom")}>Open Bottom</Button>

        <DrawerContent placement="left" />
        <DrawerContent placement="right" />
        <DrawerContent placement="top" />
        <DrawerContent placement="bottom" />
      </div>
    )
  },
}

/**
 * Drawer without a close button in the header.
 * Useful when the drawer is controlled externally or has dedicated action buttons in the footer.
 */
export const WithoutCloseButton: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)} style={{ margin: "2rem" }}>
          Open Drawer (No Close Button)
        </Button>
        <Drawer {...args} open={isOpen} onOpenChange={setIsOpen} placement="right">
          <Drawer.Header>
            <Heading as="h4">Product Info</Heading>
          </Drawer.Header>
          <Drawer.Body>
            <Text>Content without close button. Use external controls to manage the drawer state.</Text>
          </Drawer.Body>
        </Drawer>
      </>
    )
  },
}

/**
 * Drawer with tabs in the header for organizing content into multiple sections.
 * Demonstrates header with title, badges, action button, and tabbed content navigation.
 */
export const WithTabs: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("details")

    return (
      <>
        <Button onClick={() => setIsOpen(true)} style={{ margin: "2rem" }}>
          Open Drawer with Tabs
        </Button>
        <Drawer {...args} open={isOpen} onOpenChange={setIsOpen} placement="right">
          <Drawer.Header
            action={<Drawer.CloseButton onClick={() => setIsOpen(false)} />}
            tabs={
              <Tabs value={activeTab} onChange={setActiveTab}>
                <Tabs.Item value="details">Details</Tabs.Item>
                <Tabs.Item value="history">History</Tabs.Item>
                <Tabs.Item value="notes">Notes</Tabs.Item>
              </Tabs>
            }
          >
            <Heading as="h4">Product Info</Heading>
            <BadgeGroup align="start">
              <Badge variant="success">In Stock</Badge>
              <Badge variant="warning">Limited Offer</Badge>
            </BadgeGroup>
          </Drawer.Header>
          <Drawer.Body>
            {activeTab === "details" && <Text>Product details content here.</Text>}
            {activeTab === "history" && <Text>Change history content here.</Text>}
            {activeTab === "notes" && <Text>Notes content here.</Text>}
          </Drawer.Body>
        </Drawer>
      </>
    )
  },
}

/**
 * Drawer with supplementary information in the header.
 * Demonstrates the action prop with badges and status info below the title,
 * showcasing the 3-area header layout (title, action, supplementary content).
 */
export const WithSupplementaryInfo: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)} style={{ margin: "2rem" }}>
          Open Drawer with Info
        </Button>
        <Drawer {...args} open={isOpen} onOpenChange={setIsOpen} placement="right">
          <Drawer.Header action={<Drawer.CloseButton onClick={() => setIsOpen(false)} />}>
            <Heading as="h4">Customer Profile</Heading>
            <Text size="sm">Member since January 2024</Text>
          </Drawer.Header>
          <Drawer.Body>
            <Text>
              This drawer showcases supplementary information in the header. The title appears top-left, the action
              button (close) top-right, and additional info badges display below.
            </Text>
          </Drawer.Body>
          <Drawer.Footer>
            <ButtonGroup fluid>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                View Profile
              </Button>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </ButtonGroup>
          </Drawer.Footer>
        </Drawer>
      </>
    )
  },
}
