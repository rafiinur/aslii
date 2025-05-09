"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { ListEmployee } from "@/types/employees";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { SortingButton } from "@/components/sorting-button";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<ListEmployee>[] = [
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
    accessorKey: "jabatan",
    header: ({ column }) => <SortingButton column={column} label="Jabatan" />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortingButton column={column} label="Email" />,
  },
  {
    id: "detail",
    header: "",
    cell: () => (
      <Link href="/employees/detail/1">
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
