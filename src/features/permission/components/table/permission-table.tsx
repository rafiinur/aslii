"use client";

import { usePermission } from "../../hooks/use-permission";
import { permissionColumns } from "./permission-columns";
import { DataTable } from "@/components/data-table";

const PermissionTable = () => {
  const { data, isLoading, error } = usePermission();

  return (
    <>
      <DataTable
        columns={permissionColumns}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default PermissionTable;
