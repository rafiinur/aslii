import { SortingButton } from "@/components/sorting-button";
import { Badge } from "@/components/ui/badge";
import { ListDocument } from "@/types/documents";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EllipsisVertical,
  Download,
  Edit,
  MoreHorizontal,
  ExternalLink,
} from "lucide-react";

const handleStatusChange = (
  fileId: string,
  newStatus: "Aktif" | "Non-Aktif"
) => {
  console.log(`Changing file ${fileId} status to: ${newStatus}`);
};

export const columns: ColumnDef<ListDocument>[] = [
  {
    accessorKey: "judul",
    header: ({ column }) => <SortingButton column={column} label="Judul" />,
  },
  {
    accessorKey: "tanggalUpload",
    header: ({ column }) => (
      <SortingButton column={column} label="Tanggal Upload" />
    ),
  },
  {
    accessorKey: "versi",
    header: ({ column }) => <SortingButton column={column} label="Versi" />,
  },
  {
    accessorKey: "pemilik",
    header: ({ column }) => <SortingButton column={column} label="Pemilik" />,
  },
  {
    accessorKey: "ukuran",
    header: ({ column }) => <SortingButton column={column} label="Ukuran" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortingButton column={column} label="Status" />,
    cell: ({ row }) => {
      const status = row.getValue<string>("status");

      let colorClass = "";
      if (status === "Aktif") {
        colorClass = "bg-success-100 text-success-600";
      } else if (status === "Non-Aktif") {
        colorClass = "bg-error-100 text-error-600";
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
    id: "aksi",
    header: "",
    cell: ({ row }) => {
      const file = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            className="h-8 w-8 p-0 hover:bg-accent hover:text-accent-foreground flex items-center justify-center rounded-md transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <EllipsisVertical className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <ExternalLink className="mr-2 h-4 w-4" />
              Open file
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              Unduh
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Ubah Judul
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <MoreHorizontal className="mr-2 h-4 w-4" />
                Ubah Status
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-32">
                <DropdownMenuItem
                  onClick={() => handleStatusChange(file.judul, "Aktif")}
                  className="p-2"
                >
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 w-full justify-center">
                    Aktif
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleStatusChange(file.judul, "Non-Aktif")}
                  className="p-2"
                >
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100 w-full justify-center">
                    Non-Aktif
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
