/**
 * ChipSingleInput Stories
 *
 * Single-select chip group using radio input pattern
 */
import { useState } from 'react'
import { Star, Heart, Sparkles } from 'lucide-react'
import { ChipSingleInput } from './chip-single-input'
import { Icon } from '@/primitive'

export default {
  title: 'Forms/ChipSingleInput',
  component: ChipSingleInput,
  tags: ['autodocs'],
}

/**
 * Basic usage with label and controlled state
 */
export const Basic = () => {
  const [value, setValue] = useState<string>('banana')
  return (
    <ChipSingleInput
      name='fruits'
      value={value}
      onChange={setValue}
      label='Select a fruit'
    >
      <ChipSingleInput.Option value='apple'>Apple</ChipSingleInput.Option>
      <ChipSingleInput.Option value='banana'>Banana</ChipSingleInput.Option>
      <ChipSingleInput.Option value='cherry'>Cherry</ChipSingleInput.Option>
    </ChipSingleInput>
  )
}

/**
 * Size variations matching button component
 */
export const Sizes = () => {
  const [value, setValue] = useState<string>()
  return (
    <div className='flex flex-col gap-6'>
      <ChipSingleInput
        name='size-sm'
        value={value}
        onChange={setValue}
        size='sm'
        label='Small'
      >
        <ChipSingleInput.Option value='a'>Option A</ChipSingleInput.Option>
        <ChipSingleInput.Option value='b'>Option B</ChipSingleInput.Option>
      </ChipSingleInput>

      <ChipSingleInput
        name='size-md'
        value={value}
        onChange={setValue}
        size='md'
        label='Medium (default)'
      >
        <ChipSingleInput.Option value='c'>Option C</ChipSingleInput.Option>
        <ChipSingleInput.Option value='d'>Option D</ChipSingleInput.Option>
      </ChipSingleInput>

      <ChipSingleInput
        name='size-lg'
        value={value}
        onChange={setValue}
        size='lg'
        label='Large'
      >
        <ChipSingleInput.Option value='e'>Option E</ChipSingleInput.Option>
        <ChipSingleInput.Option value='f'>Option F</ChipSingleInput.Option>
      </ChipSingleInput>
    </div>
  )
}

/**
 * States: disabled and readOnly
 */
export const States = () => {
  const [value1, setValue1] = useState<string>('b')
  const [value2, setValue2] = useState<string>('d')
  return (
    <div className='flex flex-col gap-6'>
      <ChipSingleInput
        name='disabled'
        value={value1}
        onChange={setValue1}
        disabled
        label='Disabled'
      >
        <ChipSingleInput.Option value='a'>Option A</ChipSingleInput.Option>
        <ChipSingleInput.Option value='b'>Option B</ChipSingleInput.Option>
      </ChipSingleInput>

      <ChipSingleInput
        name='readonly'
        value={value2}
        onChange={setValue2}
        readOnly
        label='Read-only'
      >
        <ChipSingleInput.Option value='c'>Option C</ChipSingleInput.Option>
        <ChipSingleInput.Option value='d'>Option D</ChipSingleInput.Option>
      </ChipSingleInput>
    </div>
  )
}

/**
 * Icon-only chips with aria-label for accessibility
 */
export const IconOnly = () => {
  const [value, setValue] = useState<string>('heart')
  return (
    <ChipSingleInput
      name='icons'
      value={value}
      onChange={setValue}
      label='Select icon'
    >
      <ChipSingleInput.Option value='star' aria-label='Star'>
        <Icon as={Star} color='inherit' size='sm' />
      </ChipSingleInput.Option>
      <ChipSingleInput.Option value='heart' aria-label='Heart'>
        <Icon as={Heart} color='inherit' size='sm' />
      </ChipSingleInput.Option>
      <ChipSingleInput.Option value='sparkles' aria-label='Sparkles'>
        <Icon as={Sparkles} color='inherit' size='sm' />
      </ChipSingleInput.Option>
    </ChipSingleInput>
  )
}

/**
 * With icons and text
 */
export const WithIcons = () => {
  const [value, setValue] = useState<string>()
  return (
    <ChipSingleInput
      name='with-icons'
      value={value}
      onChange={setValue}
      label='Choose your favorite'
    >
      <ChipSingleInput.Option value='star'>
        <Icon as={Star} color='inherit' size='sm' />
        Star
      </ChipSingleInput.Option>
      <ChipSingleInput.Option value='heart'>
        <Icon as={Heart} color='inherit' size='sm' />
        Heart
      </ChipSingleInput.Option>
      <ChipSingleInput.Option value='sparkles'>
        <Icon as={Sparkles} color='inherit' size='sm' />
        Sparkles
      </ChipSingleInput.Option>
    </ChipSingleInput>
  )
}

/**
 * Text truncation with maxWidth
 */
export const Truncation = () => {
  const [value, setValue] = useState<string>()
  return (
    <ChipSingleInput
      name='truncation'
      value={value}
      onChange={setValue}
      maxWidth='120px'
      label='With maxWidth (120px)'
    >
      <ChipSingleInput.Option value='short'>Short</ChipSingleInput.Option>
      <ChipSingleInput.Option value='long'>
        Very Long Text That Will Be Truncated
      </ChipSingleInput.Option>
      <ChipSingleInput.Option value='longer'>
        Even Longer Text That Definitely Gets Truncated
      </ChipSingleInput.Option>
    </ChipSingleInput>
  )
}

/**
 * Required field with asterisk, error and helper text
 */
export const WithValidation = () => {
  const [value, setValue] = useState<string>()
  return (
    <div className='flex flex-col gap-6'>
      <ChipSingleInput
        name='required'
        value={value}
        onChange={setValue}
        label='Required field'
        required
        error={!value ? 'Please select an option' : undefined}
      >
        <ChipSingleInput.Option value='a'>Option A</ChipSingleInput.Option>
        <ChipSingleInput.Option value='b'>Option B</ChipSingleInput.Option>
      </ChipSingleInput>

      <ChipSingleInput
        name='helper'
        value={value}
        onChange={setValue}
        label='With helper text'
        helperText='Choose the option that best fits your needs'
      >
        <ChipSingleInput.Option value='beginner'>
          Beginner
        </ChipSingleInput.Option>
        <ChipSingleInput.Option value='advanced'>
          Advanced
        </ChipSingleInput.Option>
      </ChipSingleInput>
    </div>
  )
}
