import { createFileRoute, Link } from "@tanstack/react-router";
import { PreviewFrame } from "../../../preview/preview-frame";
import { FrameworkSwitcher } from "../../../components/framework-switcher";

export const Route = createFileRoute("/docs/components/heading")({
  component: HeadingPage,
});

function HeadingPage() {
  return (
    <>
      <div className="header">
        <h1>Heading</h1>
        <p>
          A typography component for headings with configurable level, size,
          weight, and intent
        </p>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link
          to="/docs/components/heading"
          activeProps={{ className: "active" }}
        >
          Heading
        </Link>
      </nav>

      <FrameworkSwitcher />
      <PreviewFrame component="heading" />
    </>
  );
}
