import { createFileRoute, Link } from "@tanstack/react-router";
import { PreviewFrame } from "../../../preview/preview-frame";
import { FrameworkSwitcher } from "../../../components/framework-switcher";

export const Route = createFileRoute("/docs/components/button")({
  component: ButtonPage,
});

function ButtonPage() {
  return (
    <>
      <div className="header">
        <h1>Button</h1>
        <p>
          A versatile button component with multiple variants, sizes, and states
        </p>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link
          to="/docs/components/button"
          activeProps={{ className: "active" }}
        >
          Button
        </Link>
      </nav>

      <FrameworkSwitcher />
      <PreviewFrame component="button" />
    </>
  );
}
