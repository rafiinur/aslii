"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SortingButton } from "@/components/sorting-button";
import type { ListTeam } from "@/features/project/type";

export const columns: ColumnDef<ListTeam>[] = [
  {
    accessorKey: "nama_anggota",
    header: ({ column }) => (
      <SortingButton column={column} label="Nama" />
    ),
  },
  {
    accessorKey: "peran",
    header: ({ column }) => <SortingButton column={column} label="Peran" />,
  },
];