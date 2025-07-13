/**
 * ChipInput group stories
 *
 * Demonstrates usage of ChipInput for multiple selection using checkbox pattern
 * Includes accessibility and variant examples
 */
import { useState } from 'react'
import { ChipInput } from './chip-input'

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
  return (
    <ChipInput
      name='colors'
      value={value}
      onChange={setValue}
      aria-label='Select colors'
      variant='secondary'
      size='lg'
    >
      <ChipInput.Option value='red'>Red</ChipInput.Option>
      <ChipInput.Option value='green'>Green</ChipInput.Option>
      <ChipInput.Option value='blue'>Blue</ChipInput.Option>
    </ChipInput>
  )
}

export const SemanticVariants = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <div className='flex flex-col gap-4'>
      <ChipInput
        name='success'
        value={value}
        onChange={setValue}
        variant='success'
      >
        <ChipInput.Option value='done'>Success</ChipInput.Option>
      </ChipInput>
      <ChipInput name='info' value={value} onChange={setValue} variant='info'>
        <ChipInput.Option value='info'>Info</ChipInput.Option>
      </ChipInput>
      <ChipInput
        name='warning'
        value={value}
        onChange={setValue}
        variant='warning'
      >
        <ChipInput.Option value='warn'>Warning</ChipInput.Option>
      </ChipInput>
      <ChipInput
        name='danger'
        value={value}
        onChange={setValue}
        variant='danger'
      >
        <ChipInput.Option value='danger'>Danger</ChipInput.Option>
      </ChipInput>
    </div>
  )
}

export const MixedVariants = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <div className='flex flex-wrap gap-2'>
      <ChipInput
        name='mixed'
        value={value}
        onChange={setValue}
        variant='primary'
      >
        <ChipInput.Option value='coral'>Coral</ChipInput.Option>
      </ChipInput>
      <ChipInput
        name='mixed'
        value={value}
        onChange={setValue}
        variant='secondary'
      >
        <ChipInput.Option value='sage'>Sage</ChipInput.Option>
      </ChipInput>
      <ChipInput
        name='mixed'
        value={value}
        onChange={setValue}
        variant='tertiary'
      >
        <ChipInput.Option value='mist'>Mist</ChipInput.Option>
      </ChipInput>
      <ChipInput name='mixed' value={value} onChange={setValue} variant='ghost'>
        <ChipInput.Option value='slate'>Slate</ChipInput.Option>
      </ChipInput>
      <ChipInput
        name='mixed'
        value={value}
        onChange={setValue}
        variant='neutral'
      >
        <ChipInput.Option value='gray'>Gray</ChipInput.Option>
      </ChipInput>
    </div>
  )
}
