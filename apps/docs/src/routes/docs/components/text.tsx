import { createFileRoute, Link } from "@tanstack/react-router";
import { PreviewFrame } from "../../../preview/preview-frame";
import { FrameworkSwitcher } from "../../../components/framework-switcher";

export const Route = createFileRoute("/docs/components/text")({
  component: TextPage,
});

function TextPage() {
  return (
    <>
      <div className="header">
        <h1>Text</h1>
        <p>
          A typography component for body text with configurable element, size,
          weight, and intent
        </p>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link
          to="/docs/components/text"
          activeProps={{ className: "active" }}
        >
          Text
        </Link>
      </nav>

      <FrameworkSwitcher />
      <PreviewFrame component="text" />
    </>
  );
}
