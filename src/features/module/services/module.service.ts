import apiClient from "@/lib/api-client";

export const modules = {
  getAllModules: () => apiClient("/permission-checker/modules"),
};
