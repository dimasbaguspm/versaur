import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { composeStories } from '@storybook/react'
import * as stories from '../price-input.stories'
import {
  isValidRupiahFormat,
  sanitizeRupiahInput,
  parseRupiahToNumber,
  formatNumberToRupiah,
} from '../helpers'

describe('PriceInput', () => {
  const { Default, WithError } = composeStories(stories)

  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Rupiah format validation', () => {
    it('accepts valid Rupiah formats', () => {
      const handleChange = vi.fn()
      render(<Default onChange={handleChange} />)
      const input = screen.getByLabelText(/amount/i)

      // Valid formats
      const validInputs = ['10000', '10.000', '10.000,50', '1.000.000,99']
      validInputs.forEach(value => {
        fireEvent.change(input, { target: { value } })
        expect(input).toHaveValue(value)
        expect(handleChange).toHaveBeenCalledWith(value)
      })
    })
  })

  it('shows error state', () => {
    render(<WithError />)
    expect(screen.getByText(/invalid price/i)).toBeInTheDocument()
  })

  describe('onChange behavior with various Rupiah formats', () => {
    it('passes correct values for basic number formats', () => {
      const handleChange = vi.fn()
      render(<Default onChange={handleChange} />)
      const input = screen.getByLabelText(/amount/i)

      const testCases = [
        { input: '1', expected: '1' },
        { input: '10', expected: '10' },
        { input: '100', expected: '100' },
        { input: '1000', expected: '1000' },
        { input: '10000', expected: '10000' },
        { input: '100000', expected: '100000' },
        { input: '1000000', expected: '1000000' },
      ]

      testCases.forEach(({ input: inputValue, expected }) => {
        handleChange.mockClear()
        fireEvent.change(input, { target: { value: inputValue } })
        expect(handleChange).toHaveBeenCalledWith(expected)
        expect(input).toHaveValue(expected)
      })
    })

    it('passes correct values for thousands separator formats', () => {
      const handleChange = vi.fn()
      render(<Default onChange={handleChange} />)
      const input = screen.getByLabelText(/amount/i)

      const testCases = [
        { input: '10.000', expected: '10.000' },
        { input: '100.000', expected: '100.000' },
        { input: '1.000.000', expected: '1.000.000' },
        { input: '10.000.000', expected: '10.000.000' },
      ]

      testCases.forEach(({ input: inputValue, expected }) => {
        handleChange.mockClear()
        fireEvent.change(input, { target: { value: inputValue } })
        expect(handleChange).toHaveBeenCalledWith(expected)
        expect(input).toHaveValue(expected)
      })
    })

    it('passes correct values for decimal formats', () => {
      const handleChange = vi.fn()
      render(<Default onChange={handleChange} />)
      const input = screen.getByLabelText(/amount/i)

      const testCases = [
        { input: '10000,5', expected: '10000,5' },
        { input: '10000,50', expected: '10000,50' },
        { input: '10.000,5', expected: '10.000,5' },
        { input: '10.000,50', expected: '10.000,50' },
        { input: '1.000.000,99', expected: '1.000.000,99' },
        { input: '0,59', expected: '0,59' },
      ]

      testCases.forEach(({ input: inputValue, expected }) => {
        handleChange.mockClear()
        fireEvent.change(input, { target: { value: inputValue } })
        expect(handleChange).toHaveBeenCalledWith(expected)
        expect(input).toHaveValue(expected)
      })
    })

    it('passes correct values for intermediate typing states', () => {
      const handleChange = vi.fn()
      render(<Default onChange={handleChange} />)
      const input = screen.getByLabelText(/amount/i)

      // Test typing "1.000.000,59" step by step
      const typingSequence = [
        { input: '1', expected: '1' },
        { input: '1.', expected: '1.' },
        { input: '1.0', expected: '1.0' },
        { input: '1.00', expected: '1.00' },
        { input: '1.000', expected: '1.000' },
        { input: '1.000.', expected: '1.000.' },
        { input: '1.000.0', expected: '1.000.0' },
        { input: '1.000.00', expected: '1.000.00' },
        { input: '1.000.000', expected: '1.000.000' },
        { input: '1.000.000,', expected: '1.000.000,' },
        { input: '1.000.000,5', expected: '1.000.000,5' },
        { input: '1.000.000,59', expected: '1.000.000,59' },
      ]

      typingSequence.forEach(({ input: inputValue, expected }) => {
        handleChange.mockClear()
        fireEvent.change(input, { target: { value: inputValue } })
        expect(handleChange).toHaveBeenCalledWith(expected)
        expect(input).toHaveValue(expected)
      })
    })

    it('rejects inputs that start with separators', () => {
      const handleChange = vi.fn()
      render(<Default onChange={handleChange} />)
      const input = screen.getByLabelText(/amount/i)

      // These should now be rejected since we don't allow starting with separators
      const testCases = [
        { input: ',', expected: null },
        { input: ',5', expected: null },
        { input: ',59', expected: null },
        { input: '.59', expected: null },
      ]

      // First set a valid value
      fireEvent.change(input, { target: { value: '10000' } })
      expect(input).toHaveValue('10000')

      testCases.forEach(({ input: inputValue }) => {
        handleChange.mockClear()
        fireEvent.change(input, { target: { value: inputValue } })
        // These should be rejected and not call onChange
        expect(handleChange).not.toHaveBeenCalled()
        expect(input).toHaveValue('10000') // Should keep previous valid value
      })
    })

    it('handles input sanitization and passes sanitized values', () => {
      const handleChange = vi.fn()
      render(<Default onChange={handleChange} />)
      const input = screen.getByLabelText(/amount/i)

      const testCases = [
        { input: '10abc000', expected: '10000' },
        { input: '10.000$', expected: '10.000' },
        { input: 'Rp 10.000,50', expected: '10.000,50' },
        { input: '10...000', expected: '10.000' },
        { input: '10..000', expected: '10.000' },
        { input: '10,50,75', expected: '1050,75' },
      ]

      testCases.forEach(({ input: inputValue, expected }) => {
        handleChange.mockClear()
        fireEvent.change(input, { target: { value: inputValue } })
        expect(handleChange).toHaveBeenCalledWith(expected)
        expect(input).toHaveValue(expected)
      })
    })

    it('rejects invalid formats and does not call onChange', () => {
      const handleChange = vi.fn()
      render(<Default onChange={handleChange} />)
      const input = screen.getByLabelText(/amount/i)

      // Set initial valid value
      fireEvent.change(input, { target: { value: '10000' } })
      expect(input).toHaveValue('10000')
      handleChange.mockClear()

      // These should be rejected after sanitization and validation
      const invalidInputs = [
        '.000', // starts with dot
        ',59', // starts with comma
        '.59', // starts with dot
        ',', // just comma
        '.', // just dot
        '10.0000', // more than 3 digits in thousands segment
      ]

      invalidInputs.forEach(inputValue => {
        fireEvent.change(input, { target: { value: inputValue } })
        expect(input).toHaveValue('10000') // Should keep previous valid value
        expect(handleChange).not.toHaveBeenCalled()
      })
    })

    it('rejects negative values when not allowed', () => {
      const handleChange = vi.fn()
      render(<Default allowNegative={false} onChange={handleChange} />)
      const input = screen.getByLabelText(/amount/i)

      // Set initial valid value
      fireEvent.change(input, { target: { value: '10000' } })
      expect(input).toHaveValue('10000')
      handleChange.mockClear()

      // Negative values should be sanitized to positive
      const testCases = [
        { input: '-10000', expected: '10000' },
        { input: '-10.000,50', expected: '10.000,50' },
      ]

      testCases.forEach(({ input: inputValue, expected }) => {
        fireEvent.change(input, { target: { value: inputValue } })
        expect(handleChange).toHaveBeenCalledWith(expected)
        expect(input).toHaveValue(expected)
      })
    })
  })
})

