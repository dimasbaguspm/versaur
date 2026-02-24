import type { Meta, StoryObj } from "@storybook/react"
import { DesktopBreakpoint } from "./desktop-breakpoint"

const meta = {
  title: "Utils/Breakpoints/DesktopBreakpoint",
  component: DesktopBreakpoint,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Renders children only when viewport is at desktop breakpoint (>= 1024px). Resize the browser to test.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DesktopBreakpoint>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#d1fae5",
          borderRadius: "0.5rem",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h3 style={{ margin: "0 0 0.5rem 0" }}>🖥️ Desktop View</h3>
        <p style={{ margin: 0, fontSize: "0.875rem", color: "#065f46" }}>
          This content is only visible on desktop (viewport ≥ 1024px)
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
          backgroundColor: "#dbeafe",
          borderRadius: "0.5rem",
          border: "2px solid #0284c7",
        }}
      >
        <h2 style={{ margin: 0, color: "#0284c7" }}>Desktop Sidebar</h2>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.875rem" }}>
          Full-width navigation and layouts appear here
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
          backgroundColor: "#dcfce7",
          borderRadius: "0.5rem",
          maxWidth: "400px",
        }}
      >
        <h4 style={{ margin: "0 0 0.5rem 0" }}>useDesktopBreakpoint Hook</h4>
        <p style={{ margin: 0, fontSize: "0.875rem" }}>
          This component uses the <code>useDesktopBreakpoint()</code> hook internally, which evaluates
          the media query <code>(min-width: 1280px)</code>.
        </p>
        <hr style={{ margin: "0.75rem 0", border: "1px solid #16a34a" }} />
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.75rem", color: "#16a34a" }}>
          Desktop breakpoint: 1280px. Content shows on screens 1280px and wider.
        </p>
      </div>
    ),
  },
}
