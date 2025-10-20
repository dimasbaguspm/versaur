# FilterChipGroup Component Specification

## Overview

FilterChipGroup is a layout component that manages the positioning, alignment, and behavior of
FilterChip components and related action buttons within a flexible container.

## Props

### orientation

- **Type**: `'horizontal' | 'vertical'`
- **Default**: `'horizontal'`
- **Description**: Controls the layout direction of filter chips

### alignment

- **Type**: `'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'`
- **Default**: `'start'`
- **Description**: Controls the alignment of filter chips within the group

### gap

- **Type**: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- **Default**: `'md'`
- **Description**: Controls the spacing between filter chips

### fluid

- **Type**: `boolean`
- **Default**: `false`
- **Description**: When true, filter chips expand to fill available space equally

### overlay

- **Type**: `boolean`
- **Default**: `false`
- **Description**: When true, filter chips scroll horizontally in a single line without wrapping

### hasMargin

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Adds bottom margin to the group

## Behavior

### Default State

- Horizontal layout with flex-wrap
- Filter chips wrap to multiple lines when space is insufficient
- Start alignment with medium gap

### Overlay Mode

- Single-line horizontal scrolling
- No wrapping of filter chips
- Horizontal scroll when content exceeds container width
- Ideal for displaying many active filters in limited space

### Fluid Mode

- All child filter chips expand equally to fill available width
- Works with both horizontal and vertical orientations
- Not recommended with overlay mode

## Accessibility

- Uses `role="group"` for semantic grouping
- Maintains keyboard navigation between filter chips
- Preserves individual filter chip ARIA attributes
- Clear All buttons should be clearly labeled

## Use Cases

- **Active Filters Display**: Show currently applied filters
- **Filter Selection**: Quick filter toggles
- **Search Refinement**: Category, brand, price filters
- **Sidebar Filters**: Vertical stacked filters
- **Mobile Filter Lists**: Horizontal scrolling active filters (overlay mode)
- **E-commerce**: Product filtering interfaces
