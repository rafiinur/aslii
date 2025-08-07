import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AssetsDialog from "./asets-dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";

const AssetsDetailDialog = () => {
  const trigger = (
    <Button className="cursor-pointer bg-secondary-200 hover:bg-secondary-300 text-primary-100 transition rounded h-6 w-6 p-0">
      <InfoIcon className="text-secondary-600" />
    </Button>
  );

  return (
    <AssetsDialog title="Detail Asset" trigger={trigger} footer={""}>
      <div className="grid grid-cols-2 gap-4 py-4">
        <div className="space-y-2">
          <Label>Nama Aset</Label>
          <Input value="Laptop ASUS A416" disabled />
        </div>
        <div className="space-y-2">
          <Label>Kode Aset</Label>
          <Input value="LP-ASUS-001" disabled />
        </div>
        <div className="space-y-2">
          <Label>Kategori</Label>
          <Input value="Elektronik" disabled />
        </div>
        <div className="space-y-2">
          <Label>Status</Label>
          <Input value="Aktif" disabled />
        </div>
        <div className="space-y-2">
          <Label>Tanggal Perolehan</Label>
          <Input value="11/05/2024" disabled />
        </div>
        <div className="space-y-2">
          <Label>Tanggal Akhir Masa Pakai</Label>
          <Input value="-" disabled />
        </div>
        <div className="space-y-2">
          <Label>Biaya Perolehan (Rp)</Label>
          <Input value="3.200.000" disabled />
        </div>
        <div className="space-y-2">
          <Label>Nilai Saat Ini (Rp)</Label>
          <Input value="4.500.000" disabled />
        </div>
        <div className="space-y-2">
          <Label>Tingkat Depresiasi (%/tahun)</Label>
          <Input value="10" disabled />
        </div>
        <div className="space-y-2">
          <Label>Pemeliharaan Terakhir</Label>
          <Input value="10/03/2025" disabled />
        </div>
        <div className="flex items-end gap-4 col-span-2">
          <div className="space-y-2 w-3/4">
            <Label>Nama Pengguna</Label>
            <Input value="Vermillion Arisyawal" disabled />
          </div>
          <DialogClose asChild>
            <Button variant="cancel">Kembali</Button>
          </DialogClose>
        </div>
      </div>
    </AssetsDialog>
  );
};

export default AssetsDetailDialog;
