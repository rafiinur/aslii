export type Project = {
  t_project_id: number;
  m_company_id: number;
  t_project_nama: string;
  t_project_deskripsi: string;
  t_project_tanggal_mulai: string;
  t_project_tanggal_berakhir: string;
  t_project_status: string;
  t_project_progress: number;
  t_project_priority: number;
  t_project_budget: number;
  t_project_actual_cost: number;
  created_at: string;
  updated_at: string;
};

export type Task = {
  t_project_id: number;
  t_task_judul: string;
  t_task_deskripsi: string;
  t_task_deadline: string;
  t_task_priority: number;
  t_task_estimated_hours: number;
  t_task_tanggal_berakhir: string;
};

export type ListJob = {
  nama_tugas: string;
  penanggung_jawab: string;
  tanggal_mulai: string;
  tenggat: string;
  status: "Tertunda" | "Berjalan" | "Selesai";
};

export type ListTeam = {
  nama_anggota: string;
  peran: string;
}