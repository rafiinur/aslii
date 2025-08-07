import React from "react";
import { Button } from "@/components/ui/button";
import { Camera, Pencil } from "lucide-react";
import AssetsDialog from "./asets-dialog";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AssetsEditDialog = () => {
  const trigger = (
    <Button className="cursor-pointer bg-warning-200 text-primary-100 hover:bg-primary-400 transition rounded h-6 w-6">
      <Pencil fill="#FF9E10" className="text-warning-200" />
    </Button>
  );

  const footer = (
    <>
      <Button>Simpan</Button>
      <DialogClose asChild>
        <Button variant="outline">Batal</Button>
      </DialogClose>
    </>
  );

  return (
    <AssetsDialog title="Edit Asset" trigger={trigger} footer={footer}>
      <div className="grid grid-cols-2 gap-5 items-center">
        <Label
          htmlFor="asset"
          className="bg-primary-100 border border-primary-300 h-full rounded-xl flex items-center justify-center"
        >
          <div className=" flex flex-col items-center">
            <Camera className="text-primary-300 h-28 w-28" />
          </div>
        </Label>
        <div className="space-y-2">
          <Label htmlFor="namaAset">Nama Aset</Label>
          <Input id="namaAset" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="kodeAset">Kode Aset</Label>
          <Input id="kodeAset" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="kategori">Kategori</Label>
          <Select>
            <SelectTrigger id="kategori">
              <SelectValue placeholder="Pilih Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="elektronik">Elektronik</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select>
            <SelectTrigger id="status">
              <SelectValue placeholder="Pilih Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aktif">Aktif</SelectItem>
              <SelectItem value="rusak">Rusak</SelectItem>
              <SelectItem value="perbaikan">Perbaikan</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </AssetsDialog>
  );
};

export default AssetsEditDialog;
