/**
 * Table stories for Versaur UI
 *
 * Demonstrates the Table compound component usage and variations
 */
import { Pen, Trash } from 'lucide-react'
import { ButtonIcon } from '../button-icon'
import { Table } from './index'

export default {
  title: 'Primitive/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Compound Table component for accessible, styled, and composable table UI.',
      },
    },
  },
}

export const Basic = () => (
  <Table columns={12}>
    <Table.Header>
      <Table.HeaderItem span={4}>Date</Table.HeaderItem>
      <Table.HeaderItem span={4}>Type</Table.HeaderItem>
      <Table.HeaderItem span={2}>Amount</Table.HeaderItem>
      <Table.HeaderItem span={2}>Action</Table.HeaderItem>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.RowItem span={4}>2025-07-01</Table.RowItem>
        <Table.RowItem span={4}>Income</Table.RowItem>
        <Table.RowItem span={2}>$2,000</Table.RowItem>
        <Table.RowItem span={2}>
          <ButtonIcon as={Pen} variant='ghost' size='sm' aria-label='Edit' />
          <ButtonIcon
            as={Trash}
            variant='danger-ghost'
            size='sm'
            aria-label='Delete'
          />
        </Table.RowItem>
      </Table.Row>
      <Table.Row>
        <Table.RowItem span={4}>2025-07-02</Table.RowItem>
        <Table.RowItem span={4}>Expense</Table.RowItem>
        <Table.RowItem span={2}>-$500</Table.RowItem>
        <Table.RowItem span={2}>
          <ButtonIcon as={Pen} variant='ghost' size='sm' aria-label='Edit' />
          <ButtonIcon
            as={Trash}
            variant='danger-ghost'
            size='sm'
            aria-label='Delete'
          />
        </Table.RowItem>
      </Table.Row>
      <Table.Row>
        <Table.RowItem span={4}>2025-07-03</Table.RowItem>
        <Table.RowItem span={4}>Income</Table.RowItem>
        <Table.RowItem span={2}>$1,200</Table.RowItem>
        <Table.RowItem span={2}>
          <ButtonIcon as={Pen} variant='ghost' size='sm' aria-label='Edit' />
          <ButtonIcon
            as={Trash}
            variant='danger-ghost'
            size='sm'
            aria-label='Delete'
          />
        </Table.RowItem>
      </Table.Row>
    </Table.Body>
    <Table.Footer>
      <Table.RowItem span={8}>Total</Table.RowItem>
      <Table.RowItem span={4}>$2,700</Table.RowItem>
    </Table.Footer>
  </Table>
)

/**
 * ColumnSpan story demonstrates various column span (1-12) and mixed widths
 */
export const ColumnSpan = () => (
  <Table columns={12}>
    <Table.Header>
      <Table.HeaderItem span={3}>Date</Table.HeaderItem>
      <Table.HeaderItem span={3}>Type</Table.HeaderItem>
      <Table.HeaderItem span={3}>Amount</Table.HeaderItem>
      <Table.HeaderItem span={3}>Action</Table.HeaderItem>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.RowItem span={6}>2025-07-01</Table.RowItem>
        <Table.RowItem span={3}>Income</Table.RowItem>
        <Table.RowItem span={2}>$2,000</Table.RowItem>
        <Table.RowItem span={1}>
          <ButtonIcon as={Pen} variant='ghost' size='sm' aria-label='Edit' />
        </Table.RowItem>
      </Table.Row>
      <Table.Row>
        <Table.RowItem span={3}>2025-07-02</Table.RowItem>
        <Table.RowItem span={6}>Expense</Table.RowItem>
        <Table.RowItem span={2}>-$500</Table.RowItem>
        <Table.RowItem span={1}>
          <ButtonIcon as={Pen} variant='ghost' size='sm' aria-label='Edit' />
        </Table.RowItem>
      </Table.Row>
      <Table.Row>
        <Table.RowItem
          span={12}
          className='text-center font-semibold bg-[var(--color-tertiary-soft)]'
        >
          Spans all 12 columns
        </Table.RowItem>
      </Table.Row>
      <Table.Row>
        <Table.RowItem span={2}>A</Table.RowItem>
        <Table.RowItem span={2}>B</Table.RowItem>
        <Table.RowItem span={3}>C</Table.RowItem>
        <Table.RowItem span={5}>D</Table.RowItem>
      </Table.Row>
    </Table.Body>
  </Table>
)

/**
 * Alignment story demonstrates left, center, and right alignment in TableColumn
 */
export const Alignment = () => (
  <Table columns={12}>
    <Table.Header>
      <Table.HeaderItem span={4} align='left'>
        Left
      </Table.HeaderItem>
      <Table.HeaderItem span={4} align='center'>
        Center
      </Table.HeaderItem>
      <Table.HeaderItem span={4} align='right'>
        Right
      </Table.HeaderItem>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.RowItem span={4} align='left'>
          2025-07-01
        </Table.RowItem>
        <Table.RowItem span={4} align='center'>
          Centered
        </Table.RowItem>
        <Table.RowItem span={4} align='right'>
          $2,000
        </Table.RowItem>
      </Table.Row>
      <Table.Row>
        <Table.RowItem span={4}>Default (left)</Table.RowItem>
        <Table.RowItem span={4} align='center'>
          Centered
        </Table.RowItem>
        <Table.RowItem span={4} align='right'>
          Right
        </Table.RowItem>
      </Table.Row>
    </Table.Body>
  </Table>
)
