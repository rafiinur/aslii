import React from "react";
import ApprovalStatusStepper from "@/features/approval/components/approval-status-stepper";

const LeaveRequestDetailPage = ({ params }: { params: { id: string } }) => {
  console.log("Approval ID:", params.id);
  return (
    <>
      <ApprovalStatusStepper />
    </>
  );
};

export default LeaveRequestDetailPage;
