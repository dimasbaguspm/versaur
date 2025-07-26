/**
 * ChipInput Option shape, size, and custom check stories
 *
 * Demonstrates the new shape, size, and check icon API for ChipInput.Option
 */

import { CheckCircle, Star } from 'lucide-react'

/**
 * ChipInput group stories
 *
 * Demonstrates usage of ChipInput for multiple selection using checkbox pattern
 * Includes accessibility and variant examples
 */
import { useState } from 'react'
import { ChipInput } from './chip-input'
import type { ChipInputProps } from './types'

export default {
  title: 'Forms/ChipInput',
  component: ChipInput,
  tags: ['autodocs'],
}

export const Basic = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <ChipInput
      name='fruits'
      variant='primary'
      value={value}
      onChange={setValue}
      aria-label='Select fruits'
    >
      <ChipInput.Option value='apple'>Apple</ChipInput.Option>
      <ChipInput.Option value='banana'>Banana</ChipInput.Option>
      <ChipInput.Option value='cherry'>Cherry</ChipInput.Option>
    </ChipInput>
  )
}

export const Disabled = () => {
  const [value, setValue] = useState<string[]>(['banana'])
  return (
    <ChipInput
      name='fruits'
      value={value}
      onChange={setValue}
      disabled
      aria-label='Select fruits'
    >
      <ChipInput.Option value='apple'>Apple</ChipInput.Option>
      <ChipInput.Option value='banana'>Banana</ChipInput.Option>
      <ChipInput.Option value='cherry'>Cherry</ChipInput.Option>
    </ChipInput>
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
        <ChipInput
          key={variant}
          name={variant}
          value={value}
          onChange={setValue}
          variant={variant as ChipInputProps['variant']}
        >
          <ChipInput.Option value={variant}>{labels[i]}</ChipInput.Option>
        </ChipInput>
      ))}
    </div>
  )
}

/**
 * Shape variations for ChipInput.Option
 */
export const Shape = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <div className='mb-2 font-semibold'>Circle (default)</div>
        <ChipInput
          name='circle-shape'
          value={value}
          onChange={setValue}
          shape='circle'
        >
          <ChipInput.Option value='a'>Circle A</ChipInput.Option>
          <ChipInput.Option value='b'>Circle B</ChipInput.Option>
        </ChipInput>
      </div>
      <div>
        <div className='mb-2 font-semibold'>Rounded</div>
        <ChipInput
          name='rounded-shape'
          value={value}
          onChange={setValue}
          shape='rounded'
        >
          <ChipInput.Option value='c'>Rounded C</ChipInput.Option>
          <ChipInput.Option value='d'>Rounded D</ChipInput.Option>
        </ChipInput>
      </div>
    </div>
  )
}

/**
 * Size variations for ChipInput.Option
 */
export const Sizes = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <>
      <div className='mb-2 font-semibold'>Small (default)</div>
      <ChipInput name='sizes-sm' value={value} onChange={setValue} size='sm'>
        <ChipInput.Option value='sm'>Small</ChipInput.Option>
        <ChipInput.Option value='md'>Medium</ChipInput.Option>
        <ChipInput.Option value='lg'>Large</ChipInput.Option>
      </ChipInput>
      <div className='mb-2 font-semibold mt-4'>Medium</div>
      <ChipInput name='sizes-md' value={value} onChange={setValue} size='md'>
        <ChipInput.Option value='sm'>Small</ChipInput.Option>
        <ChipInput.Option value='md'>Medium</ChipInput.Option>
        <ChipInput.Option value='lg'>Large</ChipInput.Option>
      </ChipInput>
      <div className='mb-2 font-semibold mt-4'>Large</div>
      <ChipInput name='sizes-lg' value={value} onChange={setValue} size='lg'>
        <ChipInput.Option value='sm'>Small</ChipInput.Option>
        <ChipInput.Option value='md'>Medium</ChipInput.Option>
        <ChipInput.Option value='lg'>Large</ChipInput.Option>
      </ChipInput>
    </>
  )
}

/**
 * Custom and default check icon variations for ChipInput.Option
 */
export const CheckIcon = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <div className='mb-2 font-semibold'>Custom Check Icon</div>
        <ChipInput name='custom-check' value={value} onChange={setValue}>
          <ChipInput.Option
            value='star'
            check={<Star size={16} className='text-warning' />}
          >
            Star
          </ChipInput.Option>
          <ChipInput.Option
            value='circle'
            check={<CheckCircle size={16} className='text-success' />}
          >
            Circle
          </ChipInput.Option>
        </ChipInput>
      </div>
      <div>
        <div className='mb-2 font-semibold'>No Check Icon</div>
        <ChipInput name='no-check' value={value} onChange={setValue}>
          <ChipInput.Option value='x'>No Check A</ChipInput.Option>
          <ChipInput.Option value='y'>No Check B</ChipInput.Option>
        </ChipInput>
      </div>
      <div>
        <div className='mb-2 font-semibold'>
          Default Check Icon (set defaultCheck)
        </div>
        <ChipInput name='default-check' value={value} onChange={setValue}>
          <ChipInput.Option value='z' defaultCheck>
            Default Check
          </ChipInput.Option>
        </ChipInput>
      </div>
    </div>
  )
}
