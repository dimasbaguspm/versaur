"use client"

import { useState } from "react"
import type { ComponentType } from "react"

import { ButtonGroup } from "../button-group/button-group"
import { Button } from "../button/button"
import { Drawer } from "./drawer"

export interface DrawerSection {
  key: string
  title: string
  preview: ComponentType
  code: string
  language: string
}

function BasicDrawerPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>

      <Drawer open={isOpen} onOpenChange={setIsOpen} placement="right">
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body>
          <p>This is the drawer content. You can put any content here.</p>
        </Drawer.Body>
        <Drawer.Footer>
          <ButtonGroup align="end">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary">Action</Button>
          </ButtonGroup>
        </Drawer.Footer>
      </Drawer>
    </div>
  )
}

function LeftPlacementPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Left Drawer
      </Button>

      <Drawer open={isOpen} onOpenChange={setIsOpen} placement="left">
        <Drawer.Header>
          <Drawer.Title>Left Drawer</Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body>
          <p>This drawer slides in from the left side.</p>
        </Drawer.Body>
      </Drawer>
    </div>
  )
}

export const DrawerSections: DrawerSection[] = [
  {
    code: `import { useState } from 'react';
import { Drawer, Button } from '@versaur/react';

export function MyDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer open={isOpen} onOpenChange={setIsOpen} placement="right">
        <Drawer.Header>
          <Drawer.Title>Title</Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body>Content</Drawer.Body>
        <Drawer.Footer>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
}`,
    key: "basic",
    language: "typescript",
    preview: BasicDrawerPreview,
    title: "Basic Drawer",
  },
  {
    code: `<Drawer
  open={isOpen}
  onOpenChange={setIsOpen}
  placement="left"
>
  <Drawer.Header>
    <Drawer.Title>Left Drawer</Drawer.Title>
  </Drawer.Header>
</Drawer>`,
    key: "placement",
    language: "typescript",
    preview: LeftPlacementPreview,
    title: "Placement",
  },
]

export const drawerProps = [
  {
    default: "required",
    description: "Controlled open state - syncs with native dialog element",
    name: "open",
    type: "boolean",
  },
  {
    default: "optional",
    description: "Callback when drawer closes (ESC key, backdrop click, or close button)",
    name: "onOpenChange",
    type: "(open: boolean) => void",
  },
  {
    default: "'right'",
    description: "Which side the drawer slides in from",
    name: "placement",
    type: "'left' | 'right'",
  },
]

export const drawerInstallation = {
  code: `import { Drawer, Button } from '@versaur/react';
import { useState } from 'react';

function MyDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer open={isOpen} onOpenChange={setIsOpen} placement="right">
        <Drawer.Header>
          <Drawer.Title>Title</Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body>Content</Drawer.Body>
        <Drawer.Footer>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}`,
  language: "typescript" as const,
}
