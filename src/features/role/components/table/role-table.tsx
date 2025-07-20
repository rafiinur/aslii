"use client";

import { useRoles } from "../../hooks/use-roles";
import { roleColumns } from "./role-columns";
import { DataTable } from "@/components/data-table";

const RoleTable = () => {
  const { data, isLoading, error } = useRoles();

  return (
    <>
      <DataTable
        columns={roleColumns}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default RoleTable;
