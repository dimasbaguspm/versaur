import { CheckCircle, Star } from 'lucide-react'

/**
 * ChipMultipleInput group stories
 *
 * Demonstrates usage of ChipMultipleInput for multiple selection using checkbox pattern
 * Includes accessibility and variant examples
 */
import { useState } from 'react'
import { ChipMultipleInput } from './chip-multiple-input'
import type { ChipMultipleInputProps } from './types'

export default {
  title: 'Forms/ChipMultipleInput',
  component: ChipMultipleInput,
  tags: ['autodocs'],
}

export const Basic = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <ChipMultipleInput
      name='fruits'
      variant='primary'
      value={value}
      onChange={setValue}
      aria-label='Select fruits'
    >
      <ChipMultipleInput.Option value='apple'>Apple</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='banana'>Banana</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='cherry'>Cherry</ChipMultipleInput.Option>
    </ChipMultipleInput>
  )
}

export const Disabled = () => {
  const [value, setValue] = useState<string[]>(['banana'])
  return (
    <ChipMultipleInput
      name='fruits'
      value={value}
      onChange={setValue}
      disabled
      aria-label='Select fruits'
    >
      <ChipMultipleInput.Option value='apple'>Apple</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='banana'>Banana</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='cherry'>Cherry</ChipMultipleInput.Option>
    </ChipMultipleInput>
  )
}

export const Variants = () => {
  const [value, setValue] = useState<string[]>([])
  const variants = [
    'primary',
    'secondary',
    'tertiary',
    'ghost',
    'neutral',
    'success',
    'info',
    'warning',
    'danger',
  ]
  const labels = [
    'Coral',
    'Sage',
    'Mist',
    'Slate',
    'Gray',
    'Success',
    'Info',
    'Warning',
    'Danger',
  ]
  return (
    <div className='flex flex-wrap gap-3'>
      {variants.map((variant, i) => (
        <ChipMultipleInput
          key={variant}
          name={variant}
          value={value}
          onChange={setValue}
          variant={variant as ChipMultipleInputProps['variant']}
        >
          <ChipMultipleInput.Option value={variant}>
            {labels[i]}
          </ChipMultipleInput.Option>
        </ChipMultipleInput>
      ))}
    </div>
  )
}

/**
 * Shape variations for ChipMultipleInput.Option
 */
export const Shape = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <div className='mb-2 font-semibold'>Circle (default)</div>
        <ChipMultipleInput
          name='circle-shape'
          value={value}
          onChange={setValue}
          shape='circle'
        >
          <ChipMultipleInput.Option value='a'>
            Circle A
          </ChipMultipleInput.Option>
          <ChipMultipleInput.Option value='b'>
            Circle B
          </ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
      <div>
        <div className='mb-2 font-semibold'>Rounded</div>
        <ChipMultipleInput
          name='rounded-shape'
          value={value}
          onChange={setValue}
          shape='rounded'
        >
          <ChipMultipleInput.Option value='c'>
            Rounded C
          </ChipMultipleInput.Option>
          <ChipMultipleInput.Option value='d'>
            Rounded D
          </ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
    </div>
  )
}

/**
 * Size variations for ChipMultipleInput.Option
 */
export const Sizes = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <>
      <div className='mb-2 font-semibold'>Small (default)</div>
      <ChipMultipleInput
        name='sizes-sm'
        value={value}
        onChange={setValue}
        size='sm'
      >
        <ChipMultipleInput.Option value='sm'>Small</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='md'>Medium</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='lg'>Large</ChipMultipleInput.Option>
      </ChipMultipleInput>
      <div className='mb-2 font-semibold mt-4'>Medium</div>
      <ChipMultipleInput
        name='sizes-md'
        value={value}
        onChange={setValue}
        size='md'
      >
        <ChipMultipleInput.Option value='sm'>Small</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='md'>Medium</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='lg'>Large</ChipMultipleInput.Option>
      </ChipMultipleInput>
      <div className='mb-2 font-semibold mt-4'>Large</div>
      <ChipMultipleInput
        name='sizes-lg'
        value={value}
        onChange={setValue}
        size='lg'
      >
        <ChipMultipleInput.Option value='sm'>Small</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='md'>Medium</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='lg'>Large</ChipMultipleInput.Option>
      </ChipMultipleInput>
    </>
  )
}

/**
 * Custom and default check icon variations for ChipMultipleInput.Option
 */
export const CheckIcon = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <div className='mb-2 font-semibold'>Custom Check Icon</div>
        <ChipMultipleInput
          name='custom-check'
          value={value}
          onChange={setValue}
        >
          <ChipMultipleInput.Option
            value='star'
            check={<Star size={16} className='text-warning' />}
          >
            Star
          </ChipMultipleInput.Option>
          <ChipMultipleInput.Option
            value='circle'
            check={<CheckCircle size={16} className='text-success' />}
          >
            Circle
          </ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
      <div>
        <div className='mb-2 font-semibold'>No Check Icon</div>
        <ChipMultipleInput name='no-check' value={value} onChange={setValue}>
          <ChipMultipleInput.Option value='x'>
            No Check A
          </ChipMultipleInput.Option>
          <ChipMultipleInput.Option value='y'>
            No Check B
          </ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
      <div>
        <div className='mb-2 font-semibold'>
          Default Check Icon (set defaultCheck)
        </div>
        <ChipMultipleInput
          name='default-check'
          value={value}
          onChange={setValue}
        >
          <ChipMultipleInput.Option value='z' defaultCheck>
            Default Check
          </ChipMultipleInput.Option>
        </ChipMultipleInput>
      </div>
    </div>
  )
}
