import { createClient } from "@/lib/supabase/client";
import { getCurrentUser } from "@/lib/auth";

const supabase = createClient();

export const announcements = {
  getUserAnnouncements: async () => {
    const user = {
      user_id: "1",
      profile: {
        m_company_id: "1",
      },
    };

    const { data: announcements, error } = await supabase
      .from("t_pengumuman")
      .select("*")
      .eq("m_company_id", user?.profile.m_company_id)
      .eq("t_pengumuman_created_by", user?.user_id);

    if (error) {
      throw error;
    }

    return announcements;
  },
  getAnnouncementById: async (id: string) => {
    const user = await getCurrentUser();

    const { data: announcement, error } = await supabase
      .from("t_pengumuman")
      .select("*")
      .eq("m_company_id", user?.profile.m_company_id)
      .eq("t_pengumuman_created_by", user?.user_id)
      .eq("t_pengumuman_id", id)
      .single();

    if (error) {
      throw error;
    }
    return announcement;
  },
};
