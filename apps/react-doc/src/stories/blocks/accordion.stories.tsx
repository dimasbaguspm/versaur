import type { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "@versaur/react/blocks"
import { Button, Text } from "@versaur/react/primitive"
import { useState } from "react"

const meta = {
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/Accordion",
  args: {
    summary: <Accordion.Summary>Accordion Summary</Accordion.Summary>,
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default uncontrolled accordion in closed state.
 */
export const Default: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Accordion summary={<Accordion.Summary>Click to expand</Accordion.Summary>}>
        <Text>This is the accordion content. It expands when you click on the summary.</Text>
      </Accordion>
    </div>
  ),
}

/**
 * Controlled accordion using useState to manage open state.
 */
export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ padding: "0.75rem 1rem", backgroundColor: "#f0f0f0", borderRadius: "4px" }}>
          <Text size="sm">Current state: {isOpen ? "Open" : "Closed"}</Text>
        </div>
        <Accordion
          open={isOpen}
          onOpenChange={setIsOpen}
          summary={<Accordion.Summary>Controlled accordion</Accordion.Summary>}
        >
          <Text>This accordion state is controlled by a parent component using useState.</Text>
        </Accordion>
      </div>
    )
  },
}

/**
 * Multiple stacked accordions.
 */
export const Stacked: Story = {
  render: () => (
    <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: 0 }}>
      <Accordion summary={<Accordion.Summary>First Accordion</Accordion.Summary>}>
        <Text>Content for the first accordion item. Click to expand or collapse.</Text>
      </Accordion>
      <Accordion summary={<Accordion.Summary>Second Accordion</Accordion.Summary>}>
        <Text>Content for the second accordion item. Each accordion manages its own state independently.</Text>
      </Accordion>
      <Accordion summary={<Accordion.Summary>Third Accordion</Accordion.Summary>}>
        <Text>Content for the third accordion item. You can expand multiple accordions simultaneously.</Text>
      </Accordion>
    </div>
  ),
}

/**
 * Accordion with right-aligned metadata and line clamping.
 */
export const WithMetadata: Story = {
  render: () => (
    <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: 0 }}>
      <Accordion
        summary={
          <Accordion.Summary
            right={
              <Button variant="ghost" size="small">
                Button
              </Button>
            }
            clamp={1}
          >
            Account Settings and Preferences Configuration
          </Accordion.Summary>
        }
      >
        <Text>Configure your account settings and preferences here.</Text>
      </Accordion>
      <Accordion
        summary={
          <Accordion.Summary right={<Text size="sm">3 items</Text>} clamp={2}>
            Privacy and Security Settings with Multiple Important Options for User Control and Data Protection
          </Accordion.Summary>
        }
      >
        <Text>Manage your privacy and security settings.</Text>
      </Accordion>
      <Accordion
        summary={
          <Accordion.Summary right={<Text size="sm">Updated</Text>} clamp={2}>
            Notification Preferences for Email, Push, and In-App Notifications with Customizable Frequency
          </Accordion.Summary>
        }
      >
        <Text>Configure notification preferences.</Text>
      </Accordion>
    </div>
  ),
}
