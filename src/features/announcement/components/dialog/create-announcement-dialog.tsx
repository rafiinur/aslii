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

export function CreateAnnouncementDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"}>
          <PlusCircle className="mr-2 h-4 w-4 " />
          Tambah Announcement
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-2xl max-h-[95vh] overflow-y-auto"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle>Tambah Announcement Baru</DialogTitle>
          <DialogDescription>
            Isi detail di bawah ini untuk mendaftarkan announcement baru ke
            dalam sistem.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {/* <CreateAnnouncementForm onSuccess={() => setIsOpen(false)} /> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
