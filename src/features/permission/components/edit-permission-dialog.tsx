// src/features/permission/components/edit-permission-dialog.tsx

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Permission } from "../type";
import { EditPermissionForm } from "./edit-permission-form";

interface EditPermissionDialogProps {
  data: Permission;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditPermissionDialog({
  data,
  isOpen,
  onOpenChange,
}: EditPermissionDialogProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Permission</DialogTitle>
          <DialogDescription>
            Perbarui informasi permission &quot;{data.sys_permission_nama}&quot;
            di bawah ini.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <EditPermissionForm
            key={data.sys_permission_id}
            permission={data}
            onSuccess={() => onOpenChange(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
