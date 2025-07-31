import { render } from '@testing-library/react'
import { BaseImage } from '../base-image'

describe('BaseImage', () => {
  it('renders a standard image with skeleton and fallback', () => {
    const { asFragment } = render(
      <BaseImage
        src='https://picsum.photos/200/200'
        alt='Standard placeholder'
        width={200}
        height={200}
        shape='rectangle'
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders a square image', () => {
    const { asFragment } = render(
      <BaseImage
        src='https://picsum.photos/200/200'
        alt='Square placeholder'
        width={200}
        height={200}
        shape='square'
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders a circle image', () => {
    const { asFragment } = render(
      <BaseImage
        src='https://picsum.photos/200/200'
        alt='Circle placeholder'
        width={200}
        height={200}
        shape='circle'
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
