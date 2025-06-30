"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { SortingButton } from "@/components/sorting-button";
import { Button } from "@/components/ui/button";
import { Info, Pencil, X } from "lucide-react";
import type { LeaveTypes } from "@/features/employee/types";

export const columns: ColumnDef<LeaveTypes>[] = [
  {
    accessorKey: "orderNumber",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "nama",
    header: ({ column }) => <SortingButton column={column} label="Nama" />,
  },
  {
    accessorKey: "divisi",
    header: ({ column }) => <SortingButton column={column} label="Divisi" />,
  },
  {
    accessorKey: "tgl_pengajuan",
    header: ({ column }) => (
      <SortingButton column={column} label="Tanggal Pengajuan" />
    ),
  },
  {
    accessorKey: "tgl_cuti",
    header: ({ column }) => (
      <SortingButton column={column} label="Tanggal Cuti" />
    ),
  },
  {
    accessorKey: "alasan",
    header: ({ column }) => <SortingButton column={column} label="Alasan" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortingButton column={column} label="Status" />,
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className="flex items-center gap-2">
          <Link href={`/announcements/${id}`}>
            <Button
              size={"icon"}
              className="rounded-xs size-6 bg-secondary-100 text-secondary-600 hover:bg-secondary-300 hover:text-secondary-100"
            >
              <Info />
            </Button>
          </Link>
          <Link href={`/announcements/edit/${id}`}>
            <Button
              size={"icon"}
              className="rounded-xs size-6 bg-warning-200 text-warning-400 hover:bg-warning-400 hover:text-warning-200"
            >
              <Pencil />
            </Button>
          </Link>
          <Link href={`/announcements/delete/${id}`}>
            <Button
              size={"icon"}
              className="rounded-xs size-6 bg-error-100 text-error-300 hover:bg-error-300 hover:text-error-100"
            >
              <X />
            </Button>
          </Link>
        </div>
      );
    },
  },
];
