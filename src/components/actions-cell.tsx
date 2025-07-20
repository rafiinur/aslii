"use client";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";

interface DialogConfig {
  key: string;
  element: React.ReactNode;
}

interface ActionsCellProps {
  dialogs: DialogConfig[];
  children: (openDialog: (key: string) => void) => React.ReactNode;
}

export function ActionsCell({ dialogs, children }: ActionsCellProps) {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const openDialog = (key: string) => setActiveDialog(key);
  const closeDialog = () => setActiveDialog(null);

  return (
    <>
      {dialogs.map(({ key, element }) => {
        if (!React.isValidElement(element)) return null;
        // Add key prop to each dialog element to fix React warning
        return React.cloneElement(
          element as React.ReactElement<{
            isOpen: boolean;
            onOpenChange: (open: boolean) => void;
          }>,
          {
            ...(element.props || {}),
            isOpen: activeDialog === key,
            onOpenChange: closeDialog,
            key,
          }
        );
      })}
      <div className="flex justify-center">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Buka menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {children(openDialog)}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
