# Text Component

The `Text` component provides semantic, accessible typography for Versaur UI, wrapping Tailwind v4 font utilities and the Versaur design system. It supports all design system color, underline, capitalization, alignment, italic, line clamp, ellipsis, and semantic HTML tags. All props are strictly typed and mobile-first.

## Features
- Semantic HTML via `as` prop (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `label`)
- Versaur color system (`color`): `primary`, `secondary`, `tertiary`, `ghost`, `neutral`, `success`, `info`, `warning`, `danger`
- Underline (`hasUnderline`) and capitalization (`isCapitalize`)
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
  as="h1"
  color="primary"
  hasUnderline
  isCapitalize
  align="center"
  italic
  clamp={1}
  ellipsis
>
  Heading: Primary, Underline, Capitalize, Center, Italic, Clamp 1, Ellipsis
</Text>

<Text as="h2" color="secondary" align="right" italic clamp={2} ellipsis>
  SubHeading: Secondary, Right, Italic, Clamp 2, Ellipsis
</Text>

<Text as="p" color="tertiary" align="justify" clamp={3} ellipsis>
  Paragraph: Tertiary, Justify, Clamp 3, Ellipsis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Text>

<Text as="span" color="ghost" italic clamp={4} ellipsis>
  ItalicText: Ghost, Italic, Clamp 4, Ellipsis
</Text>

<Text as="span" color="danger" hasUnderline isCapitalize align="right" clamp={5} ellipsis>
  UnderlineCapitalize: Danger, Underline, Capitalize, Right, Clamp 5, Ellipsis
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
{['h1','h2','h3','h4','h5','h6','p','span','label'].map(tag => (
  <Text key={tag} as={tag}>
    {`As: <${tag}>`}
  </Text>
))}
```

## Font Size & Font Weight

The `Text` component allows you to override the default font size and font weight (which are determined by the `as` prop and design system) using the strictly typed `fontSize` and `fontWeight` props. These map directly to Tailwind v4 utilities.

- `fontSize`: `'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'`
- `fontWeight`: `'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'`

If set, these props override the defaults from the `as` prop and design system.

### Examples

```tsx
<Text fontSize="4xl" fontWeight="bold" color="primary" as="h2">
  Custom fontSize="4xl" fontWeight="bold" color="primary" as="h2"
</Text>

// Font size variants
{[
  'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl',
].map(size => (
  <Text key={size} fontSize={size}>
    {`Font size: text-${size}`}
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