describe('Rupiah helpers', () => {
  describe('isValidRupiahFormat', () => {
    it('validates correct Rupiah formats', () => {
      const validFormats = [
        '',
        '0',
        '10',
        '100',
        '1000',
        '10000',
        '10.000',
        '100.000',
        '1.000.000',
        '10.000,5',
        '10.000,50',
        '1.000.000,99',
        '0,59',
        // Intermediate typing states
        '10.',
        '1.000.',
        '1.000.000,',
        '10.0',
        '1.000.0',
      ]

      validFormats.forEach(format => {
        expect(isValidRupiahFormat(format)).toBe(true)
      })
    })

    it('rejects invalid Rupiah formats', () => {
      const invalidFormats = [
        '.000', // starts with dot
        ',59', // starts with comma
        '.59', // starts with dot
        ',', // just comma
        '.', // just dot
        '10..000', // consecutive dots
        '10...1', // multiple consecutive dots
        '10,1,1', // multiple commas
        '10,,1', // consecutive commas
        // '10.000.00', // decimal should use comma, not dot
        '10.000,123', // more than 2 decimal digits
        '10.0000', // more than 3 digits in thousands segment
      ]

      invalidFormats.forEach(format => {
        expect(isValidRupiahFormat(format)).toBe(false)
      })
    })

    it('handles negative values when allowed', () => {
      expect(isValidRupiahFormat('-', true)).toBe(true)
      expect(isValidRupiahFormat('-10000', true)).toBe(true)
      expect(isValidRupiahFormat('-10.000,50', true)).toBe(true)

      expect(isValidRupiahFormat('-', false)).toBe(false)
      expect(isValidRupiahFormat('-10000', false)).toBe(false)
    })
  })

  describe('sanitizeRupiahInput', () => {
    it('removes invalid characters', () => {
      expect(sanitizeRupiahInput('10abc000')).toBe('10000')
      expect(sanitizeRupiahInput('10.000$')).toBe('10.000')
      expect(sanitizeRupiahInput('Rp 10.000,50')).toBe('10.000,50')
    })

    it('handles multiple commas correctly', () => {
      expect(sanitizeRupiahInput('10,50,75')).toBe('1050,75')
      expect(sanitizeRupiahInput('10,1,1')).toBe('101,1')
    })

    it('removes consecutive dots', () => {
      expect(sanitizeRupiahInput('10...000')).toBe('10.000')
      expect(sanitizeRupiahInput('10..000')).toBe('10.000')
    })
  })

  describe('parseRupiahToNumber', () => {
    it('converts Rupiah format to number', () => {
      expect(parseRupiahToNumber('10000')).toBe(10000)
      expect(parseRupiahToNumber('10.000')).toBe(10000)
      expect(parseRupiahToNumber('10.000,50')).toBe(10000.5)
      expect(parseRupiahToNumber('1.000.000,99')).toBe(1000000.99)
    })

    it('handles negative values', () => {
      expect(parseRupiahToNumber('-10.000,50')).toBe(-10000.5)
    })

    it('handles empty and invalid inputs', () => {
      expect(parseRupiahToNumber('')).toBe(0)
      expect(parseRupiahToNumber('-')).toBe(0)
    })
  })

  describe('formatNumberToRupiah', () => {
    it('formats number to Rupiah display format', () => {
      expect(formatNumberToRupiah(10000)).toBe('10.000')
      expect(formatNumberToRupiah(10000.5)).toBe('10.000,5')
      expect(formatNumberToRupiah(1000000.99)).toBe('1.000.000,99')
    })

    it('handles negative values', () => {
      expect(formatNumberToRupiah(-10000.5)).toBe('-10.000,5')
    })

    it('handles zero', () => {
      expect(formatNumberToRupiah(0)).toBe('')
    })
  })
})
