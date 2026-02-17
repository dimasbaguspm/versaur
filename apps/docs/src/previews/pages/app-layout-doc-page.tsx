import {
  appLayoutSections,
  appLayoutInstallation,
  appLayoutProps,
} from "@versaur/react/app-layout";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function AppLayoutDocPage() {
  return (
    <>
      {appLayoutSections.map((section) => (
        <SectionBlock
          key={section.title}
          section={section}
          canvas={{ padding: "none" }}
        />
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
