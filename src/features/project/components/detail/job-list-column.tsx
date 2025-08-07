"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SortingButton } from "@/components/sorting-button";
import type { ListJob } from "@/features/project/type";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<ListJob>[] = [
    {
        accessorKey: "nama_tugas",
        header: ({ column }) => (
        <SortingButton column={column} label="Nama Tugas" />
        ),
    },
    {
        accessorKey: "penanggung_jawab",
        header: ({ column }) => (
        <SortingButton column={column} label="Penanggung Jawab" />
        ),
    },
    {
        accessorKey: "tanggal_mulai",
        header: ({ column }) => (
        <SortingButton column={column} label="Tanggal Mulai" />
        ),
    },
    {
        accessorKey: "tenggat",
        header: ({ column }) => <SortingButton column={column} label="Tenggat" />,
    },
    {
        accessorKey: "status",
        header: ({ column }) => <SortingButton column={column} label="Status" />,
        cell: ({ row }) => {
            const status = row.getValue<string>("status");
            const variant =
                status === "Tertunda"
                    ? "destructive"
                    : status === "Berjalan"
                    ? "warning"
                    : "success";
            return (
                <Badge variant={variant} className="capitalize">
                    {status}
                </Badge>
            );
        },
    },
];