import type { ColumnDef } from "@tanstack/react-table";
import type { RoleCompany } from "../../services/role-company.service";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const roleCompanyColumns: ColumnDef<RoleCompany>[] = [
  {
    accessorKey: "name",
    header: "Nama Role",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: "Deskripsi",
    cell: ({ row }) => <div>{row.getValue("description") || "-"}</div>,
  },
  {
    id: "type",
    header: "Tipe Role",
    cell: ({ row }) => (
        row.original.is_system ? (
            <Badge variant="warning">System</Badge>
            ) : (
            <Badge variant="success">Company</Badge>
            )
        ),
    },
  {
    id: "aksi",
    header: "Aksi",
    cell: ({ row }) => {
      const role = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Buka menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => alert(`Detail: ${role.name}`)}>
              Lihat Detail
            </DropdownMenuItem>
            {!role.is_system && (
              <DropdownMenuItem onClick={() => alert(`Edit: ${role.name}`)}>
                Edit
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-600 focus:text-red-600"
              onClick={() => alert(`Hapus: ${role.name}`)}
            >
              Hapus
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];