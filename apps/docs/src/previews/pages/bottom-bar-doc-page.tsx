import {
  bottomBarSections,
  bottomBarInstallation,
  bottomBarProps,
} from "@versaur/react/bottom-bar";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function BottomBarDocPage() {
  return (
    <>
      {bottomBarSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
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
