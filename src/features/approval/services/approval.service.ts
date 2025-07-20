import apiClient from "@/lib/api-client";

export const approval = {
  leave: {
    getLeaveApprovals: () =>
      apiClient("/manage-attendance-leave/leave/admin/list"),
    getLeaveTypes: () => apiClient("/manage-attendance-leave/leave/type"),
    getLeaveBalanceByYear: (year: number) =>
      apiClient(`/manage-attendance-leave/leave/admin/kuota?tahun=${year}`),
  },
  overtime: {
    getOvertimeApprovals: () =>
      apiClient("/manage-attendance-leave/overtime/admin/list"),
    getOvertimeHistory: () =>
      apiClient("/manage-attendance-leave/overtime/history"),
    getOvertimeDetails: (overtimeId: number) =>
      apiClient(
        `/manage-attendance-leave/overtime/detail?t_overtime_id=${overtimeId}`
      ),
    getOvertimeStatistics: (month: string, year: number) =>
      apiClient(
        `/manage-attendance-leave/overtime/admin/stats?month=${month}&year=${year}`
      ),
  },

  getApprovalTemplates: (type: "leave_request" | "overtime") =>
    apiClient(`/permission-checker/approval/template?type=${type}`),
  getApprovalStatus: (workflowId: number) =>
    apiClient(`/approval/status?workflow_id=${workflowId}`),

  getApprovalSteps: (workflowId: number) =>
    apiClient(
      `/permission-checker/approval/step-config?workflow_id=${workflowId}`
    ),
  getApprovalHistory: (workflowId: number) =>
    apiClient(`/approval/history?workflow_id=${workflowId}`),
};
