"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Paperclip,
  Calendar,
  FileText,
  Download,
  Tag,
  ChevronsRight,
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { LeaveApproval } from "../type";
import { SortingButton } from "@/components/sorting-button";
import Link from "next/link";

export const leaveColumns: ColumnDef<LeaveApproval>[] = [
  {
    accessorKey: "pengaju.m_user_profile_nama_lengkap",
    header: ({ column }) => (
      <SortingButton column={column} label="Nama Pengaju" />
    ),
    size: 200,
  },
  {
    accessorKey: "t_cuti_tanggal_mulai",
    header: () => (
      <div className="flex items-center space-x-2">
        <Calendar className="h-4 w-4" />
        <span>Tanggal Mulai</span>
      </div>
    ),
    cell: ({ row }) => {
      const date = row.getValue("t_cuti_tanggal_mulai") as string;

      if (!date) {
        return (
          <div className="font-medium text-sm text-muted-foreground">-</div>
        );
      }

      const dateObj = new Date(date);

      if (isNaN(dateObj.getTime())) {
        return (
          <div className="font-medium text-sm text-destructive">
            Invalid Date
          </div>
        );
      }

      const formattedDate = formatDate(date);

      return <div className="font-medium text-sm">{formattedDate}</div>;
    },
    size: 150,
  },
  {
    accessorKey: "t_cuti_tanggal_berakhir",
    header: () => (
      <div className="flex items-center space-x-2">
        <Calendar className="h-4 w-4" />
        <span>Tanggal Berakhir</span>
      </div>
    ),
    size: 150,
    cell: ({ row }) => {
      const date = row.getValue("t_cuti_tanggal_berakhir") as string;

      if (!date) {
        return (
          <div className="font-medium text-sm text-muted-foreground">-</div>
        );
      }

      const dateObj = new Date(date);

      if (isNaN(dateObj.getTime())) {
        return (
          <div className="font-medium text-sm text-destructive">
            Invalid Date
          </div>
        );
      }

      const formattedDate = formatDate(date);

      return <div className="font-medium text-sm">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "r_cuti_tipe.r_cuti_tipe_nama",
    header: () => (
      <div className="flex items-center space-x-2">
        <Tag className="h-4 w-4" />
        <span>Tipe Cuti</span>
      </div>
    ),
  },
  {
    accessorKey: "t_cuti_status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("t_cuti_status") as string;

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
    accessorKey: "t_cuti_attachment",
    header: () => (
      <div className="flex items-center space-x-2">
        <Paperclip className="h-4 w-4" />
        <span>Attachment</span>
      </div>
    ),
    cell: ({ row }) => {
      const attachment = row.getValue("t_cuti_attachment") as string;

      return attachment ? (
        <Button
          variant="outline"
          size="sm"
          className="h-8 px-3 hover:bg-blue-50 hover:border-blue-300 transition-colors"
          asChild
        >
          <a
            href={`https://xrcgpigrlqjxsskkqrbl.supabase.co/storage/v1/object/public/attachment/${attachment}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4 mr-1.5" />
            <span className="text-xs font-medium">Download</span>
          </a>
        </Button>
      ) : (
        <span className="text-xs text-muted-foreground">Tidak ada</span>
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
      const leave = row.original;

      return (
        <Link href={`/approval/leave/${leave.t_cuti_id}`}>
          <ChevronsRight className="h-4 w-4 text-primary" />
        </Link>
      );
    },
  },
];
