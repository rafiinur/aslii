"use server";

import { getAuthToken } from "@/features/auth/services/user.service";
import { Task } from "../type";

type ProjectPayload = {
  nama: string;
  deskripsi: string;
  tanggal_mulai: string;
  tanggal_berakhir: string;
  status: string;
  priority: number;
  budget: number;
};

export const createProject = async (payload: ProjectPayload) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/project/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal membuat project.");
    }

    return result;
  } catch (err) {
    console.error("Create project error:", err);
    return {
      success: false,
      message: "Gagal membuat project. Silakan coba lagi.",
    };
  }
};

export const updateProject = async (payload: ProjectPayload) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/project/update`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal memperbarui project.");
    }

    return result;
  } catch (err) {
    console.error("Update project error:", err);
    return {
      success: false,
      message: "Gagal memperbarui project. Silakan coba lagi.",
    };
  }
};

export const updateProjectStatus = async (projectId: number) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/project/update-status`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ project_id: projectId }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal memperbarui status project.");
    }

    return result;
  } catch (err) {
    console.error("Update project status error:", err);
    return {
      success: false,
      message: "Gagal memperbarui status project. Silakan coba lagi.",
    };
  }
};

export const createParentTask = async (payload: Task) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/task/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal membuat task.");
    }

    return result;
  } catch (err) {
    console.error("Create task error:", err);
    return {
      success: false,
      message: "Gagal membuat task. Silakan coba lagi.",
    };
  }
};

export const createChildTask = async (payload: Task) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/task/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal membuat child task.");
    }

    return result;
  } catch (err) {
    console.error("Create child task error:", err);
    return {
      success: false,
      message: "Gagal membuat child task. Silakan coba lagi.",
    };
  }
};

export const createTaskDependency = async (payload: {
  parentTaskId: number;
  childTaskId: number;
  dependencyType: string;
}) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/task/dependency/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal membuat task dependency.");
    }

    return result;
  } catch (err) {
    console.error("Create task dependency error:", err);
    return {
      success: false,
      message: "Gagal membuat task dependency. Silakan coba lagi.",
    };
  }
};

export const assignTaskToUser = async (payload: {
  taskId: number;
  userId: string;
  notes: string;
}) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/task/assign`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_id: payload.taskId,
          assign_ke: payload.userId,
          notes: payload.notes,
        }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal menugaskan task.");
    }

    return result;
  } catch (err) {
    console.error("Assign task to user error:", err);
    return {
      success: false,
      message: "Gagal menugaskan task. Silakan coba lagi.",
    };
  }
};

export const updateTask = async (payload: Task) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/task/update`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal memperbarui task.");
    }

    return result;
  } catch (err) {
    console.error("Update task error:", err);
    return {
      success: false,
      message: "Gagal memperbarui task. Silakan coba lagi.",
    };
  }
};

export const sendTaskAssignmentNotification = async (payload: {
  taskId: number;
  userId: string;
}) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/task/notify-assignment`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_id: payload.taskId,
          user_id: payload.userId,
        }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal mengirim notifikasi.");
    }

    return result;
  } catch (err) {
    console.error("Send task assignment notification error:", err);
    return {
      success: false,
      message: "Gagal mengirim notifikasi. Silakan coba lagi.",
    };
  }
};
