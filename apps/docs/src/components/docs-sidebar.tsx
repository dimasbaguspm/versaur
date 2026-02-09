import { Link, useParams } from "@tanstack/react-router";
import { previewRegistry, type ComponentCategory } from "../previews/registry";

interface DocsSidebarProps {
  "data-open"?: boolean;
}

const CATEGORIES: ComponentCategory[] = [
  "Primitives",
  "Layouts",
  "Navigations",
  "Forms",
  "Icons",
];

export function DocsSidebar(props: DocsSidebarProps) {
  const params = useParams({ strict: false }) as { component?: string };

  // Group components by category
  const grouped = new Map<ComponentCategory, typeof previewRegistry>();
  CATEGORIES.forEach((cat) => grouped.set(cat, {}));

  Object.entries(previewRegistry).forEach(([key, entry]) => {
    const category = entry.category;
    const group = grouped.get(category) || {};
    grouped.set(category, { ...group, [key]: entry });
  });

  return (
    <aside className="docs-sidebar" data-open={props["data-open"] || undefined}>
      <div className="docs-sidebar-header">
        <Link to="/">Versaur</Link>
      </div>
      <nav className="docs-sidebar-nav">
        {CATEGORIES.map((category) => {
          const items = Object.entries(grouped.get(category) || {});

          return (
            <div key={category} className="docs-sidebar-category-group">
              <div className="docs-sidebar-category">{category}</div>
              {items.length > 0 ? (
                <div className="docs-sidebar-category-items">
                  {items.map(([key, entry]) => (
                    <Link
                      key={key}
                      to="/docs/components/$component"
                      params={{ component: key }}
                      className="docs-sidebar-link"
                      data-active={
                        params.component === key ? "true" : undefined
                      }
                    >
                      {entry.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="docs-sidebar-category-empty">
                  No components yet
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
