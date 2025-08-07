import { useQuery } from "@tanstack/react-query";

const fetchLeaveApprovals = async () => {
  const res = await fetch("/api/v1/leave-approvals");

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Gagal mengambil data dari server.");
  }

  const { data } = await res.json();

  return data.detail;
};

export const useLeaveApprovals = () => {
  return useQuery({
    queryKey: ["leaveApprovals"],
    queryFn: fetchLeaveApprovals,
  });
};
