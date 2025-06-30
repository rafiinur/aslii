"use server";

import { getAuthToken } from "@/features/auth/services/user.service";

type Steps = {
  order: number;
  approver_type: "user" | "role";
  approver_id: string;
};

export const createApprovalTemplate = async (type: string, steps: Steps[]) => {
  try {
    const tokens = await getAuthToken();

    if (!tokens.accessToken) {
      throw new Error("User is not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/permission-checker/approval/template`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify({ type, steps }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error creating approval template:", error);
    throw new Error("Failed to create approval template");
  }
};

export const updateApprovalStatus = async (
  workflowId: number,
  action: "approve" | "reject",
  note?: string
) => {
  try {
    const tokens = await getAuthToken();
    if (!tokens.accessToken) {
      throw new Error("User is not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/approval/progress`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify({ workflow_id: workflowId, action, note }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error updating approval status:", error);
    throw new Error("Failed to update approval status");
  }
};
