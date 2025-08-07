"use client";

import { DataTable } from "@/components/data-table";
import { columns } from "./employees-column";
import { useUsers } from "@/features/auth/hooks/use-users";

const EmployeesTable = () => {
  const { data, isLoading, error } = useUsers();

  return (
    <DataTable
      columns={columns}
      data={data}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default EmployeesTable;
