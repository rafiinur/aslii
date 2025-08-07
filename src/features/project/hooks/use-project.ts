import { useQuery } from "@tanstack/react-query";

const fetchProject = async () => {
  const res = await fetch("/api/v1/projects");

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Gagal mengambil data dari server.");
  }

  const { data } = await res.json();

  return data.projects;
};

export const useProject = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProject,
  });
};
