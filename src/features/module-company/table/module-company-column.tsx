"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type ModuleCompany = {
  name: string;
  code: string;
  version: string;
};

export type ModuleType = {
  id: string;
  name: string;
  code: string;
  description?: string;
  is_active: boolean;
  permissions: {
    id: string;
    name: string;
    description?: string;
  }[];
};

export const moduleCompanyColumns: ColumnDef<ModuleCompany>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Nama Module
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
    header: "Kode Module",
    cell: ({ row }) => <div className="font-mono">{row.getValue("code")}</div>,
  },
  {
    accessorKey: "version",
    header: "Versi",
    cell: ({ row }) => (
      <div className="font-mono">{row.getValue("version")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Deskripsi",
    cell: ({ row }) => {
      const fullText = row.getValue("description") as string;
      const maxLength = 42;
      const truncated =
        fullText.length > maxLength
          ? `${fullText.slice(0, maxLength)}..`
          : fullText;

      return <div className="font-mono">{truncated}</div>;
    },
  },

  {
    id: "aksi",
    header: () => <div className="text-right">Aksi</div>,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Buka menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => alert(`Melihat detail untuk: ${data.name}`)}
              >
                Lihat Detail
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
