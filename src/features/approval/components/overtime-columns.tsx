"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Clock, Timer, FileText, ChevronsRight } from "lucide-react";
import { formatTime } from "@/lib/utils";
import type { OvertimeApproval } from "../type";
import { SortingButton } from "@/components/sorting-button";
import Link from "next/link";

export const overtimeColumns: ColumnDef<OvertimeApproval>[] = [
  {
    accessorKey: "pengaju.m_user_profile_nama_lengkap",
    header: ({ column }) => (
      <SortingButton column={column} label="Nama Pengaju" />
    ),
    size: 150,
  },
  {
    accessorKey: "t_overtime_waktu_mulai",
    header: () => (
      <div className="flex items-center space-x-2">
        <Clock className="h-4 w-4" />
        <span>Waktu Mulai</span>
      </div>
    ),
    cell: ({ row }) => {
      const date = row.getValue<string>("t_overtime_waktu_mulai");
      return (
        <span className="whitespace-nowrap">
          {date ? formatTime(date) : "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "t_overtime_waktu_berakhir",
    header: () => (
      <div className="flex items-center space-x-2">
        <Clock className="h-4 w-4" />
        <span>Waktu Berakhir</span>
      </div>
    ),
    cell: ({ row }) => {
      const date = row.getValue<string>("t_overtime_waktu_berakhir");

      return (
        <span className="whitespace-nowrap">
          {date ? formatTime(date) : "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "t_overtime_durasi_jam",
    header: () => (
      <div className="flex items-center space-x-2">
        <Timer className="h-4 w-4" />
        <span>Durasi</span>
      </div>
    ),
    cell: ({ row }) => {
      const duration = row.getValue("t_overtime_durasi_jam") as number;
      const hours = Math.floor(duration);
      const minutes = Math.round((duration - hours) * 60);

      return (
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <div>
            <div className="font-semibold text-sm">
              {hours}j {minutes > 0 ? `${minutes}m` : ""}
            </div>
            <div className="text-xs text-muted-foreground">
              {duration.toFixed(1)} jam
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "t_overtime_status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("t_overtime_status") as string;

      const getStatusVariant = (status: string) => {
        switch (status?.toLowerCase()) {
          case "pending":
            return "secondary";
          case "approved":
          case "disetujui":
            return "default";
          case "rejected":
          case "ditolak":
            return "destructive";
          default:
            return "outline";
        }
      };

      const getStatusColor = (status: string) => {
        switch (status?.toLowerCase()) {
          case "pending":
            return "bg-yellow-100 text-yellow-800 border-yellow-200";
          case "approved":
          case "disetujui":
            return "bg-green-100 text-green-800 border-green-200";
          case "rejected":
          case "ditolak":
            return "bg-red-100 text-red-800 border-red-200";
          default:
            return "bg-gray-100 text-gray-800 border-gray-200";
        }
      };

      return (
        <Badge
          variant={getStatusVariant(status)}
          className={`capitalize font-medium px-3 py-1 ${getStatusColor(
            status
          )}`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: () => (
      <div className="flex items-center space-x-2">
        <FileText className="h-4 w-4" />
        <span>Detail</span>
      </div>
    ),
    cell: ({ row }) => {
      const overtime = row.original;

      return (
        <Link href={`/approval/overtime/${overtime.t_overtime_id}`}>
          <ChevronsRight className="h-4 w-4 text-primary" />
        </Link>
      );
    },
  },
];
