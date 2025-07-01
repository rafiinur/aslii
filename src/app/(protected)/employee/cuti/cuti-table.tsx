"use client";

import { useState } from "react";
import { columns } from "./cuti-column";

import { Skeleton } from "@/components/ui/skeleton";

import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LeaveTypes } from "@/features/employee/types";

interface LeaveTableProps {
  data: LeaveTypes[];
  isLoading: boolean;
  error: unknown | null | undefined;
}

const LeaveTable = ({
  data,
  isLoading = false,
  error = false,
}: LeaveTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  // Table is always rendered, but the body changes based on state

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            // Skeleton loading rows
            Array(5)
              .fill(0)
              .map((_, index) => (
                <TableRow key={`skeleton-${index}`}>
                  {Array(columns.length)
                    .fill(0)
                    .map((_, cellIndex) => (
                      <TableCell
                        key={`skeleton-cell-${index}-${cellIndex}`}
                        className="py-3"
                      >
                        <Skeleton className="h-6 w-full" />
                      </TableCell>
                    ))}
                </TableRow>
              ))
          ) : error ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                <p className="text-red-500">
                  Error loading leavets. Please try again later.
                </p>
              </TableCell>
            </TableRow>
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-start px-5">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaveTable;
