// moved from src/app/(protected)/project/components/projects-column.tsx
// ...existing code...
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SortingButton } from "@/components/sorting-button";
import type { ListProject } from "@/features/project/type";

export const columns: ColumnDef<ListProject>[] = [
  {
    accessorKey: "nama_proyek",
    header: ({ column }) => (
      <SortingButton column={column} label="Nama Proyek" />
    ),
  },
  {
    accessorKey: "deskripsi",
    header: ({ column }) => <SortingButton column={column} label="Deskripsi" />,
  },
  {
    accessorKey: "jumlah_tasks",
    header: ({ column }) => (
      <SortingButton column={column} label="Jumlah Task" />
    ),
  },
  {
    accessorKey: "pic",
    header: ({ column }) => <SortingButton column={column} label="PIC" />,
  },
  {
    accessorKey: "deadline",
    header: ({ column }) => <SortingButton column={column} label="Deadline" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortingButton column={column} label="Status" />,
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <Link href="#">
        <Button
          size={"icon"}
          className="cursor-pointer rounded-full"
          variant="link"
        >
          <ChevronsRight />
        </Button>
      </Link>
    ),
  },
];
