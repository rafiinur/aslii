import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
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
        <Button type="button" variant="outline">
          Batal
        </Button>
      </DialogClose>
      <Button type="submit">Tambah</Button>
    </>
  );

  return (
    <AssetsDialog trigger={trigger} title="Tambah Pinjam" footer={footer}>
      <form className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="namaAset">Nama Aset</Label>
          <Input id="namaAset" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="peminjam">Peminjam</Label>
          <Input id="peminjam" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tanggalPinjam">Tanggal Pinjam</Label>
          <Input id="tanggalPinjam" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tanggalKembali">Tanggal Kembali</Label>
          <Input id="tanggalKembali" type="date" />
        </div>
        <div className="space-y-2 col-span-2">
          <Label htmlFor="keterangan">Keterangan</Label>
          <Input id="keterangan" />
        </div>
      </form>
    </AssetsDialog>
  );
};

export default AssetsPinjamDialog;
