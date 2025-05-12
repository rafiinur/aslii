import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/supabase/auth";

export const getAnnouncements = async () => {
  const supabase = await createClient();
  const user = await getCurrentUser();

  const { data: announcements, error } = await supabase
    .from("t_pengumuman")
    .select("*")
    .eq("m_company_id", user?.profile.m_company_id)
    .eq("t_pengumuman_created_by", user?.user_id);

  if (error) {
    console.error("Error fetching announcements:", error);
    return [];
  }
  return announcements;
};

export const getAnnouncementById = async (id: string) => {
  const supabase = await createClient();
  const user = await getCurrentUser();

  const { data: announcement, error } = await supabase
    .from("t_pengumuman")
    .select("*")
    .eq("m_company_id", user?.profile.m_company_id)
    .eq("t_pengumuman_created_by", user?.user_id)
    .eq("t_pengumuman_id", id)
    .single();

  if (error) {
    console.error("Error fetching announcement by ID:", error);
    return null;
  }
  return announcement;
};
