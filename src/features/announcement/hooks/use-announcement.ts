import { useQuery } from "@tanstack/react-query";

const fetchAnnouncements = async () => {
  const res = await fetch("/api/v1/announcements");

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Gagal mengambil data dari server.");
  }

  const data = await res.json();

  return data.data;
};

export const useAnnouncements = () => {
  return useQuery({
    queryKey: ["announcements"],
    queryFn: fetchAnnouncements,
  });
};
