"use server";

import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/supabase/auth";
import { AnnouncementType } from "@/types/announcement";

export const createAnnouncement = async ({
  t_pengumuman_judul,
  t_pengumuman_konten,
  t_pengumuman_tanggal_publish,
  t_pengumuman_tanggal_kedaluwarsa,
  t_pengumuman_is_active,
  t_pengumuman_target_audience,
}: AnnouncementType) => {
  try {
    const supabase = await createClient();
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const { data, error } = await supabase
      .from("t_pengumuman")
      .insert([
        {
          m_company_id: user?.profile.m_company_id,
          t_pengumuman_judul,
          t_pengumuman_konten,
          t_pengumuman_tanggal_publish,
          t_pengumuman_tanggal_kedaluwarsa,
          t_pengumuman_is_active,
          t_pengumuman_target_audience,
          t_pengumuman_require_acknowledgment: false,
          t_pengumuman_created_by: user?.user_id,
        },
      ])
      .select();

    if (error) {
      console.error("Error creating announcement:", error);
    }

    return data;
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat membuat pengumuman."
    );
  }
};
