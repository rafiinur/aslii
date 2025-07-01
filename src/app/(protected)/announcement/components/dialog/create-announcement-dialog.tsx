"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateAnnouncementForm from "../form/create-announcement-form";

export default function CreateAnnouncementDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <span>
            <Plus size={16} />
          </span>
          Tambah Pengumuman
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader className="mb-2.5">
          <DialogTitle className="text-2xl">Tambah Pengumuman</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="informasi" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-2.5">
            <TabsTrigger value="informasi">Informasi</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="informasi" className="mt-0">
            <CreateAnnouncementForm />
          </TabsContent>
          <TabsContent value="preview" className="mt-0">
            <div className="p-4 border rounded-lg">
              <p className="text-muted-foreground">
                Preview content will be shown here
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
