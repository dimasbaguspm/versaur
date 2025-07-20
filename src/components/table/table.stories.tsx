/**
 * Table stories for Versaur UI
 *
 * Demonstrates the Table compound component usage and variations
 */
import { Table } from './index'

export default {
  title: 'Components/Table',
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
  <Table>
    <Table.Header>
      <Table.Column as='th' span={4}>
        Date
      </Table.Column>
      <Table.Column as='th' span={4}>
        Type
      </Table.Column>
      <Table.Column as='th' span={2}>
        Amount
      </Table.Column>
      <Table.Column as='th' span={2}>
        Action
      </Table.Column>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Column as='td' span={4}>
          2025-07-01
        </Table.Column>
        <Table.Column as='td' span={4}>
          Income
        </Table.Column>
        <Table.Column as='td' span={2}>
          $2,000
        </Table.Column>
        <Table.Column as='td' span={2}>
          <button>Edit</button>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column as='td' span={4}>
          2025-07-02
        </Table.Column>
        <Table.Column as='td' span={4}>
          Expense
        </Table.Column>
        <Table.Column as='td' span={2}>
          -$500
        </Table.Column>
        <Table.Column as='td' span={2}>
          <button>Edit</button>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column as='td' span={4}>
          2025-07-03
        </Table.Column>
        <Table.Column as='td' span={4}>
          Income
        </Table.Column>
        <Table.Column as='td' span={2}>
          $1,200
        </Table.Column>
        <Table.Column as='td' span={2}>
          <button>Edit</button>
        </Table.Column>
      </Table.Row>
    </Table.Body>
    <Table.Footer>
      <Table.Column as='td' span={8}>
        Total
      </Table.Column>
      <Table.Column as='td' span={4}>
        $2,700
      </Table.Column>
    </Table.Footer>
  </Table>
)

/**
 * ColumnSpan story demonstrates various column span (1-12) and mixed widths
 */
export const ColumnSpan = () => (
  <Table>
    <Table.Header>
      <Table.Column as='th' span={3}>
        Date
      </Table.Column>
      <Table.Column as='th' span={3}>
        Type
      </Table.Column>
      <Table.Column as='th' span={3}>
        Amount
      </Table.Column>
      <Table.Column as='th' span={3}>
        Action
      </Table.Column>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Column as='td' span={6}>
          2025-07-01
        </Table.Column>
        <Table.Column as='td' span={3}>
          Income
        </Table.Column>
        <Table.Column as='td' span={2}>
          $2,000
        </Table.Column>
        <Table.Column as='td' span={1}>
          <button>Edit</button>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column as='td' span={3}>
          2025-07-02
        </Table.Column>
        <Table.Column as='td' span={6}>
          Expense
        </Table.Column>
        <Table.Column as='td' span={2}>
          -$500
        </Table.Column>
        <Table.Column as='td' span={1}>
          <button>Edit</button>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column
          as='td'
          span={12}
          className='text-center font-semibold bg-[var(--color-tertiary-soft)]'
        >
          Spans all 12 columns
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column as='td' span={2}>
          A
        </Table.Column>
        <Table.Column as='td' span={2}>
          B
        </Table.Column>
        <Table.Column as='td' span={3}>
          C
        </Table.Column>
        <Table.Column as='td' span={5}>
          D
        </Table.Column>
      </Table.Row>
    </Table.Body>
  </Table>
)

/**
 * Alignment story demonstrates left, center, and right alignment in TableColumn
 */
export const Alignment = () => (
  <Table>
    <Table.Header>
      <Table.Column as='th' span={4} align='left'>
        Left
      </Table.Column>
      <Table.Column as='th' span={4} align='center'>
        Center
      </Table.Column>
      <Table.Column as='th' span={4} align='right'>
        Right
      </Table.Column>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Column as='td' span={4} align='left'>
          2025-07-01
        </Table.Column>
        <Table.Column as='td' span={4} align='center'>
          Centered
        </Table.Column>
        <Table.Column as='td' span={4} align='right'>
          $2,000
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column as='td' span={4}>
          Default (left)
        </Table.Column>
        <Table.Column as='td' span={4} align='center'>
          Centered
        </Table.Column>
        <Table.Column as='td' span={4} align='right'>
          Right
        </Table.Column>
      </Table.Row>
    </Table.Body>
  </Table>
)
