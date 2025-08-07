import { useQuery } from "@tanstack/react-query";

const fetchPermission = async () => {
  const res = await fetch("/api/v1/permissions");

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Gagal mengambil data dari server.");
  }

  const { data } = await res.json();

  return data.permissions;
};

export const usePermission = () => {
  return useQuery({
    queryKey: ["permissions"],
    queryFn: fetchPermission,
  });
};
