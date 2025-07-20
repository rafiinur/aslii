import { UserProfileResponse } from "@/features/auth/type";
import { createClient } from "@/lib/supabase/client";

import { useQuery } from "@tanstack/react-query";

export const useAnnouncements = (user: UserProfileResponse) => {
  return useQuery({
    queryKey: ["announcements", user?.user_id], // Menambahkan user_id sebagai key
    queryFn: async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("t_pengumuman")
        .select("*")
        .eq("m_company_id", user?.profile.m_company_id) // Menggunakan data user untuk filter
        .order("t_pengumuman_tanggal_publish", { ascending: false });

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
