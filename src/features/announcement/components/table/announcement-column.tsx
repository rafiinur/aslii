"use client";

import { ColumnDef } from "@tanstack/react-table";

import Link from "next/link";
import { SortingButton } from "@/components/sorting-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Pencil } from "lucide-react";
import type { Announcement } from "@/features/announcement/type";

export const columns: ColumnDef<Announcement>[] = [
  {
    accessorKey: "t_pengumuman_judul",
    header: ({ column }) => <SortingButton column={column} label="Judul" />,
  },
  {
    accessorKey: "t_pengumuman_tanggal_publish",
    header: ({ column }) => (
      <SortingButton column={column} label="Tanggal Publish" />
    ),
  },
  {
    accessorKey: "t_pengumuman_tanggal_kedaluwarsa",
    header: ({ column }) => (
      <SortingButton column={column} label="Kadaluarsa" />
    ),
  },
  {
    accessorKey: "t_pengumuman_is_active",
    header: ({ column }) => <SortingButton column={column} label="Status" />,
    cell: ({ row }) => {
      const status = row.getValue<string>("t_pengumuman_is_active");
      const variant =
        status === "aktif"
          ? "success"
          : status === "nonaktif"
          ? "destructive"
          : "warning";
      return (
        <Badge variant={variant} className="capitalize">
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "t_pengumuman_target_audience",
    header: ({ column }) => <SortingButton column={column} label="Target" />,
  },

  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => {
      const id = row.original.t_pengumuman_id;
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
        </div>
      );
    },
  },
];
