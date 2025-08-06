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
import { CreateDivisionForm } from "./create-division-form";

export function CreateDivisionButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Tambah Divisi
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Tambah Divisi Baru</DialogTitle>
          <DialogDescription>
            Isi detail di bawah ini untuk mendaftarkan divisi baru ke dalam perusahaan.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <CreateDivisionForm onSuccess={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
