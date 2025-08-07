// src/components/edit-division-modal.tsx

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EditDivisionForm } from "./edit-division-form";
import { DivisionFormValues } from "@/schemas/division-schema";

interface EditDivisionModalProps {
  division: DivisionFormValues;
  parentDivisions?: { id: string; name: string }[];
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function EditDivisionModal({
  division,
  parentDivisions = [],
  open,
  onClose,
  onSuccess,
}: EditDivisionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Divisi</DialogTitle>
        </DialogHeader>
        <EditDivisionForm
          initialData={division}
          onSuccess={() => {
            onSuccess?.();
            onClose();
          }}
          parentDivisions={parentDivisions}
        />
      </DialogContent>
    </Dialog>
  );
}
