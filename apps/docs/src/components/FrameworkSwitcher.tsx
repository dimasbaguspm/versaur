"use client";

import { useFrameworkSelection } from "../hooks/useFrameworkSelection";

type Framework = "react" | "vue" | "angular";

const frameworks: { name: Framework; label: string; enabled: boolean }[] = [
  { name: "react", label: "React", enabled: true },
  { name: "vue", label: "Vue", enabled: false },
  { name: "angular", label: "Angular", enabled: false },
];

const switcherStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginBottom: "1.5rem",
  borderBottom: "1px solid var(--color-border)",
};

const tabsStyle: React.CSSProperties = {
  display: "flex",
  gap: "0",
};

const tabStyle: React.CSSProperties = {
  padding: "0.75rem 1.5rem",
  background: "transparent",
  border: "none",
  borderBottom: "2px solid transparent",
  cursor: "pointer",
  fontSize: "var(--font-size-sm)",
  fontWeight: "500",
  color: "var(--color-text-secondary)",
  transition: "all 0.2s ease",
  position: "relative",
};

const activeTabStyle: React.CSSProperties = {
  ...tabStyle,
  color: "var(--color-primary)",
  borderBottom: "2px solid var(--color-primary)",
};

const disabledTabStyle: React.CSSProperties = {
  ...tabStyle,
  cursor: "not-allowed",
  opacity: 0.6,
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  marginLeft: "0.5rem",
  padding: "0.15rem 0.5rem",
  background: "var(--color-bg-secondary)",
  borderRadius: "2px",
  fontSize: "0.7rem",
  fontWeight: "600",
  color: "var(--color-text-secondary)",
  textTransform: "uppercase",
};

export function FrameworkSwitcher() {
  const { selectedFramework, setFramework } = useFrameworkSelection();

  return (
    <div style={switcherStyle}>
      <div style={tabsStyle}>
        {frameworks.map((fw) => (
          <button
            key={fw.name}
            style={
              !fw.enabled
                ? disabledTabStyle
                : selectedFramework === fw.name
                  ? activeTabStyle
                  : tabStyle
            }
            onClick={() => fw.enabled && setFramework(fw.name)}
            disabled={!fw.enabled}
            title={!fw.enabled ? "Coming soon" : undefined}
            onMouseEnter={(e) => {
              if (!fw.enabled) return;
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--color-text-primary)";
              (e.currentTarget as HTMLButtonElement).style.background =
                "var(--color-bg-secondary)";
            }}
            onMouseLeave={(e) => {
              if (!fw.enabled) return;
              (e.currentTarget as HTMLButtonElement).style.color =
                selectedFramework === fw.name
                  ? "var(--color-primary)"
                  : "var(--color-text-secondary)";
              (e.currentTarget as HTMLButtonElement).style.background =
                "transparent";
            }}
          >
            {fw.label}
            {!fw.enabled && <span style={badgeStyle}>TBA</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
