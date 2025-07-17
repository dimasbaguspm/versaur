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
  title: 'Form/ChipInput',
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
