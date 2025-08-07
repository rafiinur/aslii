"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SortingButton } from "@/components/sorting-button";
import { Badge } from "@/components/ui/badge";
import { Edit, Eye, Trash2 } from "lucide-react";
import { ActionsCell } from "@/components/actions-cell";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import EditAnnouncementDialog from "../dialog/edit-announcement-dialog";
import type { Announcement } from "@/features/announcement/type";
import ConfirmAnnouncementDeleteDialog from "../dialog/confirm-announcement-delete-dialog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const announcementColumns: ColumnDef<Announcement>[] = [
  {
    accessorKey: "t_pengumuman_judul",
    header: ({ column }) => <SortingButton column={column} label="Judul" />,
    size: 220,
    cell: ({ row }) => (
      <div
        className="font-semibold truncate"
        title={row.getValue("t_pengumuman_judul") as string}
      >
        {row.getValue("t_pengumuman_judul")}
      </div>
    ),
  },
  {
    accessorKey: "t_pengumuman_tanggal_publish",
    header: "Tanggal Publish",
    size: 120,
    cell: ({ row }) => {
      const date = row.getValue<string>("t_pengumuman_tanggal_publish");
      return (
        <span className="whitespace-nowrap">
          {date ? formatDate(date) : "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "t_pengumuman_tanggal_kedaluwarsa",
    header: "Kadaluarsa",
    size: 120,
    cell: ({ row }) => {
      const date = row.getValue<string>("t_pengumuman_tanggal_kedaluwarsa");
      return (
        <span className="whitespace-nowrap">
          {date ? formatDate(date) : "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "t_pengumuman_is_active",
    header: "Status",
    size: 120,
    cell: ({ row }) => {
      const status = row.getValue<string>("t_pengumuman_is_active");
      let variant: "success" | "destructive" | "warning" | "default" =
        "warning";
      let icon = null;
      if (status === "aktif") {
        variant = "success";
        icon = <span className="mr-1.5">🟢</span>;
      } else if (status === "nonaktif") {
        variant = "destructive";
        icon = <span className="mr-1.5">🔴</span>;
      } else {
        variant = "warning";
        icon = <span className="mr-1.5">⚠️</span>;
      }
      return (
        <Badge variant={variant} className="capitalize flex items-center gap-1">
          {icon}
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "t_pengumuman_target_audience",
    header: "Target",
    size: 120,
    cell: ({ row }) => {
      const target = row.getValue<string>("t_pengumuman_target_audience");
      let color: "default" | "secondary" | "destructive" | "outline" =
        "default";
      if (target === "Semua") color = "default";
      else if (target === "Karyawan") color = "secondary";
      else if (target === "Manajer") color = "outline";
      else if (target === "Admin") color = "destructive";
      return (
        <Badge variant={color} className="capitalize">
          {target}
        </Badge>
      );
    },
  },
  {
    id: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      const announcement = row.original;
      return (
        <ActionsCell
          dialogs={[
            {
              key: "edit",
              element: <EditAnnouncementDialog />,
            },
            {
              key: "delete",
              element: ConfirmAnnouncementDeleteDialog(
                announcement.t_pengumuman_id,
                announcement.t_pengumuman_judul
              ),
            },
          ]}
        >
          {(openDialog) => (
            <>
              <Link href={`/announcement/${announcement.t_pengumuman_id}`}>
                <DropdownMenuItem onSelect={() => openDialog("edit")}>
                  <Eye className="mr-2 h-4 w-4" />
                  <span>Lihat Detail</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem onSelect={() => openDialog("edit")}>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit Announcement</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => openDialog("delete")}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4 text-destructive" />
                <span>Hapus Announcement</span>
              </DropdownMenuItem>
            </>
          )}
        </ActionsCell>
      );
    },
  },
];
