// src/components/create-permission-button.tsx

"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreatePermissionForm } from "./create-permission-form";

export function CreatePermissionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Tambah Permission
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-2xl max-h-[95vh] overflow-y-auto"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle>Tambah Permission Baru</DialogTitle>
          <DialogDescription>
            Isi detail di bawah ini untuk mendaftarkan permission baru ke dalam
            sistem.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <CreatePermissionForm onSuccess={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
