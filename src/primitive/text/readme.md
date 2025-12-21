# Text Component

The `Text` component provides semantic, accessible typography for Versaur UI, wrapping Tailwind v4
font utilities and the Versaur design system. It supports all design system colors, text
decoration/transform helpers, alignment, italic, line clamp, ellipsis, and semantic inline/block
HTML tags (excluding headings). All props are strictly typed and mobile-first.

## Features

- Semantic HTML via `as` prop (`span`, `p`, `q`, `s`, `strong`, `em`, `small`, `label`)
- Versaur color system (`color`): `primary`, `secondary`, `tertiary`, `ghost`, `neutral`, `success`,
  `info`, `warning`, `danger`
- Text transform (`transform`): `none`, `capitalize`, `uppercase`, `lowercase`
- Text decoration (`decoration`): `none`, `underline`, `line-through`, `overline`
- Text alignment (`align`): `left`, `center`, `right`, `justify`
- Italic (`italic`)
- Line clamp (`clamp`): 1-5 lines
- Ellipsis (`ellipsis`): truncates overflow
- Strictly typed props and accessible design
- Responsive, mobile-first, and WCAG 2.1 AA compliant

## Usage

```tsx
import { Text } from '@/components/text'

<Text
  as="p"
  color="primary"
  decoration="underline"
  transform="capitalize"
  align="center"
  italic
  clamp={2}
  ellipsis
>
  Primary underline capitalize, centered paragraph with clamp
</Text>

<Text as="span" color="secondary" transform="uppercase">
  Secondary uppercase span
</Text>

<Text as="q" color="tertiary" decoration="overline">
  Overlined quote variant
</Text>

<Text as="p" color="info" clamp={2} ellipsis>
  ClampEllipsis: Info, Clamp 2, Ellipsis. This is a long informational text that will be clamped to two lines and truncated with ellipsis if it overflows.
</Text>

// Color variants group
{['primary','secondary','tertiary','ghost','neutral','success','info','warning','danger'].map(color => (
  <Text key={color} as="span" color={color}>
    {`Color: ${color}`}
  </Text>
))}

// As variants group
{['span','p','q','s','strong','em','small','label'].map(tag => (
  <Text key={tag} as={tag}>
    {`As: <${tag}>`}
  </Text>
))}

// Font weight variants
{[
  'thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black',
].map(weight => (
  <Text key={weight} fontWeight={weight}>
    {`Font weight: font-${weight}`}
  </Text>
))}
```
