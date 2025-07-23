import { useCallback, useEffect, useRef, useState } from 'react'

export interface UseCalculatorOptions {
  initialValue?: string | number
  disabled?: boolean
  onChange?: (value: string) => void
}

export function useCalculator({
  initialValue = '',
  disabled,
  onChange,
}: UseCalculatorOptions) {
  const [input, setInput] = useState<string>(String(initialValue))
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setInput(String(initialValue))
  }, [initialValue])

  const evaluate = useCallback((expr: string): string => {
    try {
      if (!/^[-+*/.\d\s]+$/.test(expr)) return ''

      const result = eval(expr)
      return result?.toString() ?? ''
    } catch {
      return ''
    }
  }, [])

  const handleButton = useCallback(
    (val: string) => {
      if (disabled) return
      if (val === 'C') {
        setInput('')
      } else if (val === '⌫') {
        setInput(prev => {
          const next = prev.slice(0, -1)

          return next
        })
      } else if (val === '=') {
        const result = evaluate(input)
        setInput(result)
      } else {
        setInput(prev => {
          const next = prev + val
          return next
        })
      }
    },
    [disabled, input, evaluate]
  )

  useEffect(() => {
    if (onChange) {
      const result = evaluate(input)
      onChange(result)
    }
  }, [evaluate, input, onChange])

  // Keyboard interaction for all keypads
  useEffect(() => {
    if (disabled) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement !== inputRef.current &&
        document.activeElement?.tagName !== 'BODY'
      )
        return
      const key = e.key
      if (key === 'Enter' || key === '=') {
        handleButton('=')
        e.preventDefault()
      } else if (key === 'Backspace') {
        handleButton('⌫')
        e.preventDefault()
      } else if (key === 'Escape' || key === 'C' || key === 'c') {
        handleButton('C')
        e.preventDefault()
      } else if (/^[0-9]$/.test(key)) {
        handleButton(key)
        e.preventDefault()
      } else if (['/', '*', '-', '+', '.'].includes(key)) {
        handleButton(key)
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleButton, disabled])

  // Focus input on mount for accessibility
  useEffect(() => {
    if (!disabled) inputRef.current?.focus()
  }, [disabled])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d+\-*/.]/g, '')
    setInput(val)
  }

  return {
    input,
    inputRef,
    handleButton,
    handleInput,
  }
}
