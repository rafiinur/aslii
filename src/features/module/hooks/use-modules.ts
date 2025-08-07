import { useQuery } from "@tanstack/react-query";

const fetchModules = async () => {
  const res = await fetch("/api/v1/modules");

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Gagal mengambil data dari server.");
  }

  const { data } = await res.json();

  return data.modules;
};

export const useModules = () => {
  return useQuery({
    queryKey: ["modules"],
    queryFn: fetchModules,
  });
};
