/**
 * ChipSingleInput Option shape, size, and custom check stories
 *
 * Demonstrates the new shape, size, and check icon API for ChipSingleInput.Option
 */

import { CheckCircle, Star } from 'lucide-react'

/**
 * ChipSingleInput group stories
 *
 * Demonstrates usage of ChipSingleInput for multiple selection using checkbox pattern
 * Includes accessibility and variant examples
 */
import { useState } from 'react'
import { ChipSingleInput } from './chip-single-input'
import type { ChipSingleInputProps } from './types'
import { Icon } from '@/primitive'

export default {
  title: 'Forms/ChipSingleInput',
  component: ChipSingleInput,
  tags: ['autodocs'],
}

export const Basic = () => {
  const [value, setValue] = useState<string>('cherry')
  return (
    <ChipSingleInput
      name='fruits'
      variant='primary'
      value={value}
      onChange={setValue}
      aria-label='Select fruits'
    >
      <ChipSingleInput.Option value='apple'>Apple</ChipSingleInput.Option>
      <ChipSingleInput.Option value='banana'>Banana</ChipSingleInput.Option>
      <ChipSingleInput.Option value='cherry'>Cherry</ChipSingleInput.Option>
    </ChipSingleInput>
  )
}

export const Disabled = () => {
  const [value, setValue] = useState<string>('banana')
  return (
    <ChipSingleInput
      name='fruits'
      value={value}
      onChange={setValue}
      disabled
      aria-label='Select fruits'
    >
      <ChipSingleInput.Option value='apple'>Apple</ChipSingleInput.Option>
      <ChipSingleInput.Option value='banana'>Banana</ChipSingleInput.Option>
      <ChipSingleInput.Option value='cherry'>Cherry</ChipSingleInput.Option>
    </ChipSingleInput>
  )
}

export const Variants = () => {
  const [value, setValue] = useState<string>()
  const variants = ['primary', 'secondary', 'tertiary', 'ghost']
  const labels = ['Coral', 'Sage', 'Mist', 'Slate']
  return (
    <div className='flex flex-wrap gap-3'>
      {variants.map((variant, i) => (
        <ChipSingleInput
          key={variant}
          name={variant}
          value={value}
          onChange={setValue}
          variant={variant as ChipSingleInputProps['variant']}
        >
          <ChipSingleInput.Option value={variant}>
            {labels[i]}
          </ChipSingleInput.Option>
        </ChipSingleInput>
      ))}
    </div>
  )
}

/**
 * Shape variations for ChipSingleInput.Option
 */
export const Shape = () => {
  const [value, setValue] = useState<string>()
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <div className='mb-2 font-semibold'>Circle (default)</div>
        <ChipSingleInput
          name='circle-shape'
          value={value}
          onChange={setValue}
          shape='circle'
        >
          <ChipSingleInput.Option value='a'>Circle A</ChipSingleInput.Option>
          <ChipSingleInput.Option value='b'>Circle B</ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
      <div>
        <div className='mb-2 font-semibold'>Rounded</div>
        <ChipSingleInput
          name='rounded-shape'
          value={value}
          onChange={setValue}
          shape='rounded'
        >
          <ChipSingleInput.Option value='c'>Rounded C</ChipSingleInput.Option>
          <ChipSingleInput.Option value='d'>Rounded D</ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
    </div>
  )
}

/**
 * Size variations for ChipSingleInput.Option
 */
export const Sizes = () => {
  const [value, setValue] = useState<string>()
  return (
    <>
      <div className='mb-2 font-semibold'>Small (default)</div>
      <ChipSingleInput
        name='sizes-sm'
        value={value}
        onChange={setValue}
        size='sm'
      >
        <ChipSingleInput.Option value='sm'>Small</ChipSingleInput.Option>
        <ChipSingleInput.Option value='md'>Medium</ChipSingleInput.Option>
        <ChipSingleInput.Option value='lg'>Large</ChipSingleInput.Option>
      </ChipSingleInput>
      <div className='mb-2 font-semibold mt-4'>Medium</div>
      <ChipSingleInput
        name='sizes-md'
        value={value}
        onChange={setValue}
        size='md'
      >
        <ChipSingleInput.Option value='sm'>Small</ChipSingleInput.Option>
        <ChipSingleInput.Option value='md'>Medium</ChipSingleInput.Option>
        <ChipSingleInput.Option value='lg'>Large</ChipSingleInput.Option>
      </ChipSingleInput>
      <div className='mb-2 font-semibold mt-4'>Large</div>
      <ChipSingleInput
        name='sizes-lg'
        value={value}
        onChange={setValue}
        size='lg'
      >
        <ChipSingleInput.Option value='sm'>Small</ChipSingleInput.Option>
        <ChipSingleInput.Option value='md'>Medium</ChipSingleInput.Option>
        <ChipSingleInput.Option value='lg'>Large</ChipSingleInput.Option>
      </ChipSingleInput>
    </>
  )
}

/**
 * Custom and default check icon variations for ChipSingleInput.Option
 */
export const CheckIcon = () => {
  const [value, setValue] = useState<string>()
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <div className='mb-2 font-semibold'>Custom Check Icon</div>
        <ChipSingleInput
          name='custom-check'
          value={value}
          onChange={setValue}
          variant={value === 'circle' ? 'primary' : 'secondary'}
        >
          <ChipSingleInput.Option value='star'>
            <Icon as={Star} color='inherit' size='sm' />
            Star
          </ChipSingleInput.Option>
          <ChipSingleInput.Option value='circle'>
            <Icon as={CheckCircle} color='inherit' size='sm' />
            Circle
          </ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
      <div>
        <div className='mb-2 font-semibold'>No Check Icon</div>
        <ChipSingleInput name='no-check' value={value} onChange={setValue}>
          <ChipSingleInput.Option value='x'>No Check A</ChipSingleInput.Option>
          <ChipSingleInput.Option value='y'>No Check B</ChipSingleInput.Option>
        </ChipSingleInput>
      </div>
    </div>
  )
}
