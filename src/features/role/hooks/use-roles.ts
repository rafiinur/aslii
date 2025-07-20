import { useQuery } from "@tanstack/react-query";

const fetchRoles = async () => {
  const res = await fetch("/api/v1/roles");

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Gagal mengambil data dari server.");
  }

  const data = await res.json();

  return data.roles;
};

export const useRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: fetchRoles,
  });
};
