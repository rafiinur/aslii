"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AnnouncementType } from "@/types/announcement";
import Link from "next/link";
import { SortingButton } from "@/components/sorting-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Pencil } from "lucide-react";

export const columns: ColumnDef<AnnouncementType>[] = [
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
      return <Badge>{status}</Badge>;
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
            <Button size={"icon"} className="rounded-xs">
              <Info />
            </Button>
          </Link>
          <Link href={`/announcements/edit/${id}`}>
            <Button size={"icon"} className="rounded-xs">
              <Pencil />
            </Button>
          </Link>
        </div>
      );
    },
  },
];
