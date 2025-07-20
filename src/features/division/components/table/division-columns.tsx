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

type Division = {
  id: number;
  name: string;
  code: string;
  description: string;
  isActive: boolean;
  parent: string | null;
};

export const divisionColumns: ColumnDef<Division>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="font-mono">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Nama Divisi
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const name = row.original.name;

      return (
        <div className="max-w-[220px] truncate font-medium" title={name}>
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "code",
    header: "Kode Divisi",
    cell: ({ row }) => <div className="font-mono">{row.getValue("code")}</div>,
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.getValue("isActive");
      // ENHANCED VISUALS: Use badges for boolean status.
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
    accessorKey: "parent",
    header: "Divisi Parent",
    cell: ({ row }) => (
      <div className="font-mono">{row.getValue("parent")}</div>
    ),
  },
  {
    id: "aksi",
    header: () => <div className="text-right">Aksi</div>,
    cell: ({ row }) => {
      const mod = row.original;

      return (
        <div className="text-right">
          {/* INTERACTIVE ACTIONS: A clean dropdown for row actions. */}
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
                onClick={() => alert(`Melihat detail untuk: ${mod.name}`)}
              >
                Lihat Detail
              </DropdownMenuItem>
              <DropdownMenuItem>Edit Modul</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 focus:text-red-600">
                Hapus Modul
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
