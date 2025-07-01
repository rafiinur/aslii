import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

import Link from "next/link";
import { CreateTemplateDialog } from "../components/dialog/create-template-dialog";
import { getApprovalTemplates } from "@/features/approval/services/approval.service";

export const TemplateCard = () => {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="hover:underline">
          <Link href="#">Leave Template</Link>
        </CardTitle>
        <CardDescription>Template for employee leave requests</CardDescription>
      </CardHeader>
    </Card>
  );
};

const ApprovalTemplatePage = async () => {
  const leaveTemplate = await getApprovalTemplates("leave_request");
  console.log("Leave Template:", leaveTemplate);

  return (
    <div className="container mx-auto">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="section-title">Approval Templates</h2>
          <p className="text-sm text-muted-foreground">
            Manage the approval workflows for different request types.
          </p>
        </div>
        <CreateTemplateDialog />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </div>
  );
};

export default ApprovalTemplatePage;
