import React from "react";
import { AcceptApprovalDialog } from "../../../../../features/approval/components/dialog/accept-approval-dialog";
import { RejectApprovalDialog } from "../../../../../features/approval/components/dialog/reject-approval-dialog";
import ApprovalStatusStepper from "@/features/approval/components/approval-status-stepper";

const OvertimeRequestDetailPage = ({ params }: { params: { id: string } }) => {
  console.log("Approval ID:", params.id);
  return (
    <>
      <div className="flex items-center justify-end gap-4 mb-4 px-4">
        <AcceptApprovalDialog />
        <RejectApprovalDialog />
      </div>
      <ApprovalStatusStepper />
    </>
  );
};

export default OvertimeRequestDetailPage;
