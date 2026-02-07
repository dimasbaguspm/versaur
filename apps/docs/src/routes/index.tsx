import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <div className="header">
        <h1>Versaur Design System</h1>
        <p>Modern, framework-agnostic UI component library</p>
      </div>

      <section style={{ marginBottom: "3rem" }}>
        <h2>About</h2>
        <p
          style={{
            fontSize: "var(--font-size-base)",
            lineHeight: "var(--line-height-relaxed)",
            color: "var(--color-text-secondary)",
          }}
        >
          Versaur is a universal design system built with the data-attribute
          state machine pattern. It provides a framework-agnostic CSS core with
          thin wrappers for React, Vue, and Angular, enabling consistent UI
          across your entire stack.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2>Key Features</h2>
        <ul
          style={{
            fontSize: "var(--font-size-base)",
            lineHeight: "var(--line-height-relaxed)",
            color: "var(--color-text-secondary)",
          }}
        >
          <li>Framework-agnostic CSS core with CSS Modules</li>
          <li>Data-attribute state machine pattern for clean APIs</li>
          <li>Tree-shakeable component library</li>
          <li>shadcn-style code copying via Registry</li>
          <li>Built-in accessibility features</li>
          <li>Dark mode support</li>
        </ul>
      </section>

      <section>
        <h2>Get Started</h2>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Link to="/docs/components/button" className="primary-button">
            View Components
          </Link>
        </div>
      </section>
    </>
  );
}
