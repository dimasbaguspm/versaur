# Modal

A Versaur modal dialog component. Follows compound + context pattern, supports size and placement variants, and is fully accessible.

## Usage

```tsx
import { Modal } from '@/components/modal'
import { Button } from '@/components/button'

function Example() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen} aria-label="Dialog">
        <Modal.Header>Title</Modal.Header>
        <Modal.Body className="px-6 py-4">Body</Modal.Body>
        <Modal.Footer>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
```
