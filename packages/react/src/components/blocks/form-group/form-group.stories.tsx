import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { CheckboxGroup } from "../../forms/checkbox-group"
import { ChipInput } from "../../forms/chip-input"
import { RadioGroup } from "../../forms/radio-group"
import { Select } from "../../forms/select"
import { TextArea } from "../../forms/text-area"
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

/**
 * FormGroup showcasing various form field types.
 * Demonstrates TextInput, TextArea, Select, CheckboxGroup, RadioGroup, and ChipInput.
 */
export const AllFieldTypes: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      message: "",
      country: "",
      interests: [] as string[],
      newsletter: "",
      technologies: [] as string[],
    })

    return (
      <FormGroup columns="repeat(2, 1fr)">
        <FormGroup.Field area="span 2">
          <Heading as="h4">User Profile</Heading>
        </FormGroup.Field>

        <FormGroup.Field>
          <TextInput
            id="fullName"
            label="Full Name"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </FormGroup.Field>

        <FormGroup.Field>
          <TextInput
            id="email"
            type="email"
            label="Email Address"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </FormGroup.Field>

        <FormGroup.Field area="span 2">
          <TextArea
            id="message"
            label="Message"
            placeholder="Tell us more about yourself..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            minRows={3}
          />
        </FormGroup.Field>

        <FormGroup.Field>
          <Select
            id="country"
            label="Country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          >
            <Select.Option value="">Select a country</Select.Option>
            <Select.Option value="us">United States</Select.Option>
            <Select.Option value="ca">Canada</Select.Option>
            <Select.Option value="uk">United Kingdom</Select.Option>
            <Select.Option value="au">Australia</Select.Option>
          </Select>
        </FormGroup.Field>

        <FormGroup.Field>
          <RadioGroup
            id="newsletter"
            label="Newsletter Preference"
            value={formData.newsletter}
            onChange={(value) => setFormData({ ...formData, newsletter: value })}
          >
            <RadioGroup.Option value="daily">Daily</RadioGroup.Option>
            <RadioGroup.Option value="weekly">Weekly</RadioGroup.Option>
            <RadioGroup.Option value="monthly">Monthly</RadioGroup.Option>
            <RadioGroup.Option value="never">Never</RadioGroup.Option>
          </RadioGroup>
        </FormGroup.Field>

        <FormGroup.Field area="span 2">
          <CheckboxGroup
            id="interests"
            label="Interests"
            value={formData.interests}
            onChange={(values) => setFormData({ ...formData, interests: values })}
            direction="row"
          >
            <CheckboxGroup.Option value="design">Design</CheckboxGroup.Option>
            <CheckboxGroup.Option value="development">Development</CheckboxGroup.Option>
            <CheckboxGroup.Option value="marketing">Marketing</CheckboxGroup.Option>
          </CheckboxGroup>
        </FormGroup.Field>

        <FormGroup.Field area="span 2">
          <ChipInput
            id="technologies"
            label="Technologies"
            multiple
            value={formData.technologies}
            onChange={(values) => setFormData({ ...formData, technologies: values })}
          >
            <ChipInput.Option value="react">React</ChipInput.Option>
            <ChipInput.Option value="vue">Vue</ChipInput.Option>
            <ChipInput.Option value="typescript">TypeScript</ChipInput.Option>
            <ChipInput.Option value="tailwind">Tailwind</ChipInput.Option>
            <ChipInput.Option value="nextjs">Next.js</ChipInput.Option>
          </ChipInput>
        </FormGroup.Field>
      </FormGroup>
    )
  },
}
