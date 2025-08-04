import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Mock scrollIntoView for jsdom environment
window.HTMLElement.prototype.scrollIntoView = function () {}

// extends Vitest's expect method with methods from react-testing-library
expect.extend({})

const MOCK_DATE = new Date('2025-07-01T00:00:00Z')

vi.stubGlobal(
  'Date',
  class extends Date {
    constructor(...args: unknown[]) {
      if (args.length === 0) {
        super(MOCK_DATE.toISOString())
      } else {
        super(...(args as [string | number | Date]))
      }
    }
    static now() {
      return MOCK_DATE.getTime()
    }
  }
)

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
