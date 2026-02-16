"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { Drawer } from "./drawer";
import { Button } from "../button/button";
import { ButtonGroup } from "../button-group/button-group";

export interface DrawerSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function BasicDrawerPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>

      <Drawer open={isOpen} onClose={() => setIsOpen(false)} placement="right">
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
  );
}

function LeftPlacementPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Left Drawer
      </Button>

      <Drawer open={isOpen} onClose={() => setIsOpen(false)} placement="left">
        <Drawer.Header>
          <Drawer.Title>Left Drawer</Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body>
          <p>This drawer slides in from the left side.</p>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

export const DrawerSections: DrawerSection[] = [
  {
    key: "basic",
    title: "Basic Drawer",
    preview: BasicDrawerPreview,
    code: `import { useState } from 'react';
import { Drawer } from '@versaur/react';
import { Button } from '@versaur/react';

export function MyDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
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
    language: "typescript",
  },
  {
    key: "placement",
    title: "Placement",
    preview: LeftPlacementPreview,
    code: `<Drawer
  open={isOpen}
  onClose={() => setIsOpen(false)}
  placement="left"
>
  <Drawer.Header>
    <Drawer.Title>Left Drawer</Drawer.Title>
  </Drawer.Header>
</Drawer>`,
    language: "typescript",
  },
];

export const drawerProps = [
  {
    name: "open",
    type: "boolean",
    default: "false",
    description: "Whether the drawer is open",
  },
  {
    name: "onClose",
    type: "(reason: 'esc' | 'backdrop' | 'closeButton' | 'programmatic') => void",
    default: "required",
    description: "Callback when the drawer closes, includes the close reason",
  },
  {
    name: "placement",
    type: "'left' | 'right'",
    default: "'right'",
    description: "Which side the drawer slides in from",
  },
];

export const drawerInstallation = {
  code: `import { Drawer } from '@versaur/react';

<Drawer open={isOpen} onClose={handleClose} placement="right">
  <Drawer.Header>
    <Drawer.Title>Title</Drawer.Title>
    <Drawer.CloseButton />
  </Drawer.Header>
  <Drawer.Body>Content</Drawer.Body>
  <Drawer.Footer>
    <Button>Action</Button>
  </Drawer.Footer>
</Drawer>`,
  language: "typescript" as const,
};
