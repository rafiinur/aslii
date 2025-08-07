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
import { CreateModuleForm } from "./create-module-form"; // Pastikan path ini benar

export function CreateModuleButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Tambah Modul
        </Button>
      </DialogTrigger>
      {/* 👇 PERBAIKAN UTAMA ADA DI SINI */}
      <DialogContent className="sm:max-w-2xl max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Tambah Modul Baru</DialogTitle>
          <DialogDescription>
            Isi detail di bawah ini untuk mendaftarkan modul baru ke dalam
            sistem.
          </DialogDescription>
        </DialogHeader>
        {/* Padding di sini memastikan ada ruang di atas dan bawah form */}
        <div className="py-4">
          <CreateModuleForm onSuccess={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
