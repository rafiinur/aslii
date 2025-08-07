"use client";

import { SortingButton } from "@/components/sorting-button";
import { Badge } from "@/components/ui/badge";
import { Employee } from "@/types/leaderboard";
import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";

export const columns: ColumnDef<Employee>[] = [
  {
    id: "no",
    header: () => "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "nama",
    header: ({ column }) => <SortingButton column={column} label="Nama" />,
  },
  {
    accessorKey: "idKaryawan",
    header: ({ column }) => (
      <SortingButton column={column} label="Id Karyawan" />
    ),
  },
  {
    accessorKey: "divisi",
    header: ({ column }) => <SortingButton column={column} label="Divisi" />,
    cell: ({ row }) => {
      const divisi = row.getValue<string>("divisi");

      let colorClass = "";
      if (divisi === "IT") {
        colorClass = "bg-secondary-100 text-secondary-600";
      } else if (divisi === "Marketing") {
        colorClass = "bg-primary-100 text-primary-600";
      } else if (divisi === "Copy Writer") {
        colorClass = "bg-error-100 text-error-600";
      } else if (divisi === "Business") {
        colorClass = "bg-success-100 text-success-600";
      } else if (divisi === "HR") {
        colorClass = "bg-warning-100 text-warning-600";
      } else {
        colorClass = "bg-gray-100 text-gray-700";
      }

      return (
        <Badge
          className={`${colorClass} text-sm leading-5 text-center rounded px-2 py-1`}
        >
          {divisi}
        </Badge>
      );
    },
  },
  {
    accessorKey: "jabatan",
    header: ({ column }) => <SortingButton column={column} label="Jabatan" />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortingButton column={column} label="Email" />,
  },
  {
    id: "aksi",
    header: () => "",
    cell: () => <Ellipsis />,
  },
];
