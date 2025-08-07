import { SortingButton } from "@/components/sorting-button";
import { ListAsset } from "@/types/asset";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import AssetsDetailDialog from "./assets-detail-dialog";
import AssetsEditDialog from "./assets-edit-dialog";

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
        <AssetsDetailDialog />

        {/* Edit Dialog */}
        <AssetsEditDialog />
      </div>
    ),
  },
];
