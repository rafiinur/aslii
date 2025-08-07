import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const DocumentsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
      <div className="">
        <h4 className="font-semibold text-lg">Dokumen</h4>
        <p className="text-sm  leading-5 text-neutral-900">
          Seluruh informasi tentang bisnis Anda ada di sini
        </p>
      </div>

      <div className="flex gap-2.5">
        <Select>
          <SelectTrigger className="border-2 border-primary-300 text-neutral-900 leading-5 py-1.5 px-2.5">
            <SelectValue placeholder="Periode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tahun-ini">Tahun ini</SelectItem>
            <SelectItem value="bulan-ini">Bulan ini</SelectItem>
            <SelectItem value="minggu-ini">Minggu ini</SelectItem>
            <SelectItem value="hari-ini">Hari ini</SelectItem>
          </SelectContent>
        </Select>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">
              <span>
                <Plus size={16} />
              </span>
              Upload Dokumen
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Dokumen</DialogTitle>
            </DialogHeader>
            <div className=" flex flex-col gap-3">
              <Input placeholder="Masukan Judul..." />
              <Textarea placeholder="Masukan Deskripsi..." className="h" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="version">Versi</Label>
                <Input id="version" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="version">Level Akses Dokumen</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih level akses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua-pekerja">Semua pekerja</SelectItem>
                    <SelectItem value="pekerja">Privat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="version">Lokasi File</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Lokasi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pekerja"> Pekerja</SelectItem>
                    <SelectItem value="perusahaan">Perusahaan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="file">File</Label>
                <Input id="file" type="file" />
              </div>
            </div>
            <div className="flex w-full justify-end gap-2">
              <Button className="bg-success-300 hover:bg-success-600 cursor-pointer">
                Upload
              </Button>
              <Button className="bg-error-300 hover:bg-error-600 cursor-pointer">
                Batal
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DocumentsHeader;
