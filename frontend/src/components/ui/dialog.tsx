"use client";

import { useId, useRef, type ReactNode } from "react";
import { Button } from "./button";

export function Dialog({
  trigger,
  title,
  description,
  children,
}: {
  trigger: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const cancel = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button
        ref={opener}
        aria-haspopup="dialog"
        onClick={() => {
          dialog.current?.showModal();
          cancel.current?.focus();
        }}
      >
        {trigger}
      </Button>
      <dialog
        ref={dialog}
        className="ui-dialog"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        onClose={() => opener.current?.focus()}
      >
        <h2 id={`${id}-title`}>{title}</h2>
        <p id={`${id}-description`}>{description}</p>
        {children}
        <form method="dialog" className="ui-actions">
          <Button ref={cancel} type="submit" variant="secondary">
            Cancel
          </Button>
        </form>
      </dialog>
    </>
  );
}
