"use client";

import { useModules } from "../../hooks/use-modules";
import { moduleColumns } from "./module-columns";
import { DataTable } from "@/components/data-table";

const ModuleTable = () => {
  const { data, isLoading, error } = useModules();

  return (
    <>
      <DataTable
        columns={moduleColumns}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default ModuleTable;
