

"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ModuleDetailDialogProps {
  open: boolean;
  onClose: () => void;
  module: {
    name: string;
    code: string;
    description?: string;
    is_active: boolean;
    permissions: { id: string; name: string; description?: string }[];
  };
}

export function ModuleDetailDialog({ open, onClose, module }: ModuleDetailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Detail Modul</DialogTitle>
          <DialogDescription>Informasi lengkap tentang modul dan permission terkait.</DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Nama Modul</p>
            <p className="text-base font-semibold">{module.name}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground">Kode Modul</p>
            <p className="text-base font-semibold">{module.code}</p>
          </div>

          {module.description && (
            <div>
              <p className="text-sm font-medium text-muted-foreground">Deskripsi</p>
              <p className="text-base">{module.description}</p>
            </div>
          )}

          <div>
            <p className="text-sm font-medium text-muted-foreground">Status</p>
            <Badge variant={module.is_active ? "default" : "destructive"}>
              {module.is_active ? "Aktif" : "Nonaktif"}
            </Badge>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Permissions</p>
            {module.permissions.length === 0 ? (
              <p className="text-sm italic text-muted-foreground">Tidak ada permission.</p>
            ) : (
              <ScrollArea className="h-40 rounded-md border p-3">
                <ul className="space-y-2">
                  {module.permissions.map((perm) => (
                    <li key={perm.id}>
                      <p className="font-medium">{perm.name}</p>
                      {perm.description && (
                        <p className="text-sm text-muted-foreground">{perm.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            )}
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button onClick={onClose} variant="secondary">Tutup</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
