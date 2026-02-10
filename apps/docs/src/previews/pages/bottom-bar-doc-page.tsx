import {
  bottomBarSections,
  bottomBarInstallation,
  bottomBarProps,
} from "@versaur/react/bottom-bar";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function BottomBarDocPage() {
  return (
    <>
      {bottomBarSections.map((section) => (
        <div key={section.key} style={{ marginBottom: "3rem" }}>
          <h3>{section.title}</h3>
          <div style={{ marginBottom: "1.5rem" }}>
            <section.preview />
          </div>
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}

      <h2 style={{ marginTop: "3rem" }}>API Reference</h2>
      {bottomBarProps.map((section) => (
        <div key={section.name} style={{ marginBottom: "2rem" }}>
          <h3>{section.name}</h3>
          <PropsTable props={section.props} />
        </div>
      ))}

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(bottomBarInstallation)} />
    </>
  );
}
