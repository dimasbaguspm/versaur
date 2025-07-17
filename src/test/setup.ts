import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Mock scrollIntoView for jsdom environment
window.HTMLElement.prototype.scrollIntoView = function () {}

// extends Vitest's expect method with methods from react-testing-library
expect.extend({})

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
