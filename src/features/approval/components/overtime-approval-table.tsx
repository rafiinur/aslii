"use client";

import { DataTable } from "@/components/data-table";
import { useOvertimeApprovals } from "../hooks/use-overtime-approvals";
import { overtimeColumns } from "./overtime-columns";

const OvertimeApprovalTable = () => {
  const { data, isLoading, error } = useOvertimeApprovals();

  return (
    <>
      <DataTable
        columns={overtimeColumns}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default OvertimeApprovalTable;
