# BadgeGroup Component Specification

## Overview

BadgeGroup is a layout component that manages the positioning, alignment, and behavior of Badge
components within a flexible container.

## Props

### orientation

- **Type**: `'horizontal' | 'vertical'`
- **Default**: `'horizontal'`
- **Description**: Controls the layout direction of badges

### alignment

- **Type**: `'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'`
- **Default**: `'start'`
- **Description**: Controls the alignment of badges within the group

### gap

- **Type**: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- **Default**: `'md'`
- **Description**: Controls the spacing between badges

### fluid

- **Type**: `boolean`
- **Default**: `false`
- **Description**: When true, badges expand to fill available space equally

### overlay

- **Type**: `boolean`
- **Default**: `false`
- **Description**: When true, badges scroll horizontally in a single line without wrapping

### hasMargin

- **Type**: `boolean`
- **Default**: `false``
- **Description**: Adds bottom margin to the group

## Behavior

### Default State

- Horizontal layout with flex-wrap
- Badges wrap to multiple lines when space is insufficient
- Start alignment with medium gap

### Overlay Mode

- Single-line horizontal scrolling
- No wrapping of badges
- Horizontal scroll when content exceeds container width
- Useful for tag lists and status indicators in limited space

### Fluid Mode

- All child badges expand equally to fill available width
- Works with both horizontal and vertical orientations
- Not typically used with badges due to their compact nature

## Accessibility

- Uses `role="group"` for semantic grouping
- Maintains keyboard navigation when badges are interactive
- Preserves individual badge ARIA attributes

## Use Cases

- **Status Indicators**: Multiple status badges
- **Tags**: Category or topic tags
- **Labels**: Metadata labels
- **User Roles**: Permission or role badges
- **Mobile Tag Lists**: Horizontal scrolling tag displays (overlay mode)
- **Card Metadata**: Product attributes, features
