import type { Meta, StoryObj } from "@storybook/react"

import { TextInput } from "../../forms/text-input"
import { Heading } from "../../primitive/heading"
import { Text } from "../../primitive/text"
import { FormGroup } from "../index"

const meta: Meta<typeof FormGroup> = {
  title: "Blocks / FormGroup",
  component: FormGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FormGroup>

/**
 * Default FormGroup with single-column layout.
 * Each field stacks vertically in the form.
 */
export const Default: Story = {
  render: () => (
    <FormGroup>
      <FormGroup.Field>
        <TextInput id="name" placeholder="John Doe" label="Full Name" />
      </FormGroup.Field>

      <FormGroup.Field>
        <TextInput id="email" type="email" placeholder="john@example.com" label="Email Address" />
      </FormGroup.Field>

      <FormGroup.Field>
        <TextInput id="message" placeholder="Your message..." label="Message" />
      </FormGroup.Field>
    </FormGroup>
  ),
}

/**
 * Multi-column FormGroup with 3-column layout.
 * Some fields use `area` prop to span multiple columns.
 */
export const MultiColumn: Story = {
  render: () => (
    <FormGroup columns="repeat(3, 1fr)">
      <FormGroup.Field area="span 3">
        <Heading as="h4">Contact Information</Heading>
      </FormGroup.Field>

      <FormGroup.Field>
        <TextInput id="fname" placeholder="John" label="First Name" />
      </FormGroup.Field>

      <FormGroup.Field>
        <TextInput id="mname" placeholder="Michael" label="Middle Name" />
      </FormGroup.Field>

      <FormGroup.Field>
        <TextInput id="lname" placeholder="Doe" label="Last Name" />
      </FormGroup.Field>

      <FormGroup.Field area="span 2">
        <TextInput id="address" placeholder="123 Main St" label="Street Address" />
      </FormGroup.Field>

      <FormGroup.Field>
        <TextInput id="zip" placeholder="12345" label="Zip Code" />
      </FormGroup.Field>
    </FormGroup>
  ),
}

/**
 * FormGroup with separator dividing sections.
 * Separator always spans the full row regardless of column count.
 */
export const WithSeparator: Story = {
  render: () => (
    <FormGroup columns="repeat(2, 1fr)">
      <FormGroup.Field>
        <TextInput id="fname2" placeholder="John" label="First Name" />
      </FormGroup.Field>

      <FormGroup.Field>
        <TextInput id="lname2" placeholder="Doe" label="Last Name" />
      </FormGroup.Field>

      <FormGroup.Separator />

      <FormGroup.Field area="span 2">
        <Heading as="h4">Address Information</Heading>
        <Text size="sm" intent="gray">
          Fill in your address details below
        </Text>
      </FormGroup.Field>

      <FormGroup.Field>
        <TextInput id="city" placeholder="New York" label="City" />
      </FormGroup.Field>

      <FormGroup.Field>
        <TextInput id="state" placeholder="NY" label="State" />
      </FormGroup.Field>
    </FormGroup>
  ),
}
