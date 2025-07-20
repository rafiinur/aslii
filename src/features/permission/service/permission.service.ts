import apiClient from "@/lib/api-client";

export const permissions = {
  getAllPermissions: () => apiClient("/permission-checker/permission/all"),
};
