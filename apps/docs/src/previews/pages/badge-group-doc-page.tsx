import {
  badgeGroupSections,
  badgeGroupInstallation,
  badgeGroupProps,
} from "@versaur/react/badge-group";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function BadgeGroupDocPage() {
  return (
    <>
      {badgeGroupSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>

      <h3>BadgeGroup Props</h3>
      <PropsTable props={badgeGroupProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(badgeGroupInstallation)} />
    </>
  );
}
