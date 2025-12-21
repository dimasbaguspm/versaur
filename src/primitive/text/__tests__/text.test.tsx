import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../text.stories'

describe('Text', () => {
  const {
    Paragraph,
    Transformations,
    Decorations,
    ClampEllipsis,
    ColorVariants,
    AsVariants,
    FontWeightVariants,
  } = composeStories(stories)

  it('renders paragraph with tertiary color, justify, clamp, ellipsis', () => {
    const { getByText } = render(<Paragraph />)
    const el = getByText(/Paragraph: Tertiary, Justify, Clamp 3, Ellipsis/i)
    expect(el.tagName).toBe('P')
    expect(el.className).toContain('font-normal')
    expect(el.className).toContain('text-tertiary')
    expect(el.className).toContain('text-justify')
    expect(el.className).toContain('line-clamp-3')
    expect(el.className).toContain('overflow-hidden')
  })

  it('applies transform utilities', () => {
    const { getByText } = render(<Transformations />)
    expect(getByText(/capitalize transformation/i).className).toContain(
      'capitalize'
    )
    expect(getByText(/uppercase transformation/i).className).toContain(
      'uppercase'
    )
    expect(getByText(/lowercase input/i).className).toContain('lowercase')
    expect(getByText(/no transform applied/i).className).toContain(
      'normal-case'
    )
  })

  it('applies decoration utilities', () => {
    const { getByText } = render(<Decorations />)
    expect(getByText(/Underline decoration/i).className).toContain('underline')
    expect(getByText(/Line-through decoration/i).className).toContain(
      'line-through'
    )
    expect(getByText(/Overline decoration/i).className).toContain('overline')
    expect(getByText(/No decoration/i).className).toContain('no-underline')
  })

  it('renders clamped and ellipsis paragraph with info color', () => {
    const { getByText } = render(<ClampEllipsis />)
    const el = getByText(/ClampEllipsis: Info, Clamp 2, Ellipsis/i)
    expect(el.tagName).toBe('P')
    expect(el.className).toContain('font-normal')
    expect(el.className).toContain('text-info')
    expect(el.className).toContain('line-clamp-2')
    expect(el.className).toContain('overflow-hidden')
  })

  it('renders all color variants', () => {
    const { getByText } = render(<ColorVariants />)
    const colors = [
      'primary',
      'secondary',
      'tertiary',
      'ghost',
      'neutral',
      'success',
      'info',
      'warning',
      'danger',
    ]
    colors.forEach(color => {
      const el = getByText(`Color: ${color}`)
      if (color === 'neutral') {
        expect(el.className).toContain('text-ghost') // neutral as intended maps to ghost
      } else {
        expect(el.className).toContain(`text-${color}`)
      }
    })
  })

  it('renders all as variants', () => {
    const { getByText } = render(<AsVariants />)
    const tags = ['span', 'p', 'q', 's', 'strong', 'em', 'small', 'label']
    tags.forEach(tag => {
      const el = getByText(`As: <${tag}>`)
      expect(el.tagName).toBe(tag.toUpperCase())
    })
  })

  it('renders all font weight variants', () => {
    const { getByText } = render(<FontWeightVariants />)
    const weights = [
      'thin',
      'extralight',
      'light',
      'normal',
      'medium',
      'semibold',
      'bold',
      'extrabold',
      'black',
    ]
    weights.forEach(weight => {
      const el = getByText(`Font weight: font-${weight}`)
      expect(el.className).toContain(`font-${weight}`)
    })
  })

  it('matches snapshot for paragraph', () => {
    const { asFragment } = render(<Paragraph />)
    expect(asFragment()).toMatchSnapshot()
  })
})
