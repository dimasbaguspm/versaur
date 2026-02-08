import { useState } from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DocsSidebar } from "../../components/docs-sidebar";
import "../../styles/docs-layout.css";

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
});

function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="docs-layout">
      <DocsSidebar data-open={sidebarOpen || undefined} />
      <div
        className="docs-sidebar-overlay"
        data-open={sidebarOpen || undefined}
        onClick={() => setSidebarOpen(false)}
      />
      <main className="docs-content">
        <Outlet />
      </main>
      <button
        className="docs-mobile-toggle"
        onClick={() => setSidebarOpen((prev) => !prev)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? "\u2715" : "\u2630"}
      </button>
    </div>
  );
}
