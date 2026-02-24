import type { Meta, StoryObj } from "@storybook/react"
import { TabletOrDesktopBreakpoint } from "./tablet-or-desktop-breakpoint"

const meta = {
  title: "Utils/Breakpoints/TabletOrDesktopBreakpoint",
  component: TabletOrDesktopBreakpoint,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Renders children only when viewport is tablet or desktop (>= 640px). Hides on mobile. Resize the browser to test.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TabletOrDesktopBreakpoint>

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
        <h3 style={{ margin: "0 0 0.5rem 0" }}>📱 Tablet & Desktop View</h3>
        <p style={{ margin: 0, fontSize: "0.875rem", color: "#065f46" }}>
          This content is visible on tablet and desktop (viewport ≥ 640px)
        </p>
      </div>
    ),
  },
}

export const FullLayout: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#dcfce7",
          borderRadius: "0.5rem",
          border: "2px solid #16a34a",
        }}
      >
        <h2 style={{ margin: 0, color: "#16a34a" }}>Full-Width Navigation</h2>
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.875rem" }}>
          Multi-column layout for larger screens
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
          backgroundColor: "#d1fae5",
          borderRadius: "0.5rem",
          maxWidth: "400px",
        }}
      >
        <h4 style={{ margin: "0 0 0.5rem 0" }}>useTabletOrDesktopBreakpoint Hook</h4>
        <p style={{ margin: 0, fontSize: "0.875rem" }}>
          This component uses the <code>useTabletOrDesktopBreakpoint()</code> hook internally, which evaluates
          the media query <code>(min-width: 640px)</code>.
        </p>
        <hr style={{ margin: "0.75rem 0", border: "1px solid #16a34a" }} />
        <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.75rem", color: "#16a34a" }}>
          Use this when you want to hide content on mobile but show it on medium and large screens.
        </p>
      </div>
    ),
  },
}
