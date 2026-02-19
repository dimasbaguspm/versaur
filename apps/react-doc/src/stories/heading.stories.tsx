import type { Meta, StoryObj } from "@storybook/react"
import { Heading } from "@versaur/react/primitive"

const meta = {
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
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
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Text/Heading",
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Default Heading",
    as: "h2",
  },
}

export const H1: Story = {
  args: {
    children: "Heading Level 1",
    as: "h1",
  },
}

export const H2: Story = {
  args: {
    children: "Heading Level 2",
    as: "h2",
  },
}

export const H3: Story = {
  args: {
    children: "Heading Level 3",
    as: "h3",
  },
}

export const H4: Story = {
  args: {
    children: "Heading Level 4",
    as: "h4",
  },
}

export const H5: Story = {
  args: {
    children: "Heading Level 5",
    as: "h5",
  },
}

export const H6: Story = {
  args: {
    children: "Heading Level 6",
    as: "h6",
  },
}

export const ExtraSmall: Story = {
  args: {
    children: "Extra Small Heading",
    size: "xs",
  },
}

export const Small: Story = {
  args: {
    children: "Small Heading",
    size: "sm",
  },
}

export const Base: Story = {
  args: {
    children: "Base Size Heading",
    size: "base",
  },
}

export const Large: Story = {
  args: {
    children: "Large Heading",
    size: "lg",
  },
}

export const ExtraLarge: Story = {
  args: {
    children: "Extra Large Heading",
    size: "xl",
  },
}

export const TwoXLarge: Story = {
  args: {
    children: "2XL Heading",
    size: "2xl",
  },
}

export const NormalWeight: Story = {
  args: {
    children: "Normal Weight Heading",
    weight: "normal",
  },
}

export const MediumWeight: Story = {
  args: {
    children: "Medium Weight Heading",
    weight: "medium",
  },
}

export const SemiboldWeight: Story = {
  args: {
    children: "Semibold Weight Heading",
    weight: "semibold",
  },
}

export const BoldWeight: Story = {
  args: {
    children: "Bold Weight Heading",
    weight: "bold",
  },
}

export const PrimaryIntent: Story = {
  args: {
    children: "Primary Heading",
    intent: "primary",
  },
}

export const SecondaryIntent: Story = {
  args: {
    children: "Secondary Heading",
    intent: "secondary",
  },
}

export const SuccessIntent: Story = {
  args: {
    children: "Success Heading",
    intent: "success",
  },
}

export const WarningIntent: Story = {
  args: {
    children: "Warning Heading",
    intent: "warning",
  },
}

export const DangerIntent: Story = {
  args: {
    children: "Danger Heading",
    intent: "danger",
  },
}

export const GrayIntent: Story = {
  args: {
    children: "Gray Heading",
    intent: "gray",
  },
}

export const Uppercase: Story = {
  args: {
    children: "uppercase heading",
    case: "upper",
  },
}

export const Lowercase: Story = {
  args: {
    children: "LOWERCASE HEADING",
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
    children: "Underlined Heading",
    transform: "underline",
  },
}

export const Overline: Story = {
  args: {
    children: "Overlined Heading",
    transform: "overline",
  },
}

export const LineThrough: Story = {
  args: {
    children: "Strikethrough Heading",
    transform: "line-through",
  },
}

export const LargeAndBold: Story = {
  args: {
    children: "Large Bold Heading",
    size: "2xl",
    weight: "bold",
  },
}

export const PrimaryAndLarge: Story = {
  args: {
    children: "Primary Large Heading",
    intent: "primary",
    size: "xl",
  },
}
