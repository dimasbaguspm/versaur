"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { Dialog } from "./dialog";

export interface DialogSection {
  key: string;
  title: string;
  preview: ComponentType;
  code: string;
  language: string;
}

function BasicDialogPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>

      <Dialog id="basic" isOpen={isOpen} onOpenChange={setIsOpen}>
        <div style={{ padding: "1.5rem" }}>
          <h2>Hello Dialog</h2>
          <p>
            This is a controlled Dialog. Close it with ESC, backdrop click, or
            the button below.
          </p>
          <button onClick={() => setIsOpen(false)}>Close Dialog</button>
        </div>
      </Dialog>
    </div>
  );
}

function MultipleDialogsPreview() {
  const [dialog1Open, setDialog1Open] = useState(false);
  const [dialog2Open, setDialog2Open] = useState(false);

  return (
    <div>
      <button onClick={() => setDialog1Open(true)}>Open Dialog 1</button>
      <button
        onClick={() => setDialog2Open(true)}
        style={{ marginLeft: "0.5rem" }}
      >
        Open Dialog 2
      </button>

      <Dialog id="multi-1" isOpen={dialog1Open} onOpenChange={setDialog1Open}>
        <div style={{ padding: "1.5rem" }}>
          <h2>Dialog 1</h2>
          <button onClick={() => setDialog2Open(true)}>Open Dialog 2</button>
        </div>
      </Dialog>

      <Dialog id="multi-2" isOpen={dialog2Open} onOpenChange={setDialog2Open}>
        <div style={{ padding: "1.5rem" }}>
          <h2>Dialog 2</h2>
          <p>Dialogs stack in portal at document root</p>
        </div>
      </Dialog>
    </div>
  );
}

export const DialogSections: DialogSection[] = [
  {
    key: "basic",
    title: "Basic Dialog",
    preview: BasicDialogPreview,
    code: `import { Dialog } from '@versaur/react';
import { useState } from 'react';

export function MyDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>

      <Dialog 
        id="my-dialog" 
        isOpen={isOpen} 
        onOpenChange={setIsOpen}
      >
        <h2>Hello Dialog</h2>
        <p>Close with ESC, backdrop click, or the button below</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Dialog>
    </div>
  );
}`,
    language: "typescript",
  },
  {
    key: "multiple",
    title: "Multiple Dialogs",
    preview: MultipleDialogsPreview,
    code: `import { Dialog } from '@versaur/react';
import { useState } from 'react';

export function MultipleDialogs() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen1(true)}>Open Dialog 1</button>
      <button onClick={() => setOpen2(true)}>Open Dialog 2</button>

      <Dialog 
        id="dialog-1" 
        isOpen={open1} 
        onOpenChange={setOpen1}
      >
        <h2>Dialog 1</h2>
        <button onClick={() => setOpen2(true)}>Open Dialog 2</button>
      </Dialog>

      <Dialog 
        id="dialog-2" 
        isOpen={open2} 
        onOpenChange={setOpen2}
      >
        <h2>Dialog 2</h2>
        <p>Multiple dialogs can be stacked</p>
      </Dialog>
    </div>
  );
}`,
    language: "typescript",
  },
];

export const dialogProps = [
  {
    name: "id",
    type: "string",
    default: "required",
    description: "Unique identifier for the dialog",
  },
  {
    name: "isOpen",
    type: "boolean",
    default: "required",
    description: "Controlled open state - syncs with native dialog element",
  },
  {
    name: "onOpenChange",
    type: "(isOpen: boolean) => void",
    default: "optional",
    description: "Callback when dialog closes (ESC key, backdrop click)",
  },
  {
    name: "dialogProps",
    type: "React.DialogHTMLAttributes<HTMLDialogElement>",
    default: "optional",
    description: "Additional HTML attributes for the dialog element",
  },
  {
    name: "children",
    type: "React.ReactNode",
    default: "required",
    description: "Dialog content",
  },
];

export const dialogInstallation = {
  code: `import { Dialog } from '@versaur/react';
import { useState } from 'react';

function MyDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>

      <Dialog 
        id="my-dialog" 
        isOpen={isOpen} 
        onOpenChange={setIsOpen}
      >
        <h2>Dialog Content</h2>
        <p>This is a controlled dialog component.</p>
        <button onClick={() => setIsOpen(false)}>
          Close
        </button>
      </Dialog>
    </>
  );
}`,
  language: "typescript" as const,
};
