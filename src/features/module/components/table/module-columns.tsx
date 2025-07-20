"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import type { Module } from "../../types";
import { ActionsCell } from "@/components/actions-cell";
import { EditModuleDialog } from "../edit-module-dialog";
import { ConfirmDeleteDialog } from "@/components/ui/confirm-delete-dialog";

export const moduleColumns: ColumnDef<Module>[] = [
  {
    accessorKey: "sys_module_id",
    header: "ID",
    size: 80,
    cell: ({ row }) => (
      <div className="font-mono text-center">
        {row.getValue("sys_module_id")}
      </div>
    ),
  },
  {
    accessorKey: "sys_module_name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="h-auto p-0 font-semibold"
      >
        Nama Modul
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    size: 200,
    cell: ({ row }) => {
      const name = row.original.sys_module_name;
      // SOLVES OVERFLOW: Truncate long names to prevent layout issues.
      return (
        <div className="truncate font-medium" title={name}>
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "sys_module_code",
    header: "Kode",
    size: 120,
    cell: ({ row }) => (
      <div className="font-mono">{row.getValue("sys_module_code")}</div>
    ),
  },
  {
    accessorKey: "sys_module_version",
    header: "Versi",
    size: 100,
    cell: ({ row }) => (
      <div className="font-mono">{row.getValue("sys_module_version")}</div>
    ),
  },

  {
    accessorKey: "sys_module_is_active",
    header: "Status",
    size: 100,
    cell: ({ row }) => {
      const isActive = row.getValue("sys_module_is_active");
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
    accessorKey: "sys_module_is_system_module",
    header: "Sistem Modul",
    size: 120,
    cell: ({ row }) => {
      const isSystem = row.getValue("sys_module_is_system_module");

      return (
        <div className="flex items-center justify-center">
          {isSystem ? (
            <Badge
              variant="default"
              className="bg-green-600 hover:bg-green-700"
            >
              Ya
            </Badge>
          ) : (
            <Badge variant="destructive">Tidak</Badge>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "sys_module_api_endpoints",
    header: "Endpoints",
    size: 120,
    cell: ({ row }) => {
      const endpoints: string[] = row.getValue("sys_module_api_endpoints");
      // IMPROVED LIST HANDLING: Show a count instead of a long list.
      // This keeps row heights consistent and the UI clean.
      if (!endpoints || endpoints.length === 0) {
        return (
          <div className="flex justify-center">
            <Badge variant="outline">0</Badge>
          </div>
        );
      }
      return (
        <div className="flex justify-center">
          <Badge variant="secondary">{endpoints.length} endpoints</Badge>
        </div>
      );
    },
  },
  {
    id: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    size: 80,
    cell: ({ row }) => {
      const mod = row.original;
      return (
        <ActionsCell
          dialogs={[
            {
              key: "edit",
              element: (
                <EditModuleDialog
                  data={mod}
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
                    console.log("Deleting module:", mod.sys_module_id);
                  }}
                  title={`Hapus module "${mod.sys_module_name}"?`}
                  description="Aksi ini akan menghapus module secara permanen. Aksi ini tidak dapat dibatalkan."
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
