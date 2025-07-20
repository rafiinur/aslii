"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Company } from "../../type";

export const companyColumns: ColumnDef<Company>[] = [
  {
    accessorKey: "nama_perusahaan",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Nama Perusahaan
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const name = row.original.nama_perusahaan;
      return (
        <div className="truncate font-medium" title={name}>
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "kode",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Kode
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-mono text-sm">{row.getValue("kode")}</div>
    ),
  },
  {
    accessorKey: "alamat",
    header: "Alamat",
    cell: ({ row }) => (
      <div className="max-w-xs truncate" title={row.getValue("alamat")}>
        {row.getValue("alamat")}
      </div>
    ),
  },
  {
    accessorKey: "no_telepon",
    header: "No Telepon",
    cell: ({ row }) => (
      <div className="font-mono text-sm">{row.getValue("no_telepon")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="truncate text-sm" title={row.getValue("email")}>
        {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.getValue("status");
      return isActive ? (
        <Badge variant="default" className="bg-green-600 hover:bg-green-700">
          Aktif
        </Badge>
      ) : (
        <Badge variant="destructive">Tidak Aktif</Badge>
      );
    },
  },
  {
    id: "aksi",
    header: () => <div className="text-left">Aksi</div>,
    cell: ({ row }) => {
      const company = row.original;

      return (
        <div className="text-left">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Buka menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  alert(`Melihat detail untuk: ${company.nama_perusahaan}`)
                }
              >
                Lihat Detail
              </DropdownMenuItem>
              <DropdownMenuItem>Edit Perusahaan</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 focus:text-red-600">
                Hapus Perusahaan
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
