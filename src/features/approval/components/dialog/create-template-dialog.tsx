import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import CreateTemplateForm from "../form/create-template-form";
import {
  getAllRoles,
  getAllUsers,
} from "@/features/auth/services/user.service";
import { ScrollArea } from "@/components/ui/scroll-area";

export async function CreateTemplateDialog() {
  const { roles } = await getAllRoles();
  const { users } = await getAllUsers();

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus />
            Tambah Template
          </Button>
        </DialogTrigger>
        <DialogContent className="overflow-y-auto max-h-[90vh] min-w-[80vw]">
          <DialogHeader>
            <DialogTitle>Buat Template</DialogTitle>
            <DialogDescription>
              Buat template baru untuk digunakan dalam proses persetujuan. Isi
              informasi berikut untuk membuat template baru.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea>
            <CreateTemplateForm roles={roles} users={users} />
          </ScrollArea>
        </DialogContent>
      </form>
    </Dialog>
  );
}
