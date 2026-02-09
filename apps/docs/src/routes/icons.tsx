import { createFileRoute } from "@tanstack/react-router";
import { getIconNames, getIcon } from "@versaur/icons";
import { IconGrid } from "../previews/components/icon-grid";
import { useShikiHighlighter } from "../hooks/use-shiki-highlighter";
import { useState, useMemo } from "react";
import styles from "./icons.module.css";

const IMPORT_DIRECT = `import { UserIcon, LoaderIcon } from "@versaur/icons";

export function MyComponent() {
  return (
    <>
      <UserIcon width={24} height={24} />
      <LoaderIcon className="animate-spin" style={{ color: "blue" }} />
    </>
  );
}`;

const IMPORT_REGISTRY = `import { getIcon, getIconNames } from "@versaur/icons";

// Get all icon names
const names = getIconNames(); // ["loader", "user"]

// Get specific icon
const userIcon = getIcon("user");
if (userIcon) {
  const Component = userIcon.component;
  return <Component />;
}`;

const CSS_CUSTOMIZATION = `// Change color via style
<UserIcon style={{ color: "#ef4444" }} />

// Change color via CSS class
<UserIcon className="text-red-500" />

// Resize icons
<UserIcon width={32} height={32} />`;

const TYPESCRIPT_EXAMPLE = `import { IconComponent, IconMetadata, getIcon } from "@versaur/icons";
import type { SVGProps } from "react";

// Icon components accept standard SVG props
const userIcon: IconComponent = (props) => <svg {...props} />;

// Icon metadata provides additional information
const metadata: IconMetadata = {
  name: "User",
  component: userIcon,
  tags: ["person", "profile"],
};`;

function CodeBlock({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  const { highlightCode, isReady } = useShikiHighlighter();
  const codeHtml = useMemo(
    () => (isReady ? highlightCode(code, language) : null),
    [isReady, code, language, highlightCode],
  );

  return (
    <pre>
      <code>
        {codeHtml ? (
          <div dangerouslySetInnerHTML={{ __html: codeHtml }} />
        ) : (
          code
        )}
      </code>
    </pre>
  );
}

function IconsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const iconNames = getIconNames();

  // Gather all unique tags
  const allTags = useMemo(
    () =>
      Array.from(
        new Set(iconNames.map((name) => getIcon(name)?.tags || []).flat()),
      ).sort(),
    [iconNames],
  );

  return (
    <div className={styles["icons-page-wrapper"]}>
      <section className={styles["icons-page-section"]}>
        <h2>Icons Library</h2>
        <p>
          A comprehensive collection of SVG icons for the Versaur Design System.
          All icons are optimized for React and support customization through
          CSS and inline styles.
        </p>
      </section>

      <section className={styles["icons-page-section"]}>
        <h3>About Icons</h3>
        <p>
          Icons in Versaur are React components built using{" "}
          <code>@vitejs/plugin-svgr</code> for optimal integration. Each icon:
        </p>
        <ul>
          <li>Is fully typed with TypeScript</li>
          <li>Supports SVG element props (width, height, color, etc.)</li>
          <li>
            Uses <code>currentColor</code> for easy color customization
          </li>
          <li>Includes metadata for discovery and categorization</li>
          <li>Can be imported as a React component or accessed via registry</li>
        </ul>
      </section>

      <section className={styles["icons-page-section"]}>
        <h3>Usage</h3>
        <h4>Direct Import</h4>
        <CodeBlock code={IMPORT_DIRECT} language="tsx" />

        <h4>Via Registry</h4>
        <CodeBlock code={IMPORT_REGISTRY} language="tsx" />
      </section>

      <section className={styles["icons-page-section"]}>
        <h3>Icon Reference</h3>
        <div className={styles["icons-search-wrapper"]}>
          <input
            type="text"
            className={styles["icons-search-input"]}
            placeholder="Search icons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles["icons-count"]}>
          <span>
            Total icons: <strong>{iconNames.length}</strong>
          </span>
        </div>

        <IconGrid searchTerm={searchTerm} />
      </section>

      <section className={styles["icons-page-section"]}>
        <h3>CSS Customization</h3>
        <p>
          Icons use <code>currentColor</code> by default, allowing easy color
          changes:
        </p>
        <CodeBlock code={CSS_CUSTOMIZATION} language="tsx" />
      </section>

      <section className={styles["icons-page-section"]}>
        <h3>TypeScript Support</h3>
        <p>All icons are fully typed for safe usage:</p>
        <CodeBlock code={TYPESCRIPT_EXAMPLE} language="tsx" />
      </section>

      <section className={styles["icons-page-section"]}>
        <h3>Icon Tags</h3>
        <p>Icons are organized with tags for easy discovery:</p>
        <div className={styles["icons-tag-container"]}>
          {allTags.map((tag) => (
            <span key={tag} className={styles["icons-tag"]}>
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/icons")({
  component: IconsPage,
});
