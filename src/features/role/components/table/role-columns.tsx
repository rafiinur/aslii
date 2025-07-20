"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ActionsCell } from "@/components/actions-cell";
import { EditRoleDialog } from "../edit-role-dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ConfirmDeleteDialog } from "@/components/ui/confirm-delete-dialog";

import type { Role } from "../../types";

export const roleColumns: ColumnDef<Role>[] = [
  {
    accessorKey: "r_role_id",
    header: () => <div className="text-center">ID</div>,
    size: 50,
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Badge variant="outline">{row.getValue("r_role_id")}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "r_role_nama",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="h-auto p-0 font-semibold"
      >
        Nama Role
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    size: 200,
    cell: ({ row }) => {
      const name = row.original.r_role_nama;
      return (
        <div className="truncate font-medium" title={name}>
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "r_role_deskripsi",
    header: "Deskripsi",
    size: 300,
    cell: ({ row }) => (
      <div className="truncate" title={row.getValue("r_role_deskripsi")}>
        {row.getValue("r_role_deskripsi")}
      </div>
    ),
  },
  {
    accessorKey: "r_role_is_system_role",
    header: () => <div className="text-center">System Role</div>,
    size: 120,
    cell: ({ row }) => {
      const isActive = row.getValue("r_role_is_system_role");
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
    cell: ({ row }) => {
      const role = row.original;
      return (
        <ActionsCell
          dialogs={[
            {
              key: "edit",
              element: (
                <EditRoleDialog
                  data={role}
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
                    console.log("Deleting role:", role.r_role_id);
                  }}
                  title={`Hapus role "${role.r_role_nama}"?`}
                  description="Aksi ini akan menghapus role secara permanen. Aksi ini tidak dapat dibatalkan."
                />
              ),
            },
          ]}
        >
          {(openDialog) => (
            <>
              <DropdownMenuItem onSelect={() => openDialog("edit")}>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit Role</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => openDialog("delete")}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 h-4 w-4 text-destructive" />
                <span>Hapus Role</span>
              </DropdownMenuItem>
            </>
          )}
        </ActionsCell>
      );
    },
  },
];
