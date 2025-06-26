import { SortingButton } from "@/components/sorting-button";
import { ListAsset } from "@/types/asset";
import { ColumnDef } from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const columns: ColumnDef<ListAsset>[] = [
  {
    accessorKey: "namaAset",
    header: ({ column }) => <SortingButton column={column} label="Nama" />,
  },
  {
    accessorKey: "kode",
    header: ({ column }) => <SortingButton column={column} label="Kode" />,
  },
  {
    accessorKey: "kategori",
    header: ({ column }) => <SortingButton column={column} label="Kategori" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortingButton column={column} label="Status" />,
    cell: ({ row }) => {
      const status = row.getValue<string>("status");

      let colorClass = "";
      if (status === "Aktif") {
        colorClass = "bg-success-100 text-success-600";
      } else if (status === "Rusak") {
        colorClass = "bg-error-100 text-error-600";
      } else if (status === "Perbaikan") {
        colorClass = "bg-warning-100 text-warning-600";
      } else {
        colorClass = "bg-gray-100 text-gray-700";
      }

      return (
        <Badge className={`${colorClass} text-sm px-2 py-1 rounded`}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "digunakanOleh",
    header: ({ column }) => (
      <SortingButton column={column} label="Digunakan Oleh" />
    ),
  },
  {
    accessorKey: "nilaiSekarang",
    header: ({ column }) => (
      <SortingButton column={column} label="Nilai Sekarang" />
    ),
  },
  {
    accessorKey: "tanggal",
    header: ({ column }) => <SortingButton column={column} label="Tanggal" />,
  },
  {
    id: "aksi",
    header: "Aksi",
    cell: () => (
      <div className="space-x-3">
      {/* Detail Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="cursor-pointer bg-secondary-200 hover:bg-secondary-300 text-primary-100 transition rounded h-6 w-6 p-0">
            <InfoIcon className="text-secondary-600" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detail Asset</DialogTitle>
            <DialogDescription>Informasi detail asset.</DialogDescription>
          </DialogHeader>

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
            <div className="space-y-2 col-span-2">
              <Label>Nama Pengguna</Label>
              <Input value="Vermillion Arisyawal" disabled />
            </div>
          </div>

          <DialogFooter className="flex justify-end">
            <Button variant="secondary">Kembali</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="cursor-pointer bg-warning-200 text-primary-100 hover:bg-primary-400 transition rounded h-6 w-6">
            <Pencil fill="#FF9E10" className="text-warning-200" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Asset</DialogTitle>
            <DialogDescription>Edit informasi asset.</DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-2">
              <Label>Nama Aset</Label>
              <Input defaultValue="Laptop ASUS A416" />
            </div>
            <div className="space-y-2">
              <Label>Kode Aset</Label>
              <Input defaultValue="LP-ASUS-001" />
            </div>
            <div className="space-y-2">
              <Label>Kategori</Label>
              <Select defaultValue="Elektronik">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Elektronik">Elektronik</SelectItem>
                  <SelectItem value="Furniture">Furniture</SelectItem>
                  <SelectItem value="Kendaraan">Kendaraan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select defaultValue="Aktif">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Aktif">Aktif</SelectItem>
                  <SelectItem value="Rusak">Rusak</SelectItem>
                  <SelectItem value="Perbaikan">Perbaikan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Tanggal Perolehan</Label>
              <Input type="date" defaultValue="2024-05-11" />
            </div>
            <div className="space-y-2">
              <Label>Tanggal Akhir Masa Pakai</Label>
              <Input type="text" placeholder="-" />
            </div>
            <div className="space-y-2">
              <Label>Biaya Perolehan (Rp)</Label>
              <Input defaultValue="3.200.000" />
            </div>
            <div className="space-y-2">
              <Label>Nilai Saat Ini (Rp)</Label>
              <Input defaultValue="4.500.000" />
            </div>
            <div className="space-y-2">
              <Label>Tingkat Depresiasi (%/tahun)</Label>
              <Input defaultValue="10" />
            </div>
            <div className="space-y-2">
              <Label>Pemeliharaan Terakhir</Label>
              <Input type="date" defaultValue="2025-03-10" />
            </div>
            <div className="space-y-2 col-span-2">
              <Label>Nama Pengguna</Label>
              <Input defaultValue="Vermillion Arisyawal" />
            </div>
          </div>

          <DialogFooter className="flex justify-end gap-3">
            <Button className="bg-success-600 text-white hover:bg-success-700">Simpan</Button>
            <Button variant="destructive">Batal</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    ),
  },
];
