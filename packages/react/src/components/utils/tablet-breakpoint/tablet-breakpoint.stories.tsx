import type { Meta, StoryObj } from "@storybook/react"
import { TabletBreakpoint } from "./tablet-breakpoint"

const meta = {
  title: "Utils/Breakpoints/TabletBreakpoint",
  component: TabletBreakpoint,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Renders children only when viewport is at tablet breakpoint (< 1024px). Resize the browser to test.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TabletBreakpoint>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#fef3c7",
          borderRadius: "0.5rem",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem 0" }}>📱 Tablet View</h3>
        <p style={{ margin: 0, fontSize: "0.875rem", color: "#92400e" }}>
          This content is visible on mobile and tablet (viewport &lt; 1024px)
        </p>
      </div>
    ),
  },
}

export const WithDifferentContent: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#fce7f3",
          borderRadius: "0.5rem",
          border: "2px solid #be185d",
        }}
      >
        <h2 style={{ margin: 0, color: "#be185d" }}>Tablet Layout</h2>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.875rem" }}>
          Use this for content that should hide on desktop but show on smaller screens
        </p>
      </div>
    ),
  },
}

export const Documentation: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#dbeafe",
          borderRadius: "0.5rem",
          maxWidth: "400px",
        }}
      >
        <h4 style={{ margin: "0 0 0.5rem 0" }}>useTabletBreakpoint Hook</h4>
        <p style={{ margin: 0, fontSize: "0.875rem" }}>
          This component uses the <code>useTabletBreakpoint()</code> hook internally, which evaluates
          the media query <code>(max-width: 1023px)</code>.
        </p>
        <hr style={{ margin: "0.75rem 0", border: "1px solid #0369a1" }} />
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.75rem", color: "#0369a1" }}>
          Tablet breakpoint: 1024px. Content hides on screens 1024px and wider.
        </p>
      </div>
    ),
  },
}
