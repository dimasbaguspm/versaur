"use client"

import { useState } from "react"
import type { ComponentType } from "react"

import { ButtonGroup } from "../button-group/button-group"
import { Button } from "../button/button"
import { Modal } from "./modal"

export interface ModalSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

function BasicModalPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <p>This is the modal content. You can put any content here.</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup align="end">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary">Confirm</Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

function ConfirmModalPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Delete Item
      </Button>

      <Modal open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <Modal.Header>
          <Modal.Title>Confirm Delete</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this item? This action cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup align="end">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger">Delete</Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export const ModalSections: ModalSection[] = [
  {
    code: `import { useState } from 'react';
import { Modal } from '@versaur/react';
import { Button } from '@versaur/react';

export function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Modal.Title>Title</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}`,
    key: "basic",
    language: "typescript",
    preview: BasicModalPreview,
    title: "Basic Modal",
  },
  {
    code: `<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header>
    <Modal.Title>Confirm Action</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Are you sure?</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="ghost">Cancel</Button>
    <Button variant="danger">Delete</Button>
  </Modal.Footer>
</Modal>`,
    key: "confirm",
    language: "typescript",
    preview: ConfirmModalPreview,
    title: "Confirmation Modal",
  },
]

export const modalProps = [
  {
    default: "false",
    description: "Whether the modal is open",
    name: "open",
    type: "boolean",
  },
  {
    default: "required",
    description: "Callback when the modal closes, includes the close reason",
    name: "onClose",
    type: "(reason: 'esc' | 'backdrop' | 'closeButton' | 'programmatic') => void",
  },
]

export const modalInstallation = {
  code: `import { Modal } from '@versaur/react';

<Modal open={isOpen} onClose={handleClose}>
  <Modal.Header>
    <Modal.Title>Title</Modal.Title>
    <Modal.CloseButton />
  </Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>
    <Button>Action</Button>
  </Modal.Footer>
</Modal>`,
  language: "typescript" as const,
}
