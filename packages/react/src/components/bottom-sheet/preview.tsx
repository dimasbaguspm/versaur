"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { BottomSheet } from "./bottom-sheet";
import { Button } from "../button/button";
import { ButtonGroup } from "../button-group/button-group";

export interface BottomSheetSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function BasicBottomSheetPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Bottom Sheet
      </Button>

      <BottomSheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <BottomSheet.Header>
          <BottomSheet.Title>Bottom Sheet Title</BottomSheet.Title>
          <BottomSheet.CloseButton />
        </BottomSheet.Header>
        <BottomSheet.Body>
          <p>
            This is the bottom sheet content. Mobile-friendly panel that slides up from the bottom.
          </p>
        </BottomSheet.Body>
        <BottomSheet.Footer>
          <ButtonGroup align="end">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary">Action</Button>
          </ButtonGroup>
        </BottomSheet.Footer>
      </BottomSheet>
    </div>
  );
}

function MobileMenuPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Menu
      </Button>

      <BottomSheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <BottomSheet.Header>
          <BottomSheet.Title>Menu</BottomSheet.Title>
        </BottomSheet.Header>
        <BottomSheet.Body>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Button variant="ghost" style={{ justifyContent: "flex-start", width: "100%" }}>
              Profile
            </Button>
            <Button variant="ghost" style={{ justifyContent: "flex-start", width: "100%" }}>
              Settings
            </Button>
            <Button variant="ghost" style={{ justifyContent: "flex-start", width: "100%" }}>
              Help
            </Button>
            <Button variant="danger" style={{ justifyContent: "flex-start", width: "100%" }}>
              Logout
            </Button>
          </div>
        </BottomSheet.Body>
      </BottomSheet>
    </div>
  );
}

export const BottomSheetSections: BottomSheetSection[] = [
  {
    code: `import { useState } from 'react';
import { BottomSheet } from '@versaur/react';
import { Button } from '@versaur/react';

export function MyBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <BottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
        <BottomSheet.Header>
          <BottomSheet.Title>Title</BottomSheet.Title>
          <BottomSheet.CloseButton />
        </BottomSheet.Header>
        <BottomSheet.Body>Content</BottomSheet.Body>
        <BottomSheet.Footer>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </BottomSheet.Footer>
      </BottomSheet>
    </div>
  );
}`,
    key: "basic",
    language: "typescript",
    preview: BasicBottomSheetPreview,
    title: "Basic Bottom Sheet",
  },
  {
    code: `<BottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
  <BottomSheet.Header>
    <BottomSheet.Title>Menu</BottomSheet.Title>
  </BottomSheet.Header>
  <BottomSheet.Body>
    <Button variant="ghost">Profile</Button>
    <Button variant="ghost">Settings</Button>
    <Button variant="danger">Logout</Button>
  </BottomSheet.Body>
</BottomSheet>`,
    key: "menu",
    language: "typescript",
    preview: MobileMenuPreview,
    title: "Mobile Menu",
  },
];

export const bottomSheetProps = [
  {
    default: "false",
    description: "Whether the bottom sheet is open",
    name: "open",
    type: "boolean",
  },
  {
    default: "required",
    description: "Callback when the bottom sheet closes, includes the close reason",
    name: "onClose",
    type: "(reason: 'esc' | 'backdrop' | 'closeButton' | 'programmatic') => void",
  },
];

export const bottomSheetInstallation = {
  code: `import { BottomSheet } from '@versaur/react';

<BottomSheet open={isOpen} onClose={handleClose}>
  <BottomSheet.Header>
    <BottomSheet.Title>Title</BottomSheet.Title>
    <BottomSheet.CloseButton />
  </BottomSheet.Header>
  <BottomSheet.Body>Content</BottomSheet.Body>
  <BottomSheet.Footer>
    <Button>Action</Button>
  </BottomSheet.Footer>
</BottomSheet>`,
  language: "typescript" as const,
};
