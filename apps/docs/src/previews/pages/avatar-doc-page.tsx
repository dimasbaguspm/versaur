import {
  avatarSections,
  avatarInstallation,
  avatarProps,
  avatarGroupProps,
} from "@versaur/react/avatar";
import { ComponentPreview } from "../../components/component-preview";
import { PropsTable } from "../../components/props-table";

function makeExamples(section: { code: string; language: string }) {
  return {
    react: { code: section.code, language: section.language },
    vue: { code: "", language: "vue" },
    angular: { code: "", language: "angular" },
  };
}

export function AvatarDocPage() {
  return (
    <>
      {avatarSections.map((section) => (
        <div key={section.key}>
          <h3>{section.title}</h3>
          <section.preview />
          <ComponentPreview examples={makeExamples(section)} />
        </div>
      ))}

      <h2>Avatar API Reference</h2>
      <PropsTable props={avatarProps} />

      <h2>AvatarGroup API Reference</h2>
      <PropsTable props={avatarGroupProps} />

      <h2>Installation</h2>
      <ComponentPreview examples={makeExamples(avatarInstallation)} />
    </>
  );
}
