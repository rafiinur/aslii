import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AssetsPinjamDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-100 text-primary-300 hover:bg-primary-200 transition">
          + Tambah Pinjam
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Pinjam</DialogTitle>
          <DialogDescription>
            Isi form untuk menambahkan peminjaman baru.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AssetsPinjamDialog;
