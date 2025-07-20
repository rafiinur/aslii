"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Trash2, Edit } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { Permission } from "../../type";
import { ActionsCell } from "@/components/actions-cell";

import { ConfirmDeleteDialog } from "@/components/ui/confirm-delete-dialog";
import { EditPermissionDialog } from "../edit-permission-dialog";

export const permissionColumns: ColumnDef<Permission>[] = [
  {
    header: "No",
    size: 60,
    cell: ({ row }) => {
      const index = row.index + 1;

      return (
        <div className="flex justify-center">
          <Badge variant="outline">{index}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "sys_permission_name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="h-auto p-0 font-semibold"
      >
        Nama Permission
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    size: 150,
    cell: ({ row }) => {
      const name = row.original.sys_permission_nama;

      return (
        <div className="truncate font-medium" title={name}>
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "sys_permission_deskripsi",
    header: "Deskripsi",
    size: 200,
    cell: ({ row }) => (
      <div
        className="truncate"
        title={row.getValue("sys_permission_deskripsi")}
      >
        {row.getValue("sys_permission_deskripsi")}
      </div>
    ),
  },
  {
    accessorKey: "sys_permission_module",
    header: "Modul",
    size: 150,
    cell: ({ row }) => (
      <div className="font-mono">{row.getValue("sys_permission_module")}</div>
    ),
  },
  {
    accessorKey: "sys_permission_group",
    header: "Grup",
    size: 100,
    cell: ({ row }) => (
      <div className="font-mono">{row.getValue("sys_permission_group")}</div>
    ),
  },
  {
    accessorKey: "sys_permission_is_system",
    header: () => <div className="text-center">Sistem</div>,
    size: 100,
    cell: ({ row }) => {
      const isActive = row.getValue("sys_permission_is_system");
      // ENHANCED VISUALS: Use badges for boolean status.
      return (
        <div className="flex justify-center">
          {isActive ? (
            <Badge
              variant="default"
              className="bg-green-600 hover:bg-green-700"
            >
              Aktif
            </Badge>
          ) : (
            <Badge variant="destructive">Tidak Aktif</Badge>
          )}
        </div>
      );
    },
  },
  {
    id: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    size: 80,
    cell: ({ row }) => {
      const permission = row.original;
      return (
        <ActionsCell
          dialogs={[
            {
              key: "edit",
              element: (
                <EditPermissionDialog
                  data={permission}
                  isOpen={false}
                  onOpenChange={() => {}}
                />
              ),
            },
            {
              key: "delete",
              element: (
                <ConfirmDeleteDialog
                  isOpen={false}
                  onOpenChange={() => {}}
                  onConfirm={() => {
                    // TODO: implement delete logic here
                    console.log(
                      "Deleting permission:",
                      permission.sys_permission_id
                    );
                  }}
                  title={`Hapus permission "${permission.sys_permission_nama}"?`}
                  description="Aksi ini akan menghapus permission secara permanen. Aksi ini tidak dapat dibatalkan."
                />
              ),
            },
          ]}
        >
          {(openDialog) => (
            <>
              <DropdownMenuItem onSelect={() => openDialog("edit")}>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit Permission</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => openDialog("delete")}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4 text-destructive" />
                <span>Hapus Permission</span>
              </DropdownMenuItem>
            </>
          )}
        </ActionsCell>
      );
    },
  },
];
