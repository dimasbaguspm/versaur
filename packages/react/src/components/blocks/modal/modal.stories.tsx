import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { Button, Text } from "../../primitive/index"
import { ButtonGroup, Modal } from "../index"

const meta = {
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Blocks/Modal",
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const ModalContent = ({ footerAlign = "end" }: { footerAlign?: "start" | "center" | "end" } = {}) => (
  <>
    <Modal.Header action={<Modal.CloseButton />}>
      <Modal.Title>Modal Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Text>This is a modal dialog with customizable size and position props.</Text>
    </Modal.Body>
    <Modal.Footer align={footerAlign}>
      <ButtonGroup>
        <Button variant="secondary" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          OK
        </Button>
      </ButtonGroup>
    </Modal.Footer>
  </>
)

export const Default: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal {...args} open={isOpen} onOpenChange={setIsOpen}>
          <ModalContent />
        </Modal>
      </div>
    )
  },
}

export const Sizes: Story = {
  args: { open: false, onOpenChange: () => {} },
  render: () => {
    const [openSmall, setOpenSmall] = useState(false)
    const [openDefault, setOpenDefault] = useState(false)
    const [openLarge, setOpenLarge] = useState(false)

    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        <div>
          <Button variant="secondary" onClick={() => setOpenSmall(true)}>
            Open Small Modal
          </Button>
          <Modal size="small" open={openSmall} onOpenChange={setOpenSmall}>
            <ModalContent />
          </Modal>
        </div>

        <div>
          <Button variant="secondary" onClick={() => setOpenDefault(true)}>
            Open Default Modal
          </Button>
          <Modal open={openDefault} onOpenChange={setOpenDefault}>
            <ModalContent />
          </Modal>
        </div>

        <div>
          <Button variant="secondary" onClick={() => setOpenLarge(true)}>
            Open Large Modal
          </Button>
          <Modal size="large" open={openLarge} onOpenChange={setOpenLarge}>
            <ModalContent />
          </Modal>
        </div>
      </div>
    )
  },
}

export const Positions: Story = {
  args: { open: false, onOpenChange: () => {} },
  render: () => {
    const [openTop, setOpenTop] = useState(false)
    const [openCenter, setOpenCenter] = useState(false)
    const [openBottom, setOpenBottom] = useState(false)

    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        <div>
          <Button variant="secondary" onClick={() => setOpenTop(true)}>
            Open Modal (Top)
          </Button>
          <Modal position="top" open={openTop} onOpenChange={setOpenTop}>
            <ModalContent />
          </Modal>
        </div>

        <div>
          <Button variant="secondary" onClick={() => setOpenCenter(true)}>
            Open Modal (Center)
          </Button>
          <Modal position="center" open={openCenter} onOpenChange={setOpenCenter}>
            <ModalContent />
          </Modal>
        </div>

        <div>
          <Button variant="secondary" onClick={() => setOpenBottom(true)}>
            Open Modal (Bottom)
          </Button>
          <Modal position="bottom" open={openBottom} onOpenChange={setOpenBottom}>
            <ModalContent />
          </Modal>
        </div>
      </div>
    )
  },
}

export const FooterAlignment: Story = {
  args: { open: false, onOpenChange: () => {} },
  render: () => {
    const [openStart, setOpenStart] = useState(false)
    const [openCenter, setOpenCenter] = useState(false)
    const [openEnd, setOpenEnd] = useState(false)

    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        <div>
          <Button variant="secondary" onClick={() => setOpenStart(true)}>
            Align Start
          </Button>
          <Modal open={openStart} onOpenChange={setOpenStart}>
            <ModalContent footerAlign="start" />
          </Modal>
        </div>

        <div>
          <Button variant="secondary" onClick={() => setOpenCenter(true)}>
            Align Center
          </Button>
          <Modal open={openCenter} onOpenChange={setOpenCenter}>
            <ModalContent footerAlign="center" />
          </Modal>
        </div>

        <div>
          <Button variant="secondary" onClick={() => setOpenEnd(true)}>
            Align End
          </Button>
          <Modal open={openEnd} onOpenChange={setOpenEnd}>
            <ModalContent footerAlign="end" />
          </Modal>
        </div>
      </div>
    )
  },
}
