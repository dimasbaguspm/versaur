import { Link, useParams } from "@tanstack/react-router";
import { previewRegistry } from "../previews/registry";

interface DocsSidebarProps {
  "data-open"?: boolean;
}

export function DocsSidebar(props: DocsSidebarProps) {
  const params = useParams({ strict: false }) as { component?: string };

  return (
    <aside className="docs-sidebar" data-open={props["data-open"] || undefined}>
      <div className="docs-sidebar-header">
        <Link to="/">Versaur</Link>
      </div>
      <div className="docs-sidebar-section-title">Components</div>
      <nav className="docs-sidebar-nav">
        {Object.entries(previewRegistry).map(([key, entry]) => (
          <Link
            key={key}
            to="/docs/components/$component"
            params={{ component: key }}
            className="docs-sidebar-link"
            data-active={params.component === key ? "true" : undefined}
          >
            {entry.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
