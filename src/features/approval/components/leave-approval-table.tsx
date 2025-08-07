"use client";

import { useLeaveApprovals } from "../hooks/use-leave-approvals";
import { DataTable } from "@/components/data-table";
import { leaveColumns } from "./leave-columns";

const LeaveApprovalTable = () => {
  const { data, isLoading, error } = useLeaveApprovals();

  return (
    <>
      <DataTable
        columns={leaveColumns}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default LeaveApprovalTable;
