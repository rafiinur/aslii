import apiClient from "@/lib/api-client";

export const roles = {
  getAllRoles: () => apiClient("/auth-manage-user/roles"),
};
