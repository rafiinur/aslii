import React from "react";
import ApprovalStatusStepper from "../components/approval-status-stepper";
import { AcceptApprovalDialog } from "../components/dialog/accept-approval-dialog";
import { RejectApprovalDialog } from "../components/dialog/reject-approval-dialog";

const ApprovalDetailPage = ({ params }: { params: { id: string } }) => {
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

export default ApprovalDetailPage;
