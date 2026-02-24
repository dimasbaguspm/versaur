import type { Meta, StoryObj } from "@storybook/react"
import {
  useMobileBreakpoint,
  useTabletBreakpoint,
  useDesktopBreakpoint,
  useMobileOrTabletBreakpoint,
  useTabletOrDesktopBreakpoint,
} from "../../hooks/use-breakpoints"

/**
 * Documentation story for responsive breakpoint hooks.
 * These hooks provide viewport detection based on the design system breakpoints.
 */

const meta = {
  title: "Utils/Breakpoints/Hooks Documentation",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Responsive breakpoint hooks for detecting viewport size. Resize your browser window to see changes.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * HooksDemo component for showing all hooks in action
 */
function HooksDemo() {
  const isMobile = useMobileBreakpoint()
  const isTablet = useTabletBreakpoint()
  const isDesktop = useDesktopBreakpoint()
  const isSmall = useMobileOrTabletBreakpoint()
  const isLarge = useTabletOrDesktopBreakpoint()

  return (
    <div style={{ maxWidth: "700px", fontFamily: "sans-serif" }}>
      <h2 style={{ marginTop: 0 }}>Breakpoint Detection</h2>

      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>Exclusive Ranges</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div
            style={{
              padding: "1rem",
              backgroundColor: isMobile ? "#dcfce7" : "#f3f4f6",
              border: `2px solid ${isMobile ? "#16a34a" : "#d1d5db"}`,
              borderRadius: "0.5rem",
              textAlign: "center",
            }}
          >
            <h4 style={{ margin: "0 0 0.5rem 0", color: isMobile ? "#16a34a" : "#6b7280" }}>
              📱 Mobile
            </h4>
            <p style={{ margin: 0, fontSize: "0.875rem", color: isMobile ? "#065f46" : "#9ca3af" }}>
              &lt; 640px
            </p>
            <p style={{ margin: "0.5rem 0 0 0", fontWeight: "bold", color: isMobile ? "#16a34a" : "#d1d5db" }}>
              {isMobile ? "✓ Active" : "−"}
            </p>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: isTablet ? "#fef3c7" : "#f3f4f6",
              border: `2px solid ${isTablet ? "#eab308" : "#d1d5db"}`,
              borderRadius: "0.5rem",
              textAlign: "center",
            }}
          >
            <h4 style={{ margin: "0 0 0.5rem 0", color: isTablet ? "#854d0e" : "#6b7280" }}>
              📊 Tablet
            </h4>
            <p style={{ margin: 0, fontSize: "0.875rem", color: isTablet ? "#854d0e" : "#9ca3af" }}>
              640px - 1023px
            </p>
            <p style={{ margin: "0.5rem 0 0 0", fontWeight: "bold", color: isTablet ? "#eab308" : "#d1d5db" }}>
              {isTablet ? "✓ Active" : "−"}
            </p>
          </div>

          <div
            style={{
              gridColumn: "1 / -1",
              padding: "1rem",
              backgroundColor: isDesktop ? "#dbeafe" : "#f3f4f6",
              border: `2px solid ${isDesktop ? "#0284c7" : "#d1d5db"}`,
              borderRadius: "0.5rem",
              textAlign: "center",
            }}
          >
            <h4 style={{ margin: "0 0 0.5rem 0", color: isDesktop ? "#0284c7" : "#6b7280" }}>
              🖥️ Desktop
            </h4>
            <p style={{ margin: 0, fontSize: "0.875rem", color: isDesktop ? "#075985" : "#9ca3af" }}>
              ≥ 1024px
            </p>
            <p style={{ margin: "0.5rem 0 0 0", fontWeight: "bold", color: isDesktop ? "#0284c7" : "#d1d5db" }}>
              {isDesktop ? "✓ Active" : "−"}
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>Combined Ranges</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <div
            style={{
              padding: "1rem",
              backgroundColor: isSmall ? "#e9d5ff" : "#f3f4f6",
              border: `2px solid ${isSmall ? "#a855f7" : "#d1d5db"}`,
              borderRadius: "0.5rem",
              textAlign: "center",
            }}
          >
            <h4 style={{ margin: "0 0 0.5rem 0", color: isSmall ? "#a855f7" : "#6b7280" }}>
              📱 Small
            </h4>
            <p style={{ margin: 0, fontSize: "0.875rem", color: isSmall ? "#6b21a8" : "#9ca3af" }}>
              Mobile or Tablet
            </p>
            <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.75rem", color: isSmall ? "#6b21a8" : "#9ca3af" }}>
              &lt; 1024px
            </p>
            <p style={{ margin: "0.5rem 0 0 0", fontWeight: "bold", color: isSmall ? "#a855f7" : "#d1d5db" }}>
              {isSmall ? "✓ Active" : "−"}
            </p>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: isLarge ? "#bfdbfe" : "#f3f4f6",
              border: `2px solid ${isLarge ? "#3b82f6" : "#d1d5db"}`,
              borderRadius: "0.5rem",
              textAlign: "center",
            }}
          >
            <h4 style={{ margin: "0 0 0.5rem 0", color: isLarge ? "#3b82f6" : "#6b7280" }}>
              🖥️ Large
            </h4>
            <p style={{ margin: 0, fontSize: "0.875rem", color: isLarge ? "#1e40af" : "#9ca3af" }}>
              Tablet or Desktop
            </p>
            <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.75rem", color: isLarge ? "#1e40af" : "#9ca3af" }}>
              ≥ 640px
            </p>
            <p style={{ margin: "0.5rem 0 0 0", fontWeight: "bold", color: isLarge ? "#3b82f6" : "#d1d5db" }}>
              {isLarge ? "✓ Active" : "−"}
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f9fafb", padding: "1.5rem", borderRadius: "0.5rem", marginTop: "2rem" }}>
        <h3 style={{ marginTop: 0 }}>Available Hooks</h3>

        <h4 style={{ margin: "1rem 0 0.5rem 0", color: "#4b5563" }}>Exclusive (single range)</h4>
        <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "0.875rem", lineHeight: "1.6" }}>
          <li>
            <code>useMobileBreakpoint()</code> - <code>true</code> if &lt; 640px
          </li>
          <li>
            <code>useTabletBreakpoint()</code> - <code>true</code> if 640px to &lt; 1024px
          </li>
          <li>
            <code>useDesktopBreakpoint()</code> - <code>true</code> if ≥ 1024px
          </li>
        </ul>

        <h4 style={{ margin: "1rem 0 0.5rem 0", color: "#4b5563" }}>Combined (multiple ranges)</h4>
        <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "0.875rem", lineHeight: "1.6" }}>
          <li>
            <code>useMobileOrTabletBreakpoint()</code> - <code>true</code> if &lt; 1024px
          </li>
          <li>
            <code>useTabletOrDesktopBreakpoint()</code> - <code>true</code> if ≥ 640px
          </li>
        </ul>
      </div>

      <div style={{ backgroundColor: "#fef2f2", padding: "1.5rem", borderRadius: "0.5rem", marginTop: "1rem", fontSize: "0.875rem" }}>
        <h4 style={{ marginTop: 0 }}>Hook Usage Example</h4>
        <pre
          style={{
            backgroundColor: "#1f2937",
            color: "#e5e7eb",
            padding: "1rem",
            borderRadius: "0.375rem",
            overflow: "auto",
            margin: 0,
          }}
        >
          {`import {
  useMobileBreakpoint,
  useMobileOrTabletBreakpoint
} from "@versaur/react/utils"

function MyComponent() {
  const isMobileOnly = useMobileBreakpoint()
  const isSmallScreen = useMobileOrTabletBreakpoint()

  return (
    <div>
      {isMobileOnly && <MobileMenu />}
      {isSmallScreen && <CompactLayout />}
    </div>
  )
}`}
        </pre>
      </div>

      <div style={{ backgroundColor: "#f0fdf4", padding: "1.5rem", borderRadius: "0.5rem", marginTop: "1rem", fontSize: "0.875rem" }}>
        <h4 style={{ marginTop: 0 }}>Component Alternative</h4>
        <p style={{ margin: "0 0 1rem 0" }}>
          Use components for cleaner JSX when rendering entire sections:
        </p>
        <pre
          style={{
            backgroundColor: "#1f2937",
            color: "#e5e7eb",
            padding: "1rem",
            borderRadius: "0.375rem",
            overflow: "auto",
            margin: 0,
          }}
        >
          {`import {
  MobileBreakpoint,
  TabletBreakpoint,
  DesktopBreakpoint
} from "@versaur/react/utils"

export function App() {
  return (
    <>
      <MobileBreakpoint>
        <MobileMenu />
      </MobileBreakpoint>
      <DesktopBreakpoint>
        <DesktopSidebar />
      </DesktopBreakpoint>
    </>
  )
}`}
        </pre>
      </div>
    </div>
  )
}

export const Overview: Story = {
  render: () => <HooksDemo />,
}
