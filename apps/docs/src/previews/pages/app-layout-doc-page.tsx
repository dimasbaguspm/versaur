import {
  appLayoutSections,
  appLayoutInstallation,
  appLayoutProps,
} from "@versaur/react/app-layout";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function AppLayoutDocPage() {
  return (
    <>
      {appLayoutSections.map((section) => (
        <div key={section.title}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}

      <h2>API Reference</h2>

      <h3>AppLayout Props</h3>
      <PropsTable props={appLayoutProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(appLayoutInstallation)} />
    </>
  );
}

AppLayoutDocPage.displayName = "AppLayoutDocPage";
