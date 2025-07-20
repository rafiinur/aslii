import { useQuery } from "@tanstack/react-query";

const fetchDivisions = async () => {
  const res = await fetch("/api/v1/divisions");

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Gagal mengambil data dari server.");
  }

  const data = await res.json();

  return data.divisions;
};

export const useDivisions = () => {
  return useQuery({
    queryKey: ["divisions"],
    queryFn: fetchDivisions,
  });
};
