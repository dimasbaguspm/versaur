import {
  avatarGroupSections,
  avatarGroupInstallation,
  avatarGroupProps,
} from "@versaur/react/avatar-group";
import { SectionBlock } from "../../components/section-block";
import { makeExamples } from "../../utils/make-examples";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

export function AvatarGroupDocPage() {
  return (
    <>
      {avatarGroupSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>API Reference</h2>

      <h3>AvatarGroup Props</h3>
      <PropsTable props={avatarGroupProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(avatarGroupInstallation)} />
    </>
  );
}
