import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "small", "em", "strong"],
    },
    case: {
      control: "select",
      options: ["lower", "upper", "capitalize"],
    },
    intent: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger", "gray", "black", "white"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl"],
    },
    transform: {
      control: "select",
      options: ["underline", "overline", "line-through"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
  },
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Text/Text",
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "This is a default text component",
  },
}

export const Paragraph: Story = {
  args: {
    as: "p",
    children: "This is rendered as a paragraph element.",
    size: "base",
  },
}

export const Small: Story = {
  args: {
    as: "small",
    children: "This is small text",
    size: "sm",
  },
}

export const Span: Story = {
  args: {
    as: "span",
    children: "This is inline text",
  },
}

export const Strong: Story = {
  args: {
    as: "strong",
    children: "This is strong text",
    weight: "bold",
  },
}

export const Emphasis: Story = {
  args: {
    as: "em",
    children: "This is emphasized text",
  },
}

export const ExtraSmall: Story = {
  args: {
    children: "Extra small text",
    size: "xs",
  },
}

export const SmallText: Story = {
  args: {
    children: "Small text",
    size: "sm",
  },
}

export const BaseText: Story = {
  args: {
    children: "Base size text",
    size: "base",
  },
}

export const LargeText: Story = {
  args: {
    children: "Large text",
    size: "lg",
  },
}

export const XLargeText: Story = {
  args: {
    children: "Extra large text",
    size: "xl",
  },
}

export const TwoXLargeText: Story = {
  args: {
    children: "Double extra large text",
    size: "2xl",
  },
}

export const NormalWeight: Story = {
  args: {
    children: "Normal weight text",
    weight: "normal",
  },
}

export const MediumWeight: Story = {
  args: {
    children: "Medium weight text",
    weight: "medium",
  },
}

export const SemiboldWeight: Story = {
  args: {
    children: "Semibold weight text",
    weight: "semibold",
  },
}

export const BoldWeight: Story = {
  args: {
    children: "Bold weight text",
    weight: "bold",
  },
}

export const PrimaryIntent: Story = {
  args: {
    children: "Primary color text",
    intent: "primary",
  },
}

export const SecondaryIntent: Story = {
  args: {
    children: "Secondary color text",
    intent: "secondary",
  },
}

export const SuccessIntent: Story = {
  args: {
    children: "Success color text",
    intent: "success",
  },
}

export const WarningIntent: Story = {
  args: {
    children: "Warning color text",
    intent: "warning",
  },
}

export const DangerIntent: Story = {
  args: {
    children: "Danger color text",
    intent: "danger",
  },
}

export const GrayIntent: Story = {
  args: {
    children: "Gray color text",
    intent: "gray",
  },
}

export const Uppercase: Story = {
  args: {
    children: "uppercase text",
    case: "upper",
  },
}

export const Lowercase: Story = {
  args: {
    children: "LOWERCASE TEXT",
    case: "lower",
  },
}

export const Capitalize: Story = {
  args: {
    children: "capitalize first letter",
    case: "capitalize",
  },
}

export const Underline: Story = {
  args: {
    children: "Underlined text",
    transform: "underline",
  },
}

export const Overline: Story = {
  args: {
    children: "Overlined text",
    transform: "overline",
  },
}

export const LineThrough: Story = {
  args: {
    children: "Strikethrough text",
    transform: "line-through",
  },
}

export const Combined: Story = {
  args: {
    children: "styled text",
    size: "lg",
    weight: "bold",
    intent: "primary",
    case: "upper",
    transform: "underline",
  },
}
