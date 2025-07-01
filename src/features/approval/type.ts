export type Approval = {
  workflowId: number;
  action: "approve" | "reject";
  note?: string;
};
