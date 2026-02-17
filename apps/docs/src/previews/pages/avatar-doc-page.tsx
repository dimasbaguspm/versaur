import { avatarSections, avatarProps } from "@versaur/react/avatar";
import { SectionBlock } from "../../components/section-block";
import { PropsTable } from "../../components/props-table";

export function AvatarDocPage() {
  return (
    <>
      {avatarSections.map((section) => (
        <SectionBlock key={section.key} section={section} />
      ))}

      <h2>Avatar API Reference</h2>
      <PropsTable props={avatarProps} />
    </>
  );
}
