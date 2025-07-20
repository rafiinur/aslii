// src/components/create-role-button.tsx

"use client";

import * as React from "react";
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
import { CreateRoleForm } from "./create-role-form";

export function CreateRoleButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Tambah Role
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Tambah Role Baru</DialogTitle>
          <DialogDescription>
            Isi detail di bawah ini untuk mendaftarkan role baru ke dalam
            sistem.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <CreateRoleForm onSuccess={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
