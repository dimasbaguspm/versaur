import { formatPinValue, isDigit, isValidPinValue } from '../helpers'

describe('PinField helpers', () => {
  describe('isDigit', () => {
    it('returns true for single digits', () => {
      expect(isDigit('0')).toBe(true)
      expect(isDigit('5')).toBe(true)
      expect(isDigit('9')).toBe(true)
    })

    it('returns false for non-digits', () => {
      expect(isDigit('a')).toBe(false)
      expect(isDigit('!')).toBe(false)
      expect(isDigit(' ')).toBe(false)
      expect(isDigit('')).toBe(false)
      expect(isDigit('12')).toBe(false)
    })
  })

  describe('isValidPinValue', () => {
    it('returns true for valid pin values', () => {
      expect(isValidPinValue('')).toBe(true)
      expect(isValidPinValue('1')).toBe(true)
      expect(isValidPinValue('123')).toBe(true)
      expect(isValidPinValue('123456')).toBe(true)
    })

    it('returns false for invalid pin values', () => {
      expect(isValidPinValue('1234567')).toBe(false)
      expect(isValidPinValue('12a456')).toBe(false)
      expect(isValidPinValue('12 456')).toBe(false)
    })
  })

  describe('formatPinValue', () => {
    it('removes non-digit characters', () => {
      expect(formatPinValue('12a34b')).toBe('1234')
      expect(formatPinValue('1 2 3 4')).toBe('1234')
      expect(formatPinValue('12!@#34')).toBe('1234')
    })

    it('limits to 6 characters', () => {
      expect(formatPinValue('1234567890')).toBe('123456')
      expect(formatPinValue('12345')).toBe('12345')
      expect(formatPinValue('123456')).toBe('123456')
    })

    it('handles empty string', () => {
      expect(formatPinValue('')).toBe('')
    })

    it('handles mixed content', () => {
      expect(formatPinValue('a1b2c3d4e5f6g7')).toBe('123456')
    })
  })
})
