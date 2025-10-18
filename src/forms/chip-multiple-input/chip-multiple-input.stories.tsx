/**
 * ChipMultipleInput Stories
 *
 * Multiple-select chip group using checkbox input pattern
 */
import { useState } from 'react'
import { Star, Heart, Sparkles } from 'lucide-react'
import { ChipMultipleInput } from './chip-multiple-input'
import { Icon } from '@/primitive'

export default {
  title: 'Forms/ChipMultipleInput',
  component: ChipMultipleInput,
  tags: ['autodocs'],
}

/**
 * Basic usage with label and controlled state
 */
export const Basic = () => {
  const [value, setValue] = useState<string[]>(['banana'])
  return (
    <ChipMultipleInput
      name='fruits'
      value={value}
      onChange={setValue}
      label='Select fruits'
    >
      <ChipMultipleInput.Option value='apple'>Apple</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='banana'>Banana</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='cherry'>Cherry</ChipMultipleInput.Option>
    </ChipMultipleInput>
  )
}

/**
 * Size variations matching button component
 */
export const Sizes = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <div className='flex flex-col gap-6'>
      <ChipMultipleInput
        name='size-sm'
        value={value}
        onChange={setValue}
        size='sm'
        label='Small'
      >
        <ChipMultipleInput.Option value='a'>Option A</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='b'>Option B</ChipMultipleInput.Option>
      </ChipMultipleInput>

      <ChipMultipleInput
        name='size-md'
        value={value}
        onChange={setValue}
        size='md'
        label='Medium (default)'
      >
        <ChipMultipleInput.Option value='c'>Option C</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='d'>Option D</ChipMultipleInput.Option>
      </ChipMultipleInput>

      <ChipMultipleInput
        name='size-lg'
        value={value}
        onChange={setValue}
        size='lg'
        label='Large'
      >
        <ChipMultipleInput.Option value='e'>Option E</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='f'>Option F</ChipMultipleInput.Option>
      </ChipMultipleInput>
    </div>
  )
}

/**
 * States: disabled and readOnly
 */
export const States = () => {
  const [value1, setValue1] = useState<string[]>(['b'])
  const [value2, setValue2] = useState<string[]>(['c', 'd'])
  return (
    <div className='flex flex-col gap-6'>
      <ChipMultipleInput
        name='disabled'
        value={value1}
        onChange={setValue1}
        disabled
        label='Disabled'
      >
        <ChipMultipleInput.Option value='a'>Option A</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='b'>Option B</ChipMultipleInput.Option>
      </ChipMultipleInput>

      <ChipMultipleInput
        name='readonly'
        value={value2}
        onChange={setValue2}
        readOnly
        label='Read-only'
      >
        <ChipMultipleInput.Option value='c'>Option C</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='d'>Option D</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='e'>Option E</ChipMultipleInput.Option>
      </ChipMultipleInput>
    </div>
  )
}

/**
 * Icon-only chips with aria-label for accessibility
 */
export const IconOnly = () => {
  const [value, setValue] = useState<string[]>(['heart'])
  return (
    <ChipMultipleInput
      name='icons'
      value={value}
      onChange={setValue}
      label='Select icons'
    >
      <ChipMultipleInput.Option value='star' aria-label='Star'>
        <Icon as={Star} color='inherit' size='sm' />
      </ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='heart' aria-label='Heart'>
        <Icon as={Heart} color='inherit' size='sm' />
      </ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='sparkles' aria-label='Sparkles'>
        <Icon as={Sparkles} color='inherit' size='sm' />
      </ChipMultipleInput.Option>
    </ChipMultipleInput>
  )
}

/**
 * With icons and text
 */
export const WithIcons = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <ChipMultipleInput
      name='with-icons'
      value={value}
      onChange={setValue}
      label='Choose your favorites'
    >
      <ChipMultipleInput.Option value='star'>
        <Icon as={Star} color='inherit' size='sm' />
        Star
      </ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='heart'>
        <Icon as={Heart} color='inherit' size='sm' />
        Heart
      </ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='sparkles'>
        <Icon as={Sparkles} color='inherit' size='sm' />
        Sparkles
      </ChipMultipleInput.Option>
    </ChipMultipleInput>
  )
}

/**
 * Text truncation with maxWidth
 */
export const Truncation = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <ChipMultipleInput
      name='truncation'
      value={value}
      onChange={setValue}
      maxWidth='120px'
      label='With maxWidth (120px)'
    >
      <ChipMultipleInput.Option value='short'>Short</ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='long'>
        Very Long Text That Will Be Truncated
      </ChipMultipleInput.Option>
      <ChipMultipleInput.Option value='longer'>
        Even Longer Text That Definitely Gets Truncated
      </ChipMultipleInput.Option>
    </ChipMultipleInput>
  )
}

/**
 * Required field with asterisk, error and helper text
 */
export const WithValidation = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <div className='flex flex-col gap-6'>
      <ChipMultipleInput
        name='required'
        value={value}
        onChange={setValue}
        label='Required field'
        required
        error={
          value.length === 0 ? 'Please select at least one option' : undefined
        }
      >
        <ChipMultipleInput.Option value='a'>Option A</ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='b'>Option B</ChipMultipleInput.Option>
      </ChipMultipleInput>

      <ChipMultipleInput
        name='helper'
        value={value}
        onChange={setValue}
        label='With helper text'
        helperText='Choose all options that apply to you'
      >
        <ChipMultipleInput.Option value='beginner'>
          Beginner
        </ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='intermediate'>
          Intermediate
        </ChipMultipleInput.Option>
        <ChipMultipleInput.Option value='advanced'>
          Advanced
        </ChipMultipleInput.Option>
      </ChipMultipleInput>
    </div>
  )
}
