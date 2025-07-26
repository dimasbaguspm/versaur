import { renderHook, act, waitFor } from '@testing-library/react'
import { useFloatingPosition } from '../use-floating-position'

function createContainer({
  height = 500,
  scrollTop = 0,
  clientHeight = 500,
  scrollHeight = 500,
} = {}) {
  const el = document.createElement('div')
  Object.defineProperty(el, 'getBoundingClientRect', {
    value: () => ({ height }),
  })
  Object.defineProperty(el, 'scrollTop', { value: scrollTop, writable: true })
  Object.defineProperty(el, 'clientHeight', { value: clientHeight })
  Object.defineProperty(el, 'scrollHeight', { value: scrollHeight })
  return el
}

describe('useFloatingPosition', () => {
  it('returns fixed position when container fits viewport', async () => {
    const { result } = renderHook(() => useFloatingPosition('right', '2rem'))
    const [containerRef] = result.current
    const el = createContainer({ height: 400 })
    act(() => {
      ;(containerRef as (el: HTMLDivElement) => void)(el)
      window.dispatchEvent(new Event('resize'))
    })
    await waitFor(() => {
      const [, style, positionClass] = result.current
      expect(style.position).toBe('fixed')
      expect(style.bottom).toBe('2rem')
      expect(positionClass).toContain('right-4')
    })
  })

  it('returns fixed with translateY when container is taller than viewport', async () => {
    const { result } = renderHook(() => useFloatingPosition('right', '2rem'))
    const [containerRef] = result.current
    const el = createContainer({ height: 2000, scrollTop: 100 })
    act(() => {
      ;(containerRef as (el: HTMLDivElement) => void)(el)
      window.dispatchEvent(new Event('resize'))
    })
    await waitFor(() => {
      const [, style, positionClass] = result.current
      expect(style.position).toBe('fixed')
      expect(style.transform).toContain('translateY')
      expect(positionClass).toContain('right-4')
    })
  })

  it('updates style and class when side changes', async () => {
    const { result, rerender } = renderHook(
      (props: { side: 'right' | 'left' }) =>
        useFloatingPosition(props.side, '1rem'),
      { initialProps: { side: 'right' } }
    )
    const [containerRef] = result.current
    const el = createContainer({ height: 400 })
    act(() => {
      ;(containerRef as (el: HTMLDivElement) => void)(el)
    })
    expect(result.current[2]).toContain('right-4')
    rerender({ side: 'left' })
    await waitFor(() => {
      const [, , positionClass] = result.current
      expect(positionClass).toContain('left-4')
    })
  })
})
