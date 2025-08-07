// moved from src/app/(protected)/project/components/projects-column.tsx
// ...existing code...
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SortingButton } from "@/components/sorting-button";
import type { Project } from "../type";

import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export const columns: ColumnDef<
  Project & { jumlah_tasks?: number; pic?: string; deadline?: string }
>[] = [
  {
    accessorKey: "t_project_nama",
    header: ({ column }) => (
      <SortingButton column={column} label="Nama Proyek" />
    ),
    size: 200,
    cell: ({ row }) => {
      const name = row.original.t_project_nama;
      return (
        <div className="truncate font-medium" title={name}>
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "t_project_deskripsi",
    header: "Deskripsi",
    size: 200,
    cell: ({ row }) => (
      <div className="truncate" title={row.getValue("t_project_deskripsi")}>
        {row.getValue("t_project_deskripsi")}
      </div>
    ),
  },
  {
    accessorKey: "jumlah_tasks",
    header: "Jumlah Task",
    size: 100,
    cell: ({ row }) => (
      <div className="text-center font-semibold">
        {row.original.jumlah_tasks ?? "-"}
      </div>
    ),
  },
  {
    accessorKey: "pic",
    header: "PIC",
    size: 120,
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.original.pic ?? "-"}</div>
    ),
  },
  {
    accessorKey: "t_project_tanggal_berakhir",
    header: "Deadline",
    size: 120,
    cell: ({ row }) => {
      const date = row.getValue<string>("t_project_tanggal_berakhir");
      return <div className="text-center">{date ? formatDate(date) : "-"}</div>;
    },
  },
  {
    accessorKey: "t_project_status",
    header: () => <div className="text-center">Status</div>,
    size: 120,
    cell: ({ row }) => {
      const status = row.getValue("t_project_status") as string;
      type BadgeVariant =
        | "outline"
        | "success"
        | "default"
        | "destructive"
        | "secondary"
        | "warning";
      let badgeVariant: BadgeVariant = "outline";
      if (status === "Completed") badgeVariant = "success";
      else if (status === "On Progress") badgeVariant = "default";
      else if (status === "planning") badgeVariant = "destructive";
      else if (status === "Not Started") badgeVariant = "outline";
      return (
        <div className="flex justify-center">
          <Badge variant={badgeVariant} className="capitalize">
            {status}
          </Badge>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center">Aksi</div>,
    cell: () => {
      return (
        <Link href={`/project/detail/1`} className="text-end">
          <Button
            size={"icon"}
            className="cursor-pointer rounded-full"
            variant="link"
          >
            <ChevronsRight />
          </Button>
        </Link>
      );
    },
  },
];
