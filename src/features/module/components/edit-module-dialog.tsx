"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Module } from "../types";
// import EditModuleForm from "./edit-module-form";

interface EditModuleDialogProps {
  data: Module;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditModuleDialog({
  data,
  isOpen,
  onOpenChange,
}: EditModuleDialogProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Module</DialogTitle>
          <DialogDescription>
            Perbarui informasi module &quot;{data.sys_module_name}&quot; di
            bawah ini.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {/* <EditModuleForm
            key={data.sys_module_id}
            module={data}
            onSuccess={() => onOpenChange(false)}
          /> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
