import { getAuthToken } from "@/features/auth/services/user.service";

export const getApprovalTemplates = async (
  type: "leave_request" | "overtime"
) => {
  try {
    const tokens = await getAuthToken();

    if (!tokens.accessToken) {
      throw new Error("User is not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/permission-checker/approval/template?type=${type}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      }
    );

    console.log("Response status:", res);

    return await res.json();
  } catch (error) {
    console.error("Error fetching approval templates:", error);
    throw new Error("Failed to fetch approval templates");
  }
};

export const getApprovalStatus = async (workflowId: number) => {
  try {
    const tokens = await getAuthToken();

    if (!tokens.accessToken) {
      throw new Error("User is not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/approval/status?workflow_id=${workflowId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      }
    );

    console.log("Response status:", res);

    return await res.json();
  } catch (error) {
    console.error("Error fetching approval status:", error);
    throw new Error("Failed to fetch approval status");
  }
};

export const getApprovalHistory = async (workflowId: number) => {
  try {
    const tokens = await getAuthToken();

    if (!tokens.accessToken) {
      throw new Error("User is not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/approval/history?workflow_id=${workflowId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      }
    );

    console.log("Response status:", res);

    return await res.json();
  } catch (error) {
    console.error("Error fetching approval status:", error);
    throw new Error("Failed to fetch approval status");
  }
};

export const getApprovalSteps = async () => {};
