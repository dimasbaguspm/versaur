import {
  formatPinValue,
  isDigit,
  pinInputClassName,
  pinInputErrorClassName,
} from '../helpers'

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

  describe('formatPinValue', () => {
    it('removes non-digit characters', () => {
      expect(formatPinValue('12a34b', 6)).toBe('1234')
      expect(formatPinValue('1 2 3 4', 6)).toBe('1234')
      expect(formatPinValue('12!@#34', 6)).toBe('1234')
    })

    it('limits to specified max length', () => {
      expect(formatPinValue('1234567890', 6)).toBe('123456')
      expect(formatPinValue('12345', 6)).toBe('12345')
      expect(formatPinValue('123456', 6)).toBe('123456')
      expect(formatPinValue('123456', 4)).toBe('1234')
      expect(formatPinValue('12345678', 8)).toBe('12345678')
    })

    it('handles empty string', () => {
      expect(formatPinValue('', 6)).toBe('')
    })

    it('handles mixed content', () => {
      expect(formatPinValue('a1b2c3d4e5f6g7', 6)).toBe('123456')
      expect(formatPinValue('a1b2c3d4e5f6g7', 4)).toBe('1234')
    })
  })

  describe('pinInputClassName', () => {
    it('exports base className string', () => {
      expect(typeof pinInputClassName).toBe('string')
      expect(pinInputClassName).toContain('w-9')
      expect(pinInputClassName).toContain('h-9')
      expect(pinInputClassName).toContain('border-primary')
    })
  })

  describe('pinInputErrorClassName', () => {
    it('exports error className string', () => {
      expect(typeof pinInputErrorClassName).toBe('string')
      expect(pinInputErrorClassName).toContain('w-9')
      expect(pinInputErrorClassName).toContain('h-9')
      expect(pinInputErrorClassName).toContain('border-danger')
    })
  })
})
