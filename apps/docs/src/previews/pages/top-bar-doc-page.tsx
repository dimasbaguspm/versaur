import {
  topBarSections,
  topBarInstallation,
  topBarProps,
} from "@versaur/react/top-bar";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function TopBarDocPage() {
  return (
    <>
      {topBarSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}

      <h2>TopBar API Reference</h2>
      {topBarProps.map((component) => (
        <div key={component.name}>
          <h3>{component.name} Props</h3>
          <PropsTable props={component.props} />
        </div>
      ))}

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(topBarInstallation)} />
    </>
  );
}
