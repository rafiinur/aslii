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
      <Button variant="confirm">Simpan</Button>
      <DialogClose asChild>
        <Button variant="cancel">Batal</Button>
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
            <p className="text-xs text-neutral-500">Unggah Gambar</p>
          </div>
          <Input type="file" id="asset" className="sr-only" />
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="namaAset">Nama Aset</Label>
            <Input
              id="namaAset"
              type="text"
              placeholder="Masukan nama aset ..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="kodeAset">Kode Aset</Label>
            <Input
              id="kodeAset"
              type="text"
              placeholder="Masukan kode aset ..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="kategori">Kategori</Label>
            <Select>
              <SelectTrigger id="kategori" className="w-full">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Elektronik">Elektronik</SelectItem>
                <SelectItem value="Furniture">Furniture</SelectItem>
                <SelectItem value="Kendaraan">Kendaraan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select>
              <SelectTrigger id="status" className="w-full">
                <SelectValue placeholder="Pilih status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Aktif">Aktif</SelectItem>
                <SelectItem value="Rusak">Rusak</SelectItem>
                <SelectItem value="Perbaikan">Perbaikan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tglPerolehan">Tanggal Perolehan</Label>
            <Input id="tglPerolehan" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tglAkhir">Tanggal Akhir Masa Pakai</Label>
            <Input id="tglAkhir" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="biayaPerolehan">Biaya Perolehan (Rp)</Label>
            <Input id="biayaPerolehan" type="text" placeholder="000.000" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nilaiSaatIni">Nilai Saat Ini (Rp)</Label>
            <Input id="nilaiSaatIni" type="text" placeholder="000.000" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="depresiasi">Tingkat Depresiasi (%/tahun)</Label>
            <Input id="depresiasi" type="text" placeholder="... %" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pemeliharaan">Pemeliharaan Terakhir</Label>
            <Input id="pemeliharaan" type="date" />
          </div>
        </div>
      </div>
    </AssetsDialog>
  );
};

export default AssetsEditDialog;
