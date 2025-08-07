import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("/api/v1/users");

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Gagal mengambil data dari server.");
  }

  const { data } = await res.json();

  console.log("Fetched users:", data.users);

  return data.users;
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};
