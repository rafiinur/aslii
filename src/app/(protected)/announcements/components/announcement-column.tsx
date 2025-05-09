"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ListAnnouncement } from "@/types/announcement";
import Link from "next/link";
import { SortingButton } from "@/components/sorting-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, Pencil } from "lucide-react";

export const columns: ColumnDef<ListAnnouncement>[] = [
  {
    accessorKey: "judul",
    header: ({ column }) => <SortingButton column={column} label="Judul" />,
  },
  {
    accessorKey: "tgl_publish",
    header: ({ column }) => (
      <SortingButton column={column} label="Tanggal Publish" />
    ),
  },
  {
    accessorKey: "kadaluarsa",
    header: ({ column }) => (
      <SortingButton column={column} label="Kadaluarsa" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortingButton column={column} label="Status" />,
    cell: ({ row }) => {
      const status = row.getValue<string>("status");
      return (
        <Badge variant={status === "aktif" ? "destructive" : "default"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "target",
    header: ({ column }) => <SortingButton column={column} label="Target" />,
  },

  {
    id: "actions",
    header: "Aksi",
    cell: () => (
      <div className="flex items-center gap-2">
        <Link href={"#"}>
          <Button size={"icon"} className="rounded-xs">
            <Info />
          </Button>
        </Link>
        <Link href={"#"}>
          <Button size={"icon"} className="rounded-xs">
            <Pencil />
          </Button>
        </Link>
      </div>
    ),
  },
];
