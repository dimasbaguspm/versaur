# ButtonGroup Component Specification

## Overview

ButtonGroup is a layout component that manages the positioning, alignment, and behavior of Button
components within a flexible container.

## Props

### orientation

- **Type**: `'horizontal' | 'vertical'`
- **Default**: `'horizontal'`
- **Description**: Controls the layout direction of buttons

### alignment

- **Type**: `'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'`
- **Default**: `'start'`
- **Description**: Controls the alignment of buttons within the group

### gap

- **Type**: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- **Default**: `'md'`
- **Description**: Controls the spacing between buttons

### fluid

- **Type**: `boolean`
- **Default**: `false`
- **Description**: When true, buttons expand to fill available space equally

### overlay

- **Type**: `boolean`
- **Default**: `false`
- **Description**: When true, buttons scroll horizontally in a single line without wrapping

### hasMargin

- **Type**: `boolean`
- **Default**: `false`
- **Description**: Adds bottom margin to the group

## Behavior

### Default State

- Horizontal layout with flex-wrap
- Buttons wrap to multiple lines when space is insufficient
- Start alignment with medium gap

### Overlay Mode

- Single-line horizontal scrolling
- No wrapping of buttons
- Horizontal scroll when content exceeds container width
- Useful for mobile interfaces and limited width containers

### Fluid Mode

- All child buttons expand equally to fill available width
- Works with both horizontal and vertical orientations
- Cannot be combined with overlay mode effectively

## Accessibility

- Uses `role="group"` for semantic grouping
- Maintains keyboard navigation between buttons
- Preserves individual button ARIA attributes

## Use Cases

- **Form Actions**: Save, Cancel, Reset buttons
- **Navigation**: Previous/Next buttons
- **Toolbars**: Multiple action buttons
- **Modal Actions**: Confirm/Cancel dialogs
- **Mobile Menus**: Horizontal scrolling button lists (overlay mode)
