import type { Meta, StoryObj } from "@storybook/react"
import { AlertCircleIcon, AlertTriangleIcon, HelpCircleIcon } from "@versaur/icons"
import { Banner, Icon } from "@versaur/react/primitive"
import { useState } from "react"

const meta = {
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitive/Banner",
  args: {
    children: "This is a notification message",
  },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default info banner with icon and dismiss button
 */
export const Default: Story = {
  render: () => (
    <div style={{ width: "500px" }}>
      <Banner variant="info" icon={<Icon as={HelpCircleIcon} />} onDismiss={() => {}}>
        This is an informational message
      </Banner>
    </div>
  ),
}

/**
 * Danger banner for critical alerts
 */
export const Danger: Story = {
  render: () => (
    <div style={{ width: "500px" }}>
      <Banner variant="danger" icon={<Icon as={AlertCircleIcon} />} onDismiss={() => {}}>
        You need to complete your payment
      </Banner>
    </div>
  ),
}

/**
 * Warning banner for caution messages
 */
export const Warning: Story = {
  render: () => (
    <div style={{ width: "500px" }}>
      <Banner variant="warning" icon={<Icon as={AlertTriangleIcon} />} onDismiss={() => {}}>
        This action cannot be undone
      </Banner>
    </div>
  ),
}

/**
 * Banner without icon
 */
export const WithoutIcon: Story = {
  render: () => (
    <div style={{ width: "500px" }}>
      <Banner variant="info" onDismiss={() => {}}>
        Simple notification without an icon
      </Banner>
    </div>
  ),
}

/**
 * Banner without dismiss button
 */
export const WithoutDismiss: Story = {
  render: () => (
    <div style={{ width: "500px" }}>
      <Banner variant="info" icon={<Icon as={HelpCircleIcon} />}>
        This banner cannot be dismissed
      </Banner>
    </div>
  ),
}

/**
 * Controlled banner with dismiss functionality
 */
export const Controlled: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) {
      return (
        <div style={{ width: "500px" }}>
          <button onClick={() => setIsVisible(true)}>Show banner</button>
        </div>
      )
    }

    return (
      <div style={{ width: "500px", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Banner variant="danger" icon={<Icon as={AlertCircleIcon} />} onDismiss={() => setIsVisible(false)}>
          You need to complete your payment to continue
        </Banner>
        <button onClick={() => setIsVisible(false)}>Dismiss manually</button>
      </div>
    )
  },
}

/**
 * Multiple stacked banners
 */
export const Stacked: Story = {
  render: () => (
    <div style={{ width: "500px", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Banner variant="danger" icon={<Icon as={AlertCircleIcon} />} onDismiss={() => {}}>
        Critical error detected
      </Banner>
      <Banner variant="warning" icon={<Icon as={AlertTriangleIcon} />} onDismiss={() => {}}>
        Please review your changes
      </Banner>
      <Banner variant="info" icon={<Icon as={HelpCircleIcon} />} onDismiss={() => {}}>
        New features are now available
      </Banner>
    </div>
  ),
}
