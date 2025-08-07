export type Announcement = {
  t_pengumuman_id: number;
  m_company_id: number;
  t_pengumuman_judul: string;
  t_pengumuman_konten: string;
  t_pengumuman_tanggal_publish: string;
  t_pengumuman_tanggal_kedaluwarsa: string;
  t_pengumuman_is_active: string;
  t_pengumuman_target_audience: string;
  t_pengumuman_require_acknowledgment: boolean;
  t_pengumuman_created_by: string;
  created_at: string;
  updated_at: string;
  t_pengumuman_thumbnail: string | null;
};
