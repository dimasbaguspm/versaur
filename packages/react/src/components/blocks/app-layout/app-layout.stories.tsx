import type { Meta, StoryObj } from "@storybook/react"

import { AppLayout } from "../index"

const meta = {
  component: AppLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Blocks/AppLayout",
} satisfies Meta<typeof AppLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout>
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            Header
          </div>
        </AppLayout.Header>

        <AppLayout.Body>
          <AppLayout.SideLeft>
            <div style={{ padding: "1.5rem", backgroundColor: "#e8e8e8" }}>Sidebar Left</div>
          </AppLayout.SideLeft>

          <AppLayout.Main>
            <div style={{ height: "200vh", padding: "2rem", backgroundColor: "#ffffff" }}>
              Main Content (Scrollable - 200vh)
            </div>
          </AppLayout.Main>
        </AppLayout.Body>
      </AppLayout>
    </div>
  ),
}

export const WithRightSidebar: Story = {
  render: () => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout>
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            Header
          </div>
        </AppLayout.Header>

        <AppLayout.Body>
          <AppLayout.SideLeft>
            <div style={{ padding: "1.5rem", backgroundColor: "#e8e8e8" }}>Sidebar Left</div>
          </AppLayout.SideLeft>

          <AppLayout.Main>
            <div style={{ height: "200vh", padding: "2rem", backgroundColor: "#ffffff" }}>
              Main Content (Scrollable - 200vh)
            </div>
          </AppLayout.Main>

          <AppLayout.SideRight>
            <div style={{ padding: "1.5rem", backgroundColor: "#e8e8e8" }}>Sidebar Right</div>
          </AppLayout.SideRight>
        </AppLayout.Body>
      </AppLayout>
    </div>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout>
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            Header
          </div>
        </AppLayout.Header>

        <AppLayout.Body>
          <AppLayout.Main>
            <div style={{ height: "200vh", padding: "2rem", backgroundColor: "#ffffff" }}>
              Main Content (Scrollable - 200vh)
            </div>
          </AppLayout.Main>
        </AppLayout.Body>

        <AppLayout.Footer>
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#e8e8e8",
              textAlign: "center",
              fontSize: "0.875rem",
            }}
          >
            Footer - Stays at bottom of viewport
          </div>
        </AppLayout.Footer>
      </AppLayout>
    </div>
  ),
}

export const Centered: Story = {
  render: () => (
    <div style={{ height: "500px", border: "1px solid #ddd" }}>
      <AppLayout>
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            Header
          </div>
        </AppLayout.Header>

        <AppLayout.Body centered>
          <AppLayout.Main>
            <div style={{ backgroundColor: "#ffeeee", padding: "2rem", minHeight: "400vh" }}>
              <h2>Centered Content</h2>
              <p>
                This content is centered horizontally and constrained to a max-width of{" "}
                <code>--vers-comp-app-layout-main-max-width</code>.
              </p>
              <p>All direct children are automatically centered and constrained.</p>
            </div>
          </AppLayout.Main>
        </AppLayout.Body>
      </AppLayout>
    </div>
  ),
}

export const FullPageViewport: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div style={{ "--vers-comp-app-layout-min-height": "100vh" } as React.CSSProperties}>
      <AppLayout>
        <AppLayout.Header>
          <div
            style={{
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#f0f0f0",
            }}
          >
            Header - Full Page (min-height: 100vh)
          </div>
        </AppLayout.Header>

        <AppLayout.Body>
          <AppLayout.SideLeft>
            <div style={{ padding: "1.5rem", backgroundColor: "#e8e8e8" }}>
              Sidebar Left
              <br />
              <small>Fills viewport height</small>
            </div>
          </AppLayout.SideLeft>

          <AppLayout.Main>
            <div style={{ padding: "2rem", backgroundColor: "#ffffff", height: "200vh" }}>
              <h2>Full Page Layout</h2>
              <p>
                This story demonstrates AppLayout filling the entire viewport height using the{" "}
                <code>--vers-comp-app-layout-min-height: 100vh</code> CSS custom property.
              </p>
              <p>
                Key points:
                <ul>
                  <li>Set min-height to 100vh to fill the entire viewport</li>
                  <li>The flex column (header, body, footer) distribute the available space</li>
                  <li>Main content area scrolls when it exceeds available height</li>
                  <li>No double scroll - only AppLayout.Main scrolls internally</li>
                </ul>
              </p>
            </div>
          </AppLayout.Main>
        </AppLayout.Body>

        <AppLayout.Footer>
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#e8e8e8",
              textAlign: "center",
              fontSize: "0.875rem",
            }}
          >
            Footer - Stays at bottom of viewport
          </div>
        </AppLayout.Footer>
      </AppLayout>
    </div>
  ),
}
