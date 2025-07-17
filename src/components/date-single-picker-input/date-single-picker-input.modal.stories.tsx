/**
 * DateSinglePickerInput modal stories for Storybook
 *
 * Demonstrates modal type, accessibility, Cancel/Confirm CTAs, and all variants
 * Follows Versaur guidelines for compound/context pattern and design system
 */
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DateSinglePickerInput } from './date-single-picker-input'
import { CalendarDays } from 'lucide-react'

const meta: Meta<typeof DateSinglePickerInput> = {
  title: 'Form/DateSinglePickerInput/Modal',
  component: DateSinglePickerInput,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'primary-outline',
        'secondary',
        'secondary-outline',
        'tertiary',
        'tertiary-outline',
        'ghost',
        'ghost-outline',
        'neutral',
        'neutral-outline',
        'success',
        'success-outline',
        'info',
        'info-outline',
        'warning',
        'warning-outline',
        'danger',
        'danger-outline',
      ],
    },
  },
}
export default meta

const defaultDate = new Date(2025, 6, 1)

type Story = StoryObj<typeof DateSinglePickerInput>

function ControlledModalDateSinglePickerInput(
  props: Omit<
    React.ComponentProps<typeof DateSinglePickerInput>,
    'value' | 'onChange'
  > & {
    value?: Date
  }
) {
  const [date, setDate] = useState<Date>(props.value ?? defaultDate)
  return (
    <DateSinglePickerInput
      {...props}
      value={date}
      onChange={setDate}
      type='modal'
    />
  )
}

export const ModalDefault: Story = {
  render: args => <ControlledModalDateSinglePickerInput {...args} />,
  args: {
    label: 'Date of Birth',
    placeholder: 'Select date',
    helperText: 'Pick your birth date',
    value: defaultDate,
    variant: 'primary',
    disabled: false,
  },
}

export const ModalWithLeftIcon: Story = {
  render: args => <ControlledModalDateSinglePickerInput {...args} />,
  args: {
    label: 'Date',
    leftContent: <CalendarDays className='w-4 h-4 text-gray-500' />,
    placeholder: 'Select date',
    value: defaultDate,
    variant: 'primary',
    disabled: false,
  },
}

export const ModalErrorState: Story = {
  render: args => <ControlledModalDateSinglePickerInput {...args} />,
  args: {
    label: 'Date',
    error: 'Date is required',
    placeholder: 'Select date',
    value: defaultDate,
    variant: 'danger',
    disabled: false,
  },
}

export const ModalDisabled: Story = {
  render: args => <ControlledModalDateSinglePickerInput {...args} />,
  args: {
    label: 'Date',
    disabled: true,
    placeholder: 'Select date',
    value: defaultDate,
    variant: 'primary',
  },
}

export const ModalAllVariants: Story = {
  render: () => {
    const variants = [
      'primary',
      'primary-outline',
      'secondary',
      'secondary-outline',
      'tertiary',
      'tertiary-outline',
      'ghost',
      'ghost-outline',
      'neutral',
      'neutral-outline',
      'success',
      'success-outline',
      'info',
      'info-outline',
      'warning',
      'warning-outline',
      'danger',
      'danger-outline',
    ] as const
    function ModalAllVariantsComponent() {
      const [date, setDate] = useState<Date>(defaultDate)
      return (
        <div className='space-y-4'>
          {variants.map(variant => (
            <DateSinglePickerInput
              key={variant}
              label={`Variant: ${variant}`}
              variant={variant}
              value={date}
              onChange={setDate}
              placeholder='Select date'
              type='modal'
            />
          ))}
        </div>
      )
    }
    return <ModalAllVariantsComponent />
  },
}
