import { useQuery } from "@tanstack/react-query";

const fetchOvertimeApprovals = async () => {
  const res = await fetch("/api/v1/overtime-approvals");

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Gagal mengambil data dari server.");
  }

  const { data } = await res.json();

  return data.detail;
};

export const useOvertimeApprovals = () => {
  return useQuery({
    queryKey: ["overtimeApprovals"],
    queryFn: fetchOvertimeApprovals,
  });
};
