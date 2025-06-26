import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AssetsTambahDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-300 text-primary-100 hover:bg-primary-400 transition">
          + Tambah Asset
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Aset</DialogTitle>
          <DialogDescription>
            Masukkan informasi aset di bawah ini.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="namaAset">Nama Aset</Label>
            <Input id="namaAset" type="text" placeholder="Masukan nama aset ..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="kodeAset">Kode Aset</Label>
            <Input id="kodeAset" type="text" placeholder="Masukan Kode Aset ..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="kategori">Kategori</Label>
            <Select>
              <SelectTrigger id="kategori" className="w-full">
                <SelectValue placeholder="Pilih kategori"/>
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

        <DialogFooter className="flex justify-end gap-3">
          <Button className="bg-success-300 text-white hover:bg-success-400 cursor-pointer">Tambah</Button>
          <Button className="bg-error-300 text-white hover:bg-error-400 cursor-pointer">Batal</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AssetsTambahDialog;
