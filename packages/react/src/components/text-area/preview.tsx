import type { ComponentType } from "react";
import { TextArea } from "./text-area";

export interface TextAreaSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function VariantsPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea
        variant="outline"
        placeholder="Outline variant"
        label="Outline"
      />
      <TextArea
        variant="filled"
        placeholder="Filled variant"
        label="Filled"
      />
      <TextArea variant="ghost" placeholder="Ghost variant" label="Ghost" />
    </div>
  );
}

function SizesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea size="small" placeholder="Small textarea" label="Small" />
      <TextArea size="medium" placeholder="Medium textarea" label="Medium" />
      <TextArea size="large" placeholder="Large textarea" label="Large" />
    </div>
  );
}

function ResizePreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea
        resize="none"
        placeholder="No resize"
        label="Resize: None"
      />
      <TextArea
        resize="vertical"
        placeholder="Vertical resize only"
        label="Resize: Vertical"
      />
      <TextArea
        resize="horizontal"
        placeholder="Horizontal resize only"
        label="Resize: Horizontal"
      />
      <TextArea
        resize="both"
        placeholder="Resize both directions"
        label="Resize: Both"
      />
    </div>
  );
}

function StatesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextArea placeholder="Default state" label="Default" />
      <TextArea
        placeholder="Invalid state"
        label="Invalid"
        error="This field is required"
      />
      <TextArea
        placeholder="Disabled state"
        label="Disabled"
        disabled
        value="Disabled value"
      />
      <TextArea
        placeholder="With helper text"
        label="With Helper"
        helper="Maximum 500 characters"
      />
    </div>
  );
}

function CompleteExamplesPreview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <TextArea
        label="Biography"
        placeholder="Tell us about yourself"
        helper="Maximum 500 characters"
        rows={4}
        required
      />
      <TextArea
        label="Comments"
        placeholder="Add your comments..."
        variant="filled"
        resize="none"
        rows={3}
      />
      <TextArea
        label="Feedback"
        placeholder="Share your feedback"
        error="Feedback must be at least 10 characters"
        required
        rows={4}
      />
    </div>
  );
}

function CustomizationPreview() {
  return (
    <div
      style={
        {
          "--vers-comp-textarea-bg": "#fef3c7",
          "--vers-comp-textarea-border": "#f59e0b",
          "--vers-comp-textarea-focus-ring-color": "#f59e0b",
        } as React.CSSProperties
      }
    >
      <TextArea
        variant="outline"
        placeholder="Custom amber theme"
        label="Custom TextArea"
        rows={3}
      />
    </div>
  );
}

export const textAreaSections: TextAreaSection[] = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsPreview,
    code: `<TextArea variant="outline" placeholder="Outline variant" label="Outline" />
<TextArea variant="filled" placeholder="Filled variant" label="Filled" />
<TextArea variant="ghost" placeholder="Ghost variant" label="Ghost" />`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesPreview,
    code: `<TextArea size="small" placeholder="Small textarea" label="Small" />
<TextArea size="medium" placeholder="Medium textarea" label="Medium" />
<TextArea size="large" placeholder="Large textarea" label="Large" />`,
    language: "tsx",
  },
  {
    key: "resize",
    title: "Resize Control",
    preview: ResizePreview,
    code: `<TextArea resize="none" placeholder="No resize" label="Resize: None" />
<TextArea resize="vertical" placeholder="Vertical resize only" label="Resize: Vertical" />
<TextArea resize="horizontal" placeholder="Horizontal resize only" label="Resize: Horizontal" />
<TextArea resize="both" placeholder="Resize both directions" label="Resize: Both" />`,
    language: "tsx",
  },
  {
    key: "states",
    title: "States",
    preview: StatesPreview,
    code: `<TextArea placeholder="Default state" label="Default" />
<TextArea
  placeholder="Invalid state"
  label="Invalid"
  error="This field is required"
/>
<TextArea
  placeholder="Disabled state"
  label="Disabled"
  disabled
  value="Disabled value"
/>
<TextArea
  placeholder="With helper text"
  label="With Helper"
  helper="Maximum 500 characters"
/>`,
    language: "tsx",
  },
  {
    key: "complete",
    title: "Complete Examples",
    preview: CompleteExamplesPreview,
    code: `<TextArea
  label="Biography"
  placeholder="Tell us about yourself"
  helper="Maximum 500 characters"
  rows={4}
  required
/>
<TextArea
  label="Comments"
  placeholder="Add your comments..."
  variant="filled"
  resize="none"
  rows={3}
/>
<TextArea
  label="Feedback"
  placeholder="Share your feedback"
  error="Feedback must be at least 10 characters"
  required
  rows={4}
/>`,
    language: "tsx",
  },
  {
    key: "customization",
    title: "CSS Customization",
    preview: CustomizationPreview,
    code: `/* Override component tokens to customize */
.custom-textarea {
  --vers-comp-textarea-bg: #fef3c7;
  --vers-comp-textarea-border: #f59e0b;
  --vers-comp-textarea-focus-ring-color: #f59e0b;
}`,
    language: "css",
  },
];

export const textAreaProps = [
  {
    name: "variant",
    type: "'outline' | 'filled' | 'ghost'",
    default: "'outline'",
    description: "Visual variant of the textarea",
  },
  {
    name: "size",
    type: "'small' | 'medium' | 'large'",
    default: "'medium'",
    description: "Size of the textarea",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Label text displayed above textarea",
  },
  {
    name: "helper",
    type: "string",
    default: "undefined",
    description: "Helper text displayed below textarea",
  },
  {
    name: "error",
    type: "string",
    default: "undefined",
    description: "Error message displayed below textarea (replaces helper)",
  },
  {
    name: "resize",
    type: "'none' | 'vertical' | 'horizontal' | 'both'",
    default: "'vertical'",
    description: "Resize behavior of the textarea",
  },
  {
    name: "rows",
    type: "number",
    default: "undefined",
    description: "Number of visible text lines",
  },
  {
    name: "required",
    type: "boolean",
    default: "false",
    description: "Shows required indicator and sets HTML required attribute",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the textarea is disabled",
  },
];

export const textAreaInstallation = {
  code: `# Using npm
npm install @versaur/react @versaur/core

# Using pnpm
pnpm add @versaur/react @versaur/core

# Using yarn
yarn add @versaur/react @versaur/core`,
  language: "bash" as const,
};

export function TextAreaPreview() {
  return (
    <>
      {textAreaSections.map((s) => (
        <div key={s.key}>
          <h3>{s.title}</h3>
          <s.preview />
        </div>
      ))}
    </>
  );
}
