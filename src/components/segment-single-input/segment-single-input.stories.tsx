import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  TrendingDown,
  TrendingUp,
  ArrowLeftRight,
  CreditCard,
  Banknote,
  Building2,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Home,
  User,
  Settings,
} from 'lucide-react'
import { SegmentSingleInput } from './segment-single-input'

/**
 * SegmentSingleInput provides a segmented radio input component with tab-like visual design.
 * Perfect for form components that need clear visual grouping and single selection.
 *
 * Based on radio input pattern but with enhanced styling for segment appearance.
 * Supports all Versaur color variants and accessibility features.
 *
 * This is a controlled component that allows unselecting (setting value to null).
 */
const meta: Meta<typeof SegmentSingleInput> = {
  title: 'Form/SegmentSingleInput',
  component: SegmentSingleInput,
  parameters: {
    docs: {
      description: {
        component:
          'A segmented radio input component that provides tab-like visual design for single selection within forms. Click the selected option to unselect it.',
      },
    },
  },
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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    name: 'transaction-type',
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default segment input with three transaction type options - controlled component
 * Click on the selected option to unselect it (set value to null)
 */
export const Default: Story = {
  render: () => {
    const DefaultComponent = () => {
      const [value, setValue] = useState<string | null>('expense')
      return (
        <div className='space-y-2'>
          <SegmentSingleInput
            label='Transaction Type'
            name='default-story'
            value={value}
            onChange={setValue}
          >
            <SegmentSingleInput.Option value='expense'>
              <TrendingDown className='w-4 h-4 mr-2' />
              Expense
            </SegmentSingleInput.Option>
            <SegmentSingleInput.Option value='income'>
              <TrendingUp className='w-4 h-4 mr-2' />
              Income
            </SegmentSingleInput.Option>
            <SegmentSingleInput.Option value='transfer'>
              <ArrowLeftRight className='w-4 h-4 mr-2' />
              Transfer
            </SegmentSingleInput.Option>
          </SegmentSingleInput>
          <p className='text-sm text-gray-600'>
            Current value: {value || 'null (unselected)'}
          </p>
        </div>
      )
    }
    return <DefaultComponent />
  },
}

/**
 * All available size variants
 */
export const Sizes: Story = {
  render: () => {
    const SizesComponent = () => {
      const [valueSmall, setValueSmall] = useState<string | null>('option1')
      const [valueMedium, setValueMedium] = useState<string | null>('option2')
      const [valueLarge, setValueLarge] = useState<string | null>('option3')

      return (
        <div className='space-y-6'>
          <div>
            <h3 className='text-sm font-medium mb-2'>Small</h3>
            <SegmentSingleInput
              name='size-sm'
              size='sm'
              value={valueSmall}
              onChange={setValueSmall}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>
          <div>
            <h3 className='text-sm font-medium mb-2'>Medium</h3>
            <SegmentSingleInput
              name='size-md'
              size='md'
              value={valueMedium}
              onChange={setValueMedium}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>
          <div>
            <h3 className='text-sm font-medium mb-2'>Large</h3>
            <SegmentSingleInput
              name='size-lg'
              size='lg'
              value={valueLarge}
              onChange={setValueLarge}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>
        </div>
      )
    }
    return <SizesComponent />
  },
}

/**
 * With helper text and labels
 */
export const WithLabelsAndHelper: Story = {
  render: () => {
    const WithLabelsComponent = () => {
      const [value, setValue] = useState<string | null>('card')
      return (
        <SegmentSingleInput
          label='Payment Method'
          helperText='Choose your preferred payment method for this transaction'
          name='payment-method'
          value={value}
          onChange={setValue}
        >
          <SegmentSingleInput.Option value='cash'>
            <Banknote className='w-4 h-4 mr-2' />
            Cash
          </SegmentSingleInput.Option>
          <SegmentSingleInput.Option value='card'>
            <CreditCard className='w-4 h-4 mr-2' />
            Card
          </SegmentSingleInput.Option>
          <SegmentSingleInput.Option value='bank'>
            <Building2 className='w-4 h-4 mr-2' />
            Bank Transfer
          </SegmentSingleInput.Option>
        </SegmentSingleInput>
      )
    }
    return <WithLabelsComponent />
  },
}

/**
 * Error state example
 */
export const WithError: Story = {
  render: () => {
    const WithErrorComponent = () => {
      const [value, setValue] = useState<string | null>(null)
      return (
        <SegmentSingleInput
          label='Account Type'
          error='Please select an account type'
          name='account-type-error'
          value={value}
          onChange={setValue}
        >
          <SegmentSingleInput.Option value='checking'>
            Checking
          </SegmentSingleInput.Option>
          <SegmentSingleInput.Option value='savings'>
            Savings
          </SegmentSingleInput.Option>
          <SegmentSingleInput.Option value='credit'>
            Credit
          </SegmentSingleInput.Option>
        </SegmentSingleInput>
      )
    }
    return <WithErrorComponent />
  },
}

/**
 * All color variants demonstration
 */
export const ColorVariants: Story = {
  render: () => {
    const ColorVariantsComponent = () => {
      const [primaryValue, setPrimaryValue] = useState<string | null>('option1')
      const [secondaryValue, setSecondaryValue] = useState<string | null>(
        'option1'
      )
      const [tertiaryValue, setTertiaryValue] = useState<string | null>(
        'option1'
      )
      const [ghostValue, setGhostValue] = useState<string | null>('option1')
      const [successValue, setSuccessValue] = useState<string | null>('option1')
      const [dangerValue, setDangerValue] = useState<string | null>('option1')

      return (
        <div className='space-y-6'>
          <div>
            <h3 className='text-sm font-medium mb-2'>Primary (Coral)</h3>
            <SegmentSingleInput
              name='variant-primary'
              variant='primary'
              value={primaryValue}
              onChange={setPrimaryValue}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-2'>Secondary (Sage)</h3>
            <SegmentSingleInput
              name='variant-secondary'
              variant='secondary'
              value={secondaryValue}
              onChange={setSecondaryValue}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-2'>Tertiary (Mist)</h3>
            <SegmentSingleInput
              name='variant-tertiary'
              variant='tertiary'
              value={tertiaryValue}
              onChange={setTertiaryValue}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-2'>Ghost (Slate)</h3>
            <SegmentSingleInput
              name='variant-ghost'
              variant='ghost'
              value={ghostValue}
              onChange={setGhostValue}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-2'>Success</h3>
            <SegmentSingleInput
              name='variant-success'
              variant='success'
              value={successValue}
              onChange={setSuccessValue}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-2'>Danger</h3>
            <SegmentSingleInput
              name='variant-danger'
              variant='danger'
              value={dangerValue}
              onChange={setDangerValue}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>
        </div>
      )
    }
    return <ColorVariantsComponent />
  },
}

/**
 * Outline variants demonstration
 */
export const OutlineVariants: Story = {
  render: () => {
    const OutlineVariantsComponent = () => {
      const [primaryOutlineValue, setPrimaryOutlineValue] = useState<
        string | null
      >('option1')
      const [secondaryOutlineValue, setSecondaryOutlineValue] = useState<
        string | null
      >('option1')
      const [ghostOutlineValue, setGhostOutlineValue] = useState<string | null>(
        'option1'
      )

      return (
        <div className='space-y-6'>
          <div>
            <h3 className='text-sm font-medium mb-2'>Primary Outline</h3>
            <SegmentSingleInput
              name='outline-primary'
              variant='primary-outline'
              value={primaryOutlineValue}
              onChange={setPrimaryOutlineValue}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-2'>Secondary Outline</h3>
            <SegmentSingleInput
              name='outline-secondary'
              variant='secondary-outline'
              value={secondaryOutlineValue}
              onChange={setSecondaryOutlineValue}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-2'>Ghost Outline</h3>
            <SegmentSingleInput
              name='outline-ghost'
              variant='ghost-outline'
              value={ghostOutlineValue}
              onChange={setGhostOutlineValue}
            >
              <SegmentSingleInput.Option value='option1'>
                Option 1
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option2'>
                Option 2
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='option3'>
                Option 3
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>
        </div>
      )
    }
    return <OutlineVariantsComponent />
  },
}

/**
 * Disabled state demonstration
 */
export const Disabled: Story = {
  render: () => {
    const DisabledComponent = () => {
      const [value, setValue] = useState<string | null>('option2')
      return (
        <SegmentSingleInput
          label='Disabled Segment'
          helperText='This segment input is disabled'
          name='disabled-example'
          value={value}
          onChange={setValue}
          disabled={true}
        >
          <SegmentSingleInput.Option value='option1'>
            Option 1
          </SegmentSingleInput.Option>
          <SegmentSingleInput.Option value='option2'>
            Option 2
          </SegmentSingleInput.Option>
          <SegmentSingleInput.Option value='option3'>
            Option 3
          </SegmentSingleInput.Option>
        </SegmentSingleInput>
      )
    }
    return <DisabledComponent />
  },
}

/**
 * Controlled component example demonstrating onChange functionality
 * Shows how the component can be controlled and how unselection works
 */
export const Controlled: Story = {
  render: () => {
    const ControlledComponent = () => {
      const [value, setValue] = useState<string | null>('option2')

      const handleChange = (newValue: string | null) => {
        console.log('Value changed:', newValue)
        setValue(newValue)
      }

      return (
        <div className='space-y-4'>
          <SegmentSingleInput
            label='Controlled Component'
            helperText='This component uses value and onChange props. Click the selected option to unselect it.'
            name='controlled-example'
            value={value}
            onChange={handleChange}
          >
            <SegmentSingleInput.Option value='option1'>
              Option 1
            </SegmentSingleInput.Option>
            <SegmentSingleInput.Option value='option2'>
              Option 2 (Initially Selected)
            </SegmentSingleInput.Option>
            <SegmentSingleInput.Option value='option3'>
              Option 3
            </SegmentSingleInput.Option>
          </SegmentSingleInput>
          <div className='space-y-2'>
            <p className='text-sm text-gray-600'>
              Current value: <code>{value || 'null'}</code>
            </p>
            <div className='space-x-2'>
              <button
                onClick={() => setValue('option1')}
                className='px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 rounded'
              >
                Set to Option 1
              </button>
              <button
                onClick={() => setValue(null)}
                className='px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded'
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )
    }
    return <ControlledComponent />
  },
}

/**
 * Icon-only segment options demonstration
 * Shows segments with only icons, no text labels
 */
export const IconOnly: Story = {
  render: () => {
    const IconOnlyComponent = () => {
      const [value, setValue] = useState<string | null>('home')
      return (
        <div className='space-y-4'>
          <SegmentSingleInput
            label='Navigation'
            helperText='Icon-only segment options with hover tooltips'
            name='navigation'
            value={value}
            onChange={setValue}
          >
            <SegmentSingleInput.Option value='home' title='Home'>
              <Home className='w-4 h-4' />
            </SegmentSingleInput.Option>
            <SegmentSingleInput.Option value='user' title='Profile'>
              <User className='w-4 h-4' />
            </SegmentSingleInput.Option>
            <SegmentSingleInput.Option value='settings' title='Settings'>
              <Settings className='w-4 h-4' />
            </SegmentSingleInput.Option>
          </SegmentSingleInput>
          <p className='text-sm text-gray-600'>
            Current selection: {value || 'none'}
          </p>
        </div>
      )
    }
    return <IconOnlyComponent />
  },
}

/**
 * Mixed content - icons with text and icon-only options
 */
export const MixedContent: Story = {
  render: () => {
    const MixedContentComponent = () => {
      const [statusValue, setStatusValue] = useState<string | null>('success')
      const [actionValue, setActionValue] = useState<string | null>('save')

      return (
        <div className='space-y-6'>
          <div>
            <h3 className='text-sm font-medium mb-2'>
              Status with Icons and Text
            </h3>
            <SegmentSingleInput
              name='status-mixed'
              value={statusValue}
              onChange={setStatusValue}
              variant='success'
            >
              <SegmentSingleInput.Option value='success'>
                <CheckCircle2 className='w-4 h-4 mr-2' />
                Success
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='warning'>
                <AlertCircle className='w-4 h-4 mr-2' />
                Warning
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='error'>
                <XCircle className='w-4 h-4 mr-2' />
                Error
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>

          <div>
            <h3 className='text-sm font-medium mb-2'>Actions (Icon Only)</h3>
            <SegmentSingleInput
              name='actions-icon-only'
              value={actionValue}
              onChange={setActionValue}
              variant='primary'
              size='sm'
            >
              <SegmentSingleInput.Option value='save' title='Save'>
                <CheckCircle2 className='w-3 h-3' />
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='cancel' title='Cancel'>
                <XCircle className='w-3 h-3' />
              </SegmentSingleInput.Option>
              <SegmentSingleInput.Option value='settings' title='Settings'>
                <Settings className='w-3 h-3' />
              </SegmentSingleInput.Option>
            </SegmentSingleInput>
          </div>
        </div>
      )
    }
    return <MixedContentComponent />
  },
}
