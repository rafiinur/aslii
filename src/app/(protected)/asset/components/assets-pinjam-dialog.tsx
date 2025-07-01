import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AssetsDialog from "./asets-dialog";

const AssetsPinjamDialog = () => {
  const trigger = (
    <Button className="bg-primary-100 text-primary-300 hover:bg-primary-200 transition">
      + Tambah Pinjam
    </Button>
  );

  const footer = (
    <>
      <DialogClose asChild>
        <Button type="button" variant="cancel">
          Batal
        </Button>
      </DialogClose>
      <Button type="submit" variant="confirm">
        Tambah
      </Button>
    </>
  );

  return (
    <AssetsDialog trigger={trigger} title="Tambah Pinjam" footer={footer}>
      <form className="grid grid-cols-2 gap-4">
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
            placeholder="Masukan nama aset ..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tanggalPinjam">Tanggal pinjam</Label>
          <Input id="tanggalPinjam" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lamaPinjam">Lama Pinjam (hari)</Label>
          <Input
            id="lamaPinjam"
            type="text"
            placeholder="Masukan lama pinjam ..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="namaPeminjam">Nama Peminjam</Label>
          <Select>
            <SelectTrigger id="namaPeminjam" className="w-full">
              <SelectValue placeholder="Pilih peminjam" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Elektronik">Elektronik</SelectItem>
              <SelectItem value="Furniture">Furniture</SelectItem>
              <SelectItem value="Kendaraan">Kendaraan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="divisi">Divisi</Label>
          <Select>
            <SelectTrigger id="divisi" className="w-full">
              <SelectValue placeholder="Pilih Divisi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Elektronik">IT</SelectItem>
              <SelectItem value="Furniture">Marketing</SelectItem>
              <SelectItem value="Kendaraan">Management</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
    </AssetsDialog>
  );
};

export default AssetsPinjamDialog;
