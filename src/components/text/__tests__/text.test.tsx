import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from '../text.stories'

describe('Text', () => {
  const {
    Heading,
    SubHeading,
    Paragraph,
    ItalicText,
    UnderlineCapitalize,
    ClampEllipsis,
    ColorVariants,
    AsVariants,
    FontSizeVariants,
    FontWeightVariants,
    CustomFontSizeWeight,
  } = composeStories(stories)

  it('renders heading with all features', () => {
    const { getByText } = render(<Heading />)
    const el = getByText(
      /Heading: Primary, Underline, Capitalize, Center, Italic, Clamp 1, Ellipsis/i
    )
    expect(el.tagName).toBe('H1')
    expect(el.className).toContain('font-bold')
    expect(el.className).toContain('text-4xl')
    expect(el.className).toContain('leading-loose')
    expect(el.className).toContain('text-primary')
    expect(el.className).toContain('underline')
    expect(el.className).toContain('capitalize')
    expect(el.className).toContain('text-center')
    expect(el.className).toContain('italic')
    expect(el.className).toContain('line-clamp-1')
    expect(el.className).toContain('truncate')
  })

  it('renders subheading with secondary color and right alignment', () => {
    const { getByText } = render(<SubHeading />)
    const el = getByText(
      /SubHeading: Secondary, Right, Italic, Clamp 2, Ellipsis/i
    )
    expect(el.tagName).toBe('H2')
    expect(el.className).toContain('font-semibold')
    expect(el.className).toContain('text-3xl')
    expect(el.className).toContain('leading-relaxed')
    expect(el.className).toContain('text-secondary')
    expect(el.className).toContain('text-right')
    expect(el.className).toContain('italic')
    expect(el.className).toContain('line-clamp-2')
    expect(el.className).toContain('truncate')
  })

  it('renders paragraph with tertiary color, justify, clamp, ellipsis', () => {
    const { getByText } = render(<Paragraph />)
    const el = getByText(/Paragraph: Tertiary, Justify, Clamp 3, Ellipsis/i)
    expect(el.tagName).toBe('P')
    expect(el.className).toContain('font-normal')
    expect(el.className).toContain('text-tertiary')
    expect(el.className).toContain('text-justify')
    expect(el.className).toContain('line-clamp-3')
    expect(el.className).toContain('truncate')
  })

  it('renders italic ghost text with clamp and ellipsis', () => {
    const { getByText } = render(<ItalicText />)
    const el = getByText(/ItalicText: Ghost, Italic, Clamp 4, Ellipsis/i)
    expect(el.tagName).toBe('SPAN')
    expect(el.className).toContain('font-normal')
    expect(el.className).toContain('text-ghost')
    expect(el.className).toContain('italic')
    expect(el.className).toContain('line-clamp-4')
    expect(el.className).toContain('truncate')
  })

  it('renders span with underline, capitalize, danger, right, clamp, ellipsis', () => {
    const { getByText } = render(<UnderlineCapitalize />)
    const el = getByText(
      /UnderlineCapitalize: Danger, Underline, Capitalize, Right, Clamp 5, Ellipsis/i
    )
    expect(el.tagName).toBe('SPAN')
    expect(el.className).toContain('font-normal')
    expect(el.className).toContain('text-danger')
    expect(el.className).toContain('underline')
    expect(el.className).toContain('capitalize')
    expect(el.className).toContain('text-right')
    expect(el.className).toContain('line-clamp-5')
    expect(el.className).toContain('truncate')
  })

  it('renders clamped and ellipsis paragraph with info color', () => {
    const { getByText } = render(<ClampEllipsis />)
    const el = getByText(/ClampEllipsis: Info, Clamp 2, Ellipsis/i)
    expect(el.tagName).toBe('P')
    expect(el.className).toContain('font-normal')
    expect(el.className).toContain('text-info')
    expect(el.className).toContain('line-clamp-2')
    expect(el.className).toContain('truncate')
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
    const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label']
    tags.forEach(tag => {
      const el = getByText(`As: <${tag}>`)
      expect(el.tagName).toBe(tag.toUpperCase())
    })
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Heading />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders all font size variants', () => {
    const { getByText } = render(<FontSizeVariants />)
    const sizes = [
      'xs',
      'sm',
      'base',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      '5xl',
      '6xl',
      '7xl',
      '8xl',
      '9xl',
    ]
    sizes.forEach(size => {
      const el = getByText(`Font size: text-${size}`)
      expect(el.className).toContain(`text-${size}`)
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

  it('renders custom font size and weight', () => {
    const { getByText } = render(<CustomFontSizeWeight />)
    const el = getByText(
      'Custom fontSize="4xl" fontWeight="bold" color="primary" as="h2"'
    )
    expect(el.className).toContain('text-4xl')
    expect(el.className).toContain('font-bold')
    expect(el.className).toContain('text-primary')
    expect(el.tagName).toBe('H2')
  })
})
