"use client";

import { useState } from "react";
import { leaveColumns } from "./leave-columns";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Search,
  FileText,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLeaveApprovals } from "../hooks/use-leave-approvals";

const LeaveApprovalTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const { data, isLoading, error } = useLeaveApprovals();

  const table = useReactTable({
    data: data || [],
    columns: leaveColumns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="flex flex-1 flex-col gap-4">
      {/* Header Section */}
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Leave Approvals</h2>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          {/* <Input
            placeholder="Search by name..."
            value={
              (table
                .getColumn("pengaju.m_user_profile_nama_lengkap")
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn("pengaju.m_user_profile_nama_lengkap")
                ?.setFilterValue(event.target.value)
            }
            className="pl-10"
          /> */}
        </div>
      </div>

      {/* Table Section */}
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
              // Enhanced skeleton loading rows
              Array(5)
                .fill(0)
                .map((_, index) => (
                  <TableRow key={`skeleton-${index}`}>
                    {Array(leaveColumns.length)
                      .fill(0)
                      .map((_, cellIndex) => (
                        <TableCell
                          key={`skeleton-cell-${index}-${cellIndex}`}
                          className="py-4 px-6"
                        >
                          <Skeleton className="h-5 w-full" />
                        </TableCell>
                      ))}
                  </TableRow>
                ))
            ) : error ? (
              <TableRow>
                <TableCell
                  colSpan={leaveColumns.length}
                  className="h-32 text-center py-8"
                >
                  <div className="flex flex-col items-center gap-3">
                    <AlertCircle className="h-8 w-8 text-red-500" />
                    <p className="text-red-600 font-medium">
                      Error loading data
                    </p>
                    <p className="text-sm text-gray-500">
                      Please try again later or contact support
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`
                    transition-colors duration-150 hover:bg-blue-50/50 
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-50/30"}
                    border-b border-gray-100 last:border-b-0
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="py-4 px-6 text-sm text-gray-700"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={leaveColumns.length}
                  className="h-32 text-center py-8"
                >
                  <div className="flex flex-col items-center gap-3">
                    <FileText className="h-8 w-8 text-gray-400" />
                    <p className="text-gray-600 font-medium">No data found</p>
                    <p className="text-sm text-gray-500">
                      Try adjusting your search or filters
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Section */}
      <div className="flex items-center justify-between p-4 rounded-lg border">
        <div className="text-sm text-gray-600">
          Showing {table.getRowModel().rows.length} of {data?.length || 0}{" "}
          entries
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="gap-1 disabled:opacity-50"
          >
            <ArrowLeft /> Previous
          </Button>
          <div className="flex items-center gap-1 mx-2">
            <span className="text-sm text-gray-600">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="gap-1 disabled:opacity-50"
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeaveApprovalTable;
