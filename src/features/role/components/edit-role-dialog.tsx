// src/features/role/components/edit-role-dialog.tsx

"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EditRoleForm } from "./edit-role-form";

import type { Role } from "../types";

interface EditRoleDialogProps {
  data: Role;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditRoleDialog({
  data,
  isOpen,
  onOpenChange,
}: EditRoleDialogProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-2xl max-h-[95vh] overflow-y-auto"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle>Edit Role</DialogTitle>
          <DialogDescription>
            Perbarui informasi role &quot;{data.r_role_nama}&quot; di bawah ini.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <EditRoleForm
            key={data.r_role_id}
            role={data}
            onSuccess={() => onOpenChange(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
