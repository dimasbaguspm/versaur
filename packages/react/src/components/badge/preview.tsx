import { Badge } from "./badge";
import { Icon } from "../icon";
import {
  CheckCircleIcon,
  AlertCircleIcon,
  ZapIcon,
} from "@versaur/icons";

export const badgeProps = [
  {
    name: "variant",
    type: "BadgeVariant",
    default: "primary",
    description:
      "Visual style variant: primary, secondary, success, danger, warning, info, outline, accent-1, accent-2, or accent-3",
  },
  {
    name: "size",
    type: "BadgeSize",
    default: "medium",
    description: "Size of the badge: small or medium",
  },
  {
    name: "shape",
    type: "BadgeShape",
    default: "rounded",
    description:
      "Shape of the badge: rounded (medium border-radius) or pill (full rounded)",
  },
  {
    name: "iconLeft",
    type: "ReactNode",
    default: "undefined",
    description: "Icon to display on the left side of the badge",
  },
  {
    name: "iconRight",
    type: "ReactNode",
    default: "undefined",
    description: "Icon to display on the right side of the badge",
  },
  {
    name: "children",
    default: "",
    type: "ReactNode",
    description: "Badge content (text, icons, or mixed content)",
  },
];

function VariantsSection() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="accent-1">Accent 1</Badge>
      <Badge variant="accent-2">Accent 2</Badge>
      <Badge variant="accent-3">Accent 3</Badge>
    </div>
  );
}

function SizesSection() {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
    </div>
  );
}

function ShapesSection() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="pill">Pill</Badge>
    </div>
  );
}

function IconsSection() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge
        variant="success"
        iconLeft={<Icon as={CheckCircleIcon} color="inherit" />}
      >
        Complete
      </Badge>
      <Badge
        variant="warning"
        iconRight={<Icon as={AlertCircleIcon} color="inherit" />}
      >
        Warning
      </Badge>
      <Badge
        variant="primary"
        iconLeft={<Icon as={ZapIcon} color="inherit" />}
        iconRight={<Icon as={ZapIcon} color="inherit" />}
      >
        Zapped
      </Badge>
    </div>
  );
}

export const badgeSections = [
  {
    key: "variants",
    title: "Variants",
    preview: VariantsSection,
    code: `<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="accent-1">Accent 1</Badge>
<Badge variant="accent-2">Accent 2</Badge>
<Badge variant="accent-3">Accent 3</Badge>`,
    language: "tsx",
  },
  {
    key: "sizes",
    title: "Sizes",
    preview: SizesSection,
    code: `<Badge size="small">Small</Badge>
<Badge size="medium">Medium</Badge>`,
    language: "tsx",
  },
  {
    key: "shapes",
    title: "Shapes",
    preview: ShapesSection,
    code: `<Badge shape="rounded">Rounded</Badge>
<Badge shape="pill">Pill</Badge>`,
    language: "tsx",
  },
  {
    key: "icons",
    title: "With Icons",
    preview: IconsSection,
    code: `import { Icon } from "@versaur/react";
import { CheckCircleIcon, AlertCircleIcon, ZapIcon } from "@versaur/icons";

<Badge
  variant="success"
  iconLeft={<Icon as={CheckCircleIcon} color="inherit" />}
>
  Complete
</Badge>

<Badge
  variant="warning"
  iconRight={<Icon as={AlertCircleIcon} color="inherit" />}
>
  Warning
</Badge>

<Badge
  variant="primary"
  iconLeft={<Icon as={ZapIcon} color="inherit" />}
  iconRight={<Icon as={ZapIcon} color="inherit" />}
>
  Zapped
</Badge>`,
    language: "tsx",
  },
];

export function BadgePreview() {
  return (
    <div>
      <h2>Badge Component</h2>
      <p>
        Display labels, tags, or status indicators with customizable style,
        size, and shape.
      </p>
    </div>
  );
}
